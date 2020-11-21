// Generated from d:\Code Projects\Git\Appinda\CisumRexim\helpers\console\Console.g4 by ANTLR 4.8
// jshint ignore: start
var antlr4 = require('antlr4/index');



var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0002\u0016\u0095\b\u0001\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004",
    "\u0004\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t",
    "\u0007\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004",
    "\f\t\f\u0004\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010",
    "\t\u0010\u0004\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013",
    "\u0004\u0014\t\u0014\u0004\u0015\t\u0015\u0003\u0002\u0003\u0002\u0003",
    "\u0002\u0003\u0002\u0003\u0002\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0004\u0003\u0004\u0003\u0004\u0003",
    "\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0006\u0003",
    "\u0006\u0003\u0006\u0003\u0006\u0003\u0007\u0003\u0007\u0003\u0007\u0003",
    "\u0007\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\t\u0003",
    "\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\n\u0003\n\u0003",
    "\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\u000b\u0003\u000b\u0003",
    "\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\f\u0003",
    "\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\r\u0003",
    "\r\u0003\r\u0003\r\u0003\r\u0003\r\u0003\r\u0003\u000e\u0003\u000e\u0003",
    "\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000f\u0003\u000f\u0003",
    "\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003",
    "\u0010\u0003\u0010\u0003\u0011\u0006\u0011\u0085\n\u0011\r\u0011\u000e",
    "\u0011\u0086\u0003\u0012\u0006\u0012\u008a\n\u0012\r\u0012\u000e\u0012",
    "\u008b\u0003\u0013\u0003\u0013\u0003\u0014\u0003\u0014\u0003\u0015\u0003",
    "\u0015\u0003\u0015\u0003\u0015\u0002\u0002\u0016\u0003\u0003\u0005\u0004",
    "\u0007\u0005\t\u0006\u000b\u0007\r\b\u000f\t\u0011\n\u0013\u000b\u0015",
    "\f\u0017\r\u0019\u000e\u001b\u000f\u001d\u0010\u001f\u0011!\u0012#\u0013",
    "%\u0014\'\u0015)\u0016\u0003\u0002\u0004\u0003\u0002C\\\u0005\u0002",
    "\u000b\f\u000e\u000f\"\"\u0002\u0096\u0002\u0003\u0003\u0002\u0002\u0002",
    "\u0002\u0005\u0003\u0002\u0002\u0002\u0002\u0007\u0003\u0002\u0002\u0002",
    "\u0002\t\u0003\u0002\u0002\u0002\u0002\u000b\u0003\u0002\u0002\u0002",
    "\u0002\r\u0003\u0002\u0002\u0002\u0002\u000f\u0003\u0002\u0002\u0002",
    "\u0002\u0011\u0003\u0002\u0002\u0002\u0002\u0013\u0003\u0002\u0002\u0002",
    "\u0002\u0015\u0003\u0002\u0002\u0002\u0002\u0017\u0003\u0002\u0002\u0002",
    "\u0002\u0019\u0003\u0002\u0002\u0002\u0002\u001b\u0003\u0002\u0002\u0002",
    "\u0002\u001d\u0003\u0002\u0002\u0002\u0002\u001f\u0003\u0002\u0002\u0002",
    "\u0002!\u0003\u0002\u0002\u0002\u0002#\u0003\u0002\u0002\u0002\u0002",
    "%\u0003\u0002\u0002\u0002\u0002\'\u0003\u0002\u0002\u0002\u0002)\u0003",
    "\u0002\u0002\u0002\u0003+\u0003\u0002\u0002\u0002\u00050\u0003\u0002",
    "\u0002\u0002\u00076\u0003\u0002\u0002\u0002\t9\u0003\u0002\u0002\u0002",
    "\u000b>\u0003\u0002\u0002\u0002\rB\u0003\u0002\u0002\u0002\u000fF\u0003",
    "\u0002\u0002\u0002\u0011L\u0003\u0002\u0002\u0002\u0013T\u0003\u0002",
    "\u0002\u0002\u0015\\\u0003\u0002\u0002\u0002\u0017c\u0003\u0002\u0002",
    "\u0002\u0019l\u0003\u0002\u0002\u0002\u001bs\u0003\u0002\u0002\u0002",
    "\u001dy\u0003\u0002\u0002\u0002\u001f{\u0003\u0002\u0002\u0002!\u0084",
    "\u0003\u0002\u0002\u0002#\u0089\u0003\u0002\u0002\u0002%\u008d\u0003",
    "\u0002\u0002\u0002\'\u008f\u0003\u0002\u0002\u0002)\u0091\u0003\u0002",
    "\u0002\u0002+,\u0007R\u0002\u0002,-\u0007N\u0002\u0002-.\u0007C\u0002",
    "\u0002./\u0007[\u0002\u0002/\u0004\u0003\u0002\u0002\u000201\u0007V",
    "\u0002\u000212\u0007T\u0002\u000223\u0007C\u0002\u000234\u0007E\u0002",
    "\u000245\u0007M\u0002\u00025\u0006\u0003\u0002\u0002\u000267\u0007Q",
    "\u0002\u000278\u0007P\u0002\u00028\b\u0003\u0002\u0002\u00029:\u0007",
    "U\u0002\u0002:;\u0007V\u0002\u0002;<\u0007Q\u0002\u0002<=\u0007R\u0002",
    "\u0002=\n\u0003\u0002\u0002\u0002>?\u0007C\u0002\u0002?@\u0007N\u0002",
    "\u0002@A\u0007N\u0002\u0002A\f\u0003\u0002\u0002\u0002BC\u0007U\u0002",
    "\u0002CD\u0007G\u0002\u0002DE\u0007V\u0002\u0002E\u000e\u0003\u0002",
    "\u0002\u0002FG\u0007V\u0002\u0002GH\u0007J\u0002\u0002HI\u0007G\u0002",
    "\u0002IJ\u0007O\u0002\u0002JK\u0007G\u0002\u0002K\u0010\u0003\u0002",
    "\u0002\u0002LM\u0007U\u0002\u0002MN\u0007G\u0002\u0002NO\u0007V\u0002",
    "\u0002OP\u0007V\u0002\u0002PQ\u0007K\u0002\u0002QR\u0007P\u0002\u0002",
    "RS\u0007I\u0002\u0002S\u0012\u0003\u0002\u0002\u0002TU\u0007E\u0002",
    "\u0002UV\u0007Q\u0002\u0002VW\u0007P\u0002\u0002WX\u0007U\u0002\u0002",
    "XY\u0007Q\u0002\u0002YZ\u0007N\u0002\u0002Z[\u0007G\u0002\u0002[\u0014",
    "\u0003\u0002\u0002\u0002\\]\u0007G\u0002\u0002]^\u0007Z\u0002\u0002",
    "^_\u0007R\u0002\u0002_`\u0007C\u0002\u0002`a\u0007P\u0002\u0002ab\u0007",
    "F\u0002\u0002b\u0016\u0003\u0002\u0002\u0002cd\u0007E\u0002\u0002de",
    "\u0007Q\u0002\u0002ef\u0007N\u0002\u0002fg\u0007N\u0002\u0002gh\u0007",
    "C\u0002\u0002hi\u0007R\u0002\u0002ij\u0007U\u0002\u0002jk\u0007G\u0002",
    "\u0002k\u0018\u0003\u0002\u0002\u0002lm\u0007V\u0002\u0002mn\u0007Q",
    "\u0002\u0002no\u0007I\u0002\u0002op\u0007I\u0002\u0002pq\u0007N\u0002",
    "\u0002qr\u0007G\u0002\u0002r\u001a\u0003\u0002\u0002\u0002st\u0007E",
    "\u0002\u0002tu\u0007N\u0002\u0002uv\u0007G\u0002\u0002vw\u0007C\u0002",
    "\u0002wx\u0007T\u0002\u0002x\u001c\u0003\u0002\u0002\u0002yz\u0007=",
    "\u0002\u0002z\u001e\u0003\u0002\u0002\u0002{|\u0007E\u0002\u0002|}\u0007",
    "J\u0002\u0002}~\u0007C\u0002\u0002~\u007f\u0007P\u0002\u0002\u007f\u0080",
    "\u0007P\u0002\u0002\u0080\u0081\u0007G\u0002\u0002\u0081\u0082\u0007",
    "N\u0002\u0002\u0082 \u0003\u0002\u0002\u0002\u0083\u0085\u0005%\u0013",
    "\u0002\u0084\u0083\u0003\u0002\u0002\u0002\u0085\u0086\u0003\u0002\u0002",
    "\u0002\u0086\u0084\u0003\u0002\u0002\u0002\u0086\u0087\u0003\u0002\u0002",
    "\u0002\u0087\"\u0003\u0002\u0002\u0002\u0088\u008a\u0005\'\u0014\u0002",
    "\u0089\u0088\u0003\u0002\u0002\u0002\u008a\u008b\u0003\u0002\u0002\u0002",
    "\u008b\u0089\u0003\u0002\u0002\u0002\u008b\u008c\u0003\u0002\u0002\u0002",
    "\u008c$\u0003\u0002\u0002\u0002\u008d\u008e\u00042;\u0002\u008e&\u0003",
    "\u0002\u0002\u0002\u008f\u0090\t\u0002\u0002\u0002\u0090(\u0003\u0002",
    "\u0002\u0002\u0091\u0092\t\u0003\u0002\u0002\u0092\u0093\u0003\u0002",
    "\u0002\u0002\u0093\u0094\b\u0015\u0002\u0002\u0094*\u0003\u0002\u0002",
    "\u0002\u0005\u0002\u0086\u008b\u0003\b\u0002\u0002"].join("");


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
ConsoleLexer.T__4 = 5;
ConsoleLexer.T__5 = 6;
ConsoleLexer.T__6 = 7;
ConsoleLexer.T__7 = 8;
ConsoleLexer.T__8 = 9;
ConsoleLexer.T__9 = 10;
ConsoleLexer.T__10 = 11;
ConsoleLexer.T__11 = 12;
ConsoleLexer.T__12 = 13;
ConsoleLexer.ENDING = 14;
ConsoleLexer.OBJ = 15;
ConsoleLexer.NUMBER = 16;
ConsoleLexer.STRING = 17;
ConsoleLexer.DIGIT = 18;
ConsoleLexer.LETTER = 19;
ConsoleLexer.WHITESPACE = 20;

