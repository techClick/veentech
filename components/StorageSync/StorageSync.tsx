import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setHasSyncedWithStorage } from '../../redux/store';
import * as S from './StorageSync.styled';

const StorageSync = function StorageSync({ children }:{ children: any }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setHasSyncedWithStorage(true));
    (document.body.style as any).zoom = '100%';
  }, []);

  return (
    <S.Container>
      {children}
    </S.Container>
  );
};

export default StorageSync;
