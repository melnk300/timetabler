import styled from "styled-components";
import {vw} from "style/utils";
import {motion} from "framer-motion";

const RegisterTitle = styled.div`
  font-size: ${vw(66)};
  font-weight: 700;
  margin-bottom: 5px;
`

const StepFormCounter = styled(motion.div)`
  margin-bottom: 25px;
`


export { RegisterTitle, StepFormCounter }