// CustomLogicListener.js — Listener que reporta cada regla reconocida
import LogicListener from './generated/LogicListener.js';

export class CustomLogicListener extends LogicListener {

    enterProg(ctx)        { console.log(`  → Regla reconocida: prog`); }
    enterFormula(ctx)     { console.log(`  → Regla reconocida: formula`); }
    enterImplication(ctx) { console.log(`  → Regla reconocida: implication`); }
    enterDisjunction(ctx) { console.log(`  → Regla reconocida: disjunction`); }
    enterConjunction(ctx) { console.log(`  → Regla reconocida: conjunction`); }
    enterNegationExpr(ctx){ console.log(`  → Regla reconocida: negation (operador '-')`); }
    enterVariableExpr(ctx){ console.log(`  → Regla reconocida: variable '${ctx.VARIABLE().getText()}'`); }
    enterParenExpr(ctx)   { console.log(`  → Regla reconocida: primary (expresión entre paréntesis)`); }

}
