import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

export const GlobalStyles = createGlobalStyle`

  ${normalize}
  body {
    font-size: 16px;
    scroll-behavior: smooth;
  }
  *, *::before, *::after {
    box-sizing: border-box;
  }

  a {
    text-decoration:none;
  }

  h1,h2,h3,h4,h5,h6 {
 margin:0;

  }


  &::-webkit-scrollbar {
    width: 3px;
  }

  `;
