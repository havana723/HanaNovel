import styled from '@emotion/styled';
import React from 'react';
import { ISelection, Scene } from '../../../../types';
import { SelectButton } from './SelectButton';

interface SelectSceneProps {
  selectList: ISelection[] | null;
  script: Map<string, Scene>;
  changeScript: (script: Scene | null) => void;
}

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

const SelectScene: React.FC<SelectSceneProps> = (props) => {
  const { selectList, changeScript, script } = props;

  return (
    <>
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
    </>
  );
};

export default SelectScene;
