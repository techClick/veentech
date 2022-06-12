import React from 'react';
import * as S from './Gradient.styled';

const Gradient = function Gradient(
  { height1, height2 } : { height1?: string, height2?: string },
) {
  return (
    <>
      <S.GradientDiv height1={height1} />
      <S.Bg height2={height2} />
    </>
  );
};

export default Gradient;
