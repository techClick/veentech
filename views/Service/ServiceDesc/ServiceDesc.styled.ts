import styled from 'styled-components';
import { buttonColor, headerColor, textColor2 } from 'styles/styled';
import Color from 'color';

export const ServiceName = styled.div`
  width: 100%;
  padding: 20px 30px;
  border-left: 2px solid ${Color(buttonColor).darken(0.2).toString()};
  background: ${Color(headerColor).darken(0.15).toString()};
  font-size: calc(13px + 0.25vw);
  font-family: Poppins;
  font-weight: 700;
  border-top-right-radius: 4px;
  border-top-left-radius: 2px;
  box-shadow: 0 4px 2px -2px ${Color(headerColor).darken(0.45).toString()};
  overflow: visible;
  position: relative;
  z-index: 2;
  @media(max-width: 192px) {
    padding: 5px;
  }
`;

const columnRes = '658px';
export const DetailsCont = styled.div`
  display: flex;
  width: 100%;
  @media(max-width: ${columnRes}) {
    flex-direction: column;
  }
`;

export const LogosCont = styled.div`
  width: calc(150px + 15vw);
  background: ${Color(headerColor).darken(0.15).toString()};
  min-height: 100%;
  position: relative;
  z-index: 1;
  @media(max-width: ${columnRes}) {
    height: max-content;
    width: 100%;
    padding: 20px 0px;
  }
`;

export const SkillLogoCont1 = styled.div`
  width: 80%;
  height: 80%;
  opacity: 0.725;
  position: absolute;
  right: 50%;
  bottom: 50%;
  transform: translate(50%, 48%);
  @media(max-width: ${columnRes}) {
    width: 90%;
    position: relative;
    margin: auto;
    min-height: 0;
    height: max-content;
    transform: none;
    right: 0;
    bottom: 0;
  }
`;

export const SkillLogoCont = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: calc(100% / 3);
  @media(max-width: ${columnRes}) {
    width: calc(100% / 6);
    height: max-content;
  }
`;

export const SkillLogo = styled.img`
  width: 55px;
  height: auto;
  @media(max-width: ${columnRes}) {
    width: calc(10px + 40%);
    height: auto;
  }
`;

export const detailsColor = Color(headerColor).lighten(0.6).toString();
export const Details = styled.div`
  padding: 30px 35px;
  padding-bottom: 40px;
  flex: 1;
  background: ${detailsColor};
  font-size: calc(12.5px + 0.25vw);
  color: ${textColor2};
  font-weight: 300;
  line-height: 1.5;
  @media(max-width: 192px) {
    padding: 8px;
  }
`;

export const Line1 = styled.div`
  margin-top: 25px;
`;

export const Line2 = styled.div`
  font-size: calc(11.5px + 0.25vw);
  margin-top: 55px;
`;

export const ButtonDiv = styled.div`
  margin-top: 45px;
`;

export const MainButton = styled.div`
  color: white;
  border-radius: 3px;
  font-weight: 300;
  font-size: 14px;
  width: max-content;
  height: max-content;
  color: ${Color(buttonColor).lighten(0.125).toString()};
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;
