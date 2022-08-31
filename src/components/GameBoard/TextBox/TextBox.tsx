import styled from '@emotion/styled';
import React from 'react';
import { TextRenderer } from '../TextRenderer';

interface TextBoxProps {
  text: string | null;
  onClick: () => void;
}

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

const TextBoxContainerContainer = styled.div`
  width: 95%;
  height: 75%;
  color: white;
  font-size: 3vmin;
`;

const TextBox: React.FC<TextBoxProps> = (props) => {
  const { text, onClick } = props;

  return (
    <TextBoxContainer onClick={() => onClick}>
      <TextBoxContainerContainer>
        <TextRenderer text={text ?? ''} />
      </TextBoxContainerContainer>
    </TextBoxContainer>
  );
};

export default TextBox;
