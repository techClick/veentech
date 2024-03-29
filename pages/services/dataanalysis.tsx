import React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import * as S from 'styles/index.styled';
import Service from 'views/Service/Service';

const DataAnalysis: NextPage = () => {
  return (
    <S.Container>
      <Head>
        <title>Automation - Zavotech</title>
      </Head>
      <Service service="Data Analysis" />
    </S.Container>
  );
};

export default DataAnalysis;
