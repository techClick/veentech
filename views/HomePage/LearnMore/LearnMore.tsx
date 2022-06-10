import React from 'react';
import { ContainerMax } from 'styles/styled';
import * as S from './LearnMore.styled';

const LearnMore = function LearnMore() {
  return (
    <S.MainContainer>
      <S.DarkContainer>
        <ContainerMax>
          <S.Header>
            We help businesses achieve more by
            deploying a variety of I.T infrastructures.
          </S.Header>
          <S.Header2>
            Below are I.T options we use to optimize and grow businesses today.
            If you are not sure of which option you need, our
            team of consultants can help.
          </S.Header2>
        </ContainerMax>
      </S.DarkContainer>
    </S.MainContainer>
  );
};

export default LearnMore;
