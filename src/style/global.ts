
import { ThemeType } from './theme';
import { createGlobalStyle, css } from 'styled-components';

const GlobalStyle = createGlobalStyle<{ theme: ThemeType }>(
  ({ theme: { includeFontsAll, defaultFont } }:{ theme: ThemeType }) => css`    
    body {
        font-family: '${defaultFont}';
        background: red;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    ${includeFontsAll()}

    `
);





export default GlobalStyle
