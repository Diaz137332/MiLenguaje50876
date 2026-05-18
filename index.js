import antlr4 from 'antlr4';
import fs from 'fs';

import MiLenguajeLexer from './generated/MiLenguajeLexer.js';
import MiLenguajeParser from './generated/MiLenguajeParser.js';
import CustomVisitor from './CustomVisitor.js';

const input = fs.readFileSync('input1correcto.txt', 'utf8');

/* ===== TABLA DE TOKENS (lexer independiente) ===== */
const chars2 = new antlr4.InputStream(input);
const lexer2 = new MiLenguajeLexer(chars2);

let token = lexer2.nextToken();

console.log("TABLA DE TOKENS:");
console.log("-------------------------------");
console.log("TOKEN\t\tLEXEMA");
console.log("-------------------------------");

while (token.type !== antlr4.Token.EOF) {
    const tokenName =
        MiLenguajeLexer.symbolicNames[token.type] ||
        MiLenguajeLexer.literalNames[token.type] ||
        token.text;

    console.log(`${tokenName}\t\t${token.text}`);
    token = lexer2.nextToken();
}

console.log("-------------------------------\n");

/* ===== PARSER ===== */
const chars = new antlr4.InputStream(input);
const lexer = new MiLenguajeLexer(chars);
const tokens = new antlr4.CommonTokenStream(lexer);
const parser = new MiLenguajeParser(tokens);
parser.buildParseTrees = true;

const tree = parser.prog();

/* ===== ÁRBOL ===== */
console.log("Árbol sintáctico:");
console.log(tree.toStringTree(parser.ruleNames));

/* ===== VISITOR ===== */
const visitor = new CustomVisitor();
const jsCode = visitor.visit(tree);

console.log("\nCódigo JS generado:\n");
console.log(jsCode);

/* ===== EJECUCIÓN ===== */
eval(jsCode);