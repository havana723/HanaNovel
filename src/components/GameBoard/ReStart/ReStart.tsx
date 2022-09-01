import styled from '@emotion/styled';
import React from 'react';

interface ReStartProps {
  text: string;
  onClick: () => void;
}

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

const ReStart: React.FC<ReStartProps> = (props) => {
  const { text, onClick } = props;

  return (
    <>
      <ReStartFlex>
        <ButtonContainer onClick={onClick}>
          <span>{text}</span>
        </ButtonContainer>
      </ReStartFlex>
    </>
  );
};

export default ReStart;
