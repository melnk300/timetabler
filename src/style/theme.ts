import colors from "./colors";
import breakpoints from "./breakpoints";
import fonts from "./fonts";
import typography from "./fontVariants";
import * as themeUtils from './themeUtils'

const theme = {
    colors,
    breakpoints,
    fonts,
    defaultFont: 'Cuprum',
    typography,
    ...themeUtils
};

export type ThemeType = typeof theme;
export default theme;