// Generated from d:\Code Projects\Git\Appinda\CisumRexim\src\console\Console.g4 by ANTLR 4.8
// jshint ignore: start
var antlr4 = require('antlr4/index');
var ConsoleListener = require('./ConsoleListener').ConsoleListener;
var grammarFileName = "Console.g4";


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003\u0012G\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f\u0004",
    "\r\t\r\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0005",
    "\u0002 \n\u0002\u0003\u0002\u0003\u0002\u0003\u0003\u0003\u0003\u0003",
    "\u0004\u0003\u0004\u0003\u0004\u0005\u0004)\n\u0004\u0003\u0005\u0003",
    "\u0005\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0007\u0003\u0007\u0003",
    "\u0007\u0005\u00073\n\u0007\u0003\b\u0003\b\u0003\b\u0003\t\u0003\t",
    "\u0003\t\u0003\n\u0003\n\u0003\n\u0003\u000b\u0005\u000b?\n\u000b\u0003",
    "\f\u0003\f\u0003\f\u0003\r\u0005\rE\n\r\u0003\r\u0002\u0002\u000e\u0002",
    "\u0004\u0006\b\n\f\u000e\u0010\u0012\u0014\u0016\u0018\u0002\u0002\u0002",
    "B\u0002\u001f\u0003\u0002\u0002\u0002\u0004#\u0003\u0002\u0002\u0002",
    "\u0006%\u0003\u0002\u0002\u0002\b*\u0003\u0002\u0002\u0002\n,\u0003",
    "\u0002\u0002\u0002\f/\u0003\u0002\u0002\u0002\u000e4\u0003\u0002\u0002",
    "\u0002\u00107\u0003\u0002\u0002\u0002\u0012:\u0003\u0002\u0002\u0002",
    "\u0014>\u0003\u0002\u0002\u0002\u0016@\u0003\u0002\u0002\u0002\u0018",
    "D\u0003\u0002\u0002\u0002\u001a \u0005\u0004\u0003\u0002\u001b \u0005",
    "\u0006\u0004\u0002\u001c \u0005\f\u0007\u0002\u001d \u0005\u0012\n\u0002",
    "\u001e \u0005\u0016\f\u0002\u001f\u001a\u0003\u0002\u0002\u0002\u001f",
    "\u001b\u0003\u0002\u0002\u0002\u001f\u001c\u0003\u0002\u0002\u0002\u001f",
    "\u001d\u0003\u0002\u0002\u0002\u001f\u001e\u0003\u0002\u0002\u0002 ",
    "!\u0003\u0002\u0002\u0002!\"\u0007\u0002\u0002\u0003\"\u0003\u0003\u0002",
    "\u0002\u0002#$\u0007\u0003\u0002\u0002$\u0005\u0003\u0002\u0002\u0002",
    "%(\u0007\u0004\u0002\u0002&)\u0005\b\u0005\u0002\')\u0005\n\u0006\u0002",
    "(&\u0003\u0002\u0002\u0002(\'\u0003\u0002\u0002\u0002)\u0007\u0003\u0002",
    "\u0002\u0002*+\u0007\u0005\u0002\u0002+\t\u0003\u0002\u0002\u0002,-",
    "\u0007\r\u0002\u0002-.\u0007\u000e\u0002\u0002.\u000b\u0003\u0002\u0002",
    "\u0002/2\u0007\u0006\u0002\u000203\u0005\u000e\b\u000213\u0005\u0010",
    "\t\u000220\u0003\u0002\u0002\u000221\u0003\u0002\u0002\u00023\r\u0003",
    "\u0002\u0002\u000245\u0007\u0007\u0002\u000256\u0007\u000f\u0002\u0002",
    "6\u000f\u0003\u0002\u0002\u000278\u0007\b\u0002\u000289\u0007\u000f",
    "\u0002\u00029\u0011\u0003\u0002\u0002\u0002:;\u0007\t\u0002\u0002;<",
    "\u0005\u0014\u000b\u0002<\u0013\u0003\u0002\u0002\u0002=?\u0007\n\u0002",
    "\u0002>=\u0003\u0002\u0002\u0002>?\u0003\u0002\u0002\u0002?\u0015\u0003",
    "\u0002\u0002\u0002@A\u0007\u000b\u0002\u0002AB\u0005\u0018\r\u0002B",
    "\u0017\u0003\u0002\u0002\u0002CE\u0007\n\u0002\u0002DC\u0003\u0002\u0002",
    "\u0002DE\u0003\u0002\u0002\u0002E\u0019\u0003\u0002\u0002\u0002\u0007",
    "\u001f(2>D"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'PLAY'", "'STOP'", "'ALL'", "'SET'", "'THEME'", 
                     "'SETTING'", "'EXPAND'", "'CONSOLE'", "'COLLAPSE'", 
                     "';'" ];

