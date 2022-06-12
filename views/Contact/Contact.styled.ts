import styled from 'styled-components';
import bgImage from 'assets/bg4.jpg';
import { headerHeight } from 'styles/styled';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
`;

export const BgContainer = styled.div`
  background-attachment: fixed;
  background-image: url(${bgImage.src});
  background-position: 0px 0px;
  background-repeat: repeat;
  background-size: 100vw auto;
  width: 100%;
  min-height: calc(100% - ${headerHeight});
  margin-top: -1px;
`;
