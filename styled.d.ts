import { ITheme } from './src/style/theme';
import 'styled-components';



declare module 'styled-components' {
  export interface DefaultTheme extends ITheme {}
}