import antlr4 from 'antlr4';

import { ConsoleLexer } from './ConsoleLexer';
import { ConsoleParser } from './ConsoleParser';
import ConsoleListener from './KeyPrinter';
import ConsoleVisitor from './ConsoleVisitor';
import ConsoleErrorListener from './ConsoleErrorListener';

export default class ConsoleExecutor {

  constructor(parent){
    this.parent = parent;
  }

  async execute(input){
    await this.parent.appendConsoleHistory({ text: input });

    const chars = new antlr4.InputStream(input);
    const lexer = new ConsoleLexer(chars);
    const tokens = new antlr4.CommonTokenStream(lexer);
    const parser = new ConsoleParser(tokens);

    // parser._errHandler = {}
    // parser._errHandler.sync = () => {};
    // parser._errHandler.reportMatch = () => {};
    // parser._errHandler.inErrorRecoveryMode = () => false;
    // parser._errHandler.recoverInline = () => false;

    lexer.addErrorListener(new ConsoleErrorListener(this.parent));
    parser.addErrorListener(new ConsoleErrorListener(this.parent));

    parser.buildParseTrees = true;
     
    let tree = parser.command() // only repeated here for reference
    const listener = new ConsoleListener(this.parent);
    antlr4.tree.ParseTreeWalker.DEFAULT.walk(listener, tree);

    // console.log(antlr4.tree.ParseTreeWalker.DEFAULT);
    tree.accept(new ConsoleVisitor());

    await this.parent.updateConsoleFromBuffer();
  }

}