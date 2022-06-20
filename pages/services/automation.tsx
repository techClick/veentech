import React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import * as S from 'styles/index.styled';
import Service from 'views/Service/Service';

const Automation: NextPage = () => {
  return (
    <S.Container>
      <Head>
        <title>Automation - ZavoTech</title>
      </Head>
      <Service service="Automation" />
    </S.Container>
  );
};

export default Automation;
