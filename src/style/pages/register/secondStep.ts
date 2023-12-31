import styled from "styled-components";
import {vw} from "style/utils";

const RegisterTitle = styled.div`
  font-size: ${vw(66)};
  font-weight: 700;
  margin-bottom: 5px;
`

const StepFormCounter = styled.div`
  margin-bottom: 25px;
`

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
`


export { RegisterTitle, StepFormCounter, ButtonsContainer }