var symbolicNames = [ null, null, null, null, null, null, null, null, null, 
                      null, "ENDING", "OBJ", "NUMBER", "STRING", "DIGIT", 
                      "LETTER", "WHITESPACE" ];

var ruleNames =  [ "command", "playcommand", "stopcommand", "stopallcommand", 
                   "stopcuecommand", "setcommand", "setthemecommand", "setsettingcommand", 
                   "expandcommand", "expandconsolecommand", "collapsecommand", 
                   "collapseconsolecommand" ];

function ConsoleParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

ConsoleParser.prototype = Object.create(antlr4.Parser.prototype);
ConsoleParser.prototype.constructor = ConsoleParser;

Object.defineProperty(ConsoleParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

ConsoleParser.EOF = antlr4.Token.EOF;
ConsoleParser.T__0 = 1;
ConsoleParser.T__1 = 2;
ConsoleParser.T__2 = 3;
ConsoleParser.T__3 = 4;
ConsoleParser.T__4 = 5;
ConsoleParser.T__5 = 6;
ConsoleParser.T__6 = 7;
ConsoleParser.T__7 = 8;
ConsoleParser.T__8 = 9;
ConsoleParser.ENDING = 10;
ConsoleParser.OBJ = 11;
ConsoleParser.NUMBER = 12;
ConsoleParser.STRING = 13;
ConsoleParser.DIGIT = 14;
ConsoleParser.LETTER = 15;
ConsoleParser.WHITESPACE = 16;

ConsoleParser.RULE_command = 0;
ConsoleParser.RULE_playcommand = 1;
ConsoleParser.RULE_stopcommand = 2;
ConsoleParser.RULE_stopallcommand = 3;
ConsoleParser.RULE_stopcuecommand = 4;
ConsoleParser.RULE_setcommand = 5;
ConsoleParser.RULE_setthemecommand = 6;
ConsoleParser.RULE_setsettingcommand = 7;
ConsoleParser.RULE_expandcommand = 8;
ConsoleParser.RULE_expandconsolecommand = 9;
ConsoleParser.RULE_collapsecommand = 10;
ConsoleParser.RULE_collapseconsolecommand = 11;


function CommandContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ConsoleParser.RULE_command;
    return this;
}

CommandContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
CommandContext.prototype.constructor = CommandContext;

CommandContext.prototype.EOF = function() {
    return this.getToken(ConsoleParser.EOF, 0);
};

CommandContext.prototype.playcommand = function() {
    return this.getTypedRuleContext(PlaycommandContext,0);
};

CommandContext.prototype.stopcommand = function() {
    return this.getTypedRuleContext(StopcommandContext,0);
};

CommandContext.prototype.setcommand = function() {
    return this.getTypedRuleContext(SetcommandContext,0);
};

CommandContext.prototype.expandcommand = function() {
    return this.getTypedRuleContext(ExpandcommandContext,0);
};

CommandContext.prototype.collapsecommand = function() {
    return this.getTypedRuleContext(CollapsecommandContext,0);
};

CommandContext.prototype.enterRule = function(listener) {
    if(listener instanceof ConsoleListener ) {
        listener.enterCommand(this);
	}
};

CommandContext.prototype.exitRule = function(listener) {
    if(listener instanceof ConsoleListener ) {
        listener.exitCommand(this);
	}
};




ConsoleParser.CommandContext = CommandContext;

