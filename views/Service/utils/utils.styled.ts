import Color from 'color';
import styled from 'styled-components';
import { textColor2 } from 'styles/styled';
import { textColor } from 'views/components/Header/utils/styled';

export const WhitePart = styled.span`
  color: ${textColor};
  cursor: pointer;
  &:hover {
    color: white;
    text-decoration: underline;
  }
`;

export const Big = styled.span`
  color: ${Color('lightgreen').lighten(0.125).toString()};
  font-weight: 500;
`;

export const Small = styled.span`
  font-size: calc(13px + 0.45vw);
  color: ${textColor2};
`;
