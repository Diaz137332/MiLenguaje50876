// Generated from MiLenguaje.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';


const serializedATN = [4,0,9,68,6,-1,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,
7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,1,0,1,0,1,1,1,1,1,2,1,2,1,3,1,3,1,4,
1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,6,
1,6,5,6,48,8,6,10,6,12,6,51,9,6,1,7,1,7,5,7,55,8,7,10,7,12,7,58,9,7,1,7,
1,7,1,8,4,8,63,8,8,11,8,12,8,64,1,8,1,8,1,56,0,9,1,1,3,2,5,3,7,4,9,5,11,
6,13,7,15,8,17,9,1,0,3,3,0,65,90,95,95,97,122,4,0,48,57,65,90,95,95,97,122,
3,0,9,10,13,13,32,32,70,0,1,1,0,0,0,0,3,1,0,0,0,0,5,1,0,0,0,0,7,1,0,0,0,
0,9,1,0,0,0,0,11,1,0,0,0,0,13,1,0,0,0,0,15,1,0,0,0,0,17,1,0,0,0,1,19,1,0,
0,0,3,21,1,0,0,0,5,23,1,0,0,0,7,25,1,0,0,0,9,27,1,0,0,0,11,36,1,0,0,0,13,
45,1,0,0,0,15,52,1,0,0,0,17,62,1,0,0,0,19,20,5,61,0,0,20,2,1,0,0,0,21,22,
5,59,0,0,22,4,1,0,0,0,23,24,5,40,0,0,24,6,1,0,0,0,25,26,5,41,0,0,26,8,1,
0,0,0,27,28,5,118,0,0,28,29,5,97,0,0,29,30,5,114,0,0,30,31,5,105,0,0,31,
32,5,97,0,0,32,33,5,98,0,0,33,34,5,108,0,0,34,35,5,101,0,0,35,10,1,0,0,0,
36,37,5,105,0,0,37,38,5,109,0,0,38,39,5,112,0,0,39,40,5,114,0,0,40,41,5,
105,0,0,41,42,5,109,0,0,42,43,5,105,0,0,43,44,5,114,0,0,44,12,1,0,0,0,45,
49,7,0,0,0,46,48,7,1,0,0,47,46,1,0,0,0,48,51,1,0,0,0,49,47,1,0,0,0,49,50,
1,0,0,0,50,14,1,0,0,0,51,49,1,0,0,0,52,56,5,34,0,0,53,55,9,0,0,0,54,53,1,
0,0,0,55,58,1,0,0,0,56,57,1,0,0,0,56,54,1,0,0,0,57,59,1,0,0,0,58,56,1,0,
0,0,59,60,5,34,0,0,60,16,1,0,0,0,61,63,7,2,0,0,62,61,1,0,0,0,63,64,1,0,0,
0,64,62,1,0,0,0,64,65,1,0,0,0,65,66,1,0,0,0,66,67,6,8,0,0,67,18,1,0,0,0,
4,0,49,56,64,1,6,0,0];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

export default class MiLenguajeLexer extends antlr4.Lexer {

    static grammarFileName = "MiLenguaje.g4";
    static channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
	static modeNames = [ "DEFAULT_MODE" ];
	static literalNames = [ null, "'='", "';'", "'('", "')'", "'variable'", 
                         "'imprimir'" ];
	static symbolicNames = [ null, null, null, null, null, "VARIABLE", "IMPRIMIR", 
                          "ID", "STRING", "WS" ];
	static ruleNames = [ "T__0", "T__1", "T__2", "T__3", "VARIABLE", "IMPRIMIR", 
                      "ID", "STRING", "WS" ];

    constructor(input) {
        super(input)
        this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.atn.PredictionContextCache());
    }
}

MiLenguajeLexer.EOF = antlr4.Token.EOF;
MiLenguajeLexer.T__0 = 1;
MiLenguajeLexer.T__1 = 2;
MiLenguajeLexer.T__2 = 3;
MiLenguajeLexer.T__3 = 4;
MiLenguajeLexer.VARIABLE = 5;
MiLenguajeLexer.IMPRIMIR = 6;
MiLenguajeLexer.ID = 7;
MiLenguajeLexer.STRING = 8;
MiLenguajeLexer.WS = 9;



