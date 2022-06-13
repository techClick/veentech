import Color from 'color';
import styled from 'styled-components';
import { headerColor, textColor2, textColor4 } from 'styles/styled';
import { optionsColor } from 'views/HomePage/TechOptions/TechOptions.styled';

export const Container = styled.div`
  background: ${headerColor};
  width: 100%;
  height: max-content;
  padding: 25px 0;
  padding-bottom: 20px;
  color: ${textColor4};
`;

export const Label = styled.div`
  font-size: calc(16px + 1.5vw);
  font-weight: 500;
`;

export const AssureCont = styled.div`
  margin-top: 25px;
  width: 100%;
  height: max-content;
`;

const borderColor = Color(optionsColor).lighten(2.7).toString();
const setOfTwoRes = '1157px';
const setOfOneRes = '555px';
export const Assurance = styled.div`
  border-radius: 35px;
  border: 2px solid ${borderColor};
  padding: 25px;
  padding-bottom: 35px;
  // color: ${borderColor};
  width: calc((100% - 60px) / 4);
  margin-right: 15px;
  height: calc(190px + 6vw);
  vertical-align: top;
  display: inline-block;
  margin-bottom: 15px;
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
`;

export const Icon = styled.div`
  transform: scale(0.85);
`;

export const Name = styled.div`
  font-size: calc(10px + 0.5vw);
  font-weight: 500;
  margin: auto;
  margin-top: 5px;
  width: max-content;
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
  @media(max-width: ${setOfTwoRes}) {
    margin-top: 5%;
    font-size: calc(11.25px + 0.325vw);
  }
  @media(max-width: ${setOfOneRes}) {
    margin-top: 19px;
    font-size: calc(12px + 0.5vw);
  }
`;
