import { useRouter } from 'next/router';
import React from 'react';
import { services } from 'views/Service/utils/utils';
import * as S from './ServiceDropdown2.styled';

const ServiceDropdown2 = function ServiceDropdown2() {
  const router = useRouter();

  return (
    <S.Container>
      {
        services.map((service) => (
          <S.Service onClick={() => router.push(service.path)}>
            {service.name}
          </S.Service>
        ))
      }
    </S.Container>
  );
};

export default ServiceDropdown2;
