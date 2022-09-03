export type SceneState = 'default' | 'black' | 'centerBlack' | 'select' | null;
export type AnimationState = 'bounce' | 'shakeX' | 'shakeY' | 'wobble' | null;
export interface ISelection {
  text: string;
  next: string;
}

export interface Scene {
  text: string;
  addText?: boolean;
  sceneState?: SceneState;
  character?: string | null;
  characterAnimation?: AnimationState[];
  characterImg?: string[];
  background?: string;
  animation?: AnimationState;
  next?: string | ISelection[] | null;
}

export interface _Scene {
  text: string;
  addText: boolean;
  sceneState: SceneState;
  character: string | null;
  characterAnimation: AnimationState[];
  characterImg: string[];
  background: string;
  animation: AnimationState;
  next: string | ISelection[] | null;
}

export type Episode = {
  episodeName: string;
  scenes: Scene[];
  nextEpisode: string | null;
};

export type Script = Episode[];
