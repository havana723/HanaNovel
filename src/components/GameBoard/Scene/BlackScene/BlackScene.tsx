import styled from '@emotion/styled';
import React from 'react';
import { TextRenderer } from '../../../TextRenderer';

interface GameSceneProps {
  text: string | null;
  onClick: () => void;
}

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

const BlackScene: React.FC<GameSceneProps> = (props) => {
  const { onClick, text } = props;

  return (
    <>
      <BlackContainer onClick={onClick}>
        <BlackTextBox>
          <TextRenderer text={text ?? ''} />
        </BlackTextBox>
      </BlackContainer>
    </>
  );
};

export default BlackScene;
