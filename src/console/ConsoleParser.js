// Generated from d:\Code Projects\Git\Appinda\CisumRexim\src\console\Console.g4 by ANTLR 4.8
// jshint ignore: start
var antlr4 = require('antlr4/index');
var ConsoleListener = require('./ConsoleListener').ConsoleListener;
var grammarFileName = "Console.g4";


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003\u0014K\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f\u0004",
    "\r\t\r\u0004\u000e\t\u000e\u0003\u0002\u0003\u0002\u0003\u0002\u0003",
    "\u0002\u0005\u0002!\n\u0002\u0003\u0002\u0003\u0002\u0003\u0003\u0003",
    "\u0003\u0003\u0004\u0003\u0004\u0003\u0004\u0005\u0004*\n\u0004\u0003",
    "\u0005\u0003\u0005\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0007\u0003",
    "\u0007\u0003\u0007\u0005\u00074\n\u0007\u0003\b\u0003\b\u0003\b\u0003",
    "\t\u0003\t\u0003\t\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0005\nA",
    "\n\n\u0003\u000b\u0003\u000b\u0003\f\u0003\f\u0003\r\u0003\r\u0003\u000e",
    "\u0003\u000e\u0003\u000e\u0002\u0002\u000f\u0002\u0004\u0006\b\n\f\u000e",
    "\u0010\u0012\u0014\u0016\u0018\u001a\u0002\u0002\u0002E\u0002 \u0003",
    "\u0002\u0002\u0002\u0004$\u0003\u0002\u0002\u0002\u0006&\u0003\u0002",
    "\u0002\u0002\b+\u0003\u0002\u0002\u0002\n-\u0003\u0002\u0002\u0002\f",
    "0\u0003\u0002\u0002\u0002\u000e5\u0003\u0002\u0002\u0002\u00108\u0003",
    "\u0002\u0002\u0002\u0012;\u0003\u0002\u0002\u0002\u0014B\u0003\u0002",
    "\u0002\u0002\u0016D\u0003\u0002\u0002\u0002\u0018F\u0003\u0002\u0002",
    "\u0002\u001aH\u0003\u0002\u0002\u0002\u001c!\u0005\u0004\u0003\u0002",
    "\u001d!\u0005\u0006\u0004\u0002\u001e!\u0005\f\u0007\u0002\u001f!\u0005",
    "\u0012\n\u0002 \u001c\u0003\u0002\u0002\u0002 \u001d\u0003\u0002\u0002",
    "\u0002 \u001e\u0003\u0002\u0002\u0002 \u001f\u0003\u0002\u0002\u0002",
    "!\"\u0003\u0002\u0002\u0002\"#\u0007\u0002\u0002\u0003#\u0003\u0003",
    "\u0002\u0002\u0002$%\u0007\u0003\u0002\u0002%\u0005\u0003\u0002\u0002",
    "\u0002&)\u0007\u0004\u0002\u0002\'*\u0005\b\u0005\u0002(*\u0005\n\u0006",
    "\u0002)\'\u0003\u0002\u0002\u0002)(\u0003\u0002\u0002\u0002*\u0007\u0003",
    "\u0002\u0002\u0002+,\u0007\u0005\u0002\u0002,\t\u0003\u0002\u0002\u0002",
    "-.\u0007\u000f\u0002\u0002./\u0007\u0010\u0002\u0002/\u000b\u0003\u0002",
    "\u0002\u000203\u0007\u0006\u0002\u000214\u0005\u000e\b\u000224\u0005",
    "\u0010\t\u000231\u0003\u0002\u0002\u000232\u0003\u0002\u0002\u00024",
    "\r\u0003\u0002\u0002\u000256\u0007\u0007\u0002\u000267\u0007\u0011\u0002",
    "\u00027\u000f\u0003\u0002\u0002\u000289\u0007\b\u0002\u00029:\u0007",
    "\u0011\u0002\u0002:\u0011\u0003\u0002\u0002\u0002;@\u0007\t\u0002\u0002",
    "<A\u0005\u0014\u000b\u0002=A\u0005\u0016\f\u0002>A\u0005\u0018\r\u0002",
    "?A\u0005\u001a\u000e\u0002@<\u0003\u0002\u0002\u0002@=\u0003\u0002\u0002",
    "\u0002@>\u0003\u0002\u0002\u0002@?\u0003\u0002\u0002\u0002A\u0013\u0003",
    "\u0002\u0002\u0002BC\u0007\n\u0002\u0002C\u0015\u0003\u0002\u0002\u0002",
    "DE\u0007\u000b\u0002\u0002E\u0017\u0003\u0002\u0002\u0002FG\u0007\f",
    "\u0002\u0002G\u0019\u0003\u0002\u0002\u0002HI\u0007\r\u0002\u0002I\u001b",
    "\u0003\u0002\u0002\u0002\u0006 )3@"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'PLAY'", "'STOP'", "'ALL'", "'SET'", "'THEME'", 
                     "'SETTING'", "'CONSOLE'", "'EXPAND'", "'COLLAPSE'", 
                     "'TOGGLE'", "'CLEAR'", "';'" ];

