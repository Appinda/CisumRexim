import { Cue } from './Cue';

export type Project = {
  meta: ProjectMeta,
  cue: Cue
}

export type ProjectMeta = {
  name: string,
  path?: string,                            // Overwritten in app
  directory?: string                        // Overwritten in app
}

