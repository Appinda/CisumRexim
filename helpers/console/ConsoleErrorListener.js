import antlr4 from "antlr4";

export default class ConsoleErrorListener extends antlr4.error.ErrorListener {
  
  constructor(parent){
    super();
    this.parent = parent;
  }

  syntaxError(recognizer, offendingSymbol, line, column, msg, e){
    this.parent.appendConsoleHistory({ text: msg, isError: true, sameLine: true })
  }

}