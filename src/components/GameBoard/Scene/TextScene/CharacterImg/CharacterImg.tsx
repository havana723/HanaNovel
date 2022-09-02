import styled from '@emotion/styled';
import React from 'react';
import { AnimationState } from '../../../../../types';

interface CharacterImgProps {
  characterImg: string[] | null;
  characterAnimation: AnimationState[] | null;
}

const CharacterFlex = styled.div`
  display: flex;
  justify-content: space-evenly;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
`;

const CharacterContainter = styled.div`
  height: 120%;
  width: 0;
  padding-top: 5%;
  flex-grow: 0;
`;

const CharacterImg: React.FC<CharacterImgProps> = (props) => {
  const { characterImg, characterAnimation } = props;

  return (
    <CharacterFlex>
      {characterImg
        ? characterImg.map((c, i) => (
            <CharacterContainter
              className={
                characterAnimation && characterAnimation[i]
                  ? `animate__animated animate__${
                      characterAnimation[i]
                    } ${Math.random().toString()}`
                  : undefined
              }
              key={c + i}
            >
              <img
                src={c}
                style={{
                  height: '100%',
                  transform: 'translateX(-50%)',
                }}
                alt={c}
              />
            </CharacterContainter>
          ))
        : null}
    </CharacterFlex>
  );
};

export default CharacterImg;
