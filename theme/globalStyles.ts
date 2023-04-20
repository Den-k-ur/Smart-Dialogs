import { Noto_Sans } from 'next/font/google';
import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const NotoSans = Noto_Sans({
  subsets: ['cyrillic'],
  weight: '400',
});

export const GlobalStyles = createGlobalStyle`

  ${normalize}

  @font-face{
    font-family: 'Noto Sans';
    
  }
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

  html {
    font-family: ${NotoSans.style.fontFamily};
  }


  &::-webkit-scrollbar {
    width: 3px;
  }

  `;
