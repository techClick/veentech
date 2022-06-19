import { faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useDispatch } from 'react-redux';
import { setShowPopup } from 'redux/store';
import * as S from './EscapeButton.styled';

const EscapeButton = function EscapeButton(
  { escapeAction, whiteX }
  :
  { escapeAction?: Function, whiteX?: boolean },
) {
  const dispatch = useDispatch();

  return (
    <S.Container
      whiteX={whiteX}
      onClick={() => {
        if (escapeAction) escapeAction();
        dispatch(setShowPopup({}));
      }}
    >
      <S.ClearIcon>
        <FontAwesomeIcon icon={faX} size="2x" />
      </S.ClearIcon>
    </S.Container>
  );
};

export default EscapeButton;
