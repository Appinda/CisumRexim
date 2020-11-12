import { ConsoleListener } from "./ConsoleListener";

export default class KeyPrinter extends ConsoleListener {

  exitPlaycommand(ctx){
    console.log("PLAY SOMETHING");
  }
  exitStopcuecommand(ctx){
    console.log("STOP OBJ");
  }
  exitStopallcommand(ctx){
    console.log("STOP ALL");
  }
  exitCommand(ctx){
    
  }
}