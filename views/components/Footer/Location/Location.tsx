import { faBuilding, faEnvelope, faPhoneFlip } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import * as S from './Location.styled';

const Location = function Location({ isAuto }:{ isAuto?: boolean }) {
  return (
    <S.MainCont isAuto={isAuto}>
      <S.Container>
        <S.LogoCont1>
          <S.LogoCont>
            <S.Logo><FontAwesomeIcon icon={faBuilding} size="2x" /></S.Logo>
          </S.LogoCont>
        </S.LogoCont1>
        <S.Address isAuto={isAuto}>
          Plot 33, Road 1, Close 1, F.H.E.
          <br />
          Woji, PH. Nigeria.
        </S.Address>
      </S.Container>
      <S.Container2 isAuto={isAuto}>
        <S.LogoCont1>
          <S.LogoCont>
            <S.Logo2><FontAwesomeIcon icon={faPhoneFlip} size="2x" /></S.Logo2>
          </S.LogoCont>
        </S.LogoCont1>
        <S.Number>
          +2348130746341
        </S.Number>
      </S.Container2>
      <S.Container2 isAuto={isAuto}>
        <S.LogoCont1>
          <S.LogoCont>
            <S.Logo2><FontAwesomeIcon icon={faEnvelope} size="2x" /></S.Logo2>
          </S.LogoCont>
        </S.LogoCont1>
        <S.Number>
          hr@veentech.com
        </S.Number>
      </S.Container2>
    </S.MainCont>
  );
};

export default Location;
