import React, { useRef, useEffect } from 'react';
import { authMount } from 'auth/Auth';
import { useHistory } from 'react-router-dom';

const Auth = ({ onSignin }) => {
  const ref = useRef(null);
  const history = useHistory();

  useEffect(() => {
    const { pathname } = history.location;
    const { onParentNavigate } = authMount(ref.current, {
      onNavigate: ({ pathname: nextPathname }) => {
        if (pathname !== nextPathname) history.push(nextPathname);
      },
      initialPath: pathname,
      onSignin,
    });

    history.listen(onParentNavigate);
  }, []);

  return <div ref={ref} />;
};

export default Auth;
