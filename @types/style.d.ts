import {} from 'styled-components';

// importing the theme we created
import { theme } from '../theme';

// global typescript declaration for the theme

declare module 'styled-components' {
  type Theme = typeof theme;
  export type DefaultTheme = Theme;
}
