import antlr4 from 'antlr4';

import { ConsoleLexer } from './ConsoleLexer';
import { ConsoleParser } from './ConsoleParser';
import ConsoleListener from './KeyPrinter';
import ConsoleVisitor from './ConsoleVisitor';
import ConsoleErrorListener from './ConsoleErrorListener';
import App from '../../pages';

/* =====================================================================
** Some lines with @ts-ignore do in fact work, but typescript says not
** and thus have been excluded from checking.
** =====================================================================*/

export default class ConsoleExecutor {

  private parent: App;

  constructor(parent: App){
    this.parent = parent;
  }

  async execute(input){
    await this.parent.appendConsoleHistory({ text: input });

    const chars = new antlr4.InputStream(input);
    const lexer = new ConsoleLexer(chars);
    const tokens = new antlr4.CommonTokenStream(lexer);
    const parser = new ConsoleParser(tokens);

    // @ts-ignore
    lexer.addErrorListener(new ConsoleErrorListener(this.parent));
    // @ts-ignore
    parser.addErrorListener(new ConsoleErrorListener(this.parent));
    // @ts-ignore
    parser.buildParseTrees = true;
     
    let tree = parser.command() // only repeated here for reference
    const listener = new ConsoleListener(this.parent);
    antlr4.tree.ParseTreeWalker.DEFAULT.walk(listener, tree);

    // @ts-ignore
    tree.accept(new ConsoleVisitor());

    await this.parent.updateConsoleFromBuffer();
  }

}