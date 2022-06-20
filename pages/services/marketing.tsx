import React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import * as S from 'styles/index.styled';
import Service from 'views/Service/Service';

const Marketing: NextPage = () => {
  return (
    <S.Container>
      <Head>
        <title>Digital Marketing - Zavotech</title>
      </Head>
      <Service service="Digital Marketing" />
    </S.Container>
  );
};

export default Marketing;