ConsoleParser.prototype.command = function() {

    var localctx = new CommandContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, ConsoleParser.RULE_command);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 29;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case ConsoleParser.T__0:
            this.state = 24;
            this.playcommand();
            break;
        case ConsoleParser.T__1:
            this.state = 25;
            this.stopcommand();
            break;
        case ConsoleParser.T__3:
            this.state = 26;
            this.setcommand();
            break;
        case ConsoleParser.T__6:
            this.state = 27;
            this.expandcommand();
            break;
        case ConsoleParser.T__8:
            this.state = 28;
            this.collapsecommand();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
        this.state = 31;
        this.match(ConsoleParser.EOF);
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
};


function PlaycommandContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ConsoleParser.RULE_playcommand;
    return this;
}

PlaycommandContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PlaycommandContext.prototype.constructor = PlaycommandContext;


PlaycommandContext.prototype.enterRule = function(listener) {
    if(listener instanceof ConsoleListener ) {
        listener.enterPlaycommand(this);
	}
};

PlaycommandContext.prototype.exitRule = function(listener) {
    if(listener instanceof ConsoleListener ) {
        listener.exitPlaycommand(this);
	}
};




ConsoleParser.PlaycommandContext = PlaycommandContext;

ConsoleParser.prototype.playcommand = function() {

    var localctx = new PlaycommandContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, ConsoleParser.RULE_playcommand);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 33;
        this.match(ConsoleParser.T__0);
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
};


function StopcommandContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ConsoleParser.RULE_stopcommand;
    return this;
}

StopcommandContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StopcommandContext.prototype.constructor = StopcommandContext;

StopcommandContext.prototype.stopallcommand = function() {
    return this.getTypedRuleContext(StopallcommandContext,0);
};

StopcommandContext.prototype.stopcuecommand = function() {
    return this.getTypedRuleContext(StopcuecommandContext,0);
};

StopcommandContext.prototype.enterRule = function(listener) {
    if(listener instanceof ConsoleListener ) {
        listener.enterStopcommand(this);
	}
};

StopcommandContext.prototype.exitRule = function(listener) {
    if(listener instanceof ConsoleListener ) {
        listener.exitStopcommand(this);
	}
};




ConsoleParser.StopcommandContext = StopcommandContext;

ConsoleParser.prototype.stopcommand = function() {

    var localctx = new StopcommandContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, ConsoleParser.RULE_stopcommand);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 35;
        this.match(ConsoleParser.T__1);
        this.state = 38;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case ConsoleParser.T__2:
            this.state = 36;
            this.stopallcommand();
            break;
        case ConsoleParser.OBJ:
            this.state = 37;
            this.stopcuecommand();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
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
};


function StopallcommandContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ConsoleParser.RULE_stopallcommand;
    return this;
}

StopallcommandContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StopallcommandContext.prototype.constructor = StopallcommandContext;


StopallcommandContext.prototype.enterRule = function(listener) {
    if(listener instanceof ConsoleListener ) {
        listener.enterStopallcommand(this);
	}
};

StopallcommandContext.prototype.exitRule = function(listener) {
    if(listener instanceof ConsoleListener ) {
        listener.exitStopallcommand(this);
	}
};




ConsoleParser.StopallcommandContext = StopallcommandContext;

ConsoleParser.prototype.stopallcommand = function() {

    var localctx = new StopallcommandContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, ConsoleParser.RULE_stopallcommand);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 40;
        this.match(ConsoleParser.T__2);
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
};


function StopcuecommandContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ConsoleParser.RULE_stopcuecommand;
    this.object = null; // Token
    this.id = null; // Token
    return this;
}

StopcuecommandContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StopcuecommandContext.prototype.constructor = StopcuecommandContext;

StopcuecommandContext.prototype.OBJ = function() {
    return this.getToken(ConsoleParser.OBJ, 0);
};

StopcuecommandContext.prototype.NUMBER = function() {
    return this.getToken(ConsoleParser.NUMBER, 0);
};

StopcuecommandContext.prototype.enterRule = function(listener) {
    if(listener instanceof ConsoleListener ) {
        listener.enterStopcuecommand(this);
	}
};

