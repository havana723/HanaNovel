import styled from '@emotion/styled';
import React from 'react';
import { TextRenderer } from '../../../TextRenderer';

interface GameSceneProps {
  text: string | null;
  onClick: () => void;
}

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

const CenterBlackScene: React.FC<GameSceneProps> = (props) => {
  const { onClick, text } = props;

  return (
    <>
      <BlackCenterContainer onClick={onClick}>
        <BlackCenterTextBox>
          <TextRenderer text={text ?? ''} />
        </BlackCenterTextBox>
      </BlackCenterContainer>
    </>
  );
};

export default CenterBlackScene;
