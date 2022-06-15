import { useRouter } from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import * as S from './Contacts.styled';

const Contacts = function Contacts({ msg }:{ msg: string }) {
  const router = useRouter();

  return (
    <S.MoreCont>
      <S.MoreDesc>{msg}</S.MoreDesc>
      <S.MoreBtnDiv>
        <S.MsgButton onClick={() => router.push('/contact')}>
          Message
        </S.MsgButton>
        <S.CallButton>
          Call
        </S.CallButton>
      </S.MoreBtnDiv>
      <S.NumberCont>
        <S.PhoneIconCont>
          <S.PhoneIcon><FontAwesomeIcon icon={faPhone} size="2x" /></S.PhoneIcon>
        </S.PhoneIconCont>
        <S.PhoneNumber>+2348130746341</S.PhoneNumber>
      </S.NumberCont>
    </S.MoreCont>
  );
};

export default Contacts;
