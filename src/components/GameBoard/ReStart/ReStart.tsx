import styled from '@emotion/styled';
import React from 'react';
import { SelectButton } from '../SelectButton';

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

const ReStart: React.FC<ReStartProps> = (props) => {
  const { text, onClick } = props;

  return (
    <>
      <ReStartFlex>
        <SelectButton text={text} onClick={onClick} />
      </ReStartFlex>
    </>
  );
};

export default ReStart;
