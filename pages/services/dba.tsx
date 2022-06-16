import React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import * as S from 'styles/index.styled';
import Service from 'views/Service/Service';

const DBA: NextPage = () => {
  return (
    <S.Container>
      <Head>
        <title>Database Management - Veentech</title>
      </Head>
      <Service service="Database Management" />
    </S.Container>
  );
};

export default DBA;
