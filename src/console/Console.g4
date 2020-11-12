// define a grammar called Console
grammar Console;

/*
 * Parser Rules
 */
command: (playcommand | stopcommand | setcommand) EOF;
playcommand: 'PLAY';
stopcommand: 'STOP' (stopallcommand|stopcuecommand);
stopallcommand: 'ALL';
stopcuecommand: object=OBJ id=NUMBER;
setcommand: 'SET' (setthemecommand|setsettingcommand);
setthemecommand: 'THEME' themename=STRING;
setsettingcommand: 'SETTING' name=STRING;

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
