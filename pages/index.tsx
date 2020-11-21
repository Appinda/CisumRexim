import React from 'react';
import { ipcRenderer } from 'electron';
import { Howl } from "howler";
import fs from "fs";
import path from "path";

import ConsoleHistoryWindow, { ConsoleHistoryItem } from "../components/ConsoleHistoryWindow";
import MixerWindow from "../components/MixerWindow";
import CommandlineInput from "../components/CommandlineInput";
import ConsoleExecutor from "../helpers/console";
import { Project } from '../types/Project';
import { AudioPlayer } from '../helpers/audio/AudioPlayer';

type AppState = {
  theme: string,
  consoleHistory: ConsoleHistoryItem[]
  showTimestampInConsole: boolean
  project: Project,
  showDateInConsole: boolean,
  tracks: Howl[],
  currentWindow: string
}

export default class App extends React.Component {

  public commandexecutor: ConsoleExecutor;
  public consoleHistoryBuffer: any[] = [];
  public audioplayer: AudioPlayer;
  public windows = [
    { id: 'console', icon: 'toolbar_console', name: 'Console History' },
    { id: 'mixer', icon: 'toolbar_mixer', name: 'Audio Mixer' },
  ]
  public state: AppState = {
    theme: 'light',
    consoleHistory: [],
    showTimestampInConsole: true,
    project: null,
    showDateInConsole: false, // Not implemented yet
    tracks: [],
    currentWindow: 'cue'
  }
  private consoleRef: React.RefObject<ConsoleHistoryWindow>;
  private mixerRef: React.RefObject<MixerWindow>;

  constructor(props){
    super(props);
    this.audioplayer = new AudioPlayer();
    this.audioplayer.createChannel();
    this.audioplayer.createChannel();
    
    this.consoleRef = React.createRef();
    this.mixerRef = React.createRef();
  }

  componentDidMount() {
    this.commandexecutor = new ConsoleExecutor(this);
    ipcRenderer.on('openproject', (event, _path) => {
      this.openProject(_path);
    });
  }

  componentDidUpdate(){
    this.scrollConsoleToBottom();
  }

  async openProject(_path: string): Promise<void> {
    let project: Project = JSON.parse(await fs.promises.readFile(_path, { encoding: 'utf-8' }));
    project.meta.path = _path;
    project.meta.directory = path.dirname(_path);
    this.loadProject(project);
  }
  async loadProject(project: Project){
    this.setState({project});

    let songpath = path.join(this.state.project.meta.directory, '/tracks/', this.state.project.cue[0].src);
    let buffer = await fs.promises.readFile(songpath);
    let blob = new Blob([buffer]);
    let blobURL = URL.createObjectURL(blob);
    let track: Howl = new Howl({
      src: [blobURL],
      format: ['mp3']
    });
    this.setState({ tracks: [...this.state.tracks.slice(), track] });
  }
  isProjectLoaded(): boolean {
    return this.state.project !== null;
  }

  getCueList() {
    return this.state.project?.cue.map((e, i) => <tr key={i} style={{backgroundColor: e.color}}>
      <td></td>
      <td>{i}</td>
      <td>name</td>
      <td>{e.preDelay}</td>
      <td>00:22.80</td>
      <td>{e.postDelay}</td>
    </tr>);
  }
  updateConsoleFromBuffer() {
    return new Promise(resolve => {
      this.setState({ consoleHistory: [...this.state.consoleHistory, ...this.consoleHistoryBuffer] }, resolve);
    })
      .then(() => {
        this.consoleHistoryBuffer = [];
      });
  }
  appendConsoleHistory(args: { timestamp?, text, isError?, sameLine?: boolean }) {
    if (args.timestamp == null) args.timestamp = new Date();
    const line = { timestamp: args.timestamp, text: args.text, isError: args.isError||false };
    // return new Promise(resolve => this.setState({ consoleHistory: [...this.state.consoleHistory, line] }, resolve))
    if (args.sameLine && this.consoleHistoryBuffer.length > 0) this.consoleHistoryBuffer[this.consoleHistoryBuffer.length - 1].text += ` > ${args.text}`;
    else this.consoleHistoryBuffer.push(line);

    if(args.isError) this.commandexecutor.execute("SHOW CONSOLE");
  }
  scrollConsoleToBottom(){
    this.consoleRef.current.scrollToBottom();
  }

  onConsoleInput(input: string){
    this.commandexecutor.execute(input);
  }

  async onPlaybackStart(){
    this.commandexecutor.execute("PLAY");
    if(!this.isProjectLoaded() || this.state.tracks[0].playing()) return false;
  }
  onPlaybackStop(){
    this.commandexecutor.execute("STOP ALL");
    if(!this.isProjectLoaded() || !this.state.tracks[0].playing()) return false;
  }
  onPlaybackPause(){
    this.commandexecutor.execute("PAUSE");
    if(!this.isProjectLoaded() || !this.state.tracks[0].playing()) return false;
  }

  showWindow(id: string): void {
    this.commandexecutor.execute("SHOW " + id.toUpperCase());
  }
  getToolbarItems(): JSX.Element[] {
    return this.windows.map((e, i) => <button key={i} style={{backgroundImage: this.getIconPath(e.icon)}} title={e.name} onClick={() => this.showWindow(e.id)}></button>);
  }

  getIconPath(name: string): string{
    return `url(/assets/icons/${this.state.theme}/${name}.svg)`;
  }

  render() {
    return (
      <div className="App" data-theme={this.state.theme}>
        <div className="cell cell1">
          <div className="header">
            
          </div>
        </div>
        {/* Console */}
        <div className="cell cell2">
          <CommandlineInput onSubmit={(input) => this.onConsoleInput(input)}/>
        </div>
        <div className="cell cell3">
          <div className="playback">
            <div className="playback-buttons">
              <button className="btn-play" onClick={() => this.onPlaybackStart()}>Play</button>
              <button className="btn-pause" onClick={() => this.onPlaybackPause()}>Pause</button>
              <button className="btn-stop" onClick={() => this.onPlaybackStop()}>Stop</button>
            </div>
          </div>
        </div>
        <div className="cell cell4">
          <div className="cuelist">
            <div className="cuelist-container">
              <table cellSpacing="0">
                <thead>
                  <tr>
                    <th></th>
                    <th className="w-auto">#</th>
                    <th>Cue</th>
                    <th className="w-auto p-2">Pre delay</th>
                    <th className="w-auto p-2">Action</th>
                    <th className="w-auto p-2">Post delay</th>
                  </tr>
                </thead>
                <tbody>
                  {this.getCueList()}
                </tbody>
              </table>
            </div>
          </div>
          <ConsoleHistoryWindow show={this.state.currentWindow == 'CONSOLE'} ref={this.consoleRef} history={this.state.consoleHistory} showDate={this.state.showDateInConsole} showTimestamp={this.state.showTimestampInConsole}/>
          <MixerWindow show={this.state.currentWindow == 'MIXER'} ref={this.mixerRef} channels={this.audioplayer.channels}/>
        </div>
        <div className="cell cell5">
          <div className="toolbar">
            {this.getToolbarItems()}
          </div>
        </div>
      </div>
    );
  }
}