import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Rubik', sans-serif;
    font-size: 18px;
    text-align: center;
    height: 100%;
    overflow: hidden;
  }
`;
