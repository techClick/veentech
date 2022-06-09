import React, { useState } from 'react';
import MediaQuery from 'react-responsive';
import { useRouter } from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList } from '@fortawesome/free-solid-svg-icons';
import * as S from './Header.styled';
import { moveSideBar, tabs } from './utils/utils';
import Logo from '../Logo/Logo';

const Header = function Header({ isNoLinks }:{ isNoLinks?: boolean }) {
  const [tabActive] = useState<boolean[]>(tabs.map(() => false));
  const router = useRouter();

  return (
    <S.Container id="header">
      <S.RelativeContainer>
        <MediaQuery maxWidth={570}>
          <S.MenuContainer>
            <S.Menu onClick={() => {
              if (isNoLinks) {
                router.push('/');
                return;
              }
              moveSideBar(false);
            }}
            >
              <FontAwesomeIcon icon={faList} size="2x" />
            </S.Menu>
          </S.MenuContainer>
        </MediaQuery>
        <MediaQuery minWidth={571}>
          <S.LogoCont onClick={() => router.push('/')}>
            <Logo width="85px" />
          </S.LogoCont>
          <S.TabsContainer>
            {
              !isNoLinks && tabs.map((tab, i) => (
                <S.Tab
                  key={`tab_${i}`}
                  onMouseOver={() => {
                    const newTabActive = [...tabActive];
                    newTabActive[i] = true;
                    // setTabActive(newTabActive);
                  }}
                  onClick={() => tab.action()}
                >
                  {tab.name}
                  <S.Underline
                    isActive={tabActive[i]}
                  />
                </S.Tab>
              ))
            }
          </S.TabsContainer>
        </MediaQuery>
      </S.RelativeContainer>
    </S.Container>
  );
};

export default Header;
