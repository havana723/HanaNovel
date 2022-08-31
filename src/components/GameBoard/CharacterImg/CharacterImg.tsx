import styled from '@emotion/styled';
import React from 'react';

interface CharacterImgProps {
  characterImg: string[] | null;
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
  const characterImg = props.characterImg;

  return (
    <CharacterFlex>
      {characterImg
        ? characterImg.map((c) => (
            <CharacterContainter key={c}>
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
