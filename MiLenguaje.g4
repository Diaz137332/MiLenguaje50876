grammar MiLenguaje;

prog: (declaracion | impresion)* EOF;

/* ---------------- REGLAS ---------------- */

declaracion
    : VARIABLE ID '=' valor ';'
    ;

impresion
    : IMPRIMIR '(' valor ')' ';'
    ;

valor
    : STRING
    | ID
    ;

/* ---------------- TOKENS ---------------- */

VARIABLE: 'variable';
IMPRIMIR: 'imprimir';

ID: [a-zA-Z_] [a-zA-Z0-9_]*;
STRING: '"' .*? '"';

WS: [ \t\r\n]+ -> skip;