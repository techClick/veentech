import React from 'react';
import Gradient from 'views/components/Gradient/Gradient';
import Header from 'views/components/Header/Header';
import LearnMore from './LearnMore/LearnMore';
import * as S from './HomePage.styled';
import Intro from './Intro/Intro';
import TechOptions from './LearnMore/TechOptions/TechOptions';

const HomePage = function HomePage() {
  return (
    <S.MainContainer>
      <Header />
      <S.BgContainer>
        <Gradient />
        <Intro />
        <LearnMore />
      </S.BgContainer>
      <S.BgContainer2>
        <TechOptions />
      </S.BgContainer2>
    </S.MainContainer>
  );
};

export default HomePage;
