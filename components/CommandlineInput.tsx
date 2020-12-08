import React from 'react';

type Props = {
  onSubmit?: Function   
}
type AppState = {
  input: string,
  history: string[],
  previousCommandIndex: number|null
}

export default class CommandlineInput extends React.Component<Props> {

  private inputEl: React.RefObject<HTMLInputElement>;

  public state: AppState = {
    input: '',
    history: [],
    previousCommandIndex: null
  }

  constructor(props){
    super(props);
    this.inputEl = React.createRef<HTMLInputElement>();
  }

  /**
   * Event triggered when input text changed.
   * @param {string} newvalue - New value of the input.
   */
  private onConsoleInputChange(newvalue: string): void {
    this.setInput(newvalue);
  }

  /**
   * Set input state after formatting it correctly.
   * @param {string} text - New input value.
   */
  private setInput(text: string): void {
    this.setState({ input: text.toUpperCase() });
  }

  /**
   * @event
   * @param e 
   */
  private onConsoleKeyDown(e): void {
    if (e.key == "Enter") this.onConsoleSubmit();
    else if (e.key == "ArrowUp") this.loadPreviousCommand(1);
    else if (e.key == "ArrowDown") this.loadPreviousCommand(-1);
    else return;
    e.preventDefault();
  }
  
  private hasHistroy(index: number){
    index--;
    return index >= -1 && index < this.state.history.length;
  }
  private async loadPreviousCommand(delta: number): Promise<boolean> {
    // Check if histroy exists
    let newPreviousCommandIndex = this.state.previousCommandIndex + delta;    
    if(!this.hasHistroy(newPreviousCommandIndex)) return false;

    return new Promise(resolve => {
      this.setState({ previousCommandIndex: newPreviousCommandIndex}, () => {
        if(this.state.previousCommandIndex > 0) this.setInput(this.state.history[this.state.previousCommandIndex-1]);
        else this.clearConsoleInput();
        resolve(true);
      });
    });
  }

  private appendHistory(command: string){
    // Put it as first item
    this.setState({ history: [command, ...this.state.history] });
  }

  async onConsoleSubmit(): Promise<void> {
    const input = this.state.input.toUpperCase();
    this.appendHistory(input);
    this.clearConsoleInput();

    this.props.onSubmit?.call(this, input);
  }

  private clearConsoleInput(): void {
    this.setState({ input: '', previousCommandIndex: null });
  }

  render(){
    return (
      <div className="commandlineinput">
        <span className="prefix">&gt; </span><input ref={this.inputEl} type="text" autoCorrect="off" onKeyDown={(e) => this.onConsoleKeyDown(e)} onChange={(e) => this.onConsoleInputChange(e.target.value)} value={this.state.input} />
      </div>
    )
  }

}