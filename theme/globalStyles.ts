import { Noto_Sans } from 'next/font/google';
import localFont from 'next/font/local';
import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

// const NotoSans = Noto_Sans({
//   subsets: ['cyrillic'],
//   weight: '400',
// });

const NotoSans = localFont({
  src: [
    {
      path: '../public/fonts/NotoSans/NotoSans-Regular.woff2',
      weight: '400',
    },
    {
      path: '../public/fonts/NotoSans/NotoSans-Medium.woff2',
      weight: '500',
    },
    {
      path: '../public/fonts/NotoSans/NotoSans-SemiBold.woff2',
      weight: '600',
    },
    {
      path: '../public/fonts/NotoSans/NotoSans-Bold.woff2',
      weight: '700',
    },
  ],
});

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

  p {
    margin: 0;
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
