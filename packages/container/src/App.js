import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import Marketing from './components/Marketing';

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Marketing />
      </div>
    </BrowserRouter>
  );
};

export default App;
