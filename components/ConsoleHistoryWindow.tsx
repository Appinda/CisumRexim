import React from 'react';

type Props = {
  show: boolean,
  showDate: boolean,
  showTimestamp: boolean,
  history: ConsoleHistoryItem[]
}
export type ConsoleHistoryItem = {
  timestamp: Date,
  text: string,
  isError: boolean
}

export default class ConsoleWindow extends React.Component<Props> {
  
  private listRef: React.RefObject<HTMLUListElement>;

  constructor(props){
    super(props);
    this.listRef = React.createRef();
  }

  scrollToBottom(){
    this.listRef.current.scrollTo(0, this.listRef.current.scrollHeight + 20);
  }

  getConsoleHistory() {
    if (this.props.showDate == false) console.warn("showDateInConsole = false functionality has not been implemented yet");
    return this.props.history.map((line, i) => {
      return (
        <li key={i}>
          {this.props.showTimestamp && !line.isError && <span className="timestamp">[{line.timestamp.toJSON().replace(/T/g, ' ').replace(/Z/g, '')}]&nbsp;</span>}<span className={`message ${line.isError ? 'error' : ''}`}>{line.isError && "> "}{line.text}</span>
        </li>);
    })
  }

  render(){
    return (
      <div className={`consolehistory ${this.props.show ? '': 'd-none'}`}>
        <ul ref={this.listRef}>
          <li style={{ textDecoration: 'underline' }}>CisumRexim Console</li>
          {this.getConsoleHistory()}
        </ul>
      </div>
    )
  }

}