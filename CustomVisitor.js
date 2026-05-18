import MiLenguajeVisitor from './generated/MiLenguajeVisitor.js';

export default class CustomVisitor extends MiLenguajeVisitor {

    constructor() {
        super();
        this.output = "";
    }

    visitProg(ctx) {
        ctx.children.forEach(child => this.visit(child));
        return this.output;
    }

    visitDeclaracion(ctx) {
        const id = ctx.ID().getText();
        const val = ctx.valor().getText();
        this.output += `let ${id} = ${val};\n`;
    }

    visitImpresion(ctx) {
        const val = ctx.valor().getText();
        this.output += `console.log(${val});\n`;
    }
}