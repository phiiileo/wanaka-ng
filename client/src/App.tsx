import React from 'react';
import logo from './logo.svg';
import getStore from './redux/store';
import Router from './router';
import './App.css';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { AlertProvider, AppContextProvider, ModalContextProvider, ThemeProvider } from './contexts';
import { Global } from '@emotion/react';
import globalStyle from './GlobalStyle';
import './font.scss';

const { store, persistor } = getStore();

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider>
          <AppContextProvider>
            <AlertProvider>
              <ModalContextProvider>
                <Global styles={globalStyle} />
                <Router />
              </ModalContextProvider>
            </AlertProvider>
          </AppContextProvider>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;
