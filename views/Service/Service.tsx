import React from 'react';
import { ContainerMax } from 'styles/styled';
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
        <ContainerMax>
          <S.Container2>
            <ServiceDesc service={thisService} />
            <Explore service={thisService} />
          </S.Container2>
        </ContainerMax>
      </S.BgContainer>
    </S.Container>
  );
};

export default Service;
