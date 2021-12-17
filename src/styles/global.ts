import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

export const GlobalStyle = createGlobalStyle`
  ${normalize};

  @font-face {
    font-display: swap;
    font-family: 'Heading Pro';
    font-style: normal;
    font-weight: normal;
    src: url('/fonts/HeadingPro-Light.woff') format('woff');
  }

  @font-face {
    font-display: swap;
    font-family: 'Heading Pro';
    font-style: normal;
    font-weight: bold;
    src: url('/fonts/HeadingPro-Bold.woff') format('woff');
  }

  @font-face {
    font-display: swap;
    font-family: 'Heading Pro Book';
    font-style: normal;
    font-weight: normal;
    src: url('/fonts/HeadingPro-Book.woff') format('woff');
  }

  @font-face {
    font-display: swap;
    font-family: 'Heading Pro Extra Bold';
    font-style: normal;
    font-weight: 800;
    src: url('/fonts/HeadingPro-ExtraBold.woff') format('woff');
  }

  *, ::after, ::before {
    box-sizing: border-box;
  }

  html {
    font-family: 'Heading Pro', sans-serif;
    font-size: 25px;
    line-height: 1em;
  }
  
  body {
    background-color: ${({ theme }) => theme.body.background};
  }
  
  html,
  body,
  #root {
    height: 100%;
    width: 100%;
  }
`;
