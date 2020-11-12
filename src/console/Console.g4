// define a grammar called Console
grammar Console;

/*
 * Parser Rules
 */
command: (playcommand | stopcommand | setcommand) ENDING?;
playcommand: 'PLAY';
stopcommand: stopcuecommand | stopallcommand;
stopcuecommand: 'STOP' object=OBJ id=NUMBER;
stopallcommand: 'STOP' 'ALL';
setcommand: setthemecommand;
setthemecommand: 'SET' 'THEME' themename=STRING;

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
