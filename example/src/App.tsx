import styled from '@emotion/styled';
import 'animate.css';
import { Gameboard } from 'hana-novel';
import './App.css';
import { script } from './script/script';

const Background = styled.div`
  height: 100%;
  width: 100%;
  background: black;
  object-fit: contain;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function App() {
  return (
    <Background>
      <Gameboard script={script} startScene="start" />
    </Background>
  );
}

export default App;
