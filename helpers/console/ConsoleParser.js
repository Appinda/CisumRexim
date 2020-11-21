// Generated from d:\Code Projects\Git\Appinda\CisumRexim\helpers\console\Console.g4 by ANTLR 4.8
// jshint ignore: start
var antlr4 = require('antlr4/index');
var ConsoleListener = require('./ConsoleListener').ConsoleListener;
var grammarFileName = "Console.g4";


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003\u0017_\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f\u0004",
    "\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010\t\u0010\u0004",
    "\u0011\t\u0011\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0005",
    "\u0002\'\n\u0002\u0003\u0002\u0003\u0002\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0005\u0003.\n\u0003\u0003\u0004\u0003\u0004\u0003\u0004\u0005",
    "\u00043\n\u0004\u0003\u0005\u0003\u0005\u0003\u0006\u0003\u0006\u0003",
    "\u0006\u0003\u0006\u0003\u0007\u0003\u0007\u0003\u0007\u0005\u0007>",
    "\n\u0007\u0003\b\u0003\b\u0003\t\u0003\t\u0003\t\u0003\n\u0003\n\u0003",
    "\n\u0005\nH\n\n\u0003\u000b\u0003\u000b\u0003\u000b\u0003\f\u0003\f",
    "\u0003\f\u0003\r\u0003\r\u0003\r\u0003\r\u0003\r\u0005\rU\n\r\u0003",
    "\u000e\u0003\u000e\u0003\u000f\u0003\u000f\u0003\u0010\u0003\u0010\u0003",
    "\u0011\u0003\u0011\u0003\u0011\u0002\u0002\u0012\u0002\u0004\u0006\b",
    "\n\f\u000e\u0010\u0012\u0014\u0016\u0018\u001a\u001c\u001e \u0002\u0002",
    "\u0002X\u0002&\u0003\u0002\u0002\u0002\u0004*\u0003\u0002\u0002\u0002",
    "\u0006/\u0003\u0002\u0002\u0002\b4\u0003\u0002\u0002\u0002\n6\u0003",
    "\u0002\u0002\u0002\f:\u0003\u0002\u0002\u0002\u000e?\u0003\u0002\u0002",
    "\u0002\u0010A\u0003\u0002\u0002\u0002\u0012D\u0003\u0002\u0002\u0002",
    "\u0014I\u0003\u0002\u0002\u0002\u0016L\u0003\u0002\u0002\u0002\u0018",
    "O\u0003\u0002\u0002\u0002\u001aV\u0003\u0002\u0002\u0002\u001cX\u0003",
    "\u0002\u0002\u0002\u001eZ\u0003\u0002\u0002\u0002 \\\u0003\u0002\u0002",
    "\u0002\"\'\u0005\u0004\u0003\u0002#\'\u0005\f\u0007\u0002$\'\u0005\u0012",
    "\n\u0002%\'\u0005\u0018\r\u0002&\"\u0003\u0002\u0002\u0002&#\u0003\u0002",
    "\u0002\u0002&$\u0003\u0002\u0002\u0002&%\u0003\u0002\u0002\u0002\'(",
    "\u0003\u0002\u0002\u0002()\u0007\u0002\u0002\u0003)\u0003\u0003\u0002",
    "\u0002\u0002*-\u0007\u0003\u0002\u0002+.\u0005\u0006\u0004\u0002,.\u0005",
    "\b\u0005\u0002-+\u0003\u0002\u0002\u0002-,\u0003\u0002\u0002\u0002.",
    "\u0005\u0003\u0002\u0002\u0002/0\u0007\u0004\u0002\u000202\u0007\u0013",
    "\u0002\u000213\u0005\n\u0006\u000221\u0003\u0002\u0002\u000223\u0003",
    "\u0002\u0002\u00023\u0007\u0003\u0002\u0002\u000245\u0007\u0002\u0002",
    "\u00035\t\u0003\u0002\u0002\u000267\u0007\u0005\u0002\u000278\u0007",
    "\u0006\u0002\u000289\u0007\u0013\u0002\u00029\u000b\u0003\u0002\u0002",
    "\u0002:=\u0007\u0007\u0002\u0002;>\u0005\u000e\b\u0002<>\u0005\u0010",
    "\t\u0002=;\u0003\u0002\u0002\u0002=<\u0003\u0002\u0002\u0002>\r\u0003",
    "\u0002\u0002\u0002?@\u0007\b\u0002\u0002@\u000f\u0003\u0002\u0002\u0002",
    "AB\u0007\u0012\u0002\u0002BC\u0007\u0013\u0002\u0002C\u0011\u0003\u0002",
    "\u0002\u0002DG\u0007\t\u0002\u0002EH\u0005\u0014\u000b\u0002FH\u0005",
    "\u0016\f\u0002GE\u0003\u0002\u0002\u0002GF\u0003\u0002\u0002\u0002H",
    "\u0013\u0003\u0002\u0002\u0002IJ\u0007\n\u0002\u0002JK\u0007\u0014\u0002",
    "\u0002K\u0015\u0003\u0002\u0002\u0002LM\u0007\u000b\u0002\u0002MN\u0007",
    "\u0014\u0002\u0002N\u0017\u0003\u0002\u0002\u0002OT\u0007\f\u0002\u0002",
    "PU\u0005\u001a\u000e\u0002QU\u0005\u001c\u000f\u0002RU\u0005\u001e\u0010",
    "\u0002SU\u0005 \u0011\u0002TP\u0003\u0002\u0002\u0002TQ\u0003\u0002",
    "\u0002\u0002TR\u0003\u0002\u0002\u0002TS\u0003\u0002\u0002\u0002U\u0019",
    "\u0003\u0002\u0002\u0002VW\u0007\r\u0002\u0002W\u001b\u0003\u0002\u0002",
    "\u0002XY\u0007\u000e\u0002\u0002Y\u001d\u0003\u0002\u0002\u0002Z[\u0007",
    "\u000f\u0002\u0002[\u001f\u0003\u0002\u0002\u0002\\]\u0007\u0010\u0002",
    "\u0002]!\u0003\u0002\u0002\u0002\b&-2=GT"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'PLAY'", "'TRACK'", "'ON'", "'CHANNEL'", "'STOP'", 
                     "'ALL'", "'SET'", "'THEME'", "'SETTING'", "'CONSOLE'", 
                     "'EXPAND'", "'COLLAPSE'", "'TOGGLE'", "'CLEAR'", "';'" ];

