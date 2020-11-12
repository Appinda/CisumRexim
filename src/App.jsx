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

  render() {
    const { mode } = this.state;
    return (
      <div className={`App stylemode-${mode}`}>
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
          C
        </div>
      </div>
    );
  }
}
