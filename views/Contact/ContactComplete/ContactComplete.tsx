import React from 'react';
import { useDispatch } from 'react-redux';
import { setShowPopup } from 'redux/store';
import * as S from './ContactComplete.styled';

const ContactComplete = function ContactComplete() {
  const dispatch = useDispatch();

  return (
    <S.Container>
      <S.Header>MESSAGE SENT</S.Header>
      <S.Desc>
        We have recieved your message. We will reply shortly.
      </S.Desc>
      <S.ButtonDiv>
        <S.MainButton
          onClick={() => dispatch(setShowPopup({}))}
        >
          OK
        </S.MainButton>
      </S.ButtonDiv>
    </S.Container>
  );
};

export default ContactComplete;
