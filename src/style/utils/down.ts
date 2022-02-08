import breakpoints,{breakpointType} from "style/breakpoints";

export const down = (breakpoint: breakpointType): string => `@media(max-width:${ breakpoints[breakpoint]})`;
