import React from 'react';
import Head from 'next/head';
import type { NextPage } from 'next';
import * as S from 'styles/index.styled';
import About from 'views/About/About';

const AboutHome: NextPage = () => {
  return (
    <S.Container>
      <Head>
        <title>VEENTECH - About</title>
      </Head>
      <About />
    </S.Container>
  );
};

export default AboutHome;
