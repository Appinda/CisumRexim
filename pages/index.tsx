import React from 'react';
import { ipcRenderer } from 'electron';
import { Howl } from "howler";
import fs from "fs";
import path from "path";

import ConsoleExecutor from "../helpers/console";
import { Project } from '../types/Project';

type AppState = {
  theme: string,
  consoleInput: string,
  showConsoleHistrory: boolean,
  consoleHistory: ConsoleHistoryItem[]
  showTimestampInConsole: boolean
  project: Project,
  showDateInConsole: boolean,
  tracks: Howl[]
}
type ConsoleHistoryItem = {
  timestamp: Date,
  text: string,
  isError: boolean
}

export default class App extends React.Component {

  public commandexecutor: ConsoleExecutor;
  public consoleHistoryBuffer: any[] = [];
  public state: AppState = {
    theme: 'light',
    consoleInput: '',
    showConsoleHistrory: false,
    consoleHistory: [],
    showTimestampInConsole: true,
    project: null,
    showDateInConsole: false, // Not implemented yet
    tracks: []
  }

  componentDidMount() {
    this.commandexecutor = new ConsoleExecutor(this);
    ipcRenderer.on('openproject', (event, _path) => {
      this.openProject(_path);
    });
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

  onChangeTheme(value) {
    this.setState({ theme: value });
  }
  onConsoleInputChange(newvalue) {
    newvalue = newvalue.toUpperCase();
    this.setState({ consoleInput: newvalue });
  }
  onConsoleKeyDown(e) {
    if (e.key == "Enter") this.onConsoleSubmit();
  }
  clearConsoleInput() {
    this.setState({ consoleInput: '' });
  }
  async onConsoleSubmit() {
    // console.log(antlr4.error.ErrorListener)
    const input = this.state.consoleInput.toUpperCase();
    this.clearConsoleInput();

    this.commandexecutor.execute(input);
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
  appendConsoleHistory({ timestamp, text, isError, sameLine }) {
    if (timestamp == null) timestamp = new Date();
    const line = { timestamp, text, isError };
    // return new Promise(resolve => this.setState({ consoleHistory: [...this.state.consoleHistory, line] }, resolve))
    if (sameLine && this.consoleHistoryBuffer.length > 0) this.consoleHistoryBuffer[this.consoleHistoryBuffer.length - 1].text += ` > ${text}`;
    else this.consoleHistoryBuffer.push(line);
  }
  getConsoleHistory() {
    if (this.state.showDateInConsole == false) console.warn("showDateInConsole = false functionality has not been implemented yet");
    return this.state.consoleHistory.map((line, i) => {
      return (
        <li key={i}>
          {this.state.showTimestampInConsole && !line.isError && <span className="timestamp">[{line.timestamp.toJSON().replace(/T/g, ' ').replace(/Z/g, '')}]&nbsp;</span>}<span className={`message ${line.isError ? 'error' : ''}`}>{line.isError && "> "}{line.text}</span>
        </li>);
    })
  }

  async onPlaybackStart(){
    this.commandexecutor.execute("PLAY TRACK 1");
    if(!this.isProjectLoaded() || this.state.tracks[0].playing()) return false;
    /*DEBUG*/ this.state.tracks[0].play();
  }
  onPlaybackStop(){
    this.commandexecutor.execute("STOP ALL");
    if(!this.isProjectLoaded() || !this.state.tracks[0].playing()) return false;
    /*DEBUG*/ this.state.tracks[0].stop();
  }
  onPlaybackPause(){
    this.commandexecutor.execute("PAUSE");
    if(!this.isProjectLoaded() || !this.state.tracks[0].playing()) return false;
    /*DEBUG*/ this.state.tracks[0].pause();    
  }

  render() {
    return (
      <div className="App" data-theme={this.state.theme}>
        <div className="cell cell1">
          <div className="header">
            <select className="combo" value={this.state.theme} onChange={(e) => this.onChangeTheme(e.target.value)}>
              <option value="light">Light</option>
              <option value="dark">Dark</option>
            </select>
          </div>
        </div>
        {/* Console */}
        <div className="cell cell2">
          <div className="console">
            <button className={`btn-focus ${this.state.showConsoleHistrory ? 'active' : ''}`} onClick={() => this.commandexecutor.execute("CONSOLE TOGGLE")}></button>
            <span className="prefix">&gt; </span><input type="text" autoCorrect="off" onKeyDown={(e) => this.onConsoleKeyDown(e)} onChange={(e) => this.onConsoleInputChange(e.target.value)} value={this.state.consoleInput} />
          </div>
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
          <div className={`consolehistory ${!this.state.showConsoleHistrory ? 'd-none' : ''}`}>
            <ul>
              <li style={{ textDecoration: 'underline' }}>CisumRexim Console</li>
              {this.getConsoleHistory()}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}