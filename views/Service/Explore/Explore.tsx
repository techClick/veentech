import React from 'react';
import { useDispatch } from 'react-redux';
import { setShowPopup } from 'redux/store';
import Pricing from 'views/components/Pricing/Pricing';
import * as S from './Explore.styled';

const Explore = function Explore({ service }:{ service: any }) {
  const dispatch = useDispatch();

  return (
    <S.Container>
      <S.PricesCont>
        <S.PricesDesc>
          Wonder about the cost of
          {` ${service.constDesc}`}
          ?
        </S.PricesDesc>
        <S.PricesBtnDiv>
          <S.PriceButton onClick={() => dispatch(setShowPopup({
            component: <Pricing />,
            exitOnBgClick: true,
          }))}
          >
            View pricing
          </S.PriceButton>
        </S.PricesBtnDiv>
      </S.PricesCont>
      {service.contact}
    </S.Container>
  );
};

export default Explore;
