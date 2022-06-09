import styled from 'styled-components';

export const Container = styled.div`
  height: max-content;
  position: absolute;
  bottom: 18vh;
  left: 0;
`;

export const IntroText = styled.div`
  font-weight: 600;
  margin-top: 300px;
  width: 50vw;
  max-width: 830px;
  line-height: 1.4;
  font-size: calc(15px + 1vw);
  @media(max-width: 1150px) {
    // font-size: calc(12px + 2vw);
  }
  @media(max-width: 600px) {
    width: 70vw;
  }
`;

export const ButtonDiv = styled.div`
  margin-top: 30px;
  @media(max-width: 900px) {
    margin-top: 20px;
  }
`;
