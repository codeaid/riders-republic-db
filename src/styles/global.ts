import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';
import {
  HeadingProBoldWoff2,
  HeadingProBookWoff2,
  HeadingProExtraBoldWoff2,
  HeadingProLightWoff2,
  HeadingProBoldEot,
  HeadingProBoldTtf,
  HeadingProBoldWoff,
  HeadingProBookEot,
  HeadingProBookTtf,
  HeadingProBookWoff,
  HeadingProExtraBoldEot,
  HeadingProExtraBoldTtf,
  HeadingProExtraBoldWoff,
  HeadingProLightEot,
  HeadingProLightTtf,
  HeadingProLightWoff,
} from './fonts';

export const GlobalStyle = createGlobalStyle`
  ${normalize};

  @font-face {
    font-family: 'Heading Pro';
    font-style: normal;
    font-weight: normal;
    src: url(${HeadingProLightEot});
    src: url('${HeadingProLightEot}?#iefix') format('embedded-opentype'),
         url(${HeadingProLightWoff2}) format('woff2'),
         url(${HeadingProLightWoff}) format('woff'),
         url(${HeadingProLightTtf}) format('truetype');
  }

  @font-face {
    font-family: 'Heading Pro';
    font-style: normal;
    font-weight: bold;
    src: url(${HeadingProBoldEot});
    src: url('${HeadingProBoldEot}?#iefix') format('embedded-opentype'),
         url(${HeadingProBoldWoff2}) format('woff2'),
         url(${HeadingProBoldWoff}) format('woff'),
         url(${HeadingProBoldTtf}) format('truetype');
  }

  @font-face {
    font-family: 'Heading Pro Book';
    font-style: normal;
    font-weight: normal;
    src: url(${HeadingProBookEot});
    src: url('${HeadingProBookEot}?#iefix') format('embedded-opentype'),
         url(${HeadingProBookWoff2}) format('woff2'),
         url(${HeadingProBookWoff}) format('woff'),
         url(${HeadingProBookTtf}) format('truetype');
  }

  @font-face {
    font-family: 'Heading Pro Extra Bold';
    font-style: normal;
    font-weight: 800;
    src: url(${HeadingProExtraBoldEot});
    src: url('${HeadingProExtraBoldEot}?#iefix') format('embedded-opentype'),
         url(${HeadingProExtraBoldWoff2}) format('woff2'),
         url(${HeadingProExtraBoldWoff}) format('woff'),
         url(${HeadingProExtraBoldTtf}) format('truetype');
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
