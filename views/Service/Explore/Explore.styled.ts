import Color from 'color';
import styled from 'styled-components';
import { buttonColor, headerColor, textColor2 } from 'styles/styled';
import { detailsColor } from '../ServiceDesc/ServiceDesc.styled';

export const Container = styled.div`
  margin-top: 15px;
`;

const columnRes = '494px';
export const PricesCont = styled.div`
  background: ${detailsColor};
  padding: 10px 20px;
  padding-right: 12px;
  display: flex;
  align-items: center;
  width: 100%;
  max-width: max-content;
  // margin: auto;
  @media(max-width: ${columnRes}) {
    flex-direction: column;
    align-items: none;
    text-align: left;
    padding: 20px 25px;
  }
  @media(max-width: 200px) {
    padding: 12px 8px;
  }
`;

export const PricesDesc = styled.div`
  font-size: calc(12.5px + 0.175vw);
  font-weight: 300;
  color: ${textColor2};
`;

export const PricesBtnDiv = styled.div`
  width: max-content;
  margin-left: 65px;
  @media(max-width: ${columnRes}) {
    margin: 0px;
    margin-top: 25px;
    margin-right: auto;
  }
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
  color: ${Color(headerColor).lighten(0.3).toString()};
  &:hover {
    color: ${Color('white').darken(0.9).toString()};
    background: ${Color(buttonColor).darken(0).toString()};
  }
`;
