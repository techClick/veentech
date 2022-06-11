import styled from 'styled-components';
import Color from 'color';
import { headerColor, textColor, textColor2 } from 'styles/styled';

export const FooterContainer = styled.div<any>`
  padding: 4.5em 0 8em 0;
  width: 100%;
  background: linear-gradient(${Color(headerColor).darken(0.1).toString()}, 
    ${Color(headerColor).darken(0.25).toString()});
  color: ${Color(textColor2).lighten(0).toString()};
  position: relative;
  z-index: 3;
  margin-top: -1px;
  @media(max-width: 900px) {
    padding: 3.5em 0px 22.5em 0px;
    display: flex;
    flex-direction: column;
  }
`;

export const FooterSectionContainer = styled.div`
  display: flex;
`;

export const FooterSection = styled.div<any>`
  width: max-content;
  max-width: 350px;
  text-align: ${(props) => props.$left ? 'left' : 'center'};
  margin-right: 150px;
  display: inline-block;
  @media(max-width: 1200px) {
    margin-right: 80px;
  }
  @media(max-width: 900px) {
    margin: 0;
    margin-top: 3em;
    text-align: center;
    display: flex;
    flex-direction: column;
    padding: 0;
    width: 100%;
    max-width: 100%;
  }
`;

export const FooterSection22 = styled.div<any>`
  width: max-content;
  max-width: 350px;
  text-align: left;
  margin-left: -70px;
  margin-right: 110px;
  display: inline-block;
  @media(max-width: 1200px) {
    margin-left: -30px;
    margin-right: 80px;
  }
`;

export const FooterSection2 = styled.div<any>`
  width: 42%;
  padding: 0 0em 0 0;
  text-align: left;
  padding-left: 10.5%;
  display: block;
  @media(max-width: 900px) {
    margin: auto;
    width: max-content;
    text-align: center;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    padding: 0;
    padding-left: 0;
  }
  @media(max-width: 979px) and (min-width: 900px) {
    padding-left: 5%;
  }
`;

export const FooterRightSection = styled.div`
  text-align: right;
  width:60%;
  margin-right: 3%;
`;

export const FooterRightSection2 = styled.div`
  width: max-content;
  margin-left: 0em;
  display: inline-block;
`;

export const FooterRightSection3 = styled.div`
  width: max-content;
  margin-left: 0em;
  // background: blue;
  display: flex;
`;

export const JoinUs2 = styled.div`
  padding-right: 40%;
  font-size: 23px;
  font-style: normal;
  font-weight: 700;
  line-height: 28px;
  letter-spacing: 0px;
  text-align: left;
`;

export const Link = styled.div`
  font-size: calc(14px + 0.1vw);
  text-decoration: none;
  color: ${Color(textColor2).darken(0.15).toString()};
  display: block;
  padding: 0.5em 0 0.5em 0;
  cursor: pointer;
`;

export const aLink = styled.a`
  font-size: calc(14px + 0.1vw);
  text-decoration: none;
  color: ${Color(textColor2).darken(0.15).toString()};
  display: block;
  cursor: auto;
  padding: 0.5em 0 0.5em 0em;
  cursor: pointer;
`;

export const aLink2 = styled.a`
  font-size: calc(14px + 0.1vw);
  text-decoration: none;
  color: ${Color(textColor2).darken(0.15).toString()};
  display: block;
  padding: 0.5em 0 0.5em 0em;
  @media(max-width: 900px) {
    flex:1 0 100%;
  }
  cursor: pointer;
`;

export const Copyright = styled.div`
  font-size: 1em;
  min-width: 0;
  right: 50%;
  transform: translate(50%);
  color: ${textColor};
  display: block;
  font-weight: bold;
  padding-bottom: 1.5em;
  width: max-content;
  max-width: 90%;
  text-align: center;
  position: absolute;
  bottom: 1em;
  @media(max-width: 900px) {
    padding-left: 0;
  }
`;

export const LangContainer = styled.div`
  position: relative;
  right: 2rem;
  bottom: 1rem;
  padding-top: 4em;
`;

export const IconsSection = styled.div`
  padding-top:2.5em;
`;

export const JoinUs = styled.div`
  padding: 0;
  font-size: 18px;
  font-weight: 700;
`;

export const Label = styled.div`
  font-weight: bold;
  margin-bottom: 1em;
  height: 23px;
  font-size: calc(16px + 0.1vw);
  color: ${textColor};
`;
