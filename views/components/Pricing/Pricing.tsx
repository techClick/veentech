import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import EscapeButton from 'components/EscapeButton/EscapeButton';
import React, { useState } from 'react';
import { services } from 'views/Service/utils/utils';
import * as S from './Pricing.styled';

const Pricing = function Pricing() {
  const [selectedService, setSelectedService] = useState<string>('Automation');

  return (
    <S.Container>
      <S.Label1>
        Select a service to view its price
        <EscapeButton />
      </S.Label1>
      <S.ServiceSection>
        {
          services.map((service, i) => (
            <S.Service
              onClick={() => setSelectedService(service.name)}
              topBorder={i === 0}
              isSelected={service.name === selectedService}
            >
              {service.name}
            </S.Service>
          ))
        }
      </S.ServiceSection>
      <S.PriceSection>
        <S.PriceLabelSection>
          <S.PriceLabel>
            {selectedService}
            {' price'}
          </S.PriceLabel>
          <S.ArrowCont>
            <S.ArrowIcon>
              <FontAwesomeIcon icon={faArrowDown} />
            </S.ArrowIcon>
          </S.ArrowCont>
        </S.PriceLabelSection>
        <S.PriceCont>
          <S.SetupCont>
            <S.LabelCont>
              <S.Price>₦3m/mo</S.Price>
              <S.PriceLabel2>SETUP</S.PriceLabel2>
            </S.LabelCont>
          </S.SetupCont>
          <S.MaintenanceCont>
            <S.LabelCont>
              <S.Price>₦200k/yr</S.Price>
              <S.PriceLabel2>AFTER SETUP</S.PriceLabel2>
            </S.LabelCont>
          </S.MaintenanceCont>
        </S.PriceCont>
      </S.PriceSection>
    </S.Container>
  );
};

export default Pricing;
