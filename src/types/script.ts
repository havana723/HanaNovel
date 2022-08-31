export type SceneState = 'text' | 'black' | 'centerBlack' | 'select' | null;

export interface Scene {
  text: string;
  sceneState?: SceneState;
  character?: string;
  characterImg?: string[];
  isSelect?: boolean;
  selectList?: string[];
  background?: string;
  next: string[] | null;
}

export type Episode = [string, Scene][];

export type Script = Episode[];
