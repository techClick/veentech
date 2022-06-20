import EscapeButton from 'views/components/EscapeButton/EscapeButton';
import React, { useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import { MainButton } from 'styles/styled';
import { isValidEmail } from 'utils/utils';
import { toast } from 'react-toastify';
import { setShowPopup } from 'redux/store';
import SendingMessage from 'components/SendingMessage/SendingMessage';
import { Start } from 'types/types';
import { getCountry } from 'views/Service/utils/countryUtils';
import { useDispatch } from 'react-redux';
import * as S from './GetStarted.styled';
import { sendStartDetails } from './utils';
import StartComplete from './StartComplete/StartComplete';

const GetStarted = function GetStarted({ type } : { type: string }) {
  const [email, setEmail] = useState<string>();
  const [name, setName] = useState<string>();
  const [phoneNumber, setPhoneNumber] = useState<any>();
  const dispatch = useDispatch();

  const phoneStyle = {
    height: '45px',
    width: '100%',
    fontFamily: 'Poppins',
  };

  const sendDetails = async () => {
    let error = '';
    if (!email) error = 'Email required';
    if (email && !isValidEmail(email)) error = 'Email is invalid';
    if (!name) error = 'Name required';
    if (error) {
      toast(error, { type: 'error' });
      return;
    }
    dispatch(setShowPopup({ component: <SendingMessage /> }));
    const message: Start = {
      name: name || '',
      email: email || '',
      phone: phoneNumber?.toString() || 'NO PHONE',
      type,
      country: getCountry() || 'NO COUNTRY',
    };
    const response: any = await dispatch(sendStartDetails(message));
    dispatch(setShowPopup({}));
    if (response.status === 'success') {
      dispatch(setShowPopup({ component: <StartComplete /> }));
      setEmail('');
      setName('');
      setPhoneNumber('');
      return;
    }
    toast(response.data, { type: 'error' });
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
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Entry required"
        />
        <S.Detail2>Email</S.Detail2>
        <S.Input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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
          <MainButton onClick={() => {
            sendDetails();
          }}
          >
            Submit
          </MainButton>
        </S.ButtonDiv>
      </S.InputSection>
    </S.Container>
  );
};

export default GetStarted;
