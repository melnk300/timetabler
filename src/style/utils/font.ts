import fonts, {fontNameType} from "style/fonts";
export const font = ( font: fontNameType ): string => `font-family: ${fonts[font].family};`;
