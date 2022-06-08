import styled from 'styled-components';
import { contMaxWidth, contWidth, headerHeight, textColor } from 'styles/styled';

export const MainContainer = styled.div`
  min-width: 100vw;
  width: 100vw;
  min-height: 100vh;
  height: max-content;
  color: ${textColor};
`;

export const BgImage = styled.img`
  position: fixed;
  top: 0;
  left: 0;
  min-width: 1290px;
  width: 98.9vw;
  height: auto;
  z-index: 0;
`;

export const Container = styled.div`
  height: calc(100vh - ${headerHeight});
  width: max-content;
  position: relative;
  margin: auto;
  width: ${contWidth};
  max-width: ${contMaxWidth};
  z-index: 1;
`;
