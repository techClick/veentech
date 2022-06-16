import styled from 'styled-components';
import { textColor } from 'views/components/Header/utils/styled';

export const WhitePart = styled.span`
  color: ${textColor};
  cursor: pointer;
  &:hover {
    color: white;
    text-decoration: underline;
  }
`;
