import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle` 
 *, *::before, *::after {
    box-sizing: border-box;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
    height: 100%;
  }

  body {
    font-family: 'Inter', sans-serif;
    font-size: 1.6rem;
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    background-color: #1A1A1A;
  }

  html, body {
    height: 100%;
  }

  #root {
    isolation: isolate;
    min-height: 100%;
  }

  img, picture, video, canvas, svg {
    display: block;
    max-width: 100%;
  }


  input, button, textarea, select {
    font: inherit;
  } 
`;