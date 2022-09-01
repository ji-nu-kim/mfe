import React, { lazy, Suspense, useEffect, useState } from 'react';
import { Router, Switch, Route, Redirect } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';
import Header from './components/Header';
import { createBrowserHistory } from 'history';

const MarketingLazy = lazy(() => import('./components/Marketing'));
const AuthLazy = lazy(() => import('./components/Auth'));
const DashboardLazy = lazy(() => import('./components/DashboardApp'));

const generateClassName = createGenerateClassName({
  productionPrefix: 'co',
});

const history = createBrowserHistory();

const App = () => {
  const [isSignedin, setIsSignedin] = useState(false);

  useEffect(() => {
    if (isSignedin) history.push('/dashboard');
  }, [isSignedin]);

  return (
    <Router history={history}>
      <StylesProvider generateClassName={generateClassName}>
        <div>
          <Header onSignOut={() => setIsSignedin(false)} isSignedin={isSignedin} />
          <Suspense fallback={<div>loading...</div>}>
            <Switch>
              <Route path="/auth">
                <AuthLazy onSignin={() => setIsSignedin(true)} />
              </Route>
              <Route path="/dashboard">
                {!isSignedin && <Redirect to="/" />}
                <DashboardLazy />
              </Route>
              <Route path="/" component={MarketingLazy} />
            </Switch>
          </Suspense>
        </div>
      </StylesProvider>
    </Router>
  );
};

export default App;
