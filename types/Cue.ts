export type Cue = TrackCueItem[]

export type CueItem = {
  color?: string,
  preDelay?: number,
  postDelay?: number,
}

export type TrackCueItem = CueItem & {
  type: "track",
  src: string
}
export type WaitCueItem = CueItem & {
  type: "wait",
  waitfor: "complete"|"trigger"
}