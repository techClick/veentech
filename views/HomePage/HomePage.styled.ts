import styled from 'styled-components';
import bgImage from 'assets/bg.jpg';
import bgImage3 from 'assets/bg3.jpg';
import { headerColor, textColor } from 'styles/styled';

export const MainContainer = styled.div`
  min-width: 100vw;
  width: 100vw;
  min-height: 100vh;
  height: max-content;
  color: ${textColor};
`;

export const BgContainer = styled.div`
  background-attachment: fixed;
  background-image: url(${bgImage.src});
  background-repeat: repeat;
  width: 100%;
  height: 100%;
  margin-top: -1px;
  @media (max-width: 480px) {
    background-position: left bottom;
  }
`;

export const BgContainer2 = styled.div`
  background: ${headerColor};
  width: 100%;
  height: max-content;
  margin-top: -1px;
`;

export const BgContainer3 = styled.div`
  background-attachment: fixed;
  background-image: url(${bgImage3.src});
  background-repeat: repeat;
  width: 100%;
  min-height: 100%;
  height: max-content;
  margin-top: -1px;
  box-shadow: inset 0 -300px 4px -4px ${headerColor};
  padding-bottom: 25px;
  @media (max-width: 565px) {
    background-position: center top;
    box-shadow: inset 0 -325px 4px -4px ${headerColor};
  }
`;
