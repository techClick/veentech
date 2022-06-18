import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useAppSelector } from 'redux/hooks';
import { selectShowPopup, setShowPopup } from 'redux/store';
import { Background, headerColor, textColor2 } from 'styles/styled';
import SideBar from 'views/components/SideBar/SideBar';

const Global = function Global({ children }:{ children: any }) {
  const showPopup = useAppSelector(selectShowPopup);
  const [mounted, setMounted] = useState<boolean>(false);
  const dispatch = useDispatch();

  useEffect(() => {
    setMounted(true);
    dispatch(setShowPopup({}));
  }, []);

  if (typeof window !== 'undefined') {
    (document.body.style as any).background = headerColor;
    (document.body.style as any).color = textColor2;
  }

  return (
    <>
      {mounted && (
        <div role="dialog">
          {showPopup.component
            && (
              <>
                <Background onClick={() => (
                  showPopup.exitOnBgClick && dispatch(setShowPopup({}))
                )}
                />
                {showPopup.component}
              </>
            )}
          <SideBar />
          {children}
        </div>
      )}
    </>
  );
};

export default Global;
