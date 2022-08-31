import styled from "@emotion/styled";
import React from "react";

interface SelectButtonProps {
  text: string;
  onClick: () => void;
}

const ButtonContainer = styled.button`
  height: 15%;
  width: 60%;
  background-color: black;
  color: white;
  font-size: 4vmin;
  text-align: center;
  border: white solid 1px;
  z-index: 200;
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0px 0px 15px white;
  }
`;

const SelectButton: React.FC<SelectButtonProps> = (props) => {
  return (
    <ButtonContainer onClick={props.onClick}>
      <span>{props.text}</span>
    </ButtonContainer>
  );
};

export default SelectButton;
