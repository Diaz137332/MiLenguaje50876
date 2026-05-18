// Generated from MiLenguaje.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import MiLenguajeListener from './MiLenguajeListener.js';
const serializedATN = [4,1,9,32,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,1,0,1,0,
5,0,11,8,0,10,0,12,0,14,9,0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,2,1,2,
1,2,1,2,1,2,1,3,1,3,1,3,0,0,4,0,2,4,6,0,1,1,0,7,8,29,0,12,1,0,0,0,2,17,1,
0,0,0,4,23,1,0,0,0,6,29,1,0,0,0,8,11,3,2,1,0,9,11,3,4,2,0,10,8,1,0,0,0,10,
9,1,0,0,0,11,14,1,0,0,0,12,10,1,0,0,0,12,13,1,0,0,0,13,15,1,0,0,0,14,12,
1,0,0,0,15,16,5,0,0,1,16,1,1,0,0,0,17,18,5,5,0,0,18,19,5,7,0,0,19,20,5,1,
0,0,20,21,3,6,3,0,21,22,5,2,0,0,22,3,1,0,0,0,23,24,5,6,0,0,24,25,5,3,0,0,
25,26,3,6,3,0,26,27,5,4,0,0,27,28,5,2,0,0,28,5,1,0,0,0,29,30,7,0,0,0,30,
7,1,0,0,0,2,10,12];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class MiLenguajeParser extends antlr4.Parser {

    static grammarFileName = "MiLenguaje.g4";
    static literalNames = [ null, "'='", "';'", "'('", "')'", "'variable'", 
                            "'imprimir'" ];
    static symbolicNames = [ null, null, null, null, null, "VARIABLE", "IMPRIMIR", 
                             "ID", "STRING", "WS" ];
    static ruleNames = [ "prog", "declaracion", "impresion", "valor" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = MiLenguajeParser.ruleNames;
        this.literalNames = MiLenguajeParser.literalNames;
        this.symbolicNames = MiLenguajeParser.symbolicNames;
    }



	prog() {
	    let localctx = new ProgContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, MiLenguajeParser.RULE_prog);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 12;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===5 || _la===6) {
	            this.state = 10;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case 5:
	                this.state = 8;
	                this.declaracion();
	                break;
	            case 6:
	                this.state = 9;
	                this.impresion();
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
	            this.state = 14;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 15;
	        this.match(MiLenguajeParser.EOF);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
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



	declaracion() {
	    let localctx = new DeclaracionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, MiLenguajeParser.RULE_declaracion);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 17;
	        this.match(MiLenguajeParser.VARIABLE);
	        this.state = 18;
	        this.match(MiLenguajeParser.ID);
	        this.state = 19;
	        this.match(MiLenguajeParser.T__0);
	        this.state = 20;
	        this.valor();
	        this.state = 21;
	        this.match(MiLenguajeParser.T__1);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
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



	impresion() {
	    let localctx = new ImpresionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, MiLenguajeParser.RULE_impresion);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 23;
	        this.match(MiLenguajeParser.IMPRIMIR);
	        this.state = 24;
	        this.match(MiLenguajeParser.T__2);
	        this.state = 25;
	        this.valor();
	        this.state = 26;
	        this.match(MiLenguajeParser.T__3);
	        this.state = 27;
	        this.match(MiLenguajeParser.T__1);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
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



	valor() {
	    let localctx = new ValorContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, MiLenguajeParser.RULE_valor);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 29;
	        _la = this._input.LA(1);
	        if(!(_la===7 || _la===8)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
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

MiLenguajeParser.EOF = antlr4.Token.EOF;
MiLenguajeParser.T__0 = 1;
MiLenguajeParser.T__1 = 2;
MiLenguajeParser.T__2 = 3;
MiLenguajeParser.T__3 = 4;
MiLenguajeParser.VARIABLE = 5;
MiLenguajeParser.IMPRIMIR = 6;
MiLenguajeParser.ID = 7;
MiLenguajeParser.STRING = 8;
MiLenguajeParser.WS = 9;

MiLenguajeParser.RULE_prog = 0;
MiLenguajeParser.RULE_declaracion = 1;
MiLenguajeParser.RULE_impresion = 2;
MiLenguajeParser.RULE_valor = 3;

class ProgContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiLenguajeParser.RULE_prog;
    }

	EOF() {
	    return this.getToken(MiLenguajeParser.EOF, 0);
	};

	declaracion = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(DeclaracionContext);
	    } else {
	        return this.getTypedRuleContext(DeclaracionContext,i);
	    }
	};

	impresion = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ImpresionContext);
	    } else {
	        return this.getTypedRuleContext(ImpresionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof MiLenguajeListener ) {
	        listener.enterProg(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiLenguajeListener ) {
	        listener.exitProg(this);
		}
	}


}



class DeclaracionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiLenguajeParser.RULE_declaracion;
    }

	VARIABLE() {
	    return this.getToken(MiLenguajeParser.VARIABLE, 0);
	};

	ID() {
	    return this.getToken(MiLenguajeParser.ID, 0);
	};

	valor() {
	    return this.getTypedRuleContext(ValorContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof MiLenguajeListener ) {
	        listener.enterDeclaracion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiLenguajeListener ) {
	        listener.exitDeclaracion(this);
		}
	}


}



class ImpresionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiLenguajeParser.RULE_impresion;
    }

	IMPRIMIR() {
	    return this.getToken(MiLenguajeParser.IMPRIMIR, 0);
	};

	valor() {
	    return this.getTypedRuleContext(ValorContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof MiLenguajeListener ) {
	        listener.enterImpresion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiLenguajeListener ) {
	        listener.exitImpresion(this);
		}
	}


}



class ValorContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiLenguajeParser.RULE_valor;
    }

	STRING() {
	    return this.getToken(MiLenguajeParser.STRING, 0);
	};

	ID() {
	    return this.getToken(MiLenguajeParser.ID, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MiLenguajeListener ) {
	        listener.enterValor(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiLenguajeListener ) {
	        listener.exitValor(this);
		}
	}


}




MiLenguajeParser.ProgContext = ProgContext; 
MiLenguajeParser.DeclaracionContext = DeclaracionContext; 
MiLenguajeParser.ImpresionContext = ImpresionContext; 
MiLenguajeParser.ValorContext = ValorContext; 
