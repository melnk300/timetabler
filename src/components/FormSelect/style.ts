import styled, {css} from "styled-components";
import {vh, vw} from "style/utils";

const SelectContainer = styled.label`
  display: inline-block;
  position: relative;
  width: 100%;
  
  select {
    height: 0;
    width: 0;
    opacity: 0;
  }
`

const SelectList = styled.div(
  ({theme: {colors}}) => css`
  position: absolute;
  bottom: 0;
  left: 0;
  background: ${colors.white};
  width: 100%;
  color: ${colors.grey};
`)

const SelectListItem = styled.div(
  ({theme: {colors}}) => css`
  position: relative;
  cursor: pointer;
  padding: ${vh(13)} ${vw(20)};
  padding-right: ${vw(60)};
  
  &:hover {
    background-color: ${colors.selectHover};
  }
`)

export {SelectContainer, SelectList, SelectListItem}
