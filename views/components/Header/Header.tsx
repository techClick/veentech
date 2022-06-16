import React, { useEffect, useState } from 'react';
import MediaQuery from 'react-responsive';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList } from '@fortawesome/free-solid-svg-icons';
import * as S from './Header.styled';
import { moveSideBar, tabs } from './utils/utils';
import Logo from '../Logo/Logo';
import ServiceDropdown from './ServiceDropdown/ServiceDropdown';

const Header = function Header() {
  const [isShowServices, setIsShowServices] = useState<boolean>(false);
  const [, setRemoveDropdownTimeout] = useState<any>(null);
  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    const servicesDropdown = document.getElementById('services');
    if (servicesDropdown) {
      if (isShowServices) {
        servicesDropdown.style.height = '334.5px';
        return;
      }
      servicesDropdown.style.height = '0px';
    }
  }, [isShowServices]);

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
                    if (tab.name !== 'For Businesses') {
                      if (tab.action(dispatch)) router.push(tab.path);
                    }
                  }}
                  onMouseLeave={() => {
                    if (tab.name === 'For Businesses') {
                      setRemoveDropdownTimeout(setTimeout(
                        () => setIsShowServices(false),
                        100,
                      ));
                    }
                  }}
                >
                  <S.TabNameDiv>
                    <S.TabName
                      onMouseEnter={() => {
                        if (tab.name === 'For Businesses') {
                          setRemoveDropdownTimeout(clearTimeout);
                          setIsShowServices(true);
                        }
                      }}
                    >
                      {tab.name}
                    </S.TabName>
                  </S.TabNameDiv>
                  {
                    tab.name === 'For Businesses' && (
                      <ServiceDropdown
                        setIsShowServices={setIsShowServices}
                        setRemoveDropdownTimeout={setRemoveDropdownTimeout}
                      />
                    )
                  }
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
