import React, { useState } from 'react';
import { RelativeContainer } from 'styles/styled';
import { moveSideBar, tabs } from 'views/components/Header/utils/utils';
import * as S from './Tabs.styled';

const Tabs = function Tabs() {
  const [selectedTab, setSelectedTab] = useState<number | null>();

  return (
    <>
      {
        tabs.map((tab, i) => (
          <S.Tab
            key={`tab${i}`}
            isSelected={i === selectedTab}
            onClick={() => {
              setSelectedTab(i);
              setTimeout(() => {
                moveSideBar(true);
                setSelectedTab(null);
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
