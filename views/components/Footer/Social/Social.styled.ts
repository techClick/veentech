import styled from 'styled-components';
import { headerColor, textColor2 } from 'styles/styled';

export const Container = styled.div`
  margin-top: 15px;
  display: flex;
`;

export const IconContainer = styled.div<any>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 41px;
  height: 38px;
  background: ${textColor2};
  border-radius: 12px;
  color: ${headerColor};
  margin-right: ${(props) => !props.isLast && '10px'};
  cursor: pointer;
  &:hover {
  }
`;

export const Icon = styled.div`
  transform: scale(0.55);
`;
