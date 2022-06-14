import Color from 'color';
import styled from 'styled-components';
import { headerColor } from 'styles/styled';

export const Tab = styled.div<any>`
  width: max-content;
  min-width: 100%;
  padding: 10px 12px;
  display: flex;
  align-items: center;
  color: ${(props) => { return props.isSelected ? headerColor : 'white'; }};
  border-radius: 3px;
  margin-bottom: 1px;
  cursor: pointer;
  &:hover {
    background: ${Color(headerColor).lighten(0.25).toString()};
  }
  font-weight: 300;
`;
