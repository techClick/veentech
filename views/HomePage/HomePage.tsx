import React from 'react';
import Header from 'views/components/Header/Header';
import LearnMore from './LearnMore/LearnMore';
import * as S from './HomePage.styled';
import Intro from './Intro/Intro';
import TechOptions from './TechOptions/TechOptions';
import Consult from './Consult/Consult';

const HomePage = function HomePage() {
  return (
    <S.MainContainer>
      <Header />
      <S.BgContainer>
        <Intro />
        <LearnMore />
      </S.BgContainer>
      <S.BgContainer2>
        <TechOptions />
      </S.BgContainer2>
      <S.BgContainer3>
        <Consult />
      </S.BgContainer3>
    </S.MainContainer>
  );
};

export default HomePage;
