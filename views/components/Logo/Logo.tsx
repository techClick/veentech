import React from 'react';
// import logo from 'assets/topdevafrica22.png';
// import logo2 from 'assets/topdevafrica23.png';
import * as S from './Logo.styled';

const Logo = function Logo({ width }:{ width: string }) {
  return (
    <S.Container width={width}>
      {/* <S.Image src={[logo, logo2][index].src} /> */}
      <S.Label>VEENTECH</S.Label>
    </S.Container>
  );
};

export default Logo;
