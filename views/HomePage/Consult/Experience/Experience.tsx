import React from 'react';
import * as S from './Experience.styled';

const Experience = function Experience() {
  return (
    <S.Container>
      <S.ExpCont>
        <S.Exp>
          42
          <S.Plus>+</S.Plus>
        </S.Exp>
        <S.ExpDesc>
          Years in
          <br />
          Tech
        </S.ExpDesc>
      </S.ExpCont>
      <S.Slash>|</S.Slash>
      <S.ExpCont2>
        <S.Exp>7</S.Exp>
        <S.ExpDesc>
          Businesses
          <br />
          optimized
        </S.ExpDesc>
      </S.ExpCont2>
    </S.Container>
  );
};

export default Experience;
