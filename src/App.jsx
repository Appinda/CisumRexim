import React from 'react';
import './App.scss';

import ConsoleExecutor from "./console";

export default class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.consoleHistoryBuffer = [];
    this.state = {
      theme: 'light',
      consoleInput: '',
      showConsoleHistrory: false,
      consoleHistory: [],
      showTimestampInConsole: true,
      showDateInConsole: false, // Not implemented yet
    };
  }

  componentDidMount(){
    this.commandexecutor = new ConsoleExecutor(this);
    // this.commandexecutor.changeTheme.call(this);
  }

  onChangeTheme(value) {
    this.setState({ theme: value });
  }
  onConsoleInputChange(newvalue){
    newvalue = newvalue.toUpperCase();
    this.setState({consoleInput: newvalue});
  }
  onConsoleKeyDown(e){
    if(e.key == "Enter") this.onConsoleSubmit();
  }
  clearConsoleInput(){
    this.setState({ consoleInput: '' });
  }
  async onConsoleSubmit(){
    // console.log(antlr4.error.ErrorListener)
    const input = this.state.consoleInput.toUpperCase();
    this.clearConsoleInput();

    this.commandexecutor.execute(input);
  }
  getCueList() {
    let result = [];
    for (let i = 0; i < 10; i++) {
      result.push(<tr key={i}>
        <td></td>
        <td>{i}</td>
        <td>Careless Whisper</td>
        <td>00:00.00</td>
        <td>00:22.80</td>
        <td>00:00.00</td>
      </tr>);
    }
    return result;
  }
  updateConsoleFromBuffer(){
    return new Promise(resolve => {
      this.setState({ consoleHistory: [...this.state.consoleHistory, ...this.consoleHistoryBuffer] }, resolve);
    })
    .then(() => {
      this.consoleHistoryBuffer = [];
    });
  }
  appendConsoleHistory({timestamp, text, isError, sameLine}){
    if(timestamp == null) timestamp = new Date();
    const line = {timestamp, text, isError};
    // return new Promise(resolve => this.setState({ consoleHistory: [...this.state.consoleHistory, line] }, resolve))
    if(sameLine && this.consoleHistoryBuffer.length > 0) this.consoleHistoryBuffer[this.consoleHistoryBuffer.length - 1].text += ` > ${text}`;
    else this.consoleHistoryBuffer.push(line);
  }
  getConsoleHistory(){
    if(this.state.showDateInConsole == false) console.warn("showDateInConsole = false functionality has not been implemented yet");
    return this.state.consoleHistory.map((line, i) => {
      return (
        <li key={i}>
          {this.state.showTimestampInConsole && !line.isError && <span className="timestamp">[{line.timestamp.toJSON().replace(/T/g, ' ').replace(/Z/g, '')}]&nbsp;</span>}<span className={`message ${line.isError?'error': ''}`}>{line.isError && "> "}{line.text}</span>
        </li>);
    })
  }

  render() {
    return (
      <div className="App" data-theme={this.state.theme}>
        <div className="header">
          <select className="combo" value={this.state.theme} onChange={(e) => this.onChangeTheme(e.target.value)}>
            <option value="light">Light</option>
            <option value="dark">Dark</option>
          </select>
        </div>
        {/* Console */}
        <div className="console">
          <button className={`btn-focus ${this.state.showConsoleHistrory?'active':''}`} onClick={() => this.commandexecutor.execute("CONSOLE TOGGLE")}></button>
          <span className="prefix">&gt; </span><input type="text" autoCorrect="off" onKeyDown={(e) => this.onConsoleKeyDown(e)} onChange={(e) => this.onConsoleInputChange(e.target.value)} value={this.state.consoleInput}/>
        </div>
        <div className="playback">
          P
        </div>
        <div className={`cuelist ${this.state.showConsoleHistrory?'d-none':''}`}>
          <div className="cuelist-container">
            <table cellSpacing="0">
              <thead>
                <tr>
                  <th></th>
                  <th className="w-auto">#</th>
                  <th>Cue</th>
                  <th className="w-auto p-2">Pre wait</th>
                  <th className="w-auto p-2">Action</th>
                  <th className="w-auto p-2">Post wait</th>
                </tr>
              </thead>
              <tbody>
                {this.getCueList()}
              </tbody>
            </table>
          </div>
        </div>
        <div className={`consolehistory ${!this.state.showConsoleHistrory?'d-none':''}`}>
          <ul>
            <li style={{textDecoration: 'underline'}}>CisumRexim Console</li>
            {this.getConsoleHistory()}
          </ul>
        </div>
      </div>
    );
  }
}
