import React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import * as S from 'styles/index.styled';
import Service from 'views/Service/Service';

const Website: NextPage = () => {
  return (
    <S.Container>
      <Head>
        <title>Business Website - Zavotech</title>
      </Head>
      <Service service="Business Website" />
    </S.Container>
  );
};

export default Website;
