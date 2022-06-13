import React from 'react';
import Header from 'views/components/Header/Header';
import Footer from 'views/components/Footer/Footer';
import Consult from 'views/components/Consult/Consult';
import * as S from './About.styled';
import HowWeWork from './HowWeWork/HowWeWork';
import AboutIntro from './AboutIntro/AboutIntro';

const About = function About() {
  return (
    <>
      <S.MainContainer>
        <Header />
        <S.BgContainer>
          <AboutIntro />
          <HowWeWork />
        </S.BgContainer>
        <S.BgContainer2>
          <Consult />
        </S.BgContainer2>
        <Footer />
      </S.MainContainer>
    </>
  );
};

export default About;
