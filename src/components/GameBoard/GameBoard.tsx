import styled from '@emotion/styled';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import {
  AnimationState,
  ISelection,
  Scene,
  SceneState,
  Script,
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

  const [selectList, setSelectList] = useState<ISelection[] | null>(null);

  const [next, setNext] = useState<string | null>(null);

  const [background, setBackground] = useState<string | null>(null);

  const [animation, setAnimation] = useState<AnimationState | null>(null);

  const end = next === null;
  const isSelect = Array.isArray(selectList) && selectList.length >= 1;

  const changeScript = useCallback((nextScript: Scene | null) => {
    if (!nextScript) return;

    nextScript.addText
      ? setText((prev) => prev + '\n' + nextScript.text)
      : setText(nextScript.text);

    if (nextScript.sceneState !== undefined)
      setSceneState(nextScript.sceneState);
    if (nextScript.character !== undefined) setCharacter(nextScript.character);
    if (nextScript.characterImg !== undefined)
      setCharacterImg(nextScript.characterImg);

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
    const script = new Map<string, Scene>();
    props.script.forEach((e) =>
      e.forEach(([n, s]) =>
        Array.isArray(s.text)
          ? s.text.forEach((text) => script.set(n, { ...s, text: text }))
          : script.set(n, s)
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
