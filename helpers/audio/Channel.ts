import { Howl } from "howler";

export class Channel {

  private howl: Howl;

  loadSong(src: string){

  }

  setVolume(targetVolume: number): Channel {
    this.howl.volume(targetVolume);
    return this;
  }

  play(): Channel {
    this.howl.play();
    return this;
  }

  stop(): Channel {
    this.howl.stop();
    return this;
  }

  pause(): Channel {
    this.howl.pause();
    return this;
  }

  load(src: string): Channel {
    this.howl = new Howl({ src: [src] });
    return this;
  }

}