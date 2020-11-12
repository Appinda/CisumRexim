import antlr4 from "antlr4";

export default class ConsoleErrorListener extends antlr4.error.ErrorListener {
  
  syntaxError(recognizer, offendingSymbol, line, column, msg, e){
    console.error("Yay custom error");
  }

}