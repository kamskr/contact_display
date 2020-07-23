import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './theme/GlobalStyle';
import theme from './theme/mainTheme';
import MainView from './components/MainView';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <MainView />
      </ThemeProvider>
    </div>
  );
}

export default App;
