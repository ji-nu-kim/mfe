import React, { lazy, Suspense, useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';
import Header from './components/Header';

const MarketingLazy = lazy(() => import('./components/Marketing'));
const AuthLazy = lazy(() => import('./components/Auth'));

const generateClassName = createGenerateClassName({
  productionPrefix: 'co',
});

const App = () => {
  const [isSignedin, setIsSignedin] = useState(false);

  return (
    <BrowserRouter>
      <StylesProvider generateClassName={generateClassName}>
        <div>
          <Header onSignOut={() => setIsSignedin(false)} isSignedin={isSignedin} />
          <Suspense fallback={<div>loading...</div>}>
            <Switch>
              <Route path="/auth">
                <AuthLazy onSignin={() => setIsSignedin(true)} />
              </Route>
              <Route path="/" component={MarketingLazy} />
            </Switch>
          </Suspense>
        </div>
      </StylesProvider>
    </BrowserRouter>
  );
};

export default App;
