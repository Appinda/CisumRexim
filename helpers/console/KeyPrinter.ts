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
    // DEBUG
    const tracknr = 1;
    if(this.parent.state.tracks[tracknr - 1].playing()) this.error(`Already playing.`);
    else this.parent.state.tracks[tracknr - 1].play();
  }
  exitPlayTrackCommand(ctx){
    const tracknr = ctx.track.text;
    if(this.parent.state.tracks.length <= tracknr - 1) this.error(`Track does not exist.`);
    else if(this.parent.state.tracks[tracknr - 1].playing()) this.error(`Track already playing.`);
    else this.parent.state.tracks[tracknr - 1].play();
  }
  exitStopCueCommand(ctx) {
    this.log(`stopping ${ctx.object.text} ${ctx.id.text}`);
  }
  exitStopAllCommand(ctx) {
    this.parent.state.tracks[0].stop();
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