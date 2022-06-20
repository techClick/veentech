import Color from 'color';
import styled from 'styled-components';
import { buttonColor, headerColor, textColor, textColor2 } from 'styles/styled';

export const MainContainer = styled.div`
  width: 100%;
  padding-bottom: 25px;
`;

export const optionsColor = Color(headerColor).lighten(0.6).toString();
const oneOptionRes = '433px';
export const TechOption = styled.div`
  background: linear-gradient(${optionsColor}, ${Color(optionsColor).darken(0.1).toString()});
  background: ${optionsColor};
  display: inline-block;
  min-width: 205px;
  width: calc(((100% - 75px) / 3));
  margin-right: 25px;
  height: 290px;
  margin-bottom: 25px;
  vertical-align: top;
  border-radius: 8px;
  border: 1px solid ${Color(headerColor).darken(0.1).toString()};
  position: relative;
  @media(max-width: 1100px) {
    width: calc(((100% - 50px) / 2));
  }
  @media(max-width: 733px) {
    width: 100%;
    margin-right: 0;
    min-width: 0;
    height: 250px;
  }
  @media(max-width: ${oneOptionRes}) {
    padding-bottom: 25px;
    height: max-content;
  }
`;

const pad = '33px';
export const OptionName = styled.div`
  font-size: calc(9px + 0.5vw);
  font-weight: 500;
  padding: 25px ${pad};
  border-bottom: 1px solid ${Color(textColor).darken(0.7).toString()};
  position: relative;
  @media(max-width: 760px) {
    font-size: calc(13px + 0.5vw);
  }
  @media(max-width: 236px) {
    padding: 25px 10px;
  }
`;

export const IconCont = styled.div`
  position: absolute;
  right: 25px;
  bottom: 50%;
  transform: translateY(50%);
  color: ${Color(headerColor).darken(0.1).toString()};
  @media(max-width: 272px) {
    display: none;
  }
  @media(max-width: 257px) {
    right: 5px;
  }
`;

export const Icon = styled.div`
  transform: scale(0.8);
`;

export const Icon2 = styled.div`
  transform: scale(0.825);
  color: ${Color(headerColor).lighten(1.65).toString()};
`;

export const Description = styled.div`
  font-size: calc(12.25px + 0.25vw);
  font-weight: 300;
  line-height: 1.3;
  padding: 23px ${pad};
  padding-bottom: 0px;
  color: ${Color(textColor2).lighten(0).toString()};
  @media(max-width: 236px) {
    padding: 20px 10px;
    padding-bottom: 0px;
  }
`;

export const ButtonDiv = styled.div`
  margin-top: 30px;
  display: flex;
  position: absolute;
  bottom: 30px;
  margin-left: ${pad};
  @media(max-width: 900px) {
    margin-top: 20px;
  }
  @media(max-width: ${oneOptionRes}) {
    margin-top: 25px;
    bottom: 0;
    position: relative;
    height: max-content;
  }
  @media(max-width: 346px) {
    flex-direction: column;
  }
  @media(max-width: 203px) {
    margin-left: 10px;
  }
`;

export const Button = styled.div`
  color: white;
  padding: 10px 20px;
  border-radius: 3px;
  font-weight: 500;
  font-size: 14px;
  width: max-content;
  height: max-content;
  color: ${textColor2};
  margin-right: 18px;
  background: ${Color(optionsColor).lighten(0.3).toString()};
  cursor: pointer;
  &:hover {
    color: ${textColor};
    background: ${Color(optionsColor).darken(0.3).toString()};
  }
  @media(max-width: 376px) {
    margin-bottom: 15px;
  }
`;

export const MainButton = styled.div`
  color: white;
  padding: 10px 20px;
  border-radius: 3px;
  font-weight: 300;
  font-size: 14px;
  width: max-content;
  height: max-content;
  color: ${Color(buttonColor).lighten(0.125).toString()};
  cursor: pointer;
  &:hover {
    color: ${Color('white').darken(0.9).toString()};
    background: ${Color(buttonColor).lighten(0).toString()};
  }
`;

export const Help = styled.div`
  font-weight: 300;
  max-width: 100%;
  width: max-content;
  line-height: 1.3;
  font-size: calc(11px + 0.25);
  color: ${textColor2};
  background: ${optionsColor};
  padding: 21px 30px;
  margin-bottom: 25px;
  border-radius: 2px;
`;

export const WhitePart = styled.span`
  color: ${textColor};
  text-decoration: underline solid ${textColor} 1px;
  cursor: pointer;
  &:hover {
    color: white;
  }
`;

export const PricesCont = styled.div`
  background: ${optionsColor};
  padding: 25px 30px;
  border-radius: 8px;
  width: max-content;
  max-width: 100%;
  display: inline-block;
  margin-bottom: 25px;
`;

export const PricesDesc = styled.div`
  font-size: calc(11px + 0.25);
  font-weight: 300;
  color: ${textColor2};
`;

export const PriceBtnDiv = styled.div`
  margin-top: 30px;
  width: max-content;
`;

export const PriceButton = styled.div`
  color: white;
  padding: 9px 20px;
  border-radius: 3px;
  font-weight: 400;
  font-size: 14px;
  width: max-content;
  height: max-content;
  background: ${Color(buttonColor).lighten(0.35).toString()};
  cursor: pointer;
  color: ${Color(optionsColor).lighten(0.3).toString()};
  &:hover {
    color: ${Color('white').darken(0.9).toString()};
    background: ${Color(buttonColor).lighten(0).toString()};
  }
`;

export const Transparent = styled.span`
  opacity: 0.9;
`;
