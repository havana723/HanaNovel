import styled from '@emotion/styled';
import React from 'react';
import { useSceneContext } from '../../../../contexts/SceneContext';
import { SelectButton } from './SelectButton';

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

const SelectScene: React.FC = () => {
  const scene = useSceneContext();
  const { next, changeScript } = scene;

  return (
    <>
      <SelectContainer>
        {Array.isArray(next)
          ? next.map((s, i) => (
              <SelectButton
                text={s.text}
                key={s.text + i}
                onClick={() => changeScript(i)}
              />
            ))
          : null}
      </SelectContainer>
    </>
  );
};

export default SelectScene;
