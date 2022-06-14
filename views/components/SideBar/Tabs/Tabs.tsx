import { useRouter } from 'next/router';
import React from 'react';
import { useDispatch } from 'react-redux';
import { RelativeContainer } from 'styles/styled';
import { moveSideBar, tabs } from 'views/components/Header/utils/utils';
import * as S from './Tabs.styled';

const Tabs = function Tabs() {
  const router = useRouter();
  const page = window.location.pathname.split('/').pop();
  const dispatch = useDispatch();

  return (
    <>
      {
        page !== '' && (
          <S.Tab
            onClick={() => {
              router.push('/');
              setTimeout(() => {
                moveSideBar(true);
              }, 300);
            }}
          >
            <RelativeContainer flex>
              Home
            </RelativeContainer>
          </S.Tab>
        )
      }
      {
        tabs.map((tab, i) => (
          <S.Tab
            key={`tab${i}`}
            onClick={() => {
              if (tab.action(dispatch)) router.push(tab.path);
              setTimeout(() => {
                moveSideBar(true);
              }, 300);
            }}
          >
            <RelativeContainer flex>
              {tab.name}
            </RelativeContainer>
          </S.Tab>
        ))
      }
    </>
  );
};

export default Tabs;
