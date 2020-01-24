import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Header from './Header';
import Body from './Body';

function MainLayout() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Body />
      </BrowserRouter>
    </div>
  );
}

export default MainLayout;
