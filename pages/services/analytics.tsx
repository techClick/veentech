import React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import * as S from 'styles/index.styled';
import Service from 'views/Service/Service';

const Analytics: NextPage = () => {
  return (
    <S.Container>
      <Head>
        <title>Automation - Veentech</title>
      </Head>
      <Service service="Data Analytics" />
    </S.Container>
  );
};

export default Analytics;
