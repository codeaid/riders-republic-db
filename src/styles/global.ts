import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';
import HeadingProBold from './fonts/HeadingPro-Bold.woff2';
import HeadingProBook from './fonts/HeadingPro-Book.woff2';
import HeadingProExtraBold from './fonts/HeadingPro-ExtraBold.woff2';
import HeadingProLight from './fonts/HeadingPro-Light.woff2';

export const GlobalStyle = createGlobalStyle`
  ${normalize};

  @font-face {
    font-family: 'Heading Pro';
    font-style: normal;
    font-weight: normal;
    src: url(${HeadingProLight}) format('woff2');
  }

  @font-face {
    font-family: 'Heading Pro';
    font-style: normal;
    font-weight: bold;
    src: url(${HeadingProBold}) format('woff2');
  }

  @font-face {
    font-family: 'Heading Pro Book';
    font-style: normal;
    font-weight: normal;
    src: url(${HeadingProBook}) format('woff2');
  }

  @font-face {
    font-family: 'Heading Pro Extra Bold';
    font-style: normal;
    font-weight: 800;
    src: url(${HeadingProExtraBold}) format('woff2');
  }

  *, ::after, ::before {
    box-sizing: border-box;
  }

  html {
    font-family: 'Heading Pro', sans-serif;
    font-size: 25px;
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
