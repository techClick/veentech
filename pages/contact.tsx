import React from 'react';
import Head from 'next/head';
import type { NextPage } from 'next';
import * as S from 'styles/index.styled';
import Contact from 'views/Contact/Contact';

const ContactHome: NextPage = () => {
  return (
    <S.Container>
      <Head>
        <title>VEENTECH - Contact</title>
      </Head>
      <Contact />
    </S.Container>
  );
};

export default ContactHome;
