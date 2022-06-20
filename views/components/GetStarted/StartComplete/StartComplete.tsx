import React from 'react';
import { useDispatch } from 'react-redux';
import { setShowPopup } from 'redux/store';
import * as S from './StartComplete.styled';

const StartComplete = function StartComplete() {
  const dispatch = useDispatch();

  return (
    <S.Container>
      <S.Header>MESSAGE SENT</S.Header>
      <S.Desc>
        The process has started.
        <br />
        Our team will contact you soon, via email/phone.
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

export default StartComplete;
