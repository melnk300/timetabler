import styled from "styled-components";
import {col, vh} from "style/utils";

const ButtonBox = styled.button`
  width: ${col(2)};
  height: ${vh(50)};
  background: ${({theme}) => theme.colors.secondary};
  color: inherit;
  font-family: inherit;
  transition: background .3s ease;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin-top: ${vh(35)};
  
  &:hover {
    background: ${({theme}) => theme.colors.hoverSecondaryButton};
  }
  &, &:hover {
    border: none;
  }
  
`

export  {ButtonBox}
