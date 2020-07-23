import React from 'react';
import { ThemeProvider } from 'styled-components';
import Navbar from './components/Navbar';
import GlobalStyle from './theme/GlobalStyle';
import theme from './theme/mainTheme';
function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Navbar />
      </ThemeProvider>
    </div>
  );
}

export default App;