ConsoleLexer.prototype.channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];

ConsoleLexer.prototype.modeNames = [ "DEFAULT_MODE" ];

ConsoleLexer.prototype.literalNames = [ null, "'PLAY'", "'TRACK'", "'ON'", 
                                        "'STOP'", "'ALL'", "'SET'", "'THEME'", 
                                        "'SETTING'", "'CONSOLE'", "'EXPAND'", 
                                        "'COLLAPSE'", "'TOGGLE'", "'CLEAR'", 
                                        "';'", "'CHANNEL'" ];

ConsoleLexer.prototype.symbolicNames = [ null, null, null, null, null, null, 
                                         null, null, null, null, null, null, 
                                         null, null, "ENDING", "OBJ", "NUMBER", 
                                         "STRING", "DIGIT", "LETTER", "WHITESPACE" ];

ConsoleLexer.prototype.ruleNames = [ "T__0", "T__1", "T__2", "T__3", "T__4", 
                                     "T__5", "T__6", "T__7", "T__8", "T__9", 
                                     "T__10", "T__11", "T__12", "ENDING", 
                                     "OBJ", "NUMBER", "STRING", "DIGIT", 
                                     "LETTER", "WHITESPACE" ];

ConsoleLexer.prototype.grammarFileName = "Console.g4";


exports.ConsoleLexer = ConsoleLexer;

