import App from "../../pages";
import { ConsoleListener } from "./ConsoleListener";

export default class KeyPrinter extends ConsoleListener {

  private parent: App;

  constructor(parent: App){
    super();
    this.parent = parent;
  }

  log(msg, isError=false){
    console.log(msg)
    this.parent.appendConsoleHistory({text: msg, isError, sameLine: true});
  }
  error(msg){
    this.log(msg, true);
  }
  exitPlayAllCommand(ctx){
    /* DEBUG */ const tracknr = 1;
    try {
      this.parent.audioplayer.playChannel(tracknr);
    }catch(e){
      this.error(e.message);
    }
  }
  exitPlayTrackCommand(ctx){
    const tracknr = ctx.track.text;
    try {
      this.parent.audioplayer.playChannel(tracknr);
    }catch(e){
      this.error(e.message);
    }
  }
  exitStopCueCommand(ctx) {
    this.parent.audioplayer.stopChannel(ctx.id);
  }
  exitStopAllCommand(ctx) {
    this.parent.audioplayer.stopAll();
  }
  exitSetThemeCommand(ctx) {
    this.log(`setting theme to "${ctx.themename.text}".`);
    this.parent.setState({theme: ctx.themename.text.toLowerCase()});
  }
  exitConsoleExpandCommand(){
    this.parent.setState({showConsoleHistrory: true});
  }
  exitConsoleCollapseCommand(){
    this.parent.setState({showConsoleHistrory: false});
  }
  exitConsoleToggleCommand(){
    this.parent.setState({showConsoleHistrory: !this.parent.state.showConsoleHistrory});
  }
  exitConsoleClearCommand(){
    this.parent.setState({consoleHistory: []});
  }
  
}