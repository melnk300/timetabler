import styled, {css} from "styled-components";
import {vh, vw} from "style/utils";


const Label = styled.label(
  ({theme: {colors}}) => css`

    height: ${vh(48)};
    display: inline-block;
    transition: margin .3s ease;
    margin-top: ${vh(6)};
    margin-bottom: ${vh(16)};
    width: 100%;

    input, textarea {
      padding: ${vh(14)} ${vw(18)};
      border: none;
      border-radius: 3px;
      height: 100%;
      width: 100%;
      font-family: inherit;
      resize: none;

      &:focus {
        outline: 3px ${colors.secondary} solid;
      }
    }

    textarea {
      height: ${vh(110)};
    }

    &.input_active {
      margin-top: ${vh(28)};
      margin-bottom: ${vh(18)};

    }
    textarea+span {
      top: ${vh(25)};
    }
  `)

const InputContainer = styled.div`
  position: relative;
  width: 100%;
`

const Placeholder = styled.span(
  ({theme: {colors}}) => css`
    color: ${colors.grey};
    position: absolute;
    left: ${vw(15)};
    top: 50%;
    transform: translateY(-50%);
    transition: left .3s ease, top .3s ease, transform .3s ease;

    .input_active & {
      color: ${colors.white};
      left: 0;
      top: ${vh(-20)};
 
    }

  `)


export {Label, Placeholder, InputContainer}