var symbolicNames = [ null, null, null, null, null, null, null, null, null, 
                      null, null, null, "ENDING", "OBJ", "NUMBER", "STRING", 
                      "DIGIT", "LETTER", "WHITESPACE" ];

var ruleNames =  [ "command", "playcommand", "stopcommand", "stopallcommand", 
                   "stopcuecommand", "setcommand", "setthemecommand", "setsettingcommand", 
                   "consoleCommand", "consoleExpandCommand", "consoleCollapseCommand", 
                   "consoleToggleCommand", "consoleClearCommand" ];

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
ConsoleParser.T__9 = 10;
ConsoleParser.T__10 = 11;
ConsoleParser.ENDING = 12;
ConsoleParser.OBJ = 13;
ConsoleParser.NUMBER = 14;
ConsoleParser.STRING = 15;
ConsoleParser.DIGIT = 16;
ConsoleParser.LETTER = 17;
ConsoleParser.WHITESPACE = 18;

ConsoleParser.RULE_command = 0;
ConsoleParser.RULE_playcommand = 1;
ConsoleParser.RULE_stopcommand = 2;
ConsoleParser.RULE_stopallcommand = 3;
ConsoleParser.RULE_stopcuecommand = 4;
ConsoleParser.RULE_setcommand = 5;
ConsoleParser.RULE_setthemecommand = 6;
ConsoleParser.RULE_setsettingcommand = 7;
ConsoleParser.RULE_consoleCommand = 8;
ConsoleParser.RULE_consoleExpandCommand = 9;
ConsoleParser.RULE_consoleCollapseCommand = 10;
ConsoleParser.RULE_consoleToggleCommand = 11;
ConsoleParser.RULE_consoleClearCommand = 12;


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

CommandContext.prototype.consoleCommand = function() {
    return this.getTypedRuleContext(ConsoleCommandContext,0);
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
        this.state = 30;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case ConsoleParser.T__0:
            this.state = 26;
            this.playcommand();
            break;
        case ConsoleParser.T__1:
            this.state = 27;
            this.stopcommand();
            break;
        case ConsoleParser.T__3:
            this.state = 28;
            this.setcommand();
            break;
        case ConsoleParser.T__6:
            this.state = 29;
            this.consoleCommand();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
        this.state = 32;
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
        this.state = 34;
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
        this.state = 36;
        this.match(ConsoleParser.T__1);
        this.state = 39;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case ConsoleParser.T__2:
            this.state = 37;
            this.stopallcommand();
            break;
        case ConsoleParser.OBJ:
            this.state = 38;
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
        this.state = 41;
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
        this.state = 43;
        localctx.object = this.match(ConsoleParser.OBJ);
        this.state = 44;
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
        this.state = 46;
        this.match(ConsoleParser.T__3);
        this.state = 49;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case ConsoleParser.T__4:
            this.state = 47;
            this.setthemecommand();
            break;
        case ConsoleParser.T__5:
            this.state = 48;
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
        this.state = 51;
        this.match(ConsoleParser.T__4);
        this.state = 52;
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
        this.state = 54;
        this.match(ConsoleParser.T__5);
        this.state = 55;
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


function ConsoleCommandContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ConsoleParser.RULE_consoleCommand;
    return this;
}

ConsoleCommandContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ConsoleCommandContext.prototype.constructor = ConsoleCommandContext;

ConsoleCommandContext.prototype.consoleExpandCommand = function() {
    return this.getTypedRuleContext(ConsoleExpandCommandContext,0);
};

ConsoleCommandContext.prototype.consoleCollapseCommand = function() {
    return this.getTypedRuleContext(ConsoleCollapseCommandContext,0);
};

ConsoleCommandContext.prototype.consoleToggleCommand = function() {
    return this.getTypedRuleContext(ConsoleToggleCommandContext,0);
};

ConsoleCommandContext.prototype.consoleClearCommand = function() {
    return this.getTypedRuleContext(ConsoleClearCommandContext,0);
};

ConsoleCommandContext.prototype.enterRule = function(listener) {
    if(listener instanceof ConsoleListener ) {
        listener.enterConsoleCommand(this);
	}
};

ConsoleCommandContext.prototype.exitRule = function(listener) {
    if(listener instanceof ConsoleListener ) {
        listener.exitConsoleCommand(this);
	}
};




ConsoleParser.ConsoleCommandContext = ConsoleCommandContext;

