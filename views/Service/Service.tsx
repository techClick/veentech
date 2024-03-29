import React from 'react';
import { ContainerMax } from 'styles/styled';
import Consult from 'views/components/Consult/Consult';
import Footer from 'views/components/Footer/Footer';
import Gradient from 'views/components/Gradient/Gradient';
import Header from 'views/components/Header/Header';
import Explore from './Explore/Explore';
import * as S from './Service.styled';
import ServiceDesc from './ServiceDesc/ServiceDesc';
import { services } from './utils/utils';

const Service = function Service({ service }:{ service: string }) {
  const thisService = services.find((service_) => service_.name === service);

  return (
    <S.Container>
      <Header />
      <Gradient height1="68vh" height2="32vh" />
      <S.BgContainer>
        <S.BgCover />
        <ContainerMax>
          <S.Container2>
            <ServiceDesc service={thisService} />
          </S.Container2>
        </ContainerMax>
      </S.BgContainer>
      <S.BgContainer2>
        <ContainerMax>
          <S.Container2>
            <Explore service={thisService} />
          </S.Container2>
        </ContainerMax>
        <Consult topPad="140px" />
      </S.BgContainer2>
      <Footer />
    </S.Container>
  );
};

export default Service;
