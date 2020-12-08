import { Howl } from "howler";

export class Channel {

  private howl: Howl;

  load(src: string): Channel {
    this.howl = new Howl({ src: [src] });
    return this;
  }

  setVolume(targetVolume: number): Channel {
    this.requiredLoaded();
    this.howl.volume(targetVolume);
    return this;
  }

  play(): Channel {
    this.requiredLoaded();
    this.howl.play();
    return this;
  }

  stop(): Channel {
    this.requiredLoaded();
    this.howl.stop();
    return this;
  }

  pause(): Channel {
    this.requiredLoaded();
    this.howl.pause();
    return this;
  }
  
  private requiredLoaded(){
    if(!this.howl) throw new Error("Channel has not been loaded yet.");
  }

}