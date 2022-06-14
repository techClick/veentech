import React, { useEffect, useState } from 'react';
import SideBar from 'views/components/SideBar/SideBar';

const ResponsiveSync = function ResponsiveSync({ children }:{ children: any }) {
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
  }, []);

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
