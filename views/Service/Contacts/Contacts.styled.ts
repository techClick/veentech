import Color from 'color';
import styled from 'styled-components';
import { textColor, textColor2 } from 'styles/styled';
import { optionsColor } from 'views/HomePage/TechOptions/TechOptions.styled';
import { detailsColor } from '../ServiceDesc/ServiceDesc.styled';

export const MoreCont = styled.div`
  background: ${detailsColor};
  padding: 20px 20px;
  padding-top: 15px;
  width: 100%;
  max-width: max-content;
  // margin: auto;
  margin-top: 15px;
  color: ${textColor2};
  border-radius: 5px;
  max-width: 560px;
  @media(max-width: 283px) {
    padding: 8px;
  }
`;

export const MoreDesc = styled.div`
  font-size: calc(12.75px + 0.175vw);
  font-weight: 300;
  line-height: 1.35;
`;

export const MoreBtnDiv = styled.div`
  width: max-content;
  margin-top: 25px;
  display: flex;
  @media(max-width: 221px) {
    flex-direction: column
  }
`;

export const MsgButton = styled.div`
  color: white;
  padding: 10px 20px;
  border-radius: 3px;
  font-weight: 500;
  font-size: 14px;
  width: max-content;
  height: max-content;
  color: ${textColor2};
  margin-right: 10px;
  background: ${Color(optionsColor).lighten(0.3).toString()};
  cursor: pointer;
  &:hover {
    color: ${textColor};
    background: ${Color(optionsColor).darken(0.3).toString()};
  }
  @media(max-width: 221px) {
    margin-bottom: 10px;
  }
`;

export const CallButton = styled.div`
  color: white;
  padding: 10px 20px;
  border-radius: 3px;
  font-weight: 500;
  font-size: 14px;
  width: max-content;
  height: max-content;
  color: ${textColor2};
  background: ${Color(optionsColor).lighten(0.3).toString()};
  cursor: pointer;
  &:hover {
    color: ${textColor};
    background: ${Color(optionsColor).darken(0.3).toString()};
  }
`;

export const NumberCont = styled.div`
  display: flex;
  background: ${Color(detailsColor).lighten(0.8).toString()};
  border-radius: 3px;
  width: max-content;
  align-items: center;
  height: 0px;
  overflow: hidden;
  @media(max-width: 258px) {
    padding: 5px;
  }
`;

export const PhoneIconCont = styled.div`
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media(max-width: 258px) {
    width: 10px;
    height: 10px;
  }
`;

export const PhoneIcon = styled.div`
  transform: scale(0.8);
  @media(max-width: 258px) {
    transform: scale(0.4);
  }
`;

export const PhoneNumber = styled.div`
  font-family: Poppins;
  font-size: calc(13px + 0.65vw);
  font-weight: 700;
  margin-left: 15px;
  transition: all 0.25s ease-in;
  opacity: 0;
  @media(max-width: 258px) {
    margin-left: 5px;
  }
`;
