// index.js — Analizador de Lógica
// Tema 25914_15 

import antlr4, { CharStreams, CommonTokenStream, ParseTreeWalker } from 'antlr4';
import LogicLexer  from './generated/LogicLexer.js';
import LogicParser from './generated/LogicParser.js';
import { CustomLogicListener } from './CustomLogicListener.js';
import { CustomLogicVisitor }  from './CustomLogicVisitor.js';
import readline from 'readline';
import fs from 'fs';

// Helpers de presentación 

const SEP  = '';
const SEP2 = '';

function titulo(t) {
    console.log('\n' + SEP2);
    console.log('  ' + t);
    console.log(SEP2);
}

// Tabla de tokens 

function printTokenTable(tokens, symbolicNames) {
    titulo('TABLA DE LEXEMAS Y TOKENS');
    const c = [18, 16, 8, 8];
    console.log(
        'LEXEMA'.padEnd(c[0]) + 'TOKEN'.padEnd(c[1]) +
        'LÍNEA'.padEnd(c[2]) + 'COLUMNA'.padEnd(c[3])
    );
    console.log(SEP);
    for (const tok of tokens.tokens) {
        if (tok.type === antlr4.Token.EOF) continue;
        const name = symbolicNames[tok.type] ?? '???';
        console.log(
            tok.text.padEnd(c[0]) + name.padEnd(c[1]) +
            String(tok.line).padEnd(c[2]) + String(tok.column + 1).padEnd(c[3])
        );
    }
    console.log(SEP);
}

//  Árbol de derivación 

function printTree(tree, ruleNames, prefix = '', isLast = true) {
    const connector = isLast ? '└── ' : '├── ';
    let label;
    if (tree instanceof antlr4.tree.TerminalNode) {
        label = `"${tree.getText()}"`;
    } else {
        label = `[${ruleNames[tree.ruleIndex]}]`;
    }
    console.log(prefix + connector + label);
    if (!(tree instanceof antlr4.tree.TerminalNode)) {
        const childPrefix = prefix + (isLast ? '    ' : '│   ');
        const count = tree.getChildCount();
        for (let i = 0; i < count; i++) {
            printTree(tree.getChild(i), ruleNames, childPrefix, i === count - 1);
        }
    }
}

//  Traduccion a JavaScript 

function toJS(tree, ruleNames) {
    if (tree instanceof antlr4.tree.TerminalNode) return null;

    const rule = ruleNames[tree.ruleIndex];

    switch (rule) {
        case 'prog':
        case 'formula':
            return toJS(tree.getChild(0), ruleNames);

        case 'implication': {
            const left = toJS(tree.getChild(0), ruleNames);
            if (tree.getChildCount() === 3) {
                const right = toJS(tree.getChild(2), ruleNames);
                return `(!${left} || ${right})`;
            }
            return left;
        }
        case 'disjunction': {
            let result = toJS(tree.getChild(0), ruleNames);
            for (let i = 2; i < tree.getChildCount(); i += 2) {
                result = `(${result} || ${toJS(tree.getChild(i), ruleNames)})`;
            }
            return result;
        }
        case 'conjunction': {
            let result = toJS(tree.getChild(0), ruleNames);
            for (let i = 2; i < tree.getChildCount(); i += 2) {
                result = `(${result} && ${toJS(tree.getChild(i), ruleNames)})`;
            }
            return result;
        }
        case 'negation': {
            if (tree.getChildCount() === 2) {
                // '-' negation
                return `!${toJS(tree.getChild(1), ruleNames)}`;
            }
            return toJS(tree.getChild(0), ruleNames);
        }
        case 'primary': {
            if (tree.getChildCount() === 1) {
                // VARIABLE
                return `context.${tree.getChild(0).getText()}`;
            }
            // '(' formula ')'
            return toJS(tree.getChild(1), ruleNames);
        }
        default:
            return toJS(tree.getChild(0), ruleNames);
    }
}

function collectVars(tree, vars = new Set()) {
    if (tree instanceof antlr4.tree.TerminalNode) return vars;
    if (tree.ruleIndex !== undefined) {
        const ruleNames = tree.parser?.ruleNames ?? [];
        if (ruleNames[tree.ruleIndex] === 'primary' && tree.getChildCount() === 1) {
            vars.add(tree.getChild(0).getText());
        }
    }
    for (let i = 0; i < tree.getChildCount(); i++) collectVars(tree.getChild(i), vars);
    return vars;
}

//  Main 

async function main() {
    let input;
    try {
        input = fs.readFileSync('input.txt', 'utf8').trim();
    } catch {
        input = await leerCadena();
    }

    console.log('\nEntrada: ' + input);
    console.log(SEP);

    //  Analisis lexico 
    const inputStream  = CharStreams.fromString(input);
    const lexer        = new LogicLexer(inputStream);
    const tokenStream  = new CommonTokenStream(lexer);
    tokenStream.fill();

    printTokenTable(tokenStream, LogicLexer.symbolicNames);

    // Analisis sintáctico 
    // Reiniciar el stream para que el parser lo lea desde el inicio
    const inputStream2 = CharStreams.fromString(input);
    const lexer2       = new LogicLexer(inputStream2);
    const tokenStream2 = new CommonTokenStream(lexer2);
    const parser       = new LogicParser(tokenStream2);

    // Capturar errores con listener 
    parser.removeErrorListeners();
    const errorMessages = [];
    parser.addErrorListener({
        syntaxError(recognizer, offendingSymbol, line, column, msg) {
            errorMessages.push(`Línea ${line}, columna ${column + 1}: ${msg}`);
        }
    });

    const tree = parser.prog();

    if (errorMessages.length > 0 || parser.syntaxErrorsCount > 0) {
        titulo('ERRORES SINTÁCTICOS');
        errorMessages.forEach(e => console.error(' ✗ ' + e));
        console.log(SEP);
        return;
    }

    console.log('\n  Entrada válida.\n');

    //  Árbol de derivación 
    titulo('ÁRBOL DE ANÁLISIS');
    printTree(tree, parser.ruleNames);

    // Representación ANTLR nativa
    console.log('\nRepresentación ANTLR:');
    console.log(tree.toStringTree(parser.ruleNames));
    console.log(SEP);

    //  Listener 
    titulo('RECORRIDO CON LISTENER');
    const listener = new CustomLogicListener();
    ParseTreeWalker.DEFAULT.walk(listener, tree);
    console.log(SEP);

    //  Visitor / Interpretación 
    titulo('INTERPRETACIÓN — Traducción a JavaScript');

    const jsExpr = toJS(tree, parser.ruleNames);
    const vars   = [...collectVars(tree)];

    console.log('Variables: ' + (vars.join(', ') || '(ninguna)'));
    console.log();

    const context = {};
    vars.forEach(v => context[v] = true);

    console.log('Código JavaScript generado:');
    console.log(SEP);
    console.log(`const context = ${JSON.stringify(context)};`);
    console.log(`const result  = ${jsExpr};`);
    console.log(`console.log(result);`);
    console.log(SEP);

    // Evaluación usando Visitor
    const visitor = new CustomLogicVisitor();
    visitor.context = { ...context };
    const result = visitor.visit(tree);
    console.log(`\nResultado: ${result}`);
    console.log(SEP);
}

function leerCadena() {
    const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
    return new Promise(resolve => {
        rl.question('Ingrese una fórmula lógica: ', answer => { rl.close(); resolve(answer.trim()); });
    });
}

main();
