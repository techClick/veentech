import styled from 'styled-components';
import { headerColor, textColor, textColor2 } from 'styles/styled';

export const MainContainer = styled.div`
  width: 100%;  
  margin-top: -1px;
`;

export const DarkContainer = styled.div`
  width: 100%;
  padding-top: 40px;
  position: relative;
  background: ${headerColor};
`;

export const Header = styled.div`
  font-weight: 800;
  max-width: 100%;
  line-height: 1.5;
  font-size: calc(14px + 0.35vw);
  font-family: Poppins;
  padding: 14px 25px;
  padding-bottom: 25px;
  padding-left: 0px;
  border-bottom:
  border-radius: 6px;
  width: max-content;
  border-bottom: 1px solid ${textColor};
`;

export const Label = styled.div`
  font-weight: 300;
  max-width: 100%;
  width: max-content;
  line-height: 1.3;
  font-size: calc(11px + 0.275vw);
  font-family: Lato;
  color: ${textColor2};
  margin-top: 2px;
`;
