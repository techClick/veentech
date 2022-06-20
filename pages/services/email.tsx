import React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import * as S from 'styles/index.styled';
import Service from 'views/Service/Service';

const Email: NextPage = () => {
  return (
    <S.Container>
      <Head>
        <title>Business Email - Zavotech</title>
      </Head>
      <Service service="Business Email" />
    </S.Container>
  );
};

export default Email;
