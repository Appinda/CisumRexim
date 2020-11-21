import { Howl } from "howler";
import { Channel } from "./Channel";

export class AudioPlayer {

  private channels: Channel[] = [];

  private getChannel(channelnumber: number): Channel|null {
    return this.channels[channelnumber];
  }

  stopAll(): void {
    this.channels.forEach((e: Channel) => e?.stop());
  }
  stopChannel(channelnumber: number): void {
    const target = this.getChannel(channelnumber);
    target?.stop();
  }
  createChannel(){
    this.channels.push(new Channel());
  }
  loadOnChannel(channelnumber: number, src: string): void {
    const target = this.getChannel(channelnumber);
    if(!target) throw new Error(`Channel ${channelnumber} does not exists. Create it first.`);
    target.load(src);
  }
  playChannel(channelnumber: number): void {
    const target = this.getChannel(channelnumber);
    if(!target) throw new Error(`Channel ${channelnumber} does not exists. Create it first.`);
    target.play();
  }

}