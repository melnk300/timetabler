const fontFormats = [ "woff", "woff2", "ttf" ] as const;
type fontFormatType = typeof fontFormats[number];

export type fontNameType = keyof typeof fonts 

export type fontType = {
    family: string;
    weights: number[];
    format: fontFormatType;
};





const fonts: Record< string, fontType > = {
    cuprum: {
        family: 'Cuprum',
        weights: [400, 500, 700],
        format: 'ttf'
    }
};

export default fonts;