StopcuecommandContext.prototype.exitRule = function(listener) {
    if(listener instanceof ConsoleListener ) {
        listener.exitStopcuecommand(this);
	}
};




ConsoleParser.StopcuecommandContext = StopcuecommandContext;

ConsoleParser.prototype.stopcuecommand = function() {

    var localctx = new StopcuecommandContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, ConsoleParser.RULE_stopcuecommand);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 42;
        localctx.object = this.match(ConsoleParser.OBJ);
        this.state = 43;
        localctx.id = this.match(ConsoleParser.NUMBER);
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
};


function SetcommandContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ConsoleParser.RULE_setcommand;
    return this;
}

SetcommandContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SetcommandContext.prototype.constructor = SetcommandContext;

SetcommandContext.prototype.setthemecommand = function() {
    return this.getTypedRuleContext(SetthemecommandContext,0);
};

SetcommandContext.prototype.setsettingcommand = function() {
    return this.getTypedRuleContext(SetsettingcommandContext,0);
};

SetcommandContext.prototype.enterRule = function(listener) {
    if(listener instanceof ConsoleListener ) {
        listener.enterSetcommand(this);
	}
};

SetcommandContext.prototype.exitRule = function(listener) {
    if(listener instanceof ConsoleListener ) {
        listener.exitSetcommand(this);
	}
};




ConsoleParser.SetcommandContext = SetcommandContext;

ConsoleParser.prototype.setcommand = function() {

    var localctx = new SetcommandContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, ConsoleParser.RULE_setcommand);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 45;
        this.match(ConsoleParser.T__3);
        this.state = 48;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case ConsoleParser.T__4:
            this.state = 46;
            this.setthemecommand();
            break;
        case ConsoleParser.T__5:
            this.state = 47;
            this.setsettingcommand();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
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
};


function SetthemecommandContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ConsoleParser.RULE_setthemecommand;
    this.themename = null; // Token
    return this;
}

SetthemecommandContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SetthemecommandContext.prototype.constructor = SetthemecommandContext;

SetthemecommandContext.prototype.STRING = function() {
    return this.getToken(ConsoleParser.STRING, 0);
};

SetthemecommandContext.prototype.enterRule = function(listener) {
    if(listener instanceof ConsoleListener ) {
        listener.enterSetthemecommand(this);
	}
};

SetthemecommandContext.prototype.exitRule = function(listener) {
    if(listener instanceof ConsoleListener ) {
        listener.exitSetthemecommand(this);
	}
};




ConsoleParser.SetthemecommandContext = SetthemecommandContext;

ConsoleParser.prototype.setthemecommand = function() {

    var localctx = new SetthemecommandContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, ConsoleParser.RULE_setthemecommand);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 50;
        this.match(ConsoleParser.T__4);
        this.state = 51;
        localctx.themename = this.match(ConsoleParser.STRING);
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
};


function SetsettingcommandContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ConsoleParser.RULE_setsettingcommand;
    this.name = null; // Token
    return this;
}

SetsettingcommandContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SetsettingcommandContext.prototype.constructor = SetsettingcommandContext;

SetsettingcommandContext.prototype.STRING = function() {
    return this.getToken(ConsoleParser.STRING, 0);
};

SetsettingcommandContext.prototype.enterRule = function(listener) {
    if(listener instanceof ConsoleListener ) {
        listener.enterSetsettingcommand(this);
	}
};

SetsettingcommandContext.prototype.exitRule = function(listener) {
    if(listener instanceof ConsoleListener ) {
        listener.exitSetsettingcommand(this);
	}
};




ConsoleParser.SetsettingcommandContext = SetsettingcommandContext;

ConsoleParser.prototype.setsettingcommand = function() {

    var localctx = new SetsettingcommandContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, ConsoleParser.RULE_setsettingcommand);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 53;
        this.match(ConsoleParser.T__5);
        this.state = 54;
        localctx.name = this.match(ConsoleParser.STRING);
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
};


function ExpandcommandContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ConsoleParser.RULE_expandcommand;
    return this;
}

ExpandcommandContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ExpandcommandContext.prototype.constructor = ExpandcommandContext;

