import styled from 'styled-components';
import bgImage from 'assets/bg3.jpg';
import { headerHeight, textColor2 } from 'styles/styled';
import Color from 'color';

export const MainContainer = styled.div`
  width: 100vw;
  height: 100vh;
`;

export const BgContainer = styled.div`
  background-attachment: fixed;
  background-image: url(${bgImage.src});
  background-position: 0px 0px;
  background-repeat: repeat;
  width: 100%;
  min-height: calc(100% - ${headerHeight});
  margin-top: -1px;
`;

export const Container = styled.div`
  position: absolute;
  bottom: calc(-30px + 5vw); 
  left: 0;
  height: max-content;
`;

const fontChangeRes = '260px';
export const Label = styled.div`
  font-size: calc(16.5px + 0.85vw);
  font-weight: 500;
  max-width: 80%;
  // font-family: Poppins;
  @media(max-width: ${fontChangeRes}) {
    font-size: calc(11px + 2vw);
  }
`;

const labelChangeRes = '700px';
export const Label2 = styled.div`
  margin-top: 15px;
  font-size: calc(14.5px + 0.2vw);
  max-width: 70%;
  color: ${Color(textColor2).darken(0.15).toString()};
  font-weight: 400;
  font-family: Poppins;
  @media(max-width: ${labelChangeRes}) {
    max-width: 90%;
  }
  @media(max-width: ${fontChangeRes}) {
    font-size: calc(9px + 2vw);
  }
`;

export const Label3 = styled.div`
  margin-top: 60px;
  font-size: calc(14.5px + 0.275vw);
  max-width: 55%;
  color: ${textColor2};
  font-weight: 300;
  @media(max-width: ${labelChangeRes}) {
    max-width: 80%;
  }
  @media(max-width: ${fontChangeRes}) {
    font-size: calc(8.5px + 2vw);
  }
`;
