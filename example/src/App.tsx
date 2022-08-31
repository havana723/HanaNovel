import styled from "@emotion/styled";
import "./App.css";
import Gameboard from "./Gameboard";

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
      <Gameboard />
    </Background>
  );
}

export default App;
