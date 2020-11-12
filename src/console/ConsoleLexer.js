// Generated from d:\Code Projects\Git\Appinda\CisumRexim\src\console\Console.g4 by ANTLR 4.8
// jshint ignore: start
var antlr4 = require('antlr4/index');



var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0002\t9\b\u0001\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004",
    "\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007",
    "\u0004\b\t\b\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0004\u0003\u0004\u0003\u0004",
    "\u0003\u0004\u0003\u0004\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005",
    "\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0006",
    "\u0006\u0006)\n\u0006\r\u0006\u000e\u0006*\u0003\u0007\u0003\u0007\u0003",
    "\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0005\u00074",
    "\n\u0007\u0003\b\u0003\b\u0003\b\u0003\b\u0002\u0002\t\u0003\u0003\u0005",
    "\u0004\u0007\u0005\t\u0006\u000b\u0007\r\b\u000f\t\u0003\u0002\u0003",
    "\u0005\u0002\u000b\f\u000e\u000f\"\"\u0002:\u0002\u0003\u0003\u0002",
    "\u0002\u0002\u0002\u0005\u0003\u0002\u0002\u0002\u0002\u0007\u0003\u0002",
    "\u0002\u0002\u0002\t\u0003\u0002\u0002\u0002\u0002\u000b\u0003\u0002",
    "\u0002\u0002\u0002\r\u0003\u0002\u0002\u0002\u0002\u000f\u0003\u0002",
    "\u0002\u0002\u0003\u0011\u0003\u0002\u0002\u0002\u0005\u0016\u0003\u0002",
    "\u0002\u0002\u0007\u0019\u0003\u0002\u0002\u0002\t\u001e\u0003\u0002",
    "\u0002\u0002\u000b(\u0003\u0002\u0002\u0002\r3\u0003\u0002\u0002\u0002",
    "\u000f5\u0003\u0002\u0002\u0002\u0011\u0012\u0007R\u0002\u0002\u0012",
    "\u0013\u0007N\u0002\u0002\u0013\u0014\u0007C\u0002\u0002\u0014\u0015",
    "\u0007[\u0002\u0002\u0015\u0004\u0003\u0002\u0002\u0002\u0016\u0017",
    "\u0007Q\u0002\u0002\u0017\u0018\u0007P\u0002\u0002\u0018\u0006\u0003",
    "\u0002\u0002\u0002\u0019\u001a\u0007U\u0002\u0002\u001a\u001b\u0007",
    "V\u0002\u0002\u001b\u001c\u0007Q\u0002\u0002\u001c\u001d\u0007R\u0002",
    "\u0002\u001d\b\u0003\u0002\u0002\u0002\u001e\u001f\u0007U\u0002\u0002",
    "\u001f \u0007V\u0002\u0002 !\u0007Q\u0002\u0002!\"\u0007R\u0002\u0002",
    "\"#\u0007\"\u0002\u0002#$\u0007C\u0002\u0002$%\u0007N\u0002\u0002%&",
    "\u0007N\u0002\u0002&\n\u0003\u0002\u0002\u0002\')\u00042;\u0002(\'\u0003",
    "\u0002\u0002\u0002)*\u0003\u0002\u0002\u0002*(\u0003\u0002\u0002\u0002",
    "*+\u0003\u0002\u0002\u0002+\f\u0003\u0002\u0002\u0002,-\u0007U\u0002",
    "\u0002-.\u0007Q\u0002\u0002./\u0007P\u0002\u0002/4\u0007I\u0002\u0002",
    "01\u0007E\u0002\u000212\u0007W\u0002\u000224\u0007G\u0002\u00023,\u0003",
    "\u0002\u0002\u000230\u0003\u0002\u0002\u00024\u000e\u0003\u0002\u0002",
    "\u000256\t\u0002\u0002\u000267\u0003\u0002\u0002\u000278\b\b\u0002\u0002",
    "8\u0010\u0003\u0002\u0002\u0002\u0005\u0002*3\u0003\b\u0002\u0002"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

function ConsoleLexer(input) {
	antlr4.Lexer.call(this, input);
    this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.PredictionContextCache());
    return this;
}

ConsoleLexer.prototype = Object.create(antlr4.Lexer.prototype);
ConsoleLexer.prototype.constructor = ConsoleLexer;

Object.defineProperty(ConsoleLexer.prototype, "atn", {
        get : function() {
                return atn;
        }
});

ConsoleLexer.EOF = antlr4.Token.EOF;
ConsoleLexer.T__0 = 1;
ConsoleLexer.T__1 = 2;
ConsoleLexer.T__2 = 3;
ConsoleLexer.T__3 = 4;
ConsoleLexer.NUMBER = 5;
ConsoleLexer.OBJ = 6;
ConsoleLexer.WHITESPACE = 7;

ConsoleLexer.prototype.channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];

ConsoleLexer.prototype.modeNames = [ "DEFAULT_MODE" ];

ConsoleLexer.prototype.literalNames = [ null, "'PLAY'", "'ON'", "'STOP'", 
                                        "'STOP ALL'" ];

ConsoleLexer.prototype.symbolicNames = [ null, null, null, null, null, "NUMBER", 
                                         "OBJ", "WHITESPACE" ];

ConsoleLexer.prototype.ruleNames = [ "T__0", "T__1", "T__2", "T__3", "NUMBER", 
                                     "OBJ", "WHITESPACE" ];

ConsoleLexer.prototype.grammarFileName = "Console.g4";


exports.ConsoleLexer = ConsoleLexer;

