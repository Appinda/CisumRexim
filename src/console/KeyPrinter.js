import { ConsoleListener } from "./ConsoleListener";

export default class KeyPrinter extends ConsoleListener {

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
  }
  
}