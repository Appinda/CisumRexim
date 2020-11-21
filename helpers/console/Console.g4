// define a grammar called Console
grammar Console;

/*
 * Parser Rules
 */
command: (playCommand | stopCommand | setCommand | clearCommand | showCommand) EOF;
playCommand: 'PLAY' (playTrackCommand|playAllCommand); 
playTrackCommand: 'TRACK' track=NUMBER playOnChannelCommand?;
playAllCommand: EOF;
playOnChannelCommand: 'ON' 'CHANNEL' channel=NUMBER;
stopCommand: 'STOP' (stopAllCommand|stopCueCommand);
stopAllCommand: 'ALL';
stopCueCommand: OBJ id=NUMBER;
setCommand: 'SET' (setThemeCommand|setSettingCommand);
setThemeCommand: 'THEME' themename=STRING;
setSettingCommand: 'SETTING' name=STRING;
clearCommand: 'CLEAR';
showCommand: 'SHOW' (window=WINDOW)+;

/*
 * Lexer Rules
 */
ENDING: ';';
OBJ: 'CHANNEL';
WINDOW: 'CONSOLE'|'MIXER';

NUMBER: DIGIT+;
STRING: LETTER+;

DIGIT: ('0'..'9');
LETTER: [A-Z];

WHITESPACE: [ \t\r\n\u000C] -> skip;