var symbolicNames = [ null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, "ENDING", "OBJ", 
                      "NUMBER", "STRING", "DIGIT", "LETTER", "WHITESPACE" ];

var ruleNames =  [ "command", "playCommand", "playTrackCommand", "playAllCommand", 
                   "playOnChannelCommand", "stopCommand", "stopAllCommand", 
                   "stopCueCommand", "setCommand", "setThemeCommand", "setSettingCommand", 
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
ConsoleParser.T__11 = 12;
ConsoleParser.T__12 = 13;
ConsoleParser.T__13 = 14;
ConsoleParser.ENDING = 15;
ConsoleParser.OBJ = 16;
ConsoleParser.NUMBER = 17;
ConsoleParser.STRING = 18;
ConsoleParser.DIGIT = 19;
ConsoleParser.LETTER = 20;
ConsoleParser.WHITESPACE = 21;

ConsoleParser.RULE_command = 0;
ConsoleParser.RULE_playCommand = 1;
ConsoleParser.RULE_playTrackCommand = 2;
ConsoleParser.RULE_playAllCommand = 3;
ConsoleParser.RULE_playOnChannelCommand = 4;
ConsoleParser.RULE_stopCommand = 5;
ConsoleParser.RULE_stopAllCommand = 6;
ConsoleParser.RULE_stopCueCommand = 7;
ConsoleParser.RULE_setCommand = 8;
ConsoleParser.RULE_setThemeCommand = 9;
ConsoleParser.RULE_setSettingCommand = 10;
ConsoleParser.RULE_consoleCommand = 11;
ConsoleParser.RULE_consoleExpandCommand = 12;
ConsoleParser.RULE_consoleCollapseCommand = 13;
ConsoleParser.RULE_consoleToggleCommand = 14;
ConsoleParser.RULE_consoleClearCommand = 15;


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

CommandContext.prototype.playCommand = function() {
    return this.getTypedRuleContext(PlayCommandContext,0);
};

CommandContext.prototype.stopCommand = function() {
    return this.getTypedRuleContext(StopCommandContext,0);
};

CommandContext.prototype.setCommand = function() {
    return this.getTypedRuleContext(SetCommandContext,0);
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
        this.state = 36;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case ConsoleParser.T__0:
            this.state = 32;
            this.playCommand();
            break;
        case ConsoleParser.T__4:
            this.state = 33;
            this.stopCommand();
            break;
        case ConsoleParser.T__6:
            this.state = 34;
            this.setCommand();
            break;
        case ConsoleParser.T__9:
            this.state = 35;
            this.consoleCommand();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
        this.state = 38;
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


function PlayCommandContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ConsoleParser.RULE_playCommand;
    return this;
}

PlayCommandContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PlayCommandContext.prototype.constructor = PlayCommandContext;

PlayCommandContext.prototype.playTrackCommand = function() {
    return this.getTypedRuleContext(PlayTrackCommandContext,0);
};

PlayCommandContext.prototype.playAllCommand = function() {
    return this.getTypedRuleContext(PlayAllCommandContext,0);
};

PlayCommandContext.prototype.enterRule = function(listener) {
    if(listener instanceof ConsoleListener ) {
        listener.enterPlayCommand(this);
	}
};

PlayCommandContext.prototype.exitRule = function(listener) {
    if(listener instanceof ConsoleListener ) {
        listener.exitPlayCommand(this);
	}
};




ConsoleParser.PlayCommandContext = PlayCommandContext;

ConsoleParser.prototype.playCommand = function() {

    var localctx = new PlayCommandContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, ConsoleParser.RULE_playCommand);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 40;
        this.match(ConsoleParser.T__0);
        this.state = 43;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case ConsoleParser.T__1:
            this.state = 41;
            this.playTrackCommand();
            break;
        case ConsoleParser.EOF:
            this.state = 42;
            this.playAllCommand();
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


function PlayTrackCommandContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ConsoleParser.RULE_playTrackCommand;
    this.track = null; // Token
    return this;
}

PlayTrackCommandContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PlayTrackCommandContext.prototype.constructor = PlayTrackCommandContext;

PlayTrackCommandContext.prototype.NUMBER = function() {
    return this.getToken(ConsoleParser.NUMBER, 0);
};

PlayTrackCommandContext.prototype.playOnChannelCommand = function() {
    return this.getTypedRuleContext(PlayOnChannelCommandContext,0);
};

PlayTrackCommandContext.prototype.enterRule = function(listener) {
    if(listener instanceof ConsoleListener ) {
        listener.enterPlayTrackCommand(this);
	}
};

PlayTrackCommandContext.prototype.exitRule = function(listener) {
    if(listener instanceof ConsoleListener ) {
        listener.exitPlayTrackCommand(this);
	}
};




ConsoleParser.PlayTrackCommandContext = PlayTrackCommandContext;

ConsoleParser.prototype.playTrackCommand = function() {

    var localctx = new PlayTrackCommandContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, ConsoleParser.RULE_playTrackCommand);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 45;
        this.match(ConsoleParser.T__1);
        this.state = 46;
        localctx.track = this.match(ConsoleParser.NUMBER);
        this.state = 48;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===ConsoleParser.T__2) {
            this.state = 47;
            this.playOnChannelCommand();
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


function PlayAllCommandContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ConsoleParser.RULE_playAllCommand;
    return this;
}

PlayAllCommandContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PlayAllCommandContext.prototype.constructor = PlayAllCommandContext;

PlayAllCommandContext.prototype.EOF = function() {
    return this.getToken(ConsoleParser.EOF, 0);
};

PlayAllCommandContext.prototype.enterRule = function(listener) {
    if(listener instanceof ConsoleListener ) {
        listener.enterPlayAllCommand(this);
	}
};

PlayAllCommandContext.prototype.exitRule = function(listener) {
    if(listener instanceof ConsoleListener ) {
        listener.exitPlayAllCommand(this);
	}
};




ConsoleParser.PlayAllCommandContext = PlayAllCommandContext;

ConsoleParser.prototype.playAllCommand = function() {

    var localctx = new PlayAllCommandContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, ConsoleParser.RULE_playAllCommand);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 50;
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


function PlayOnChannelCommandContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ConsoleParser.RULE_playOnChannelCommand;
    this.channel = null; // Token
    return this;
}

PlayOnChannelCommandContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PlayOnChannelCommandContext.prototype.constructor = PlayOnChannelCommandContext;

PlayOnChannelCommandContext.prototype.NUMBER = function() {
    return this.getToken(ConsoleParser.NUMBER, 0);
};

