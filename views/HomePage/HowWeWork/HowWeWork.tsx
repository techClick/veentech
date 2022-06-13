import React from 'react';
import { faClipboardCheck, faClock, faUserCheck, faWallet } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ContainerMax } from 'styles/styled';
import * as S from './HowWeWork.styled';

const HowWeWork = function HowWeWork() {
  const assurances = [{
    name: 'Results',
    description: `We assure you increase in business efficiency
      and consumer interactions.`,
    icon: faClipboardCheck,
  }, {
    name: 'Quality',
    description: `We are broiled industry professionals.
      We assure top standard service.`,
    icon: faUserCheck,
  }, {
    name: 'Speed',
    description: `We have standby resources for new projects.
      We assure speedy deployments.`,
    icon: faClock,
  }, {
    name: 'Save cost',
    description: `We manage our resources efficiently.
      You are assured the best prices.`,
    icon: faWallet,
  }];

  return (
    <S.Container>
      <ContainerMax>
        <S.Label>
          WHAT TO EXPECT
          <S.Label2>
            From our service
          </S.Label2>
        </S.Label>
        <S.AssureCont>
          {
            assurances.map((assurance) => (
              <>
                <S.Assurance key={`assurance_${assurance.name}`}>
                  <S.IconContainer>
                    <S.Icon>
                      <FontAwesomeIcon icon={assurance.icon} size="4x" />
                    </S.Icon>
                  </S.IconContainer>
                  <S.Name>{assurance.name}</S.Name>
                  <S.Desc>{assurance.description}</S.Desc>
                </S.Assurance>
              </>
            ))
          }
        </S.AssureCont>
      </ContainerMax>
    </S.Container>
  );
};

export default HowWeWork;
