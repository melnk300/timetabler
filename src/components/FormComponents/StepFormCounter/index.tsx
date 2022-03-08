import {StepCounter} from "./style";
import {AnimatePresence} from "framer-motion";

interface StepFormCounterProps {
  step: number
}

const StepFormCounter = ({step}:StepFormCounterProps) => {
  
  return (
    <AnimatePresence initial={false} exitBeforeEnter>
      <StepCounter
        key={step}
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity:0}}
        className="font24"
      >Шаг {step} из 3</StepCounter>
    </AnimatePresence>
  )
  
}

export default StepFormCounter;
