import Color from 'color';
import styled from 'styled-components';
import { headerColor, textColor2, textColor4 } from 'styles/styled';

export const Container = styled.div`
  background: ${headerColor};
  width: 100%;
  height: max-content;
  padding-top: 10px;
  padding-bottom: 12px;
`;

export const Label = styled.div`
  font-weight: 800;
  max-width: 100%;
  line-height: 1.5;
  font-size: calc(14px + 0.35vw);
  font-family: Poppins;
  padding: 11px 25px;
  padding-right: 0px;
  padding-left: 0px;
  border-radius: 2px;
  width: max-content;
  color: ${textColor4};
  margin-top: 45px;
  margin-bottom: 7px;
  @media(max-width: 890px) {
    max-width: 80vw;
  }
`;

export const Label2 = styled.div`
  font-weight: 300;
  max-width: 100%;
  width: max-content;
  line-height: 1.3;
  font-size: calc(11px + 0.275vw);
  font-family: Lato;
  color: ${textColor2};
`;

export const AssureCont = styled.div`
  margin-top: 2px;
  width: 100%;
  height: max-content;
`;

const borderColor = Color(textColor2).darken(0.8).toString();
const setOfTwoRes = '1157px';
const setOfOneRes = '555px';
export const Assurance = styled.div`
  border-radius: 10px;
  border: 1px solid ${borderColor};
  padding: 25px;
  padding-bottom: 35px;
  width: calc((100% - 60px) / 4);
  margin-right: 15px;
  height: calc(190px + 6vw);
  vertical-align: top;
  display: inline-block;
  margin-bottom: 15px;
  box-shadow: inset 0px 0px 9px ${Color(headerColor).darken(3.5).toString()};
  @media(max-width: ${setOfTwoRes}) {
    height: calc(220px + 3vw);
    width: calc((100% - 30px) / 2);
  }
  @media(max-width: ${setOfOneRes}) {
    height: max-content;
    width: calc(100%);
  }
`;

export const IconContainer = styled.div`
  width: 90px;
  height: 90px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  color: ${Color(textColor2).darken(0.45).toString()};
`;

export const Icon = styled.div`
  transform: scale(0.6);
`;

export const Name = styled.div`
  font-size: calc(10px + 0.5vw);
  font-weight: 500;
  margin: auto;
  margin-top: -2px;
  width: max-content;
  color: ${Color(textColor2).darken(0).toString()};
  @media(max-width: ${setOfTwoRes}) {
    font-size: calc(12.5px + 0.5vw);
  }
  @media(max-width: ${setOfOneRes}) {
    font-size: calc(15px + 0.5vw);
  }
`;

export const Desc = styled.div`
  font-size: calc(8px + 0.5vw);
  font-weight: 300;
  margin: auto;
  margin-top: 11%;
  width: max-content;
  width: 70%;
  text-align: center;
  color: ${textColor2};
  line-height: 1.4;
  @media(max-width: ${setOfTwoRes}) {
    margin-top: 5%;
    font-size: calc(11.25px + 0.325vw);
  }
  @media(max-width: ${setOfOneRes}) {
    margin-top: 19px;
    font-size: calc(12px + 0.5vw);
  }
`;
