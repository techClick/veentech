import React from 'react';
import { Container } from 'styles/styled';
import Gradient from 'views/components/Gradient/Gradient';
import * as S from './AboutIntro.styled';

const AboutIntro = function AboutIntro() {
  return (
    <>
      <Gradient height1="80vh" height2="20vh" />
      <Container>
        <S.Container>
          <S.Label>
            We are an information technology company.
          </S.Label>
          <S.Label2>
            Our team consists of experts in the fields of Software Development, Data Science
            and Digital Marketing. Veentech was founded in 2022 by Ikechi Anya, a
            Software Engineer that has been developing applications and optimizing businesses
            since 2011.
          </S.Label2>
          <S.Label3>
            Professionally, our team have first-hand experience in information technology
            and it&apos;s power to increase business efficiency and drive success.
            Our mission is to help businesses benefit from this power.
          </S.Label3>
        </S.Container>
      </Container>
    </>
  );
};

export default AboutIntro;
