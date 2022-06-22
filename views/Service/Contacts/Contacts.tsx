import { useRouter } from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import * as S from './Contacts.styled';

const Contacts = function Contacts({ msg }:{ msg: string }) {
  const router = useRouter();
  const showPhoneNumber = () => {
    const phoneNumber = document.getElementById('phoneNumber');
    const numbers = document.getElementById('numbers');
    if (phoneNumber && numbers) {
      phoneNumber.style.marginTop = '15px';
      phoneNumber.style.padding = '8px 15px';
      phoneNumber.style.paddingRight = '18px';
      phoneNumber.style.height = 'max-content';
      numbers.style.opacity = '1';
    }
  };

  return (
    <S.MoreCont>
      <S.MoreDesc>{msg}</S.MoreDesc>
      <S.MoreBtnDiv>
        <S.MsgButton onClick={() => router.push('/contact')}>
          Message
        </S.MsgButton>
        <S.CallButton onClick={() => {
          showPhoneNumber();
        }}
        >
          Call
        </S.CallButton>
      </S.MoreBtnDiv>
      <S.NumberCont id="phoneNumber">
        <S.PhoneIconCont>
          <S.PhoneIcon><FontAwesomeIcon icon={faPhone} size="2x" /></S.PhoneIcon>
        </S.PhoneIconCont>
        <S.PhoneNumber id="numbers">+2348130746341</S.PhoneNumber>
      </S.NumberCont>
    </S.MoreCont>
  );
};

export default Contacts;
