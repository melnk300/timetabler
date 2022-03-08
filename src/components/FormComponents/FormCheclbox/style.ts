import styled, { css } from "styled-components";
import {vh, vw} from "style/utils";


const CheckBoxLabel = styled.label`
  margin-top: ${vh(18)};
  //margin-bottom: ${vh(35)};
  
  display: inline-flex;
  align-items: center;
`
const CheckboxContainer = styled.div(
  ({theme: {colors}}) => css`

  width: 20px;
  min-width: 20px;
  height: 20px;
  background: ${colors.white};
  border-radius: 3px;
  position: relative;
  flex-grow: 1;
  
  input {
    opacity: 0;
    display: none;
  }
  .input_focused & {
    outline: 3px solid ${colors.secondary};
  }
  .input_checked &::after {
    content: '';
    display: block;
    position: absolute;
    left: 4px; top: -2px;
    height: 9px;
    width: 18px;
    
    border-bottom: 4px solid ${colors.secondary};
    border-left: 4px solid ${colors.secondary};
    transform: rotate(-45deg);
    
  }  
`)

const CheckboxDeskription = styled.div`
  margin-top: 3px;
  margin-left: ${vw(10)};
`



export  { CheckBoxLabel, CheckboxContainer, CheckboxDeskription }