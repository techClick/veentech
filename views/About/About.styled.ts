import styled from 'styled-components';
import bgImage from 'assets/bg3.jpg';
import { headerColor, headerHeight } from 'styles/styled';

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

export const BgContainer2 = styled.div`
  background-attachment: fixed;
  background-image: url(${bgImage.src});
  background-position: 0px 0px;
  background-repeat: repeat;
  width: 100%;
  height: max-content;
  margin-top: -1px;
  box-shadow: inset 0 -300px 50px -50px ${headerColor};
  @media (max-width: 565px) {
    background-position: center top;
    box-shadow: inset 0 -380px 50px -50px ${headerColor};
  }
`;
