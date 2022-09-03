import styled from '@emotion/styled';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import {
  AnimationState,
  ISelection,
  Scene,
  SceneState,
  Script,
  _Scene,
} from '../../types';
import { ReStart } from './ReStart';
import { BlackScene, CenterBlackScene, SelectScene, TextScene } from './Scene';

interface GameBoardProps {
  script: Script;
  startScene: string;
}

const GameboardContainer = styled.div`
  aspect-ratio: 16 / 9;
  background-color: black;
  position: relative;
  user-select: none;
  word-break: keep-all;

  @media (min-aspect-ratio: 16/9) {
    height: 100%;
  }
  @media (max-aspect-ratio: 16/9) {
    width: 100%;
  }
`;

const BackgroundContainer = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
  overflow: hidden;
`;

const Gameboard: React.FC<GameBoardProps> = (props) => {
  const [sceneState, setSceneState] = useState<SceneState>(null);

  const [text, setText] = useState<string | null>(null);

  const [character, setCharacter] = useState<string | null>(null);
  const [characterImg, setCharacterImg] = useState<string[] | null>(null);
  const [characterAnimation, setCharacterAnimation] = useState<
    AnimationState[] | null
  >(null);

  const [selectList, setSelectList] = useState<ISelection[] | null>(null);

  const [next, setNext] = useState<string | null>(null);

  const [background, setBackground] = useState<string | null>(null);

  const [animation, setAnimation] = useState<AnimationState | null>(null);

  const end = next === null;
  const isSelect = Array.isArray(selectList) && selectList.length >= 1;

  const changeScript = useCallback((nextScript: _Scene | null) => {
    if (!nextScript) return;

    nextScript.addText
      ? setText((prev) => prev + '\n' + nextScript.text)
      : setText(nextScript.text);

    if (nextScript.sceneState !== undefined)
      setSceneState(nextScript.sceneState);
    if (nextScript.character !== undefined) setCharacter(nextScript.character);
    if (nextScript.characterImg !== undefined)
      setCharacterImg(nextScript.characterImg);
    setCharacterAnimation(nextScript.characterAnimation ?? null);

    if (nextScript.background !== undefined)
      setBackground(nextScript.background);

    setAnimation(null);
    setTimeout(() => setAnimation(nextScript.animation ?? null), 10);

    if (Array.isArray(nextScript.next)) setSelectList(nextScript.next);
    else {
      setNext(nextScript.next);
      setSelectList(null);
    }
  }, []);

  const script = useMemo(() => {
    const makeSceneName = (episodeName: string, ei: number, si: number) => {
      return si === 0 ? episodeName : '__' + ei + '_' + si;
    };

    const makeNextScene = (
      nextEpisode: string | null,
      ei: number,
      si: number,
      sceneLength: number
    ): string | null => {
      return si === sceneLength - 1 ? nextEpisode : '__' + ei + '_' + (si + 1);
    };

    const SceneTo_Scene = (
      scene: Scene,
      prevScene: _Scene,
      next: string | null
    ): _Scene => {
      const makeProperty = (propertyName: string) => {
        return scene[propertyName] === undefined
          ? prevScene[propertyName]
          : scene[propertyName];
      };
      const ret: _Scene = {} as _Scene;
      ret.next = next;
      Object.entries(scene)
        .map(([name]) => [name, makeProperty(name)])
        .forEach(([name, value]) => (ret[name] = value));
      return ret;
    };

    const script = new Map<string, _Scene>();

    let prevScene: _Scene = {} as _Scene;

    props.script.forEach(({ episodeName, scenes, nextEpisode }, ei) =>
      scenes.forEach((s, si) =>
        script.set(
          makeSceneName(episodeName, ei, si),
          (prevScene = SceneTo_Scene(
            s,
            prevScene,
            makeNextScene(nextEpisode, ei, si, scenes.length)
          ))
        )
      )
    );
    return script;
  }, [props.script]);

  useEffect(() => {
    changeScript(script.get(props.startScene) ?? null);
  }, [script, props.startScene, changeScript]);

  const handleKeyboard = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Enter' || e.key === 'ArrowRight') {
        if (isSelect) return;
        changeScript(script.get(next ?? '') ?? null);
      }
    },
    [next, isSelect, changeScript, script]
  );

  useEffect(() => {
    document.addEventListener('keydown', handleKeyboard);
    return () => document.removeEventListener('keydown', handleKeyboard);
  }, [handleKeyboard]);

  return (
    <GameboardContainer>
      <BackgroundContainer
        className={
          animation
            ? `animate__animated animate__${animation} ${Math.random().toString()}`
            : undefined
        }
      >
        {sceneState === 'default' ? (
          <TextScene
            background={background}
            text={text}
            character={character}
            characterImg={characterImg}
            characterAnimation={characterAnimation}
            onClick={() => changeScript(script.get(next ?? '') ?? null)}
          />
        ) : null}
        {sceneState === 'black' ? (
          <BlackScene
            text={text}
            onClick={() => changeScript(script.get(next ?? '') ?? null)}
          />
        ) : null}
        {sceneState === 'centerBlack' ? (
          <CenterBlackScene
            text={text}
            onClick={() => changeScript(script.get(next ?? '') ?? null)}
          />
        ) : null}
        {isSelect ? (
          <SelectScene
            selectList={selectList}
            script={script}
            changeScript={changeScript}
          />
        ) : null}
        {end ? (
          <ReStart
            text="다시 시작하기"
            onClick={() =>
              changeScript(script.get(props.startScene ?? '') ?? null)
            }
          />
        ) : null}
      </BackgroundContainer>
    </GameboardContainer>
  );
};

export default Gameboard;
