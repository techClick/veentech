import { useRouter } from 'next/router';
import React from 'react';
import { services } from 'views/Service/utils/utils';
import * as S from './ServiceDropdown.styled';

const ServiceDropdown = function ServiceDropdown(
  { setIsShowServices, setRemoveDropdownTimeout }
  :
  {
    setIsShowServices: Function,
    setRemoveDropdownTimeout: Function,
  },
) {
  const router = useRouter();

  return (
    <S.Container
      id="services"
      onMouseEnter={() => {
        setRemoveDropdownTimeout(clearTimeout);
        setIsShowServices(true);
      }}
    >
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

export default ServiceDropdown;
