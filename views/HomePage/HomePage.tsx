import React from 'react';
import bgImage from 'assets/bg.jpg';
import Gradient from 'views/components/Gradient/Gradient';
import Header from 'views/components/Header/Header';
import * as S from './HomePage.styled';
import Intro from './Intro/Intro';

const HomePage = function HomePage() {
  return (
    <S.MainContainer>
      <S.BgImage src={bgImage.src} />
      <Gradient />
      <Header />
      <S.Container>
        <Intro />
      </S.Container>
    </S.MainContainer>
  );
};

export default HomePage;
