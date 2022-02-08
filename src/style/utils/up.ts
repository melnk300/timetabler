import breakpoints,{breakpointType} from "style/breakpoints";

export const up = (breakpoint: breakpointType): string => `@media(min-width:${ breakpoints[breakpoint]})`;
