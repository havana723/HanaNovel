import styled from '@emotion/styled';
import React, { useCallback, useEffect } from 'react';
import {
  SceneContextProvider,
  useSceneContext,
} from '../../contexts/SceneContext';
import { Script } from '../../types';
import { ReStart } from './ReStart';
import { BlackScene, CenterBlackScene, SelectScene, TextScene } from './Scene';

interface GameboardProps {
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

const GameboardElement: React.FC = () => {
  const scene = useSceneContext();
  const { sceneState, animation, next, startScene, changeScript } = scene;

  const isSelect = Array.isArray(next);
  const end = next === null;

  useEffect(() => {
    changeScript(0, startScene);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleKeyboard = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Enter' || e.key === 'ArrowRight') {
        if (isSelect) return;
        changeScript();
      }
    },
    [isSelect, changeScript]
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
        {sceneState === 'default' ? <TextScene /> : null}
        {sceneState === 'black' ? <BlackScene /> : null}
        {sceneState === 'centerBlack' ? <CenterBlackScene /> : null}
        {isSelect ? <SelectScene /> : null}
        {end ? <ReStart /> : null}
      </BackgroundContainer>
    </GameboardContainer>
  );
};

const Gameboard: React.FC<GameboardProps> = (props) => {
  return (
    <SceneContextProvider {...props}>
      <GameboardElement />
    </SceneContextProvider>
  );
};

export default Gameboard;
