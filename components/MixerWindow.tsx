import React from 'react';
import { Channel } from '../helpers/audio/Channel';

type Props = {
  show: boolean,
  channels: Channel[]
}

export default class MixerWindow extends React.Component<Props> {
  

  constructor(props){
    super(props);
  }

  private getChannels(): JSX.Element[] {
    return this.props.channels.map((e, i) => (
      <div className="mixer-channel" key={i}>
        <button className="btn_mute">Mute</button>
        <input type="range" className="fader"/>
      </div>
    ));
  }

  render(){
    return (
      <div className={`window mixerwindow ${this.props.show ? '': 'd-none'}`}>
        {this.getChannels()}
      </div>
    )
  }

}