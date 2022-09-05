import React from 'react';
import { useSceneContext } from '../../../../contexts/SceneContext';

const FullScreenScene: React.FC = () => {
  const scene = useSceneContext();
  const { background, changeScript } = scene;

  return (
    <>
      <img
        src={background}
        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        onClick={() => changeScript()}
        alt={background}
      />
    </>
  );
};

export default FullScreenScene;
