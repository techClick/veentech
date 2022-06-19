import Color from 'color';
import styled from 'styled-components';
import { headerColor, textColor } from 'styles/styled';

export const Container = styled.div<any>`
  position: absolute;
  right: 0px;
  top: -5px;
  color: ${(props) => props.whiteX ? textColor : headerColor};
  cursor: pointer;
  &:hover {
    color: ${Color('red').lighten(0.4).toString()};
  }
`;

export const ClearIcon = styled.div<any>`
  transform: scaleX(0.35) scaleY(0.3);
  margin-left: 1px;
  margin-top: 1px;
`;
