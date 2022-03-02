import {FC} from "react";
import {StepContainer} from "./style";



const FormStepContainer:FC = ({children}) => (
  <StepContainer
    initial={{opacity: 0, height: 0}}
    animate={{ opacity: 1, height: 'auto'}}
    exit={{ opacity: 0, height: 0 }}
    // transition={{ duration: .5}}
  >
    {children}
  </StepContainer>
)

export default FormStepContainer;