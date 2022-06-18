import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRouter } from 'next/router';
import React from 'react';
import { useDispatch } from 'react-redux';
import { setShowPopup } from 'redux/store';
import { ContainerMax } from 'styles/styled';
import GetStarted from 'views/components/GetStarted/GetStarted';
import { services } from 'views/Service/utils/utils';
import * as S from './TechOptions.styled';

const TechOptions = function TechOptions() {
  const router = useRouter();
  const dispatch = useDispatch();

  return (
    <S.MainContainer>
      <ContainerMax>
        {
          services.map((option) => (
            <S.TechOption>
              <S.OptionName>
                {option.name}
                <S.IconCont>
                  <S.Icon2>
                    <FontAwesomeIcon icon={option.icon} size="2x" />
                  </S.Icon2>
                </S.IconCont>
                <S.IconCont>
                  <S.Icon>
                    <FontAwesomeIcon icon={option.icon} size="2x" />
                  </S.Icon>
                </S.IconCont>
              </S.OptionName>
              <S.Description>{option.description}</S.Description>
              <S.ButtonDiv>
                <S.Button onClick={() => router.push(option.path)}>
                  Learn more
                </S.Button>
                <S.MainButton onClick={() => dispatch(setShowPopup({
                  component: <GetStarted />,
                  exitOnBgClick: true,
                }))}
                >
                  Get started
                </S.MainButton>
              </S.ButtonDiv>
            </S.TechOption>
          ))
        }
        <S.Help>
          If you are not sure about which service your business needs, our
          team of consultants can
          {' '}
          <S.WhitePart>help</S.WhitePart>
          .
        </S.Help>
        <S.PricesCont>
          <S.PricesDesc>Wonder about the cost of our services?</S.PricesDesc>
          <S.PriceBtnDiv>
            <S.PriceButton>
              Explore prices
            </S.PriceButton>
          </S.PriceBtnDiv>
        </S.PricesCont>
      </ContainerMax>
    </S.MainContainer>
  );
};

export default TechOptions;
