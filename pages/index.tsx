import React from 'react';
import Head from 'next/head';
import type { NextPage } from 'next';
import * as S from 'styles/index.styled';
import HomePage from 'views/HomePage/HomePage';

const Home: NextPage = () => {
  return (
    <S.Container>
      <Head>
        <title>Veentech</title>
      </Head>
      <HomePage />
    </S.Container>
  );
};

export default Home;
