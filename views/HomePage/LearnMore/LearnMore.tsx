import React from 'react';
import { ContainerMax } from 'styles/styled';
import * as S from './LearnMore.styled';

const LearnMore = function LearnMore() {
  return (
    <S.MainContainer>
      <S.DarkContainer>
        <ContainerMax>
          <S.Header>
            Let us enhance your business with Tech.
          </S.Header>
          <S.Header2>
            Below are I.T infrastructures we use to optimize and grow businesses.
            If you are not sure about which of these your business needs, our
            team of consultants can
            {' '}
            <S.WhitePart>help</S.WhitePart>
            .
          </S.Header2>
        </ContainerMax>
      </S.DarkContainer>
    </S.MainContainer>
  );
};

export default LearnMore;
