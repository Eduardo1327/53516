// Generated from Logic.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import LogicListener from './LogicListener.js';
import LogicVisitor from './LogicVisitor.js';

const serializedATN = [4, 1, 8, 53, 2, 0, 7, 0, 2, 1, 7, 1, 2, 2, 7, 2, 2, 3, 7, 3, 2, 4, 7, 4, 2, 5, 7, 5, 2, 6, 7, 6, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 2, 1, 2, 1, 2, 3, 2, 23, 8, 2, 1, 3, 1, 3, 1, 3, 5, 3, 28, 8, 3, 10, 3, 12, 3, 31, 9, 3, 1, 4, 1, 4, 1, 4, 5, 4, 36, 8, 4, 10, 4, 12, 4, 39, 9, 4, 1, 5, 1, 5, 1, 5, 3, 5, 44, 8, 5, 1, 6, 1, 6, 1, 6, 1, 6, 1, 6, 3, 6, 51, 8, 6, 1, 6, 0, 0, 7, 0, 2, 4, 6, 8, 10, 12, 0, 0, 50, 0, 14, 1, 0, 0, 0, 2, 17, 1, 0, 0, 0, 4, 19, 1, 0, 0, 0, 6, 24, 1, 0, 0, 0, 8, 32, 1, 0, 0, 0, 10, 43, 1, 0, 0, 0, 12, 50, 1, 0, 0, 0, 14, 15, 3, 2, 1, 0, 15, 16, 5, 0, 0, 1, 16, 1, 1, 0, 0, 0, 17, 18, 3, 4, 2, 0, 18, 3, 1, 0, 0, 0, 19, 22, 3, 6, 3, 0, 20, 21, 5, 1, 0, 0, 21, 23, 3, 4, 2, 0, 22, 20, 1, 0, 0, 0, 22, 23, 1, 0, 0, 0, 23, 5, 1, 0, 0, 0, 24, 29, 3, 8, 4, 0, 25, 26, 5, 4, 0, 0, 26, 28, 3, 8, 4, 0, 27, 25, 1, 0, 0, 0, 28, 31, 1, 0, 0, 0, 29, 27, 1, 0, 0, 0, 29, 30, 1, 0, 0, 0, 30, 7, 1, 0, 0, 0, 31, 29, 1, 0, 0, 0, 32, 37, 3, 10, 5, 0, 33, 34, 5, 3, 0, 0, 34, 36, 3, 10, 5, 0, 35, 33, 1, 0, 0, 0, 36, 39, 1, 0, 0, 0, 37, 35, 1, 0, 0, 0, 37, 38, 1, 0, 0, 0, 38, 9, 1, 0, 0, 0, 39, 37, 1, 0, 0, 0, 40, 41, 5, 2, 0, 0, 41, 44, 3, 10, 5, 0, 42, 44, 3, 12, 6, 0, 43, 40, 1, 0, 0, 0, 43, 42, 1, 0, 0, 0, 44, 11, 1, 0, 0, 0, 45, 51, 5, 7, 0, 0, 46, 47, 5, 5, 0, 0, 47, 48, 3, 2, 1, 0, 48, 49, 5, 6, 0, 0, 49, 51, 1, 0, 0, 0, 50, 45, 1, 0, 0, 0, 50, 46, 1, 0, 0, 0, 51, 13, 1, 0, 0, 0, 5, 22, 29, 37, 43, 50];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class LogicParser extends antlr4.Parser {

    static grammarFileName = "Logic.g4";
    static literalNames = [ null, "'->'", "'-'", "'A'", "'v'", "'('", "')'" ];
    static symbolicNames = [ null, "IMPLICATION", "NEGATION", "CONJUNCTION",
                             "DISJUNCTION", "LPAREN", "RPAREN", "VARIABLE", "WS" ];
    static ruleNames = [ "prog", "formula", "implication", "disjunction",
                         "conjunction", "negation", "primary" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames  = LogicParser.ruleNames;
        this.literalNames = LogicParser.literalNames;
        this.symbolicNames = LogicParser.symbolicNames;
    }

    // prog : formula EOF
    prog() {
        let localctx = new ProgContext(this, this._ctx, this.state);
        this.enterRule(localctx, 0, LogicParser.RULE_prog);
        try {
            this.enterOuterAlt(localctx, 1);
            this.state = 14;
            this.formula();
            this.state = 15;
            this.match(LogicParser.EOF);
        } catch (re) {
            if (re instanceof antlr4.error.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localctx;
    }

    // formula : implication
    formula() {
        let localctx = new FormulaContext(this, this._ctx, this.state);
        this.enterRule(localctx, 2, LogicParser.RULE_formula);
        try {
            this.enterOuterAlt(localctx, 1);
            this.state = 17;
            this.implication();
        } catch (re) {
            if (re instanceof antlr4.error.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localctx;
    }

    // implication : disjunction ( '->' implication )?
    implication() {
        let localctx = new ImplicationContext(this, this._ctx, this.state);
        this.enterRule(localctx, 4, LogicParser.RULE_implication);
        let _la = 0;
        try {
            this.enterOuterAlt(localctx, 1);
            this.state = 19;
            this.disjunction();
            this.state = 22;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la === LogicParser.IMPLICATION) {
                this.state = 20;
                this.match(LogicParser.IMPLICATION);
                this.state = 21;
                this.implication();
            }
        } catch (re) {
            if (re instanceof antlr4.error.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localctx;
    }

    // disjunction : conjunction ( 'v' conjunction )*
    disjunction() {
        let localctx = new DisjunctionContext(this, this._ctx, this.state);
        this.enterRule(localctx, 6, LogicParser.RULE_disjunction);
        let _la = 0;
        try {
            this.enterOuterAlt(localctx, 1);
            this.state = 24;
            this.conjunction();
            this.state = 29;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while (_la === LogicParser.DISJUNCTION) {
                this.state = 25;
                this.match(LogicParser.DISJUNCTION);
                this.state = 26;
                this.conjunction();
                this.state = 31;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
        } catch (re) {
            if (re instanceof antlr4.error.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localctx;
    }

    // conjunction : negation ( 'A' negation )*
    conjunction() {
        let localctx = new ConjunctionContext(this, this._ctx, this.state);
        this.enterRule(localctx, 8, LogicParser.RULE_conjunction);
        let _la = 0;
        try {
            this.enterOuterAlt(localctx, 1);
            this.state = 32;
            this.negation();
            this.state = 37;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while (_la === LogicParser.CONJUNCTION) {
                this.state = 33;
                this.match(LogicParser.CONJUNCTION);
                this.state = 34;
                this.negation();
                this.state = 39;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
        } catch (re) {
            if (re instanceof antlr4.error.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localctx;
    }

    // negation : '-' negation | primary
    negation() {
        let localctx = new NegationContext(this, this._ctx, this.state);
        this.enterRule(localctx, 10, LogicParser.RULE_negation);
        try {
            this.state = 43;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case LogicParser.NEGATION:
                    localctx = new NegationExprContext(this, localctx);
                    this.enterOuterAlt(localctx, 1);
                    this.state = 40;
                    this.match(LogicParser.NEGATION);
                    this.state = 41;
                    this.negation();
                    break;
                case LogicParser.VARIABLE:
                case LogicParser.LPAREN:
                    localctx = new PrimaryExprContext(this, localctx);
                    this.enterOuterAlt(localctx, 2);
                    this.state = 42;
                    this.primary();
                    break;
                default:
                    throw new antlr4.error.NoViableAltException(this);
            }
        } catch (re) {
            if (re instanceof antlr4.error.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localctx;
    }

    // primary : VARIABLE | '(' formula ')'
    primary() {
        let localctx = new PrimaryContext(this, this._ctx, this.state);
        this.enterRule(localctx, 12, LogicParser.RULE_primary);
        try {
            this.state = 50;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case LogicParser.VARIABLE:
                    localctx = new VariableExprContext(this, localctx);
                    this.enterOuterAlt(localctx, 1);
                    this.state = 45;
                    this.match(LogicParser.VARIABLE);
                    break;
                case LogicParser.LPAREN:
                    localctx = new ParenExprContext(this, localctx);
                    this.enterOuterAlt(localctx, 2);
                    this.state = 46;
                    this.match(LogicParser.LPAREN);
                    this.state = 47;
                    this.formula();
                    this.state = 48;
                    this.match(LogicParser.RPAREN);
                    break;
                default:
                    throw new antlr4.error.NoViableAltException(this);
            }
        } catch (re) {
            if (re instanceof antlr4.error.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localctx;
    }

}

LogicParser.EOF         = antlr4.Token.EOF;
LogicParser.IMPLICATION = 1;
LogicParser.NEGATION    = 2;
LogicParser.CONJUNCTION = 3;
LogicParser.DISJUNCTION = 4;
LogicParser.LPAREN      = 5;
LogicParser.RPAREN      = 6;
LogicParser.VARIABLE    = 7;
LogicParser.WS          = 8;

LogicParser.RULE_prog        = 0;
LogicParser.RULE_formula     = 1;
LogicParser.RULE_implication = 2;
LogicParser.RULE_disjunction = 3;
LogicParser.RULE_conjunction = 4;
LogicParser.RULE_negation    = 5;
LogicParser.RULE_primary     = 6;

// ── Context classes ───────────────────────────────────────────────────────────

class ProgContext extends antlr4.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    formula() { return this.getTypedRuleContext(FormulaContext, 0); }
    EOF()     { return this.getToken(LogicParser.EOF, 0); }
    get ruleIndex() { return LogicParser.RULE_prog; }
    enterRule(listener) {
        if (listener instanceof LogicListener) listener.enterProg(this);
    }
    exitRule(listener) {
        if (listener instanceof LogicListener) listener.exitProg(this);
    }
    accept(visitor) {
        if (visitor instanceof LogicVisitor) return visitor.visitProg(this);
        else return visitor.visitChildren(this);
    }
}
LogicParser.ProgContext = ProgContext;

class FormulaContext extends antlr4.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    implication() { return this.getTypedRuleContext(ImplicationContext, 0); }
    get ruleIndex() { return LogicParser.RULE_formula; }
    enterRule(listener) {
        if (listener instanceof LogicListener) listener.enterFormula(this);
    }
    exitRule(listener) {
        if (listener instanceof LogicListener) listener.exitFormula(this);
    }
    accept(visitor) {
        if (visitor instanceof LogicVisitor) return visitor.visitFormula(this);
        else return visitor.visitChildren(this);
    }
}
LogicParser.FormulaContext = FormulaContext;

class ImplicationContext extends antlr4.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    disjunction()  { return this.getTypedRuleContext(DisjunctionContext, 0); }
    IMPLICATION()  { return this.getToken(LogicParser.IMPLICATION, 0); }
    implication()  { return this.getTypedRuleContext(ImplicationContext, 0); }
    get ruleIndex() { return LogicParser.RULE_implication; }
    enterRule(listener) {
        if (listener instanceof LogicListener) listener.enterImplication(this);
    }
    exitRule(listener) {
        if (listener instanceof LogicListener) listener.exitImplication(this);
    }
    accept(visitor) {
        if (visitor instanceof LogicVisitor) return visitor.visitImplication(this);
        else return visitor.visitChildren(this);
    }
}
LogicParser.ImplicationContext = ImplicationContext;

class DisjunctionContext extends antlr4.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    conjunction(i) { return this.getTypedRuleContext(ConjunctionContext, i ?? 0); }
    DISJUNCTION(i) { return this.getToken(LogicParser.DISJUNCTION, i ?? 0); }
    get ruleIndex() { return LogicParser.RULE_disjunction; }
    enterRule(listener) {
        if (listener instanceof LogicListener) listener.enterDisjunction(this);
    }
    exitRule(listener) {
        if (listener instanceof LogicListener) listener.exitDisjunction(this);
    }
    accept(visitor) {
        if (visitor instanceof LogicVisitor) return visitor.visitDisjunction(this);
        else return visitor.visitChildren(this);
    }
}
LogicParser.DisjunctionContext = DisjunctionContext;

class ConjunctionContext extends antlr4.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    negation(i)    { return this.getTypedRuleContext(NegationContext, i ?? 0); }
    CONJUNCTION(i) { return this.getToken(LogicParser.CONJUNCTION, i ?? 0); }
    get ruleIndex() { return LogicParser.RULE_conjunction; }
    enterRule(listener) {
        if (listener instanceof LogicListener) listener.enterConjunction(this);
    }
    exitRule(listener) {
        if (listener instanceof LogicListener) listener.exitConjunction(this);
    }
    accept(visitor) {
        if (visitor instanceof LogicVisitor) return visitor.visitConjunction(this);
        else return visitor.visitChildren(this);
    }
}
LogicParser.ConjunctionContext = ConjunctionContext;

class NegationContext extends antlr4.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    copyFrom(ctx) { super.copyFrom(ctx); }
    get ruleIndex() { return LogicParser.RULE_negation; }
}
LogicParser.NegationContext = NegationContext;

class NegationExprContext extends NegationContext {
    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }
    NEGATION() { return this.getToken(LogicParser.NEGATION, 0); }
    negation() { return this.getTypedRuleContext(NegationContext, 0); }
    enterRule(listener) {
        if (listener instanceof LogicListener) listener.enterNegationExpr(this);
    }
    exitRule(listener) {
        if (listener instanceof LogicListener) listener.exitNegationExpr(this);
    }
    accept(visitor) {
        if (visitor instanceof LogicVisitor) return visitor.visitNegationExpr(this);
        else return visitor.visitChildren(this);
    }
}
LogicParser.NegationExprContext = NegationExprContext;

class PrimaryExprContext extends NegationContext {
    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }
    primary() { return this.getTypedRuleContext(PrimaryContext, 0); }
    enterRule(listener) {
        if (listener instanceof LogicListener) listener.enterPrimaryExpr(this);
    }
    exitRule(listener) {
        if (listener instanceof LogicListener) listener.exitPrimaryExpr(this);
    }
    accept(visitor) {
        if (visitor instanceof LogicVisitor) return visitor.visitPrimaryExpr(this);
        else return visitor.visitChildren(this);
    }
}
LogicParser.PrimaryExprContext = PrimaryExprContext;

class PrimaryContext extends antlr4.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    copyFrom(ctx) { super.copyFrom(ctx); }
    get ruleIndex() { return LogicParser.RULE_primary; }
}
LogicParser.PrimaryContext = PrimaryContext;

class VariableExprContext extends PrimaryContext {
    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }
    VARIABLE() { return this.getToken(LogicParser.VARIABLE, 0); }
    enterRule(listener) {
        if (listener instanceof LogicListener) listener.enterVariableExpr(this);
    }
    exitRule(listener) {
        if (listener instanceof LogicListener) listener.exitVariableExpr(this);
    }
    accept(visitor) {
        if (visitor instanceof LogicVisitor) return visitor.visitVariableExpr(this);
        else return visitor.visitChildren(this);
    }
}
LogicParser.VariableExprContext = VariableExprContext;

class ParenExprContext extends PrimaryContext {
    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }
    LPAREN()  { return this.getToken(LogicParser.LPAREN, 0); }
    formula() { return this.getTypedRuleContext(FormulaContext, 0); }
    RPAREN()  { return this.getToken(LogicParser.RPAREN, 0); }
    enterRule(listener) {
        if (listener instanceof LogicListener) listener.enterParenExpr(this);
    }
    exitRule(listener) {
        if (listener instanceof LogicListener) listener.exitParenExpr(this);
    }
    accept(visitor) {
        if (visitor instanceof LogicVisitor) return visitor.visitParenExpr(this);
        else return visitor.visitChildren(this);
    }
}
LogicParser.ParenExprContext = ParenExprContext;
