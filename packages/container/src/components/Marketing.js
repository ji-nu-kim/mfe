import React, { useRef, useEffect } from 'react';
import { marketingMount } from 'marketing/Marketing';
import { useHistory } from 'react-router-dom';

function Marketing() {
  const ref = useRef(null);
  const history = useHistory();

  useEffect(() => {
    const { pathname } = history.location;
    const { onParentNavigate } = marketingMount(ref.current, {
      onNavigate: ({ pathname: nextPathname }) => {
        if (pathname !== nextPathname) history.push(nextPathname);
      },
      initialPath: pathname,
    });

    history.listen(onParentNavigate);
  }, []);

  return <div ref={ref}></div>;
}

export default Marketing;
