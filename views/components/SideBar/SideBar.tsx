import React from 'react';
import { moveSideBar } from 'views/components/Header/utils/utils';
import Logo from 'views/components/Logo/Logo';
import { RelativeContainer } from 'styles/styled';
import * as S from './SideBar.styled';
import Tabs from './Tabs/Tabs';

const SideBar = function SideBar() {
  return (
    <>
      <S.Container id="sideBar">
        <RelativeContainer>
          <Tabs />
          <S.LogoCont onClick={() => moveSideBar(true)}>
            <Logo width="110px" index={1} />
          </S.LogoCont>
        </RelativeContainer>
      </S.Container>
      <S.WhiteBg id="whiteBg" onClick={() => moveSideBar(true)} />
    </>
  );
};

export default SideBar;
