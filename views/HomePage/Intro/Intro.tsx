import React from 'react';
import { useDispatch } from 'react-redux';
import { setShowPopup } from 'redux/store';
import { Container, MainButton } from 'styles/styled';
import GetStarted from 'views/components/GetStarted/GetStarted';
import Gradient from '../../components/Gradient/Gradient';
import * as S from './Intro.styled';

const Intro = function Intro() {
  const dispatch = useDispatch();

  return (
    <>
      <Gradient />
      <Container>
        <S.Container>
          <S.IntroText>
            We optimize businesses.
            <S.IntroText2>
              Utilize the power of information technology
              and make your business thrive.
            </S.IntroText2>
          </S.IntroText>
          <S.ButtonDiv>
            <S.Button
              onClick={() => document.getElementById('learnMore')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Learn more
            </S.Button>
            <MainButton onClick={() => dispatch(setShowPopup({
              component: <GetStarted type="Grow" />,
              exitOnBgClick: true,
            }))}
            >
              Grow my business
            </MainButton>
          </S.ButtonDiv>
        </S.Container>
      </Container>
    </>
  );
};

export default Intro;
