import EscapeButton from 'views/components/EscapeButton/EscapeButton';
import React, { useState } from 'react';
import { getContinent, getCountry } from 'views/Service/utils/countryUtils';
import { services } from 'views/Service/utils/utils';
import * as S from './Pricing.styled';

const Pricing = function Pricing({ useService }:{ useService?: string}) {
  const [selectedService, setSelectedService] = useState<string>(useService || 'Business Email');
  const country = getCountry();
  const continent = getContinent();
  let priceKey = 'Nigeria';
  if (continent === 'Africa') {
    if (country === 'South Africa') {
      priceKey = 'World2';
    } else if (country === 'Nigeria') {
      priceKey = 'Nigeria';
    } else {
      priceKey = 'Africa';
    }
  } else if (continent === 'Europe' || continent === 'North America') {
    priceKey = 'World1';
  } else {
    priceKey = 'World2';
  }
  const service: any = services.find((serviceTmp) => serviceTmp.name === selectedService);

  return (
    <S.Container>
      <S.PriceSection>
        <S.PriceLabelSection>
          {/* <S.ArrowCont>
            <S.ArrowIcon>
              <FontAwesomeIcon icon={faArrowDown} />
            </S.ArrowIcon>
          </S.ArrowCont> */}
          <S.PriceLabel>
            {selectedService}
            {/* {' cost'} */}
          </S.PriceLabel>
        </S.PriceLabelSection>
        <S.PriceCont>
          {
            service?.price.setup[priceKey] === 'N/A' ? (
              <S.Fee>{service?.price.fee[priceKey]}</S.Fee>
            ) : (
              <>
                <S.FlexCont>
                  <S.SetupCont>
                    <S.LabelCont>
                      <S.Price>{service?.price.setup[priceKey]}</S.Price>
                      <S.PriceLabel2>SETUP</S.PriceLabel2>
                    </S.LabelCont>
                  </S.SetupCont>
                  <S.MaintenanceCont>
                    <S.LabelCont>
                      <S.Price>{service?.price.fee[priceKey]}</S.Price>
                      <S.PriceLabel2>AFTER SETUP</S.PriceLabel2>
                    </S.LabelCont>
                  </S.MaintenanceCont>
                </S.FlexCont>
                <S.SetupTime>
                  SETUP involves developing the application. Setup time for low-scale
                  applications is one month.
                </S.SetupTime>
              </>
            )
          }
        </S.PriceCont>
      </S.PriceSection>
      <S.Label1>
        Select a service below to view its cost
        <EscapeButton whiteX />
      </S.Label1>
      <S.ServiceSection>
        {
          services.map((serviceTmp, i) => (
            <S.Service
              onClick={() => setSelectedService(serviceTmp.name)}
              topBorder={i === 0}
              isSelected={serviceTmp.name === selectedService}
            >
              {serviceTmp.name}
            </S.Service>
          ))
        }
      </S.ServiceSection>
    </S.Container>
  );
};

export default Pricing;
