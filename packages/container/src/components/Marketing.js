import React, { useRef, useEffect } from 'react';
import { marketingMount } from 'marketing/Marketing';

function Marketing() {
  const ref = useRef(null);

  useEffect(() => {
    marketingMount(ref.current);
  }, []);

  return <div ref={ref}></div>;
}

export default Marketing;
