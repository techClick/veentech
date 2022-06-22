import React from 'react';
import { useDispatch } from 'react-redux';
import { setShowPopup } from 'redux/store';
import { ContainerMax } from 'styles/styled';
import GetStarted from '../GetStarted/GetStarted';
import * as S from './Consult.styled';
import Experience from './Experience/Experience';

const Consult = function Consult({ topPad }:{ topPad?: string }) {
  const dispatch = useDispatch();

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
                  We promote success in your business just days after setup.
                </S.Text>
                <S.ConsultUs
                  onClick={() => dispatch(setShowPopup({
                    component: <GetStarted type="Consult" />,
                    exitOnBgClick: true,
                  }))}
                >
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