PlayOnChannelCommandContext.prototype.enterRule = function(listener) {
    if(listener instanceof ConsoleListener ) {
        listener.enterPlayOnChannelCommand(this);
	}
};

PlayOnChannelCommandContext.prototype.exitRule = function(listener) {
    if(listener instanceof ConsoleListener ) {
        listener.exitPlayOnChannelCommand(this);
	}
};




ConsoleParser.PlayOnChannelCommandContext = PlayOnChannelCommandContext;

ConsoleParser.prototype.playOnChannelCommand = function() {

    var localctx = new PlayOnChannelCommandContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, ConsoleParser.RULE_playOnChannelCommand);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 52;
        this.match(ConsoleParser.T__2);
        this.state = 53;
        this.match(ConsoleParser.T__3);
        this.state = 54;
        localctx.channel = this.match(ConsoleParser.NUMBER);
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


function StopCommandContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ConsoleParser.RULE_stopCommand;
    return this;
}

StopCommandContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StopCommandContext.prototype.constructor = StopCommandContext;

StopCommandContext.prototype.stopAllCommand = function() {
    return this.getTypedRuleContext(StopAllCommandContext,0);
};

StopCommandContext.prototype.stopCueCommand = function() {
    return this.getTypedRuleContext(StopCueCommandContext,0);
};

StopCommandContext.prototype.enterRule = function(listener) {
    if(listener instanceof ConsoleListener ) {
        listener.enterStopCommand(this);
	}
};

StopCommandContext.prototype.exitRule = function(listener) {
    if(listener instanceof ConsoleListener ) {
        listener.exitStopCommand(this);
	}
};




ConsoleParser.StopCommandContext = StopCommandContext;

ConsoleParser.prototype.stopCommand = function() {

    var localctx = new StopCommandContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, ConsoleParser.RULE_stopCommand);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 56;
        this.match(ConsoleParser.T__4);
        this.state = 59;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case ConsoleParser.T__5:
            this.state = 57;
            this.stopAllCommand();
            break;
        case ConsoleParser.OBJ:
            this.state = 58;
            this.stopCueCommand();
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


function StopAllCommandContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ConsoleParser.RULE_stopAllCommand;
    return this;
}

StopAllCommandContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StopAllCommandContext.prototype.constructor = StopAllCommandContext;


StopAllCommandContext.prototype.enterRule = function(listener) {
    if(listener instanceof ConsoleListener ) {
        listener.enterStopAllCommand(this);
	}
};

StopAllCommandContext.prototype.exitRule = function(listener) {
    if(listener instanceof ConsoleListener ) {
        listener.exitStopAllCommand(this);
	}
};




ConsoleParser.StopAllCommandContext = StopAllCommandContext;

ConsoleParser.prototype.stopAllCommand = function() {

    var localctx = new StopAllCommandContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, ConsoleParser.RULE_stopAllCommand);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 61;
        this.match(ConsoleParser.T__5);
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


function StopCueCommandContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ConsoleParser.RULE_stopCueCommand;
    this.object = null; // Token
    this.id = null; // Token
    return this;
}

StopCueCommandContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StopCueCommandContext.prototype.constructor = StopCueCommandContext;

StopCueCommandContext.prototype.OBJ = function() {
    return this.getToken(ConsoleParser.OBJ, 0);
};

StopCueCommandContext.prototype.NUMBER = function() {
    return this.getToken(ConsoleParser.NUMBER, 0);
};

StopCueCommandContext.prototype.enterRule = function(listener) {
    if(listener instanceof ConsoleListener ) {
        listener.enterStopCueCommand(this);
	}
};

StopCueCommandContext.prototype.exitRule = function(listener) {
    if(listener instanceof ConsoleListener ) {
        listener.exitStopCueCommand(this);
	}
};




ConsoleParser.StopCueCommandContext = StopCueCommandContext;

ConsoleParser.prototype.stopCueCommand = function() {

    var localctx = new StopCueCommandContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, ConsoleParser.RULE_stopCueCommand);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 63;
        localctx.object = this.match(ConsoleParser.OBJ);
        this.state = 64;
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


function SetCommandContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ConsoleParser.RULE_setCommand;
    return this;
}

SetCommandContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SetCommandContext.prototype.constructor = SetCommandContext;

SetCommandContext.prototype.setThemeCommand = function() {
    return this.getTypedRuleContext(SetThemeCommandContext,0);
};

