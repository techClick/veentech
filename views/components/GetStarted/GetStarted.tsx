import EscapeButton from 'components/EscapeButton/EscapeButton';
import React, { useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import { MainButton } from 'styles/styled';
import * as S from './GetStarted.styled';

const GetStarted = function GetStarted() {
  const [phoneNumber, setPhoneNumber] = useState<any>();
  const phoneStyle = {
    height: '45px',
    width: '100%',
    fontFamily: 'Poppins',
  };

  return (
    <S.Container>
      <S.Label1>
        The first step of the process is speaking with you
        and learning about your business.
        <EscapeButton />
      </S.Label1>
      <S.Label2>
        Fill in the details below to begin the process.
      </S.Label2>
      <S.InputSection>
        <S.Detail>Name</S.Detail>
        <S.Input
          placeholder="Entry required"
        />
        <S.Detail2>Email</S.Detail2>
        <S.Input
          placeholder="Entry required"
        />
        <S.Detail2>Phone (optional)</S.Detail2>
        <PhoneInput
          country="us"
          placeholder="Entry optional"
          value={phoneNumber}
          onChange={setPhoneNumber}
          inputStyle={phoneStyle}
        />

        <S.ButtonDiv>
          <MainButton>
            Submit
          </MainButton>
        </S.ButtonDiv>
      </S.InputSection>
    </S.Container>
  );
};

export default GetStarted;
