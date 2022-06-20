import React from 'react';
import logo from 'assets/logo.png';
import * as S from './Logo.styled';

const Logo = function Logo({ width, fontSize }:{ width?: string, fontSize?: string }) {
  return (
    <S.Container width={width}>
      <S.Image src={logo.src} width={width} />
      <S.Label fontSize={fontSize}>ZAVOTECH</S.Label>
    </S.Container>
  );
};

export default Logo;
