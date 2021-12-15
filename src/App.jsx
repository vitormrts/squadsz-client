import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from '@styles/theme';
import GlobalStyle from '@styles/GlobalStyle';
import moment from 'moment';
import 'moment/locale/pt-br';
import Routes from './routes';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AuthProvider } from './contexts/AuthContext';

const App = function () {
  moment.locale('pt-br');

  return (
    <AuthProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Routes />
      </ThemeProvider>
    </AuthProvider>
  );
};

export default App;
