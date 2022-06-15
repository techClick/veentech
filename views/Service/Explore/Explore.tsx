import React from 'react';
import * as S from './Explore.styled';

const Explore = function Explore({ service }:{ service: any }) {
  return (
    <S.Container>
      <S.PricesCont>
        <S.PricesDesc>
          Wonder about the cost of
          {` ${service.constDesc}`}
          ?
        </S.PricesDesc>
        <S.PricesBtnDiv>
          <S.PriceButton>
            View pricing
          </S.PriceButton>
        </S.PricesBtnDiv>
      </S.PricesCont>
      {service.contact}
    </S.Container>
  );
};

export default Explore;
