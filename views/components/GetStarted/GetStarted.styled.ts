import Color from 'color';
import styled from 'styled-components';
import { headerColor } from 'styles/styled';

export const Container = styled.div`
  position: fixed;
  z-index: 5;
  right: 50%;
  bottom: 50%;
  transform: translate(50%, 50%);
  border-radius: 5px;
  background: ${Color(headerColor).lighten(6).toString()};
  max-width: 375px;
  line-height: 1.3;
  width: 90%;
  color: ${headerColor};
`;

export const Label1 = styled.div`
  font-size: calc(13.35px + 0.25vw);
  font-weight: 600;
  padding: 25px 30px;
  padding-bottom: 0;
  @media(max-width: 268px) {
    padding: 5px;
  }
`;

export const Label2 = styled.div`
  font-size: calc(11px + 0.25vw);
  font-weight: 400;
  margin-top: 25px;
  padding: 0px 30px;
  @media(max-width: 268px) {
    padding: 5px;
  }
`;

export const InputSection = styled.div`
  padding: 25px 30px;
  border-radius: 5px;
  margin-top: 25px;
  background: ${Color('white').darken(0.15).toString()};
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  @media(max-width: 268px) {
    padding: 5px;
    margin-top: 5px;
  }
`;

export const Detail = styled.div`
  font-family: Poppins;
  font-size: 14px;
  font-weight: 400;
  margin-bottom: 2px;
  color: ${headerColor};
`;

export const Input = styled.input`
  width: 100%;
  max-width: 225px;
  height: 38px;
  font-family: Poppins;
  font-size: 14.5px;
  padding: 0 9px;
`;

export const Detail2 = styled(Detail)`
  margin-top: 12px;
`;

export const phoneDiv = styled.div`
  height: 8px;
`;

export const ButtonDiv = styled(Detail)`
  margin-top: 20px;
`;
