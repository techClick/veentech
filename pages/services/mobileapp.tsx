import React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import * as S from 'styles/index.styled';
import Service from 'views/Service/Service';

const MobileApp: NextPage = () => {
  return (
    <S.Container>
      <Head>
        <title>Custom Mobile Application - Veentech</title>
      </Head>
      <Service service="Custom Mobile App" />
    </S.Container>
  );
};

export default MobileApp;
