// Generated from d:\Code Projects\Git\Appinda\CisumRexim\helpers\console\Console.g4 by ANTLR 4.8
// jshint ignore: start
var antlr4 = require('antlr4/index');
var ConsoleListener = require('./ConsoleListener').ConsoleListener;
var grammarFileName = "Console.g4";


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003\u0014S\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f\u0004",
    "\r\t\r\u0004\u000e\t\u000e\u0003\u0002\u0003\u0002\u0003\u0002\u0003",
    "\u0002\u0003\u0002\u0005\u0002\"\n\u0002\u0003\u0002\u0003\u0002\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0005\u0003)\n\u0003\u0003\u0004\u0003",
    "\u0004\u0003\u0004\u0005\u0004.\n\u0004\u0003\u0005\u0003\u0005\u0003",
    "\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0007\u0003\u0007\u0003",
    "\u0007\u0005\u00079\n\u0007\u0003\b\u0003\b\u0003\t\u0003\t\u0003\t",
    "\u0003\n\u0003\n\u0003\n\u0005\nC\n\n\u0003\u000b\u0003\u000b\u0003",
    "\u000b\u0003\f\u0003\f\u0003\f\u0003\r\u0003\r\u0003\u000e\u0003\u000e",
    "\u0006\u000eO\n\u000e\r\u000e\u000e\u000eP\u0003\u000e\u0002\u0002\u000f",
    "\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012\u0014\u0016\u0018\u001a\u0002",
    "\u0002\u0002N\u0002!\u0003\u0002\u0002\u0002\u0004%\u0003\u0002\u0002",
    "\u0002\u0006*\u0003\u0002\u0002\u0002\b/\u0003\u0002\u0002\u0002\n1",
    "\u0003\u0002\u0002\u0002\f5\u0003\u0002\u0002\u0002\u000e:\u0003\u0002",
    "\u0002\u0002\u0010<\u0003\u0002\u0002\u0002\u0012?\u0003\u0002\u0002",
    "\u0002\u0014D\u0003\u0002\u0002\u0002\u0016G\u0003\u0002\u0002\u0002",
    "\u0018J\u0003\u0002\u0002\u0002\u001aL\u0003\u0002\u0002\u0002\u001c",
    "\"\u0005\u0004\u0003\u0002\u001d\"\u0005\f\u0007\u0002\u001e\"\u0005",
    "\u0012\n\u0002\u001f\"\u0005\u0018\r\u0002 \"\u0005\u001a\u000e\u0002",
    "!\u001c\u0003\u0002\u0002\u0002!\u001d\u0003\u0002\u0002\u0002!\u001e",
    "\u0003\u0002\u0002\u0002!\u001f\u0003\u0002\u0002\u0002! \u0003\u0002",
    "\u0002\u0002\"#\u0003\u0002\u0002\u0002#$\u0007\u0002\u0002\u0003$\u0003",
    "\u0003\u0002\u0002\u0002%(\u0007\u0003\u0002\u0002&)\u0005\u0006\u0004",
    "\u0002\')\u0005\b\u0005\u0002(&\u0003\u0002\u0002\u0002(\'\u0003\u0002",
    "\u0002\u0002)\u0005\u0003\u0002\u0002\u0002*+\u0007\u0004\u0002\u0002",
    "+-\u0007\u0010\u0002\u0002,.\u0005\n\u0006\u0002-,\u0003\u0002\u0002",
    "\u0002-.\u0003\u0002\u0002\u0002.\u0007\u0003\u0002\u0002\u0002/0\u0007",
    "\u0002\u0002\u00030\t\u0003\u0002\u0002\u000212\u0007\u0005\u0002\u0002",
    "23\u0007\u000e\u0002\u000234\u0007\u0010\u0002\u00024\u000b\u0003\u0002",
    "\u0002\u000258\u0007\u0006\u0002\u000269\u0005\u000e\b\u000279\u0005",
    "\u0010\t\u000286\u0003\u0002\u0002\u000287\u0003\u0002\u0002\u00029",
    "\r\u0003\u0002\u0002\u0002:;\u0007\u0007\u0002\u0002;\u000f\u0003\u0002",
    "\u0002\u0002<=\u0007\u000e\u0002\u0002=>\u0007\u0010\u0002\u0002>\u0011",
    "\u0003\u0002\u0002\u0002?B\u0007\b\u0002\u0002@C\u0005\u0014\u000b\u0002",
    "AC\u0005\u0016\f\u0002B@\u0003\u0002\u0002\u0002BA\u0003\u0002\u0002",
    "\u0002C\u0013\u0003\u0002\u0002\u0002DE\u0007\t\u0002\u0002EF\u0007",
    "\u0011\u0002\u0002F\u0015\u0003\u0002\u0002\u0002GH\u0007\n\u0002\u0002",
    "HI\u0007\u0011\u0002\u0002I\u0017\u0003\u0002\u0002\u0002JK\u0007\u000b",
    "\u0002\u0002K\u0019\u0003\u0002\u0002\u0002LN\u0007\f\u0002\u0002MO",
    "\u0007\u000f\u0002\u0002NM\u0003\u0002\u0002\u0002OP\u0003\u0002\u0002",
    "\u0002PN\u0003\u0002\u0002\u0002PQ\u0003\u0002\u0002\u0002Q\u001b\u0003",
    "\u0002\u0002\u0002\b!(-8BP"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'PLAY'", "'TRACK'", "'ON'", "'STOP'", "'ALL'", 
                     "'SET'", "'THEME'", "'SETTING'", "'CLEAR'", "'SHOW'", 
                     "';'", "'CHANNEL'" ];

