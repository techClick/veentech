import React from 'react';
import { ContainerMax } from 'styles/styled';
import * as S from './LearnMore.styled';

const LearnMore = function LearnMore() {
  return (
    <S.MainContainer id="learnMore">
      <S.DarkContainer>
        <ContainerMax>
          <S.Header>
            OUR TECH SERVICES
            <S.Label>
              Services we deploy to grow businesses today
            </S.Label>
          </S.Header>
        </ContainerMax>
      </S.DarkContainer>
    </S.MainContainer>
  );
};

export default LearnMore;
