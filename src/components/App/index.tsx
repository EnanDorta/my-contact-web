import Header from '../Header';
import Routes from '../../Routes';

import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from '../../style/globalStyle';
import { Container } from './styles'
import theme from '../../style/themes/default'


function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Container>
          <Header />
          <Routes />
        </Container>
        <GlobalStyle />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
