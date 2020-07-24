import React from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import './App.css';
import Routes from './components/Routes';
import 'fontsource-roboto';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#040404',
      contrastText: '#fafafa'
    },
    secondary: {
      main: '#f44336',
    },
  },
});

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <div style={{ minHeight: '64px' }} />
        <Routes />
      </ThemeProvider>
    </>
  );
}

export default App;
