import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html, body, #root {
    scroll-behavior: smooth;
    font-size: 16px !important;
    font-family: Inter, system-ui, sans-serif;
    font-weight: 400;
    transform: none !important;
    zoom: 1 !important;
    scale: 1 !important;
    min-width: 0 !important;
    min-height: 0 !important;
    max-width: 100vw !important;
    max-height: 100vh !important;
  }

  body {
    font-size: 1rem !important;
  }

  body {
    background: ${({ theme }) => theme.colors.bg};
    color: ${({ theme }) => theme.colors.text};
    font-family: Inter, system-ui, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    line-height: 1.5;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button {
    font-family: inherit;
  }
`;