SetCommandContext.prototype.setSettingCommand = function() {
    return this.getTypedRuleContext(SetSettingCommandContext,0);
};

SetCommandContext.prototype.enterRule = function(listener) {
    if(listener instanceof ConsoleListener ) {
        listener.enterSetCommand(this);
	}
};

SetCommandContext.prototype.exitRule = function(listener) {
    if(listener instanceof ConsoleListener ) {
        listener.exitSetCommand(this);
	}
};




ConsoleParser.SetCommandContext = SetCommandContext;

ConsoleParser.prototype.setCommand = function() {

    var localctx = new SetCommandContext(this, this._ctx, this.state);
    this.enterRule(localctx, 16, ConsoleParser.RULE_setCommand);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 66;
        this.match(ConsoleParser.T__6);
        this.state = 69;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case ConsoleParser.T__7:
            this.state = 67;
            this.setThemeCommand();
            break;
        case ConsoleParser.T__8:
            this.state = 68;
            this.setSettingCommand();
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


function SetThemeCommandContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ConsoleParser.RULE_setThemeCommand;
    this.themename = null; // Token
    return this;
}

SetThemeCommandContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SetThemeCommandContext.prototype.constructor = SetThemeCommandContext;

SetThemeCommandContext.prototype.STRING = function() {
    return this.getToken(ConsoleParser.STRING, 0);
};

SetThemeCommandContext.prototype.enterRule = function(listener) {
    if(listener instanceof ConsoleListener ) {
        listener.enterSetThemeCommand(this);
	}
};

SetThemeCommandContext.prototype.exitRule = function(listener) {
    if(listener instanceof ConsoleListener ) {
        listener.exitSetThemeCommand(this);
	}
};




ConsoleParser.SetThemeCommandContext = SetThemeCommandContext;

ConsoleParser.prototype.setThemeCommand = function() {

    var localctx = new SetThemeCommandContext(this, this._ctx, this.state);
    this.enterRule(localctx, 18, ConsoleParser.RULE_setThemeCommand);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 71;
        this.match(ConsoleParser.T__7);
        this.state = 72;
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


function SetSettingCommandContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ConsoleParser.RULE_setSettingCommand;
    this.name = null; // Token
    return this;
}

SetSettingCommandContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SetSettingCommandContext.prototype.constructor = SetSettingCommandContext;

SetSettingCommandContext.prototype.STRING = function() {
    return this.getToken(ConsoleParser.STRING, 0);
};

SetSettingCommandContext.prototype.enterRule = function(listener) {
    if(listener instanceof ConsoleListener ) {
        listener.enterSetSettingCommand(this);
	}
};

SetSettingCommandContext.prototype.exitRule = function(listener) {
    if(listener instanceof ConsoleListener ) {
        listener.exitSetSettingCommand(this);
	}
};




ConsoleParser.SetSettingCommandContext = SetSettingCommandContext;

ConsoleParser.prototype.setSettingCommand = function() {

    var localctx = new SetSettingCommandContext(this, this._ctx, this.state);
    this.enterRule(localctx, 20, ConsoleParser.RULE_setSettingCommand);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 74;
        this.match(ConsoleParser.T__8);
        this.state = 75;
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
    this.enterRule(localctx, 22, ConsoleParser.RULE_consoleCommand);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 77;
        this.match(ConsoleParser.T__9);
        this.state = 82;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case ConsoleParser.T__10:
            this.state = 78;
            this.consoleExpandCommand();
            break;
        case ConsoleParser.T__11:
            this.state = 79;
            this.consoleCollapseCommand();
            break;
        case ConsoleParser.T__12:
            this.state = 80;
            this.consoleToggleCommand();
            break;
        case ConsoleParser.T__13:
            this.state = 81;
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
    this.enterRule(localctx, 24, ConsoleParser.RULE_consoleExpandCommand);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 84;
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
    this.enterRule(localctx, 26, ConsoleParser.RULE_consoleCollapseCommand);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 86;
        this.match(ConsoleParser.T__11);
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
    this.enterRule(localctx, 28, ConsoleParser.RULE_consoleToggleCommand);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 88;
        this.match(ConsoleParser.T__12);
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
    this.enterRule(localctx, 30, ConsoleParser.RULE_consoleClearCommand);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 90;
        this.match(ConsoleParser.T__13);
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
