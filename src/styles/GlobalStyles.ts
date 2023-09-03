import { createGlobalStyle, css } from "styled-components";

const styles = css`
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: Raleway, sans-serif;

    background-color: ${({ theme }) => theme.bodyColor};
    color: ${({ theme }) => theme.textColor};
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }
`;

const GlobalStyles = createGlobalStyle`
  ${styles}
`;

export default GlobalStyles;
