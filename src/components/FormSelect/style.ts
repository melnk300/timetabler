import styled, {css} from "styled-components";
import Select from 'react-select'
import {vh, vw} from "style/utils";


const StyledSelect = styled(Select)(
  ({theme}) => css `
    margin-top: ${vh(6)};
    margin-bottom: ${vh(16)};
    
    
    .formSelect {
      &__control {
        min-height: ${vh(55)};
        border: none;
        &--menu-is-open {
          border-bottom-left-radius: 0;
          border-bottom-right-radius: 0;
          border-bottom: 3px solid;
          z-index: 2;
        }
        &, &:hover {
          border-color: ${theme.colors.secondary};
        }
      }
      &__indicator {
        color: ${theme.colors.primary};
        transition: color .3s ease;
        cursor: pointer;
        &:hover {
          color: ${theme.colors.primary};
        }
      }
      &__indicator-separator {
        display: none;
      }
      &__menu {
        top: 85%;
        border-top-left-radius: 0;
        border-top-right-radius: 0;
        padding-top: 0;
        color: ${theme.colors.grey};
      }
      &__option--is-selected {
        background: ${theme.colors.selectHover};
        color: inherit;
      }
    }
  `
)


export {StyledSelect}
