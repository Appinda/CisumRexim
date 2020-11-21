import antlr4 from "antlr4";
import App from "../../pages";

export default class ConsoleErrorListener extends antlr4.error.ErrorListener {
  
  private parent: App;

  constructor(parent: App){
    super();
    this.parent = parent;
  }

  syntaxError(recognizer, offendingSymbol, line, column, msg, e){
    this.parent.appendConsoleHistory({ text: msg, isError: true, sameLine: true })
  }

}