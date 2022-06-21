import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faFacebookF, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import * as S from './Social.styled';

const Social = function Social() {
  return (
    <S.Container>
      <S.IconContainer
        onClick={() => window.open('https://linkedin.com/company/zavotech/', '_blank')}
      >
        <S.Icon>
          <FontAwesomeIcon icon={faLinkedinIn as IconDefinition} size="2x" />
        </S.Icon>
      </S.IconContainer>
      <S.IconContainer
        onClick={() => window.open('https://facebook.com/zavotech/', '_blank')}
      >
        <S.Icon>
          <FontAwesomeIcon icon={faFacebookF as IconDefinition} size="2x" />
        </S.Icon>
      </S.IconContainer>
      {/* <S.IconContainer
        onClick={() => window.open('https://twitter.com/topdevafrica1/', '_blank')}
      >
        <S.Icon>
          <FontAwesomeIcon icon={faTwitter as IconDefinition} size="2x" />
        </S.Icon>
      </S.IconContainer>
      <S.IconContainer
        isLast
        target="_blank"
        onClick={() => window.open('https://instagram.com/topdevafrica/', '_blank')}
      >
        <S.Icon>
          <FontAwesomeIcon icon={faInstagram as IconDefinition} size="2x" />
        </S.Icon>
      </S.IconContainer> */}
    </S.Container>
  );
};

export default Social;
