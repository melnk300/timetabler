import { FlattenSimpleInterpolation } from "styled-components";
import fontVariants,{fontVariantType} from "style/fontVariants";
export const getFont = ( fontVariant: fontVariantType ):FlattenSimpleInterpolation => fontVariants[fontVariant];