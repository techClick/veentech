import { StaticImageData } from 'next/image';
import React from 'react';
import * as S from './ServiceDesc.styled';

const ServiceDesc = function ServiceDesc({ service }:{ service: any }) {
  return (
    <>
      <S.ServiceName>
        {service.name.toUpperCase()}
      </S.ServiceName>
      <S.DetailsCont>
        <S.LogosCont>
          <S.SkillLogoCont1>
            {
              service.images.map((img: StaticImageData, i: number) => {
                const adjustY: boolean = service.name === 'Data Analysis'
                  && (i === 1 || i === 3 || i === 5);
                  console.log(service.name, i, adjustY);
                return (
                  <S.SkillLogoCont key={`logo_${i}`} adjustY={adjustY}>
                    <S.SkillLogo src={img.src} />
                  </S.SkillLogoCont>
                );
              })
            }
          </S.SkillLogoCont1>
        </S.LogosCont>
        <S.Details>
          {service?.line1}
          <S.Line1>{service?.line2}</S.Line1>
          <S.Line1>{service?.line3}</S.Line1>
          <S.Line2>{service?.line4}</S.Line2>
          <S.ButtonDiv>
            <S.MainButton>
              Get started
            </S.MainButton>
          </S.ButtonDiv>
        </S.Details>
      </S.DetailsCont>
    </>
  );
};

export default ServiceDesc;
