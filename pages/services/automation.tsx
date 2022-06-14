import React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import * as S from 'styles/index.styled';
import Service from 'views/Service/Service';

const AutomationHome: NextPage = () => {
  return (
    <S.Container>
      <Head>
        <title>Automation - Veentech</title>
      </Head>
      <Service service="automation" />
    </S.Container>
  );
};

export default AutomationHome;
