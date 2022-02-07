import { css } from 'styled-components';
import { fontBreakPoints } from './themeUtils';


const fontVariants = {
    font16: css`
        ${fontBreakPoints({ xs: 12, md: 14, hd: 16 })};

        font-weight: 700;
    `,
    font20: css`
        ${fontBreakPoints({ xs: 14, md: 16, hd: 20 })};
        font-weight: 400;
    `
};

export type fontVariantType = keyof typeof fontVariants;

export default fontVariants;
