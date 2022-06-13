import React from 'react';
import Header from 'views/components/Header/Header';
import * as S from './About.styled';
import AboutIntro from './AboutIntro/AboutIntro';

const About = function About() {
  return (
    <>
      <S.MainContainer>
        <Header />
        <S.BgContainer>
          <AboutIntro />
        </S.BgContainer>
      </S.MainContainer>
    </>
  );
};

export default About;
