import styled from 'styled-components';
import bgImage from 'assets/bg4.jpg';
import { buttonColor, headerColor, headerHeight, textColor2 } from 'styles/styled';
import Color from 'color';
import { optionsColor } from 'views/HomePage/TechOptions/TechOptions.styled';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
`;

export const all_lowRes = '644px';
export const BgContainer = styled.div`
  background-attachment: fixed;
  background-image: url(${bgImage.src});
  background-position: 0px 0px;
  background-repeat: repeat;
  background-size: 1290px auto;
  width: 100%;
  height: calc(100% - ${headerHeight});
  margin-top: -1px;
  padding-top: 17vh;
  overflow: hidden;
  @media(min-width: 1291px) {
    background-size: 100vw auto;
  }
  @media(max-width: ${all_lowRes}) {
    padding-top: 7vh;
  }
`;

export const FlexContainer = styled.div`
  display: flex;
  width: 100%;
  height: max-content;
  max-width: 1000px;
  margin: auto;
  @media(max-width: ${all_lowRes}) {
    flex-direction: column;
  }
`;

export const LabelContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  // background: ${Color(headerColor).darken(0.175).toString()};
  background: linear-gradient(${Color(headerColor).darken(0).toString()}, 
    ${Color(headerColor).darken(0.3).toString()});
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  @media(max-width: ${all_lowRes}) {
    justify-content: 0;
    align-items: 0;
    width: 100%;
    margin-bottom: 15px;
    background: none;
  }
`;

export const LabelCont = styled.div`
  max-width: 100%;
  margin-top: -80px;
  @media(max-width: ${all_lowRes}) {
    margin-top: 0px;
  }
`;

export const Label = styled.div`
  font-size: calc(18px + 0.6vw);
  font-weight: 600;
  font-family: Poppins;
  padding-bottom: 9px;
  @media(max-width: ${all_lowRes}) {
    margin: auto;
  }
`;

export const Label2 = styled.div`
  font-weight: 300;
  max-width: 100%;
  width: max-content;
  line-height: 1.3;
  font-size: calc(12px + 0.275vw);
  font-family: Lato;
  /* padding-bottom: 25px;
  border-bottom: 1px dotted ${Color(textColor2).darken(0.3).toString()}; */
  color: ${textColor2};
`;

export const MessageConatiner = styled.div`
  width: 50%;
  @media(max-width: ${all_lowRes}) {
    width: 100%;
  }
`;

export const MessageBox = styled.div`
  max-width: 345px;
  width: 100%;
  height: max-content;
  background: ${Color(optionsColor).lighten(0.2).toString()};
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  padding: 50px 35px;
  border: 1px solid ${Color(headerColor).lighten(0.2).toString()};
  @media(max-width: ${all_lowRes}) {
    margin: auto;
  }
  @media(max-width: 241px) {
    padding: 10px 5px;
  }
`;

const redColor = Color('red').lighten(0.2).toString();
export const Input = styled.input<any>`
  height: 40px;
  width: 100%;
  margin-bottom: 18px;
  border-radius: 4px;
  padding-left: 6px;
  font-family: Poppins;
  border: 1.7px solid ${(props) => { return props.isError ? redColor : headerColor; }};
  color: black;
  &:focus{
    outline: 2px solid orange;
    border: 0;
  }
`;

export const TextArea = styled.textarea`
  height: 100px;
  width: 100%;
  color: black;
  border-radius: 2px;
  padding-left: 6px;
  padding-top: 4px;
  font-family: Poppins;
  resize: none;
  border: 1.7px solid ${headerColor};
  &:focus{
    outline: 2px solid orange;
    border: 0;
  }
`;

export const MainButtonDiv = styled.div`
  margin-top: 13px; 
  width: max-content;
`;

export const MainButton = styled.div`
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
