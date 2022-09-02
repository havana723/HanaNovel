import React from 'react';
import { AnimationState } from '../../../../types';
import { CharacterImg } from './CharacterImg';
import { CharacterName } from './CharacterName';
import { TextBox } from './TextBox';

interface TextSceneProps {
  background: string | null;
  text: string | null;
  character: string | null;
  characterImg: string[] | null;
  characterAnimation: AnimationState[] | null;
  onClick: () => void;
}

const TextScene: React.FC<TextSceneProps> = (props) => {
  const {
    background,
    text,
    character,
    characterImg,
    characterAnimation,
    onClick,
  } = props;

  return (
    <>
      {background ? (
        <img
          src={background}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          alt={background}
        />
      ) : null}
      <CharacterImg
        characterImg={characterImg}
        characterAnimation={characterAnimation}
      />
      <TextBox text={text} onClick={onClick} />
      <CharacterName character={character} />
    </>
  );
};

export default TextScene;