var symbolicNames = [ null, null, null, null, null, null, null, null, null, 
                      null, null, "ENDING", "OBJ", "WINDOW", "NUMBER", "STRING", 
                      "DIGIT", "LETTER", "WHITESPACE" ];

var ruleNames =  [ "command", "playCommand", "playTrackCommand", "playAllCommand", 
                   "playOnChannelCommand", "stopCommand", "stopAllCommand", 
                   "stopCueCommand", "setCommand", "setThemeCommand", "setSettingCommand", 
                   "clearCommand", "showCommand" ];

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
ConsoleParser.ENDING = 11;
ConsoleParser.OBJ = 12;
ConsoleParser.WINDOW = 13;
ConsoleParser.NUMBER = 14;
ConsoleParser.STRING = 15;
ConsoleParser.DIGIT = 16;
ConsoleParser.LETTER = 17;
ConsoleParser.WHITESPACE = 18;

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
ConsoleParser.RULE_clearCommand = 11;
ConsoleParser.RULE_showCommand = 12;


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

CommandContext.prototype.clearCommand = function() {
    return this.getTypedRuleContext(ClearCommandContext,0);
};

CommandContext.prototype.showCommand = function() {
    return this.getTypedRuleContext(ShowCommandContext,0);
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
        this.state = 31;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case ConsoleParser.T__0:
            this.state = 26;
            this.playCommand();
            break;
        case ConsoleParser.T__3:
            this.state = 27;
            this.stopCommand();
            break;
        case ConsoleParser.T__5:
            this.state = 28;
            this.setCommand();
            break;
        case ConsoleParser.T__8:
            this.state = 29;
            this.clearCommand();
            break;
        case ConsoleParser.T__9:
            this.state = 30;
            this.showCommand();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
        this.state = 33;
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
        this.state = 35;
        this.match(ConsoleParser.T__0);
        this.state = 38;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case ConsoleParser.T__1:
            this.state = 36;
            this.playTrackCommand();
            break;
        case ConsoleParser.EOF:
            this.state = 37;
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
        this.state = 40;
        this.match(ConsoleParser.T__1);
        this.state = 41;
        localctx.track = this.match(ConsoleParser.NUMBER);
        this.state = 43;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===ConsoleParser.T__2) {
            this.state = 42;
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
        this.state = 45;
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

PlayOnChannelCommandContext.prototype.OBJ = function() {
    return this.getToken(ConsoleParser.OBJ, 0);
};

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
        this.state = 47;
        this.match(ConsoleParser.T__2);
        this.state = 48;
        this.match(ConsoleParser.OBJ);
        this.state = 49;
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
        this.state = 51;
        this.match(ConsoleParser.T__3);
        this.state = 54;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case ConsoleParser.T__4:
            this.state = 52;
            this.stopAllCommand();
            break;
        case ConsoleParser.OBJ:
            this.state = 53;
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
        this.state = 56;
        this.match(ConsoleParser.T__4);
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
        this.state = 58;
        this.match(ConsoleParser.OBJ);
        this.state = 59;
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
        this.state = 61;
        this.match(ConsoleParser.T__5);
        this.state = 64;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case ConsoleParser.T__6:
            this.state = 62;
            this.setThemeCommand();
            break;
        case ConsoleParser.T__7:
            this.state = 63;
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
        this.state = 66;
        this.match(ConsoleParser.T__6);
        this.state = 67;
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
        this.state = 69;
        this.match(ConsoleParser.T__7);
        this.state = 70;
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


function ClearCommandContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ConsoleParser.RULE_clearCommand;
    return this;
}

ClearCommandContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ClearCommandContext.prototype.constructor = ClearCommandContext;


ClearCommandContext.prototype.enterRule = function(listener) {
    if(listener instanceof ConsoleListener ) {
        listener.enterClearCommand(this);
	}
};

ClearCommandContext.prototype.exitRule = function(listener) {
    if(listener instanceof ConsoleListener ) {
        listener.exitClearCommand(this);
	}
};




ConsoleParser.ClearCommandContext = ClearCommandContext;

ConsoleParser.prototype.clearCommand = function() {

    var localctx = new ClearCommandContext(this, this._ctx, this.state);
    this.enterRule(localctx, 22, ConsoleParser.RULE_clearCommand);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 72;
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


function ShowCommandContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ConsoleParser.RULE_showCommand;
    this.window = null; // Token
    return this;
}

ShowCommandContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ShowCommandContext.prototype.constructor = ShowCommandContext;

ShowCommandContext.prototype.WINDOW = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(ConsoleParser.WINDOW);
    } else {
        return this.getToken(ConsoleParser.WINDOW, i);
    }
};


ShowCommandContext.prototype.enterRule = function(listener) {
    if(listener instanceof ConsoleListener ) {
        listener.enterShowCommand(this);
	}
};

ShowCommandContext.prototype.exitRule = function(listener) {
    if(listener instanceof ConsoleListener ) {
        listener.exitShowCommand(this);
	}
};




ConsoleParser.ShowCommandContext = ShowCommandContext;

ConsoleParser.prototype.showCommand = function() {

    var localctx = new ShowCommandContext(this, this._ctx, this.state);
    this.enterRule(localctx, 24, ConsoleParser.RULE_showCommand);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 74;
        this.match(ConsoleParser.T__9);
        this.state = 76; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 75;
            localctx.window = this.match(ConsoleParser.WINDOW);
            this.state = 78; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===ConsoleParser.WINDOW);
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
