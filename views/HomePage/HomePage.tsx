import React from 'react';
import Gradient from 'views/components/Gradient/Gradient';
import Header from 'views/components/Header/Header';
import * as S from './HomePage.styled';
import Intro from './Intro/Intro';

const HomePage = function HomePage() {
  return (
    <S.MainContainer>
      <S.BgContainer>
        <Gradient />
        <Header />
        <S.Container>
          <Intro />
        </S.Container>
      </S.BgContainer>
    </S.MainContainer>
  );
};

export default HomePage;
