import { getFont } from './themeUtils';

const typography = {
    h1: getFont('font20'),
    h2: getFont('font16')
};

export type typographyType = keyof typeof typography;

export default typography