import { faEnvelope, faEye, faGlobe, faMobileScreen, faRobot, faServer } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { ContainerMax } from 'styles/styled';
import * as S from './TechOptions.styled';

const TechOptions = function TechOptions() {
  const techOptions = [{
    name: 'Automation',
    description: `Acquire hardware or software that is tailored to your business needs.
      Simplify business processes with custom devices or software.`,
    icon: faRobot,
  }, {
    name: 'Business Website',
    description: `Acquire an online application that showcases your business,
      builds consumer base and gathers feedback.`,
    icon: faGlobe,
  }, {
    name: 'Custom Mobile App',
    description: `Acquire a mobile application that is tailored to your business processes.
      Be ever close to your consumers and effiecient in your operations.`,
    icon: faMobileScreen,
  }, {
    name: 'Database Warehouse',
    description: `Acquire a repository for your data and information. Access to this database
      can be granted to your clients or employees.`,
    icon: faServer,
  }, {
    name: 'Digital Advertising',
    description: `Take advantage of tools like Facebook, YouTube and Google Adwords
      and grow your consumer base.`,
    icon: faEye,
  }, {
    name: 'Business Email',
    description: `Standout and have a private and personalized company email address,
      which will be used by you and your employees.`,
    icon: faEnvelope,
  }];

  return (
    <S.MainContainer>
      <ContainerMax>
        {
          techOptions.map((option) => (
            <S.TechOption>
              <S.OptionName>
                {option.name}
                <S.IconCont>
                  <S.Icon2>
                    <FontAwesomeIcon icon={option.icon} size="2x" />
                  </S.Icon2>
                </S.IconCont>
                <S.IconCont>
                  <S.Icon>
                    <FontAwesomeIcon icon={option.icon} size="2x" />
                  </S.Icon>
                </S.IconCont>
              </S.OptionName>
              <S.Description>{option.description}</S.Description>
              <S.ButtonDiv>
                <S.Button>
                  Learn more
                </S.Button>
                <S.MainButton>
                  Get started
                </S.MainButton>
              </S.ButtonDiv>
            </S.TechOption>
          ))
        }
      </ContainerMax>
    </S.MainContainer>
  );
};

export default TechOptions;
