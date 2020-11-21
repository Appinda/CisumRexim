import React from 'react';

type Props = {
  show: boolean
}

export default class MixerWindow extends React.Component<Props> {
  

  constructor(props){
    super(props);
  }

  render(){
    return (
      <div className={`window mixerwindow ${this.props.show ? '': 'd-none'}`}>
        Mixer
      </div>
    )
  }

}