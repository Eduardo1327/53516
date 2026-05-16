// CustomLogicVisitor.js — Visitor que interpreta la fórmula lógica y la traduce a JS
import LogicVisitor from './generated/LogicVisitor.js';
import LogicParser  from './generated/LogicParser.js';

export class CustomLogicVisitor extends LogicVisitor {

    constructor() {
        super();
        this.context = {};  // variables proposicionales (todas true por defecto)
    }

    // prog : formula EOF
    visitProg(ctx) {
        return this.visit(ctx.formula());
    }

    // formula : implication
    visitFormula(ctx) {
        return this.visit(ctx.implication());
    }

    // implication : disjunction ( '->' implication )?
    visitImplication(ctx) {
        const left = this.visit(ctx.disjunction());
        if (ctx.IMPLICATION()) {
            const right = this.visit(ctx.implication());
            return !left || right;   // A -> B  ≡  ¬A ∨ B
        }
        return left;
    }

    // disjunction : conjunction ( 'v' conjunction )*
    visitDisjunction(ctx) {
        let result = this.visit(ctx.conjunction(0));
        for (let i = 1; ctx.conjunction(i); i++) {
            result = result || this.visit(ctx.conjunction(i));
        }
        return result;
    }

    // conjunction : negation ( 'A' negation )*
    visitConjunction(ctx) {
        let result = this.visit(ctx.negation(0));
        for (let i = 1; ctx.negation(i); i++) {
            result = result && this.visit(ctx.negation(i));
        }
        return result;
    }

    // negation : '-' negation  (NegationExpr)
    visitNegationExpr(ctx) {
        return !this.visit(ctx.negation());
    }

    // negation : primary  (PrimaryExpr)
    visitPrimaryExpr(ctx) {
        return this.visit(ctx.primary());
    }

    // primary : VARIABLE  (VariableExpr)
    visitVariableExpr(ctx) {
        const name = ctx.VARIABLE().getText();
        // Registrar variable y asumir true si no fue definida
        if (!(name in this.context)) this.context[name] = true;
        return this.context[name];
    }

    // primary : '(' formula ')'  (ParenExpr)
    visitParenExpr(ctx) {
        return this.visit(ctx.formula());
    }
}