ExpandcommandContext.prototype.expandconsolecommand = function() {
    return this.getTypedRuleContext(ExpandconsolecommandContext,0);
};

ExpandcommandContext.prototype.enterRule = function(listener) {
    if(listener instanceof ConsoleListener ) {
        listener.enterExpandcommand(this);
	}
};

ExpandcommandContext.prototype.exitRule = function(listener) {
    if(listener instanceof ConsoleListener ) {
        listener.exitExpandcommand(this);
	}
};




ConsoleParser.ExpandcommandContext = ExpandcommandContext;

ConsoleParser.prototype.expandcommand = function() {

    var localctx = new ExpandcommandContext(this, this._ctx, this.state);
    this.enterRule(localctx, 16, ConsoleParser.RULE_expandcommand);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 56;
        this.match(ConsoleParser.T__6);
        this.state = 57;
        this.expandconsolecommand();
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
};


function ExpandconsolecommandContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ConsoleParser.RULE_expandconsolecommand;
    return this;
}

ExpandconsolecommandContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ExpandconsolecommandContext.prototype.constructor = ExpandconsolecommandContext;


ExpandconsolecommandContext.prototype.enterRule = function(listener) {
    if(listener instanceof ConsoleListener ) {
        listener.enterExpandconsolecommand(this);
	}
};

ExpandconsolecommandContext.prototype.exitRule = function(listener) {
    if(listener instanceof ConsoleListener ) {
        listener.exitExpandconsolecommand(this);
	}
};




ConsoleParser.ExpandconsolecommandContext = ExpandconsolecommandContext;

ConsoleParser.prototype.expandconsolecommand = function() {

    var localctx = new ExpandconsolecommandContext(this, this._ctx, this.state);
    this.enterRule(localctx, 18, ConsoleParser.RULE_expandconsolecommand);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 60;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===ConsoleParser.T__7) {
            this.state = 59;
            this.match(ConsoleParser.T__7);
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
};


function CollapsecommandContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ConsoleParser.RULE_collapsecommand;
    return this;
}

CollapsecommandContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
CollapsecommandContext.prototype.constructor = CollapsecommandContext;

CollapsecommandContext.prototype.collapseconsolecommand = function() {
    return this.getTypedRuleContext(CollapseconsolecommandContext,0);
};

CollapsecommandContext.prototype.enterRule = function(listener) {
    if(listener instanceof ConsoleListener ) {
        listener.enterCollapsecommand(this);
	}
};

CollapsecommandContext.prototype.exitRule = function(listener) {
    if(listener instanceof ConsoleListener ) {
        listener.exitCollapsecommand(this);
	}
};




ConsoleParser.CollapsecommandContext = CollapsecommandContext;

ConsoleParser.prototype.collapsecommand = function() {

    var localctx = new CollapsecommandContext(this, this._ctx, this.state);
    this.enterRule(localctx, 20, ConsoleParser.RULE_collapsecommand);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 62;
        this.match(ConsoleParser.T__8);
        this.state = 63;
        this.collapseconsolecommand();
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
};


function CollapseconsolecommandContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ConsoleParser.RULE_collapseconsolecommand;
    return this;
}

CollapseconsolecommandContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
CollapseconsolecommandContext.prototype.constructor = CollapseconsolecommandContext;


CollapseconsolecommandContext.prototype.enterRule = function(listener) {
    if(listener instanceof ConsoleListener ) {
        listener.enterCollapseconsolecommand(this);
	}
};

CollapseconsolecommandContext.prototype.exitRule = function(listener) {
    if(listener instanceof ConsoleListener ) {
        listener.exitCollapseconsolecommand(this);
	}
};




ConsoleParser.CollapseconsolecommandContext = CollapseconsolecommandContext;

ConsoleParser.prototype.collapseconsolecommand = function() {

    var localctx = new CollapseconsolecommandContext(this, this._ctx, this.state);
    this.enterRule(localctx, 22, ConsoleParser.RULE_collapseconsolecommand);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 66;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===ConsoleParser.T__7) {
            this.state = 65;
            this.match(ConsoleParser.T__7);
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
};


exports.ConsoleParser = ConsoleParser;
