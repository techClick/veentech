import React, { useState } from 'react';
import MediaQuery from 'react-responsive';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList } from '@fortawesome/free-solid-svg-icons';
import * as S from './Header.styled';
import { moveSideBar, tabs } from './utils/utils';
import Logo from '../Logo/Logo';

const Header = function Header() {
  const [tabActive] = useState<boolean[]>(tabs.map(() => false));
  const router = useRouter();
  const dispatch = useDispatch();

  return (
    <S.Container id="header">
      <S.RelativeContainer>
        <MediaQuery maxWidth={570}>
          <S.MenuContainer>
            <S.Menu onClick={() => {
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
              tabs.map((tab, i) => (
                <S.Tab
                  key={`tab_${i}`}
                  onClick={() => {
                    if (tab.name !== 'For Businesses') router.push(tab.path);
                  }}
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
