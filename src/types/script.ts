export type SceneState = 'default' | 'black' | 'centerBlack' | 'select' | null;
export type AnimationState = 'bounce' | 'shakeX' | 'shakeY' | 'wobble';
export interface ISelection {
  text: string;
  next: string;
}

export interface Scene {
  text: string;
  addText?: boolean;
  sceneState?: SceneState;
  character?: string | null;
  characterImg?: string[];
  background?: string;
  animation?: AnimationState;
  next: string | ISelection[] | null;
}

export type Episode = [string, Scene][];

export type Script = Episode[];
