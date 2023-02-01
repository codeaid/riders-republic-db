import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

export const GlobalStyle = createGlobalStyle`
  ${normalize};

  *, ::after, ::before {
    box-sizing: border-box;
  }

  html {
    font-family: 'Heading Pro', sans-serif;
    font-size: 20px;
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
  
  *::-webkit-scrollbar {
    width: 0.5rem;
  }

  *::-webkit-scrollbar-button {
    display: none;
    height: 0;
    width: 0;
  }

  *::-webkit-scrollbar-corner,
  *::-webkit-scrollbar-track {
    background-color: transparent;
  }

  *::-webkit-scrollbar-thumb {
    background-clip: padding-box;
    background-color: ${({ theme }) => theme.navigation.item.active.background};
    border-color: transparent;
    border-radius: 0.3rem;
    border-style: solid;
    border-width: 0.1rem;
    width: 0.3rem;
  }
`;
