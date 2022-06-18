import Color from 'color';
import styled from 'styled-components';
import { buttonColor, headerColor, textColor, textColor2 } from 'styles/styled';

export const Container = styled.div`
  position: fixed;
  z-index: 5;
  right: 50%;
  bottom: 50%;
  transform: translate(50%, 50%);
  border-radius: 5px;
  max-width: 400px;
  min-width: 270px;
  height: max-content;
  line-height: 1.3;
  width: 90%;
  display: flex;
  flex-direction: column;
  color: ${headerColor};
`;

export const Label1 = styled.div`
  border-radius: 5px;
  border-bottom-right-radius: 0px;
  border-bottom-left-radius: 0px;
  font-size: calc(13px + 0.25vw);
  background: ${Color(headerColor).lighten(7).toString()};
  font-weight: 600;
  padding: 10px 15px;
  width: 100%;
  @media(max-width: 268px) {
    padding: 5px;
  }
`;

export const ServiceSection = styled.div`
  background: ${Color('white').darken(0.15).toString()};
  max-height: 40vh;
  overflow: auto;
  @media(max-width: 268px) {
    padding: 5px;
  }
`;

export const Service = styled.div<any>`
  cursor: pointer;
  padding: 10px 13px;
  border-bottom: 1px solid ${Color(headerColor).darken(0.3).toString()};
  border-top: ${(props) => props.topBorder && `1px solid ${Color(headerColor).darken(0.3).toString()}`};
  background: ${(props) => props.isSelected && Color(buttonColor).lighten(0.35).toString()};
  margin-top: ${(props) => props.topBorder && '-1px'};
  width: 100%;
  font-size: 14px;
  font-family: Poppins;
  color: ${headerColor};
  font-weight: 300;
  font-size: calc(12px + 0.15vw);
  &:hover {
    background: ${(props) => !props.isSelected && Color(buttonColor).lighten(0.65).toString()};
  }
`;

export const ButtonDiv = styled.div`
  margin-top: 20px;
`;

export const PriceSection = styled.div`
  border-radius: 5px;
  border-top-right-radius: 0px;
  border-top-left-radius: 0px;
  background: ${Color(headerColor).lighten(1).toString()};
  max-height: 30vh;
  color: ${textColor};
  padding: 15px 15px;
  padding-bottom: 20px;
  @media(max-width: 268px) {
    padding: 5px;
  }
`;

export const PriceLabelSection = styled.div`
  display: flex;
  align-items: center;
`;

export const PriceLabel = styled.div`
  font-size: calc(12px + 0.25vw);
  font-family: Poppins;
  text-transform: uppercase;
  font-weight: 600;
  color: ${textColor2};
`;

export const ArrowCont = styled.div`
  width: max-content;
  height: 100%;
  display: flex;
  margin-top: -2px;
  margin-bottom: auto;
  margin-left: 5px;
  @media(max-width: 350px) {
    margin-top: -1.25%;
  }
`;

export const ArrowIcon = styled.div`
  transform: scale(0.85);
`;

export const PriceCont = styled.div`
  width: 100%;
  display: flex;
  margin-top: 25px;
`;

export const SetupCont = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-right: 2px solid ${Color(textColor2).darken(0.625).toString()};
`;

export const LabelCont = styled.div`
  padding: 0px;
`;

export const PriceLabel2 = styled.div`
  font-family: Poppins;
  font-size: calc(12px + 0.25vw);
  font-weight: 700;
  color: ${Color(textColor2).darken(0.2).toString()};
  margin: auto;
  width: max-content;
`;

export const Price = styled.div`
  font-size: calc(18px + 0.85vw);
  font-weight: 700;
  font-family: DM Sans;
`;

export const MaintenanceCont = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
