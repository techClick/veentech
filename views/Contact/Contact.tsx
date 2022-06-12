import React from 'react';
import Header from 'views/components/Header/Header';
import Gradient from 'views/components/Gradient/Gradient';
import * as S from './Contact.styled';

const Contact = function Contact() {
  return (
    <S.Container>
      <Header />
      <Gradient height1="60vh" height2="40vh" />
      <S.BgContainer>
      </S.BgContainer>
    </S.Container>
  );
};

export default Contact;
