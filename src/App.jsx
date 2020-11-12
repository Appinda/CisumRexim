import React from 'react';
import './App.scss';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: 'dark',
      consoleInput: '',
      showConsoleHistrory: false
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
  onConsoleSubmit(){
    this.setState({ consoleInput: '' });
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
            <li>PLAY ALL FROM CUE;</li>
            <li>PLAY TRACK 5 ON CUE 1;</li>
            <li>WAIT FOR FINISH;</li>
            <li>STOP ALL;</li>
          </ul>
        </div>
      </div>
    );
  }
}
