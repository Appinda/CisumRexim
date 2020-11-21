import React from 'react';
import App from '../pages';

type Props = {
  onSubmit?: Function   
}
type AppState = {
  input: string
}

export default class CommandlineInput extends React.Component<Props> {

  public state: AppState = {
    input: ''
  }

  constructor(props){
    super(props);
  }

  onConsoleInputChange(newvalue) {
    newvalue = newvalue.toUpperCase();
    this.setState({ input: newvalue });
  }
  onConsoleKeyDown(e) {
    if (e.key == "Enter") this.onConsoleSubmit();
  }
  async onConsoleSubmit() {
    // console.log(antlr4.error.ErrorListener)
    const input = this.state.input.toUpperCase();
    this.clearConsoleInput();

    this.props.onSubmit?.call(this, input);
  }
  clearConsoleInput() {
    this.setState({ input: '' });
  }

  render(){
    return (
      <div className="commandlineinput">
        <span className="prefix">&gt; </span><input type="text" autoCorrect="off" onKeyDown={(e) => this.onConsoleKeyDown(e)} onChange={(e) => this.onConsoleInputChange(e.target.value)} value={this.state.input} />
      </div>
    )
  }

}