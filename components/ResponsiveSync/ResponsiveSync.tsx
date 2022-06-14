import React, { useEffect, useState } from 'react';
import { headerColor } from 'styles/styled';
import SideBar from 'views/components/SideBar/SideBar';

const ResponsiveSync = function ResponsiveSync({ children }:{ children: any }) {
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  (document.body.style as any).background = headerColor;

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
