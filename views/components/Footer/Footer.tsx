import { useRouter } from 'next/router';
import React from 'react';
import MediaQuery from 'react-responsive';
import { services } from 'views/Service/utils/utils';
import Logo from '../Logo/Logo';
import * as S from './Footer.styled';
import Location from './Location/Location';
import Social from './Social/Social';

function Footer() {
  const router = useRouter();

  return (
    <>
      <MediaQuery minWidth={900}>
        <S.FooterContainer>
          <S.FooterSectionContainer>
            <S.FooterSection2>
              <S.JoinUs2><Logo width="28px" fontSize="22px" /></S.JoinUs2>
              <Social />
              <Location />
            </S.FooterSection2>
            <S.FooterRightSection>
              <S.FooterRightSection2>
                <S.FooterRightSection3>
                  <S.FooterSection $left>
                    <S.Label>FOR BUSINESSES</S.Label>
                    {
                      services.map((service, i) => {
                        if (i < 5) {
                          return (
                            <S.Link onClick={() => router.push(service.path)}>
                              {service.name}
                            </S.Link>
                          );
                        }
                      })
                    }
                  </S.FooterSection>
                  <S.FooterSection22>
                    <S.Label>{' '}</S.Label>
                    {
                      services.map((service, i) => {
                        if (i > 4) {
                          return (
                            <S.Link onClick={() => router.push(service.path)}>
                              {service.name}
                            </S.Link>
                          );
                        }
                      })
                    }
                  </S.FooterSection22>
                  <S.FooterSection $left>
                    <S.Label>MORE</S.Label>
                    <S.aLink2 onClick={() => router.push('/contact')}>Contact</S.aLink2>
                  </S.FooterSection>
                </S.FooterRightSection3>
              </S.FooterRightSection2>
            </S.FooterRightSection>
          </S.FooterSectionContainer>
          <S.Copyright>Copyright © 2022 VEENTECH</S.Copyright>
        </S.FooterContainer>
      </MediaQuery>
      <MediaQuery maxWidth={900}>
        <S.FooterContainer>
          <S.FooterSection2>
            <S.JoinUs><Logo width="28px" fontSize="22px" /></S.JoinUs>
            <Social />
          </S.FooterSection2>
          <S.FooterSection>
            <S.Label>FOR BUSINESSES</S.Label>
            {
              services.map((service) => {
                return (
                  <S.Link onClick={() => router.push(service.path)}>
                    {service.name}
                  </S.Link>
                );
              })
            }
          </S.FooterSection>
          <S.FooterSection>
            <S.Label>MORE</S.Label>
            <S.aLink2 onClick={() => router.push('/contact')}>Contact</S.aLink2>
          </S.FooterSection>
          <S.Copyright>
            <Location isAuto />
            <div>Copyright © 2022 VEENTECH</div>
          </S.Copyright>
        </S.FooterContainer>
      </MediaQuery>
    </>
  );
}

export default Footer;
