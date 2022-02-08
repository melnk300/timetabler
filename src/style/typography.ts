import { fontVariantType } from './fontVariants';



const typography: Record<string, fontVariantType> = {
    h1: 'font20',
    h2: 'font16'
};

export type typographyType = keyof typeof typography;

export default typography