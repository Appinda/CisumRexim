import { ConsoleListener } from "./ConsoleListener";

export default class KeyPrinter extends ConsoleListener {

  constructor(parent){
    super();
    this.parent = parent;
  }

  exitPlaycommand(ctx) {
    console.log(`playing`);
  }
  exitStopcuecommand(ctx) {
    console.log(`stopping ${ctx.object.text} ${ctx.id.text}`);
  }
  exitStopallcommand(ctx) {
    console.log(`stopping everything`);
  }
  exitSetthemecommand(ctx) {
    console.log(`setting theme to "${ctx.themename.text}".`);
    this.parent.setState({theme: ctx.themename.text.toLowerCase()});
  }
  
}