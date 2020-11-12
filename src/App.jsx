import React from 'react';
import './App.scss';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: 'dark',
    };
  }

  changeStyleMode(e) {
    document.documentElement.setAttribute("data-theme", e.target.value);
  }
  getCueList() {
    let result = [];
    for (let i = 0; i < 10; i++) {
      result.push(<tr>
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
          <select className="combo" onChange={(e) => this.changeStyleMode(e)}>
            <option value="light">Light</option>
            <option value="dark">Dark</option>
          </select>
        </div>
        <div className="playback">
          P
        </div>
        <div className="cuelist">
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
      </div>
    );
  }
}
