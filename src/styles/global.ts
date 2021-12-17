import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

export const GlobalStyle = createGlobalStyle`
  ${normalize};

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
