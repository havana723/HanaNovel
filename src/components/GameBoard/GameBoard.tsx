import styled from '@emotion/styled';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { ISelection, Scene, SceneState, Script } from '../../types';
import CharacterImg from './CharacterImg/CharacterImg';
import { SelectButton } from './SelectButton';
import { TextBox } from './TextBox';
import { TextRenderer } from './TextRenderer';

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

const ReStartFlex = styled.div`
  position: absolute;
  bottom: -20%;
  left: 25%;
  height: 80%;
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CharacterNameContainer = styled.div`
  width: 20%;
  height: 7%;
  background-color: #000000c3;
  border-radius: 5px;
  position: absolute;
  left: 5%;
  bottom: 35%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 3vmin;
  color: white;
`;

const BlackContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
  z-index: 50;
`;

const BlackTextBox = styled.div`
  width: 90%;
  height: 80%;
  color: white;
  font-size: 3vmin;
`;

const BlackCenterContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
  z-index: 100;
`;

const BlackCenterTextBox = styled.div`
  width: 90%;
  color: white;
  font-size: 5vmin;
  text-align: center;
`;

const SelectContainer = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: #000000c3;
  z-index: 150;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  justify-content: space-evenly;
`;

const Gameboard: React.FC<GameBoardProps> = (props) => {
  const [sceneState, setSceneState] = useState<SceneState>(null);

  const [text, setText] = useState<string | null>(null);
  const [textArray, setTextArray] = useState<string[] | null>(null);
  const [textIndex, setTextIndex] = useState<number>(0);

  const [character, setCharacter] = useState<string | null>(null);
  const [characterImg, setCharacterImg] = useState<string[] | null>(null);

  const [selectList, setSelectList] = useState<ISelection[] | null>(null);

  const [next, setNext] = useState<string | null>(null);

  const [background, setBackground] = useState<string | null>(null);

  const end = next === null;
  const isSelect = Array.isArray(selectList) && selectList.length >= 1;

  const changeScript = useCallback(
    (nextScript: Scene | null) => {
      if (!nextScript) return;

      const nextArray =
        typeof nextScript.text === 'string'
          ? [nextScript.text]
          : nextScript.text;
      setText(nextArray[0]);
      setTextArray(nextArray);
      setTextIndex((prev) => prev + 1);

      if (nextScript.sceneState !== undefined)
        setSceneState(nextScript.sceneState);
      if (nextScript.character !== undefined)
        setCharacter(nextScript.character);
      if (nextScript.characterImg !== undefined)
        setCharacterImg(nextScript.characterImg);

      if (nextScript.background !== undefined)
        setBackground(nextScript.background);

      if (Array.isArray(nextScript.next)) setSelectList(nextScript.next);
      else {
        setNext(nextScript.next);
        setSelectList(null);
      }
    },
    [textArray, textIndex]
  );

  const script = useMemo(() => {
    const script = new Map<string, Scene>();
    props.script.forEach((e) => e.forEach(([n, s]) => script.set(n, s)));
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
      <BackgroundContainer>
        {background ? (
          <img
            src={background}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            alt={background}
          />
        ) : null}
        <CharacterImg characterImg={characterImg} />
        <TextBox
          text={text}
          onClick={() => changeScript(script.get(next ?? '') ?? null)}
        />
        {character ? (
          <CharacterNameContainer>
            <span>{character}</span>
          </CharacterNameContainer>
        ) : null}
        {sceneState === 'black' ? (
          <BlackContainer
            onClick={() => changeScript(script.get(next ?? '') ?? null)}
          >
            <BlackTextBox>
              <TextRenderer text={text ?? ''} />
            </BlackTextBox>
          </BlackContainer>
        ) : null}
        {sceneState === 'centerBlack' ? (
          <BlackCenterContainer
            onClick={() => changeScript(script.get(next ?? '') ?? null)}
          >
            <BlackCenterTextBox>
              <TextRenderer text={text ?? ''} />
            </BlackCenterTextBox>
          </BlackCenterContainer>
        ) : null}
        {isSelect ? (
          <SelectContainer>
            {selectList
              ? selectList.map((s, i) => (
                  <SelectButton
                    text={s.text}
                    key={s.text + i}
                    onClick={() => changeScript(script.get(s.next) ?? null)}
                  />
                ))
              : null}
          </SelectContainer>
        ) : null}
        {end ? (
          <ReStartFlex>
            <SelectButton
              text={'다시 시작하기'}
              onClick={() => changeScript(script.get(props.startScene) ?? null)}
            />
          </ReStartFlex>
        ) : null}
      </BackgroundContainer>
    </GameboardContainer>
  );
};

export default Gameboard;
