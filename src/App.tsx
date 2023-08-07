import React, { ReactElement } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '@app/store';
import Layout from '@pages/Layout';


import GlobalStyle from './GlobalStyle.ts';

const App = (): ReactElement => (
  <BrowserRouter>
      <Provider store={store}>
        <GlobalStyle />
          <Layout />
      </Provider>
  </BrowserRouter>
);

export default App;
