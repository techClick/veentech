import React, { useEffect } from 'react';
import Header from 'views/components/Header/Header';
import Footer from 'views/components/Footer/Footer';
import LearnMore from './LearnMore/LearnMore';
import * as S from './HomePage.styled';
import Intro from './Intro/Intro';
import TechOptions from './TechOptions/TechOptions';
import Consult from '../components/Consult/Consult';
import HowWeWork from './HowWeWork/HowWeWork';

const HomePage = function HomePage() {
  const { search } = window.location;
  const params = new URLSearchParams(search);
  const ref = params.get('ref');

  useEffect(() => {
    if (ref && Number(ref) === 1) {
      document.getElementById('learnMore')?.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return (
    <S.MainContainer>
      <Header />
      <S.BgContainer>
        <Intro />
        <LearnMore />
      </S.BgContainer>
      <S.BgContainer2>
        <TechOptions />
        <HowWeWork />
      </S.BgContainer2>
      <S.BgContainer3>
        <Consult />
      </S.BgContainer3>
      <Footer />
    </S.MainContainer>
  );
};

export default HomePage;
