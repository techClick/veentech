import React, { useEffect, useState } from 'react';
import { headerColor, textColor2 } from 'styles/styled';
import SideBar from 'views/components/SideBar/SideBar';

const ResponsiveSync = function ResponsiveSync({ children }:{ children: any }) {
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (typeof window !== 'undefined') {
    (document.body.style as any).background = headerColor;
    (document.body.style as any).color = textColor2;
  }

  return (
    <>
      {mounted && (
        <div role="dialog">
          <SideBar />
          {children}
        </div>
      )}
    </>
  );
};

export default ResponsiveSync;
