import styled from '@emotion/styled';
import React from 'react';
import { useSceneContext } from '../../../contexts/SceneContext';

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

const ButtonContainer = styled.button`
  height: 15%;
  width: 60%;
  background-color: black;
  color: white;
  font-size: 4vmin;
  text-align: center;
  border: white solid 1px;
  z-index: 200;
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0px 0px 15px white;
  }
`;

const ReStart: React.FC = () => {
  const scene = useSceneContext();
  const { startScene, changeScript } = scene;

  return (
    <>
      <ReStartFlex>
        <ButtonContainer onClick={() => changeScript(0, startScene)}>
          <span>다시 시작하기</span>
        </ButtonContainer>
      </ReStartFlex>
    </>
  );
};

export default ReStart;
