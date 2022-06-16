import React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import * as S from 'styles/index.styled';
import Service from 'views/Service/Service';

const VideoAds: NextPage = () => {
  return (
    <S.Container>
      <Head>
        <title>Video Adversting - Veentech</title>
      </Head>
      <Service service="Video Advertising" />
    </S.Container>
  );
};

export default VideoAds;