ConsoleParser.prototype.consoleCommand = function() {

    var localctx = new ConsoleCommandContext(this, this._ctx, this.state);
    this.enterRule(localctx, 16, ConsoleParser.RULE_consoleCommand);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 57;
        this.match(ConsoleParser.T__6);
        this.state = 62;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case ConsoleParser.T__7:
            this.state = 58;
            this.consoleExpandCommand();
            break;
        case ConsoleParser.T__8:
            this.state = 59;
            this.consoleCollapseCommand();
            break;
        case ConsoleParser.T__9:
            this.state = 60;
            this.consoleToggleCommand();
            break;
        case ConsoleParser.T__10:
            this.state = 61;
            this.consoleClearCommand();
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


function ConsoleExpandCommandContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ConsoleParser.RULE_consoleExpandCommand;
    return this;
}

ConsoleExpandCommandContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ConsoleExpandCommandContext.prototype.constructor = ConsoleExpandCommandContext;


ConsoleExpandCommandContext.prototype.enterRule = function(listener) {
    if(listener instanceof ConsoleListener ) {
        listener.enterConsoleExpandCommand(this);
	}
};

ConsoleExpandCommandContext.prototype.exitRule = function(listener) {
    if(listener instanceof ConsoleListener ) {
        listener.exitConsoleExpandCommand(this);
	}
};




ConsoleParser.ConsoleExpandCommandContext = ConsoleExpandCommandContext;

ConsoleParser.prototype.consoleExpandCommand = function() {

    var localctx = new ConsoleExpandCommandContext(this, this._ctx, this.state);
    this.enterRule(localctx, 18, ConsoleParser.RULE_consoleExpandCommand);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 64;
        this.match(ConsoleParser.T__7);
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


function ConsoleCollapseCommandContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ConsoleParser.RULE_consoleCollapseCommand;
    return this;
}

ConsoleCollapseCommandContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ConsoleCollapseCommandContext.prototype.constructor = ConsoleCollapseCommandContext;


ConsoleCollapseCommandContext.prototype.enterRule = function(listener) {
    if(listener instanceof ConsoleListener ) {
        listener.enterConsoleCollapseCommand(this);
	}
};

ConsoleCollapseCommandContext.prototype.exitRule = function(listener) {
    if(listener instanceof ConsoleListener ) {
        listener.exitConsoleCollapseCommand(this);
	}
};




ConsoleParser.ConsoleCollapseCommandContext = ConsoleCollapseCommandContext;

ConsoleParser.prototype.consoleCollapseCommand = function() {

    var localctx = new ConsoleCollapseCommandContext(this, this._ctx, this.state);
    this.enterRule(localctx, 20, ConsoleParser.RULE_consoleCollapseCommand);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 66;
        this.match(ConsoleParser.T__8);
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


function ConsoleToggleCommandContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ConsoleParser.RULE_consoleToggleCommand;
    return this;
}

ConsoleToggleCommandContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ConsoleToggleCommandContext.prototype.constructor = ConsoleToggleCommandContext;


ConsoleToggleCommandContext.prototype.enterRule = function(listener) {
    if(listener instanceof ConsoleListener ) {
        listener.enterConsoleToggleCommand(this);
	}
};

ConsoleToggleCommandContext.prototype.exitRule = function(listener) {
    if(listener instanceof ConsoleListener ) {
        listener.exitConsoleToggleCommand(this);
	}
};




ConsoleParser.ConsoleToggleCommandContext = ConsoleToggleCommandContext;

ConsoleParser.prototype.consoleToggleCommand = function() {

    var localctx = new ConsoleToggleCommandContext(this, this._ctx, this.state);
    this.enterRule(localctx, 22, ConsoleParser.RULE_consoleToggleCommand);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 68;
        this.match(ConsoleParser.T__9);
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


function ConsoleClearCommandContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ConsoleParser.RULE_consoleClearCommand;
    return this;
}

ConsoleClearCommandContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ConsoleClearCommandContext.prototype.constructor = ConsoleClearCommandContext;


ConsoleClearCommandContext.prototype.enterRule = function(listener) {
    if(listener instanceof ConsoleListener ) {
        listener.enterConsoleClearCommand(this);
	}
};

ConsoleClearCommandContext.prototype.exitRule = function(listener) {
    if(listener instanceof ConsoleListener ) {
        listener.exitConsoleClearCommand(this);
	}
};




ConsoleParser.ConsoleClearCommandContext = ConsoleClearCommandContext;

ConsoleParser.prototype.consoleClearCommand = function() {

    var localctx = new ConsoleClearCommandContext(this, this._ctx, this.state);
    this.enterRule(localctx, 24, ConsoleParser.RULE_consoleClearCommand);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 70;
        this.match(ConsoleParser.T__10);
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
