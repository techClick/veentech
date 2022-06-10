import styled from 'styled-components';
import bgImage from 'assets/bg.jpg';
import bgImage2 from 'assets/bg2.jpg';
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
  background-position: 0px 0px;
  background-repeat: repeat;
  width: 100%;
  min-height: 100%;
  height: max-content;
  margin-top: -1px;
`;

export const BgContainer2 = styled.div`
  background: ${headerColor};
  width: 100%;
  height: max-content;
  margin-top: -1px;
`;