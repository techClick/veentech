import React from 'react';
import { MainButton } from 'styles/styled';
import * as S from './Intro.styled';

const Intro = function Intro() {
  return (
    <S.Container>
      <S.IntroText>
        We optimize businesses.
        <S.IntroText2>
          Utilize the power information technology
          has in making your business thrive.
        </S.IntroText2>
      </S.IntroText>
      <S.ButtonDiv>
        <S.Button>
          Learn more
        </S.Button>
        <MainButton>
          Grow my business
        </MainButton>
      </S.ButtonDiv>
    </S.Container>
  );
};

export default Intro;
