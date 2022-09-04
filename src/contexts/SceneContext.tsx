import React, { useCallback, useContext, useMemo, useState } from 'react';
import {
  AnimationState,
  ISelection,
  resetVariables,
  Scene,
  SceneState,
  Script,
  _Scene,
} from '../types';

interface SceneContextType extends Omit<_Scene, 'addText'> {
  script: Map<string, _Scene>;
  startScene: string;
  changeScript: (index?: number, sceneName?: string) => void;
}

export const SceneContext = React.createContext<SceneContextType>({
  text: '',
  sceneState: 'centerBlack',
  character: null,
  characterAnimation: [],
  characterImg: [],
  background: '',
  animation: null,
  next: null,
  script: new Map<string, _Scene>(),
  startScene: '',
  changeScript: () => {
    /* to be filled */
  },
});

export const SceneContextProvider: React.FC<{
  script: Script;
  startScene: string;
  children: React.ReactNode;
}> = (props) => {
  const [text, setText] = useState<string>('');
  const [sceneState, setSceneState] = useState<SceneState>('centerBlack');
  const [character, setCharacter] = useState<string | null>(null);
  const [characterAnimation, setCharacterAnimation] = useState<
    AnimationState[]
  >([]);
  const [characterImg, setCharacterImg] = useState<string[]>([]);
  const [background, setBackground] = useState<string>('');
  const [animation, setAnimation] = useState<AnimationState>(null);
  const [next, setNext] = useState<string | ISelection[] | null>(null);

  const script = useMemo(() => {
    const makeSceneName = (episodeName: string, ei: number, si: number) =>
      si === 0 ? episodeName : '__' + ei + '_' + si;

    const makeNextScene = (
      nextEpisode: string | null,
      ei: number,
      si: number,
      sceneLength: number
    ): string | null =>
      si === sceneLength - 1 ? nextEpisode : '__' + ei + '_' + (si + 1);

    const sceneTo_Scene = (
      scene: Scene,
      prevScene: _Scene,
      next: string | ISelection[] | null
    ): _Scene => ({ ...prevScene, ...resetVariables, ...scene, next });

    const script = new Map<string, _Scene>();

    let prevScene: _Scene = {
      text: '',
      addText: false,
      sceneState: 'centerBlack',
      character: null,
      characterAnimation: [],
      characterImg: [],
      background: '',
      animation: null,
      next: null,
    } as _Scene;

    props.script.forEach(({ episodeName, scenes, nextEpisode }, ei) =>
      scenes.forEach((s, si) =>
        script.set(
          makeSceneName(episodeName, ei, si),
          (prevScene = sceneTo_Scene(
            s,
            prevScene,
            s.next ?? makeNextScene(nextEpisode, ei, si, scenes.length)
          ))
        )
      )
    );
    return script;
  }, [props.script]);

  const changeScript = useCallback(
    (index = 0, sceneName?: string) => {
      const handleNextScript = (nextSceneName: string | null) => {
        const nextScript = script.get(nextSceneName ?? '');
        if (!nextScript) return;

        nextScript.addText
          ? setText((prev) => prev + '\n' + nextScript.text)
          : setText(nextScript.text);

        setSceneState(nextScript.sceneState);

        setCharacter(nextScript.character);
        setCharacterAnimation([]);
        setTimeout(
          () => setCharacterAnimation(nextScript.characterAnimation),
          10
        );
        setCharacterImg(nextScript.characterImg);

        console.log(characterAnimation);

        setBackground(nextScript.background);

        setAnimation(null);
        setTimeout(() => setAnimation(nextScript.animation), 10);

        setNext(nextScript.next);
      };

      sceneName
        ? handleNextScript(sceneName)
        : handleNextScript(Array.isArray(next) ? next[index].next : next ?? '');
    },
    [script, next]
  );

  return (
    <SceneContext.Provider
      value={{
        text,
        sceneState,
        character,
        characterAnimation,
        characterImg,
        background,
        animation,
        next,
        script,
        startScene: props.startScene,
        changeScript,
      }}
    >
      {props.children}
    </SceneContext.Provider>
  );
};

export const useSceneContext = () => useContext(SceneContext);
