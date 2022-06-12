import React from 'react';
import Header from 'views/components/Header/Header';
import Gradient from 'views/components/Gradient/Gradient';
import { Container } from 'styles/styled';
import * as S from './About.styled';

const About = function About() {
  return (
    <S.MainContainer>
      <Header />
      <Gradient height1="80vh" height2="20vh" />
      <S.BgContainer>
        <Container>
          <S.Container>
            <S.Label>
              We are an information technology company.
            </S.Label>
            <S.Label2>
              Our team consists of experts in the fields of Software Development, Data Science
              and Digital Marketing. Veentech was formed in 2022 by Ikechi Anya, a
              Software Engineer that has been developing applications and optimizing businesses
              since 2011.
            </S.Label2>
            <S.Label3>
              Professionally, our team have first-hand experience with information technology
              and it&apos;s power to increase business efficiency and drive success.
              Our mission is to help businesses benefit from this power.
            </S.Label3>
          </S.Container>
        </Container>
      </S.BgContainer>
    </S.MainContainer>
  );
};

export default About;
