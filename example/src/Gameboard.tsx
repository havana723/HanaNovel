import styled from "@emotion/styled";
import { useCallback, useEffect, useState } from "react";
import Button from "./components/button";
import TextRenderer from "./components/textRenderer";
import backgroundHotel from "./img/background-hotel.jpg";
import hanbyeol from "./img/hanbyeol.png";
import { Script, script } from "./script/script";

const GameboardContainer = styled.div`
  aspect-ratio: 16 / 9;
  background-color: black;
  position: relative;
  user-select: none;
  word-break: keep-all;

  @media (min-aspect-ratio: 16/9) {
    height: 100%;
  }
  @media (max-aspect-ratio: 16/9) {
    width: 100%;
  }
`;

const BackgroundContainer = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
  overflow: hidden;
`;

const CharacterFlex = styled.div`
  display: flex;
  justify-content: center;
`;

const CharacterContainter = styled.div`
  height: 130%;
  position: absolute;
  bottom: -40%;
`;

const ReStartFlex = styled.div`
  position: absolute;
  bottom: -20%;
  left: 25%;
  height: 80%;
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TextBoxContainer = styled.div`
  width: 90%;
  height: 30%;
  background-color: #000000c3;
  border-radius: 5px;
  position: absolute;
  left: 5%;
  bottom: 5%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TextBox = styled.div`
  width: 95%;
  height: 75%;
  color: white;
  font-size: 3vmin;
`;

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

const BlackContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
  z-index: 50;
`;

const BlackTextBox = styled.div`
  width: 90%;
  height: 80%;
  color: white;
  font-size: 3vmin;
`;

const BlackCenterContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
  z-index: 100;
`;

const BlackCenterTextBox = styled.div`
  width: 90%;
  color: white;
  font-size: 5vmin;
  text-align: center;
`;

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

function Gameboard() {
  const [screenBlack, setScreenBlack] = useState<boolean>(false);
  const [screenCenterBlack, setScreenCenterBlack] = useState<boolean>(true);

  const [text, setText] = useState<string | null>(
    "내가 월드 파이널에 갈 수 있을 리 없잖아, 무리무리! (※무리가 아니었다?!)"
  );
  const [character, setCharacter] = useState<string | null>("");

  const [isSelect, setIsSelect] = useState<boolean>(false);
  const [selectList, setSelectList] = useState<string[] | null>(null);

  const [next, setNext] = useState<string[] | null>(["chapter1"]);

  const [background, setBackground] = useState<string | null>(backgroundHotel);

  const [end, setEnd] = useState<boolean>(false);

  function changeScript(nextScript: Script | null) {
    console.log(nextScript);

    if (!nextScript) return;

    if (nextScript.screenBlack === "on") setScreenBlack(true);
    if (nextScript.screenBlack === "off") setScreenBlack(false);
    if (nextScript.screenCenterBlack === "on") setScreenCenterBlack(true);
    if (nextScript.screenCenterBlack === "off") setScreenCenterBlack(false);

    setText(nextScript.text);
    setCharacter(nextScript.character ?? null);

    if (nextScript.isSelect === "on") setIsSelect(true);
    if (nextScript.isSelect === "off") setIsSelect(false);
    setSelectList(nextScript.selectList ?? null);

    if (nextScript.background) setBackground(nextScript.background);

    if (nextScript.end) setEnd(true);
    else setEnd(false);

    setNext(nextScript.next ?? null);
  }

  const handleKeyboard = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Enter" || e.key === "ArrowRight") {
        if (isSelect) return;
        changeScript(script.get(next ? next[0] : "") ?? null);
      }
    },
    [next, isSelect]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyboard);
    return () => document.removeEventListener("keydown", handleKeyboard);
  }, [handleKeyboard]);

  return (
    <GameboardContainer>
      <BackgroundContainer>
        {background ? (
          <img
            src={background}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
            alt="background"
          />
        ) : null}
        <CharacterFlex>
          <CharacterContainter>
            <img
              src={hanbyeol}
              style={{ width: "100%", height: "100%", objectFit: "contain" }}
              alt="hanbyeol"
            />
          </CharacterContainter>
        </CharacterFlex>
        <TextBoxContainer
          onClick={() => changeScript(script.get(next ? next[0] : "") ?? null)}
        >
          <TextBox>
            <TextRenderer text={text ?? ""} />
          </TextBox>
        </TextBoxContainer>
        {character ? (
          <CharacterNameContainer>
            <span>{character}</span>
          </CharacterNameContainer>
        ) : null}
        {screenBlack ? (
          <BlackContainer
            onClick={() =>
              changeScript(script.get(next ? next[0] : "") ?? null)
            }
          >
            <BlackTextBox>
              <TextRenderer text={text ?? ""} />
            </BlackTextBox>
          </BlackContainer>
        ) : null}
        {screenCenterBlack ? (
          <BlackCenterContainer
            onClick={() =>
              changeScript(script.get(next ? next[0] : "") ?? null)
            }
          >
            <BlackCenterTextBox>
              <TextRenderer text={text ?? ""} />
            </BlackCenterTextBox>
          </BlackCenterContainer>
        ) : null}
        {isSelect ? (
          <SelectContainer>
            {selectList
              ? selectList.map((s, i) => (
                  <Button
                    text={s}
                    key={s}
                    onClick={() =>
                      changeScript(script.get(next ? next[i] : "") ?? null)
                    }
                  />
                ))
              : null}
          </SelectContainer>
        ) : null}
        {end ? (
          <ReStartFlex>
            <Button
              text={"다시 시작하기"}
              onClick={() => changeScript(script.get("chapter1") ?? null)}
            />
          </ReStartFlex>
        ) : null}
      </BackgroundContainer>
    </GameboardContainer>
  );
}

export default Gameboard;
