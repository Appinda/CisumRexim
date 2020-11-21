// define a grammar called Console
grammar Console;

/*
 * Parser Rules
 */
command: (playCommand | stopCommand | setCommand | consoleCommand) EOF;
playCommand: 'PLAY' (playTrackCommand|playAllCommand); 
playTrackCommand: 'TRACK' track=NUMBER playOnChannelCommand?;
playAllCommand: EOF;
playOnChannelCommand: 'ON' 'CHANNEL' channel=NUMBER;
stopCommand: 'STOP' (stopAllCommand|stopCueCommand);
stopAllCommand: 'ALL';
stopCueCommand: object=OBJ id=NUMBER;
setCommand: 'SET' (setThemeCommand|setSettingCommand);
setThemeCommand: 'THEME' themename=STRING;
setSettingCommand: 'SETTING' name=STRING;
consoleCommand: 'CONSOLE' (consoleExpandCommand|consoleCollapseCommand|consoleToggleCommand|consoleClearCommand);
consoleExpandCommand: 'EXPAND';
consoleCollapseCommand: 'COLLAPSE';
consoleToggleCommand: 'TOGGLE';
consoleClearCommand: 'CLEAR';

/*
 * Lexer Rules
 */
ENDING: ';';
OBJ: 'CUE' | 'SONG';

NUMBER: DIGIT+;
STRING: LETTER+;

DIGIT: ('0'..'9');
LETTER: [A-Z];

WHITESPACE: [ \t\r\n\u000C] -> skip;
