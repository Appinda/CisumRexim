// define a grammar called Console
grammar Console;

/*
 * Parser Rules
 */
command: playcommand | stopcommand EOF;
playcommand: 'PLAY' OBJ NUMBER 'ON' OBJ NUMBER ;
stopcommand: stopallcommand | stopcuecommand ;
stopcuecommand: 'STOP' OBJ NUMBER;
stopallcommand: 'STOP ALL';

/*
 * Lexer Rules
 */
NUMBER: ('0'..'9')+;
OBJ:  'SONG' | 'CUE';
WHITESPACE: [ \t\r\n\u000C] -> skip;
