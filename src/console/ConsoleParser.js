// Generated from d:\Code Projects\Git\Appinda\CisumRexim\src\console\Console.g4 by ANTLR 4.8
// jshint ignore: start
var antlr4 = require('antlr4/index');
var ConsoleListener = require('./ConsoleListener').ConsoleListener;
var grammarFileName = "Console.g4";


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003\t$\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t\u0004",
    "\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0003\u0002\u0003\u0002\u0003",
    "\u0002\u0003\u0002\u0005\u0002\u0011\n\u0002\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0004",
    "\u0003\u0004\u0005\u0004\u001c\n\u0004\u0003\u0005\u0003\u0005\u0003",
    "\u0005\u0003\u0005\u0003\u0006\u0003\u0006\u0003\u0006\u0002\u0002\u0007",
    "\u0002\u0004\u0006\b\n\u0002\u0002\u0002 \u0002\u0010\u0003\u0002\u0002",
    "\u0002\u0004\u0012\u0003\u0002\u0002\u0002\u0006\u001b\u0003\u0002\u0002",
    "\u0002\b\u001d\u0003\u0002\u0002\u0002\n!\u0003\u0002\u0002\u0002\f",
    "\u0011\u0005\u0004\u0003\u0002\r\u000e\u0005\u0006\u0004\u0002\u000e",
    "\u000f\u0007\u0002\u0002\u0003\u000f\u0011\u0003\u0002\u0002\u0002\u0010",
    "\f\u0003\u0002\u0002\u0002\u0010\r\u0003\u0002\u0002\u0002\u0011\u0003",
    "\u0003\u0002\u0002\u0002\u0012\u0013\u0007\u0003\u0002\u0002\u0013\u0014",
    "\u0007\b\u0002\u0002\u0014\u0015\u0007\u0007\u0002\u0002\u0015\u0016",
    "\u0007\u0004\u0002\u0002\u0016\u0017\u0007\b\u0002\u0002\u0017\u0018",
    "\u0007\u0007\u0002\u0002\u0018\u0005\u0003\u0002\u0002\u0002\u0019\u001c",
    "\u0005\n\u0006\u0002\u001a\u001c\u0005\b\u0005\u0002\u001b\u0019\u0003",
    "\u0002\u0002\u0002\u001b\u001a\u0003\u0002\u0002\u0002\u001c\u0007\u0003",
    "\u0002\u0002\u0002\u001d\u001e\u0007\u0005\u0002\u0002\u001e\u001f\u0007",
    "\b\u0002\u0002\u001f \u0007\u0007\u0002\u0002 \t\u0003\u0002\u0002\u0002",
    "!\"\u0007\u0006\u0002\u0002\"\u000b\u0003\u0002\u0002\u0002\u0004\u0010",
    "\u001b"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'PLAY'", "'ON'", "'STOP'", "'STOP ALL'" ];

var symbolicNames = [ null, null, null, null, null, "NUMBER", "OBJ", "WHITESPACE" ];

var ruleNames =  [ "command", "playcommand", "stopcommand", "stopcuecommand", 
                   "stopallcommand" ];

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
ConsoleParser.NUMBER = 5;
ConsoleParser.OBJ = 6;
ConsoleParser.WHITESPACE = 7;

ConsoleParser.RULE_command = 0;
ConsoleParser.RULE_playcommand = 1;
ConsoleParser.RULE_stopcommand = 2;
ConsoleParser.RULE_stopcuecommand = 3;
ConsoleParser.RULE_stopallcommand = 4;


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

CommandContext.prototype.playcommand = function() {
    return this.getTypedRuleContext(PlaycommandContext,0);
};

CommandContext.prototype.stopcommand = function() {
    return this.getTypedRuleContext(StopcommandContext,0);
};

CommandContext.prototype.EOF = function() {
    return this.getToken(ConsoleParser.EOF, 0);
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
        this.state = 14;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case ConsoleParser.T__0:
            this.enterOuterAlt(localctx, 1);
            this.state = 10;
            this.playcommand();
            break;
        case ConsoleParser.T__2:
        case ConsoleParser.T__3:
            this.enterOuterAlt(localctx, 2);
            this.state = 11;
            this.stopcommand();
            this.state = 12;
            this.match(ConsoleParser.EOF);
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

PlaycommandContext.prototype.OBJ = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(ConsoleParser.OBJ);
    } else {
        return this.getToken(ConsoleParser.OBJ, i);
    }
};


PlaycommandContext.prototype.NUMBER = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(ConsoleParser.NUMBER);
    } else {
        return this.getToken(ConsoleParser.NUMBER, i);
    }
};


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
        this.state = 16;
        this.match(ConsoleParser.T__0);
        this.state = 17;
        this.match(ConsoleParser.OBJ);
        this.state = 18;
        this.match(ConsoleParser.NUMBER);
        this.state = 19;
        this.match(ConsoleParser.T__1);
        this.state = 20;
        this.match(ConsoleParser.OBJ);
        this.state = 21;
        this.match(ConsoleParser.NUMBER);
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
        this.state = 25;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case ConsoleParser.T__3:
            this.enterOuterAlt(localctx, 1);
            this.state = 23;
            this.stopallcommand();
            break;
        case ConsoleParser.T__2:
            this.enterOuterAlt(localctx, 2);
            this.state = 24;
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
    this.enterRule(localctx, 6, ConsoleParser.RULE_stopcuecommand);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 27;
        this.match(ConsoleParser.T__2);
        this.state = 28;
        this.match(ConsoleParser.OBJ);
        this.state = 29;
        this.match(ConsoleParser.NUMBER);
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
    this.enterRule(localctx, 8, ConsoleParser.RULE_stopallcommand);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 31;
        this.match(ConsoleParser.T__3);
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
