export type SceneState = "text" | "black" | "centerBlack" | "select" | null;

export interface Scene {
  text: string;
  next: string[] | null;
  sceneState?: SceneState;
  character?: string;
  characterImg?: string[];
  isSelect?: "on" | "off";
  selectList?: string[];
  background?: string;
  end?: boolean;
}

export type Episode = [string, Scene][];

export type Script = Episode[];
