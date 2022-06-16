import React from 'react';
import { ContainerMax } from 'styles/styled';
import * as S from './Consult.styled';
import Experience from './Experience/Experience';

const Consult = function Consult({ topPad }:{ topPad?: string }) {
  return (
    <S.MainContainer>
      <ContainerMax>
        <S.Container topPad={topPad}>
          <S.Container2>
            <S.TransparentBG />
            <S.LeftSection>
              <S.TextPart>
                <S.TopText>
                  Leave it to us.
                </S.TopText>
                <S.Text>
                  We foster success in your business just days after setup.
                </S.Text>
                <S.ConsultUs>
                  <S.MainButton>
                    consult our team
                  </S.MainButton>
                </S.ConsultUs>
              </S.TextPart>
            </S.LeftSection>
            <S.RightSection>
              <S.TransparentBG2 />
              <Experience />
            </S.RightSection>
          </S.Container2>
        </S.Container>
      </ContainerMax>
    </S.MainContainer>
  );
};

export default Consult;
