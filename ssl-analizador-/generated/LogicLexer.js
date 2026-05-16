// Generated from Logic.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';


const serializedATN = [4, 0, 8, 58, 6, -1, 2, 0, 7, 0, 2, 1, 7, 1, 2, 2, 7, 2, 2, 3, 7, 3, 2, 4, 7, 4, 2, 5, 7, 5, 2, 6, 7, 6, 2, 7, 7, 7, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 2, 1, 2, 1, 3, 1, 3, 1, 4, 1, 4, 1, 5, 1, 5, 1, 6, 1, 6, 5, 6, 33, 8, 6, 10, 6, 12, 6, 36, 9, 6, 1, 6, 1, 6, 4, 6, 40, 8, 6, 11, 6, 12, 6, 41, 1, 6, 1, 6, 4, 6, 46, 8, 6, 11, 6, 12, 6, 47, 3, 6, 50, 8, 6, 1, 7, 4, 7, 53, 8, 7, 11, 7, 12, 7, 54, 1, 7, 1, 7, 0, 0, 8, 1, 1, 3, 2, 5, 3, 7, 4, 9, 5, 11, 6, 13, 7, 15, 8, 1, 0, 3, 3, 0, 65, 90, 98, 117, 119, 122, 3, 0, 48, 57, 65, 90, 97, 122, 3, 0, 9, 10, 13, 13, 32, 32, 63, 0, 1, 1, 0, 0, 0, 0, 3, 1, 0, 0, 0, 0, 5, 1, 0, 0, 0, 0, 7, 1, 0, 0, 0, 0, 9, 1, 0, 0, 0, 0, 11, 1, 0, 0, 0, 0, 13, 1, 0, 0, 0, 0, 15, 1, 0, 0, 0, 1, 17, 1, 0, 0, 0, 3, 20, 1, 0, 0, 0, 5, 22, 1, 0, 0, 0, 7, 24, 1, 0, 0, 0, 9, 26, 1, 0, 0, 0, 11, 28, 1, 0, 0, 0, 13, 49, 1, 0, 0, 0, 15, 52, 1, 0, 0, 0, 17, 18, 5, 45, 0, 0, 18, 19, 5, 62, 0, 0, 19, 2, 1, 0, 0, 0, 20, 21, 5, 45, 0, 0, 21, 4, 1, 0, 0, 0, 22, 23, 5, 65, 0, 0, 23, 6, 1, 0, 0, 0, 24, 25, 5, 118, 0, 0, 25, 8, 1, 0, 0, 0, 26, 27, 5, 40, 0, 0, 27, 10, 1, 0, 0, 0, 28, 29, 5, 41, 0, 0, 29, 12, 1, 0, 0, 0, 30, 34, 7, 0, 0, 0, 31, 33, 7, 1, 0, 0, 32, 31, 1, 0, 0, 0, 33, 36, 1, 0, 0, 0, 34, 32, 1, 0, 0, 0, 34, 35, 1, 0, 0, 0, 35, 50, 1, 0, 0, 0, 36, 34, 1, 0, 0, 0, 37, 39, 5, 65, 0, 0, 38, 40, 7, 1, 0, 0, 39, 38, 1, 0, 0, 0, 40, 41, 1, 0, 0, 0, 41, 39, 1, 0, 0, 0, 41, 42, 1, 0, 0, 0, 42, 50, 1, 0, 0, 0, 43, 45, 5, 118, 0, 0, 44, 46, 7, 1, 0, 0, 45, 44, 1, 0, 0, 0, 46, 47, 1, 0, 0, 0, 47, 45, 1, 0, 0, 0, 47, 48, 1, 0, 0, 0, 48, 50, 1, 0, 0, 0, 49, 30, 1, 0, 0, 0, 49, 37, 1, 0, 0, 0, 49, 43, 1, 0, 0, 0, 50, 14, 1, 0, 0, 0, 51, 53, 7, 2, 0, 0, 52, 51, 1, 0, 0, 0, 53, 54, 1, 0, 0, 0, 54, 52, 1, 0, 0, 0, 54, 55, 1, 0, 0, 0, 55, 56, 1, 0, 0, 0, 56, 57, 6, 7, 0, 0, 57, 16, 1, 0, 0, 0, 6, 0, 34, 41, 47, 49, 54, 1, 6, 0, 0];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

export default class LogicLexer extends antlr4.Lexer {

    static grammarFileName = "Logic.g4";
    static channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
    static modeNames = [ "DEFAULT_MODE" ];
    static literalNames = [ null, "'->'", "'-'", "'A'", "'v'", "'('", "')'" ];
    static symbolicNames = [ null, "IMPLICATION", "NEGATION", "CONJUNCTION",
                             "DISJUNCTION", "LPAREN", "RPAREN", "VARIABLE", "WS" ];
    static ruleNames = [ "IMPLICATION", "NEGATION", "CONJUNCTION", "DISJUNCTION",
                         "LPAREN", "RPAREN", "VARIABLE", "WS" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.atn.PredictionContextCache());
    }
}

LogicLexer.EOF         = antlr4.Token.EOF;
LogicLexer.IMPLICATION = 1;
LogicLexer.NEGATION    = 2;
LogicLexer.CONJUNCTION = 3;
LogicLexer.DISJUNCTION = 4;
LogicLexer.LPAREN      = 5;
LogicLexer.RPAREN      = 6;
LogicLexer.VARIABLE    = 7;
LogicLexer.WS          = 8;
