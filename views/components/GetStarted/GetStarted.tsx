import React from 'react';
import { MainButton } from 'styles/styled';
import * as S from './GetStarted.styled';

const GetStarted = function GetStarted() {
  return (
    <S.Container>
      <S.Label1>
        The first step of the process is speaking with you
        and learning about your business.
      </S.Label1>
      <S.Label2>
        Fill in the details below to begin the process.
      </S.Label2>
      <S.InputSection>
        <S.Detail>Name</S.Detail>
        <S.Input
          placeholder="Required"
        />
        <S.Detail2>Email</S.Detail2>
        <S.Input
          placeholder="Required"
        />
        <S.Detail2>Phone</S.Detail2>
        <S.Input
          placeholder="Optional"
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
