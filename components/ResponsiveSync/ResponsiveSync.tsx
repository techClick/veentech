import React, { useEffect, useState } from 'react';

const ResponsiveSync = function ResponsiveSync({ children }:{ children: any }) {
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      {mounted && (
        <>
          {children}
        </>
      )}
    </>
  );
};

export default ResponsiveSync;
