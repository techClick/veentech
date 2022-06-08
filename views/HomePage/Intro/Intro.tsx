import React from 'react';
import { MainButton } from 'styles/styled';
import * as S from './Intro.styled';

const Intro = function Intro() {
  return (
    <S.Container>
      <S.IntroText>
        Optimize your business. Utilize the power of information
        technology and watch your business thrive.
      </S.IntroText>
      <S.ButtonDiv>
        <MainButton>
          Learn more
        </MainButton>
      </S.ButtonDiv>
    </S.Container>
  );
};

export default Intro;
