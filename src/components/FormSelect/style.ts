import styled, {css} from "styled-components";
import Select from 'react-select'
import {vh, vw} from "style/utils";


const StyledSelect = styled(Select)(
  ({theme}) => css `
    margin-top: ${vh(6)};
    margin-bottom: ${vh(16)};
    
    
    .formSelect {
      &__control {
        height: ${vh(55)};
        border: none;
      }
    }
  `
)


export {StyledSelect}
