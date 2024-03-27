import Header from "../Header";
import Routes from "../../Routes";

import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../../style/globalStyle";
import { Container } from "./styles";
import theme from "../../style/themes/default";
import ToastContainer from "../Toast/ToastContainer";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <ToastContainer />
        <Container>
          <Header />
          <Routes />
        </Container>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
