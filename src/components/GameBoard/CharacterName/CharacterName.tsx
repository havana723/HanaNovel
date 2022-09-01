import styled from '@emotion/styled';
import React from 'react';

interface CharacterNameProps {
  character: string | null;
}

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

const CharacterName: React.FC<CharacterNameProps> = (props) => {
  const character = props.character;

  return (
    <>
      {character ? (
        <CharacterNameContainer>
          <span>{character}</span>
        </CharacterNameContainer>
      ) : null}
    </>
  );
};

export default CharacterName;
