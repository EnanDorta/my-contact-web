import { createGlobalStyle } from 'styled-components'


export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Sora', sans-serif;
  }

  body {
    background: ${({ theme }: any) => theme.colors.background};
    font-size: 16px;
    color: ${({ theme }: any) => theme.colors.gray[900]}
  }

  button {
    cursor: pointer;
  }
`
