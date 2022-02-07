import fonts, { fontNameType } from './fonts';
import colors, { colorType } from './colors';
import breakpoints, { breakpointType } from './breakpoints';
import fontVariants, { fontVariantType } from './fontVariants';


export const up = (breakpoint: breakpointType): string => `@media(min-width: calc( ${ breakpoints[breakpoint]} + 0.02px ))`;
export const down = (breakpoint: breakpointType): string => `@media(max-width: ${ breakpoints[breakpoint]} )`;


export const vh = ( px: number): string => `${( px / 1080) * 100}vh`;
export const vw = ( px: number): string => `${( px / 1920) * 100}vw`;

export const col = ( colValue: number ):string => `${ 100 / 24 * colValue }vw`;

export const color = ( colorKey: colorType ): string => colors[colorKey];
export const font = ( font: fontNameType ): string => `font-family: ${fonts[font].family};`;

export const getFont = ( fontVariant: fontVariantType ): string => fontVariants[fontVariant];

export const includeFontsAll = ():string => {
    let resultCss: string = '';
    for ( const font of Object.values(fonts)) {
        resultCss += font.weights.map(
            (fontWeight) => `@font-face {
                font-family: '${font.family}';
                src: url('${font.family}-${fontWeight}.${font.format}');
                font-weight: ${fontWeight};
                font-style: normal;
                font-display: swap;
            }\n`
        );
    }

    return resultCss;
}


export const fontBreakPoints = ( fBPoints: {[key in breakpointType]? : string | number} ): string => {
    let resultCss: string = '';
    for (const [ fontSize, breakpoint ] of Object.entries(fBPoints)) {
        resultCss += `${down(breakpoint as breakpointType)}{ font-size: ${ typeof fontSize === 'string'? fontSize: fontSize+'px'};}\n`;
    }

    return resultCss;
};




