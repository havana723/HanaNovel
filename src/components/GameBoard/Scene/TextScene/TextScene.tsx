import React from 'react';
import { useSceneContext } from '../../../../contexts/SceneContext';
import { CharacterImg } from './CharacterImg';
import { CharacterName } from './CharacterName';
import { TextBox } from './TextBox';

const TextScene: React.FC = () => {
  const scene = useSceneContext();
  const {
    text,
    character,
    characterAnimation,
    characterImg,
    background,
    changeScript,
  } = scene;

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
      <TextBox text={text} onClick={() => changeScript()} />
      <CharacterName character={character} />
    </>
  );
};

export default TextScene;
