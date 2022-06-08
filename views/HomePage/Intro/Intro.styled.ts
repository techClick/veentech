import styled from 'styled-components';

export const Container = styled.div`
  height: max-content;
  position: absolute;
  bottom: 19vh;
  left: 0;
`;

export const IntroText = styled.div`
  font-weight: 600;
  margin-top: 300px;
  width: 60vw;
  max-width: 830px;
  line-height: 1.4;
  font-size: calc(5px + 2vw);
  @media(max-width: 900px) {
    font-size: calc(10px + 2vw);
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
