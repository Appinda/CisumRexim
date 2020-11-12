import React from 'react';
import './App.scss';
import antlr4 from 'antlr4';

import { ConsoleLexer } from './console/ConsoleLexer';
import { ConsoleParser } from './console/ConsoleParser';
import ConsoleListener from './console/KeyPrinter';
import ConsoleVisitor from './console/ConsoleVisitor';
import ConsoleErrorListener from './console/ConsoleErrorListener';


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: 'dark',
      consoleInput: '',
      showConsoleHistrory: false,
      consoleHistory: [
        {text: "PLAY ALL FROM CUE",     timestamp: "2020-11-12 20:08:03.232" },
        {text: "PLAY TRACK 5 ON CUE 1", timestamp: "2020-11-12 20:09:51.043" },
        {text: "WAIT FOR FINISH",       timestamp: "2020-11-12 20:10:35.928" },
        {text: "STOP ALL",              timestamp: "2020-11-12 20:11:13.124" },
      ],
      showTimestampInConsole: true,
      showDateInConsole: false, // Not implemented yet
    };
  }

  changeStyleMode(value) {
    document.documentElement.setAttribute("data-theme", value);
  }
  onConsoleInputChange(newvalue){
    newvalue = newvalue.toUpperCase();
    this.setState({consoleInput: newvalue});
  }
  onConsoleKeyDown(e){
    if(e.key == "Enter") this.onConsoleSubmit();
  }
  clearConsole(){
    this.setState({ consoleInput: '' });
  }
  async onConsoleSubmit(){
    // console.log(antlr4.error.ErrorListener)
    const input = this.state.consoleInput.toUpperCase();
    const timestamp = new Date().toJSON().replace(/T/g, ' ').replace(/Z/g, '');
    this.clearConsole();

    const chars = new antlr4.InputStream(input);
    const lexer = new ConsoleLexer(chars);
    const tokens = new antlr4.CommonTokenStream(lexer);
    const parser = new ConsoleParser(tokens);

    lexer.addErrorListener(new ConsoleErrorListener());
    parser.addErrorListener(new ConsoleErrorListener());
    parser.buildParseTrees = true;
    
    let tree = parser.command() // only repeated here for reference
    const listener = new ConsoleListener();
    antlr4.tree.ParseTreeWalker.DEFAULT.walk(listener, tree);
    tree.accept(new ConsoleVisitor());

    await this.appendConsoleHistory({ timestamp, text: input });
    await this.appendConsoleHistory({ timestamp, text: 'Unexpected !', isError: true });
  }
  toggleConsoleHistory(){
    this.setState({showConsoleHistrory: !this.state.showConsoleHistrory})
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
  appendConsoleHistory({timestamp, text, isError}){
    const line = {timestamp, text, isError};
    return new Promise(resolve => this.setState({ consoleHistory: [...this.state.consoleHistory, line] }, resolve))
  }
  getConsoleHistory(){
    if(this.state.showDateInConsole == false) console.warn("showDateInConsole = false functionality has not been implemented yet");
    return this.state.consoleHistory.map((line, i) => {
      return (
        <li key={i}>
          {this.state.showTimestampInConsole && <span className="timestamp">[{line.timestamp}]&nbsp;</span>}<span className={`message ${line.isError?'error': ''}`}>{line.isError && "> "}{line.text}</span>
        </li>);
    })
  }

  render() {
    const { mode } = this.state;
    return (
      <div className="App">
        <div className="header">
          <select className="combo" onChange={(e) => this.changeStyleMode(e.target.value)}>
            <option value="light">Light</option>
            <option value="dark">Dark</option>
          </select>
        </div>
        {/* Console */}
        <div className="console">
          <button className={`btn-focus ${this.state.showConsoleHistrory?'active':''}`} onClick={() => this.toggleConsoleHistory()}></button>
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
            {this.getConsoleHistory()}
          </ul>
        </div>
      </div>
    );
  }
}
