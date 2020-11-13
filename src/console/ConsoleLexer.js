// Generated from d:\Code Projects\Git\Appinda\CisumRexim\src\console\Console.g4 by ANTLR 4.8
// jshint ignore: start
var antlr4 = require('antlr4/index');



var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0002\u0012x\b\u0001\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004",
    "\u0004\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t",
    "\u0007\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004",
    "\f\t\f\u0004\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010",
    "\t\u0010\u0004\u0011\t\u0011\u0003\u0002\u0003\u0002\u0003\u0002\u0003",
    "\u0002\u0003\u0002\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0005\u0003",
    "\u0005\u0003\u0005\u0003\u0005\u0003\u0006\u0003\u0006\u0003\u0006\u0003",
    "\u0006\u0003\u0006\u0003\u0006\u0003\u0007\u0003\u0007\u0003\u0007\u0003",
    "\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\b\u0003",
    "\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\t\u0003\t\u0003\t\u0003",
    "\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\n\u0003\n\u0003\n\u0003\n\u0003",
    "\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\u000b\u0003\u000b\u0003\f\u0003",
    "\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0005\fe\n\f\u0003\r\u0006",
    "\rh\n\r\r\r\u000e\ri\u0003\u000e\u0006\u000em\n\u000e\r\u000e\u000e",
    "\u000en\u0003\u000f\u0003\u000f\u0003\u0010\u0003\u0010\u0003\u0011",
    "\u0003\u0011\u0003\u0011\u0003\u0011\u0002\u0002\u0012\u0003\u0003\u0005",
    "\u0004\u0007\u0005\t\u0006\u000b\u0007\r\b\u000f\t\u0011\n\u0013\u000b",
    "\u0015\f\u0017\r\u0019\u000e\u001b\u000f\u001d\u0010\u001f\u0011!\u0012",
    "\u0003\u0002\u0004\u0003\u0002C\\\u0005\u0002\u000b\f\u000e\u000f\"",
    "\"\u0002z\u0002\u0003\u0003\u0002\u0002\u0002\u0002\u0005\u0003\u0002",
    "\u0002\u0002\u0002\u0007\u0003\u0002\u0002\u0002\u0002\t\u0003\u0002",
    "\u0002\u0002\u0002\u000b\u0003\u0002\u0002\u0002\u0002\r\u0003\u0002",
    "\u0002\u0002\u0002\u000f\u0003\u0002\u0002\u0002\u0002\u0011\u0003\u0002",
    "\u0002\u0002\u0002\u0013\u0003\u0002\u0002\u0002\u0002\u0015\u0003\u0002",
    "\u0002\u0002\u0002\u0017\u0003\u0002\u0002\u0002\u0002\u0019\u0003\u0002",
    "\u0002\u0002\u0002\u001b\u0003\u0002\u0002\u0002\u0002\u001d\u0003\u0002",
    "\u0002\u0002\u0002\u001f\u0003\u0002\u0002\u0002\u0002!\u0003\u0002",
    "\u0002\u0002\u0003#\u0003\u0002\u0002\u0002\u0005(\u0003\u0002\u0002",
    "\u0002\u0007-\u0003\u0002\u0002\u0002\t1\u0003\u0002\u0002\u0002\u000b",
    "5\u0003\u0002\u0002\u0002\r;\u0003\u0002\u0002\u0002\u000fC\u0003\u0002",
    "\u0002\u0002\u0011J\u0003\u0002\u0002\u0002\u0013R\u0003\u0002\u0002",
    "\u0002\u0015[\u0003\u0002\u0002\u0002\u0017d\u0003\u0002\u0002\u0002",
    "\u0019g\u0003\u0002\u0002\u0002\u001bl\u0003\u0002\u0002\u0002\u001d",
    "p\u0003\u0002\u0002\u0002\u001fr\u0003\u0002\u0002\u0002!t\u0003\u0002",
    "\u0002\u0002#$\u0007R\u0002\u0002$%\u0007N\u0002\u0002%&\u0007C\u0002",
    "\u0002&\'\u0007[\u0002\u0002\'\u0004\u0003\u0002\u0002\u0002()\u0007",
    "U\u0002\u0002)*\u0007V\u0002\u0002*+\u0007Q\u0002\u0002+,\u0007R\u0002",
    "\u0002,\u0006\u0003\u0002\u0002\u0002-.\u0007C\u0002\u0002./\u0007N",
    "\u0002\u0002/0\u0007N\u0002\u00020\b\u0003\u0002\u0002\u000212\u0007",
    "U\u0002\u000223\u0007G\u0002\u000234\u0007V\u0002\u00024\n\u0003\u0002",
    "\u0002\u000256\u0007V\u0002\u000267\u0007J\u0002\u000278\u0007G\u0002",
    "\u000289\u0007O\u0002\u00029:\u0007G\u0002\u0002:\f\u0003\u0002\u0002",
    "\u0002;<\u0007U\u0002\u0002<=\u0007G\u0002\u0002=>\u0007V\u0002\u0002",
    ">?\u0007V\u0002\u0002?@\u0007K\u0002\u0002@A\u0007P\u0002\u0002AB\u0007",
    "I\u0002\u0002B\u000e\u0003\u0002\u0002\u0002CD\u0007G\u0002\u0002DE",
    "\u0007Z\u0002\u0002EF\u0007R\u0002\u0002FG\u0007C\u0002\u0002GH\u0007",
    "P\u0002\u0002HI\u0007F\u0002\u0002I\u0010\u0003\u0002\u0002\u0002JK",
    "\u0007E\u0002\u0002KL\u0007Q\u0002\u0002LM\u0007P\u0002\u0002MN\u0007",
    "U\u0002\u0002NO\u0007Q\u0002\u0002OP\u0007N\u0002\u0002PQ\u0007G\u0002",
    "\u0002Q\u0012\u0003\u0002\u0002\u0002RS\u0007E\u0002\u0002ST\u0007Q",
    "\u0002\u0002TU\u0007N\u0002\u0002UV\u0007N\u0002\u0002VW\u0007C\u0002",
    "\u0002WX\u0007R\u0002\u0002XY\u0007U\u0002\u0002YZ\u0007G\u0002\u0002",
    "Z\u0014\u0003\u0002\u0002\u0002[\\\u0007=\u0002\u0002\\\u0016\u0003",
    "\u0002\u0002\u0002]^\u0007E\u0002\u0002^_\u0007W\u0002\u0002_e\u0007",
    "G\u0002\u0002`a\u0007U\u0002\u0002ab\u0007Q\u0002\u0002bc\u0007P\u0002",
    "\u0002ce\u0007I\u0002\u0002d]\u0003\u0002\u0002\u0002d`\u0003\u0002",
    "\u0002\u0002e\u0018\u0003\u0002\u0002\u0002fh\u0005\u001d\u000f\u0002",
    "gf\u0003\u0002\u0002\u0002hi\u0003\u0002\u0002\u0002ig\u0003\u0002\u0002",
    "\u0002ij\u0003\u0002\u0002\u0002j\u001a\u0003\u0002\u0002\u0002km\u0005",
    "\u001f\u0010\u0002lk\u0003\u0002\u0002\u0002mn\u0003\u0002\u0002\u0002",
    "nl\u0003\u0002\u0002\u0002no\u0003\u0002\u0002\u0002o\u001c\u0003\u0002",
    "\u0002\u0002pq\u00042;\u0002q\u001e\u0003\u0002\u0002\u0002rs\t\u0002",
    "\u0002\u0002s \u0003\u0002\u0002\u0002tu\t\u0003\u0002\u0002uv\u0003",
    "\u0002\u0002\u0002vw\b\u0011\u0002\u0002w\"\u0003\u0002\u0002\u0002",
    "\u0006\u0002din\u0003\b\u0002\u0002"].join("");


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
ConsoleLexer.ENDING = 10;
ConsoleLexer.OBJ = 11;
ConsoleLexer.NUMBER = 12;
ConsoleLexer.STRING = 13;
ConsoleLexer.DIGIT = 14;
ConsoleLexer.LETTER = 15;
ConsoleLexer.WHITESPACE = 16;

ConsoleLexer.prototype.channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];

ConsoleLexer.prototype.modeNames = [ "DEFAULT_MODE" ];

ConsoleLexer.prototype.literalNames = [ null, "'PLAY'", "'STOP'", "'ALL'", 
                                        "'SET'", "'THEME'", "'SETTING'", 
                                        "'EXPAND'", "'CONSOLE'", "'COLLAPSE'", 
                                        "';'" ];

ConsoleLexer.prototype.symbolicNames = [ null, null, null, null, null, null, 
                                         null, null, null, null, "ENDING", 
                                         "OBJ", "NUMBER", "STRING", "DIGIT", 
                                         "LETTER", "WHITESPACE" ];

ConsoleLexer.prototype.ruleNames = [ "T__0", "T__1", "T__2", "T__3", "T__4", 
                                     "T__5", "T__6", "T__7", "T__8", "ENDING", 
                                     "OBJ", "NUMBER", "STRING", "DIGIT", 
                                     "LETTER", "WHITESPACE" ];

ConsoleLexer.prototype.grammarFileName = "Console.g4";


exports.ConsoleLexer = ConsoleLexer;

