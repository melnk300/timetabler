import type { NextPage } from 'next';
import AuthPageLayout from "components/AuthPageLayout";
import {RegisterTitle, StepFormCounter} from "style/pages/register/firstStep";
import RegisterStep1 from "components/registerSteps/1";
import RegisterStep2 from "components/registerSteps/2";
import RegisterStep3 from "components/registerSteps/3";
import {NextRouter, withRouter} from 'next/dist/client/router';
import SecondaryButton from 'components/SecondaryButton';
import {Box} from "@mui/material";
import {useState} from "react";
import {AnimatePresence, motion} from "framer-motion";

const steps = ['1','2','3'];

const renderStep = (step?: number) => {
  switch (step){
    case 1: return <RegisterStep1/>;
    case 2: return <RegisterStep2/>;
    case 3: return <RegisterStep3/>;
    default: return <RegisterStep1/>;
  }
}

const normalizeStep = (steps: string[],step: string | undefined): number => {
  return parseInt(steps.find(el => el === step) || '1') ;
}



const Register: NextPage<{router: NextRouter}> = (props) => {
  
  const { router } = props;
  const URLstep = normalizeStep(steps, router.query.step as string);
  const [step, setStep] = useState<number>(URLstep);
  
  
  
  return (
    <AuthPageLayout>
      <motion.form
        style={{height: 'auto'}}
      >
        <RegisterTitle>Регистрация</RegisterTitle>
        
        <AnimatePresence initial={false} exitBeforeEnter>
          <StepFormCounter
            key={step}
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity:0}}
            className="font24"
          >Шаг {step} из 3</StepFormCounter>
        </AnimatePresence>
        
        <AnimatePresence initial={false} exitBeforeEnter>
          { renderStep(step) }
        </AnimatePresence>
        
        <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
          
          {/*{step != 1 &&*/}
          {/*  <SecondaryButton*/}
          {/*    onClick={(e) => {*/}
          {/*      e.preventDefault()*/}
          {/*      setStep(prev => prev-1)*/}
          {/*    } }*/}
          {/*  >*/}
          {/*    Обратно*/}
          {/*  </SecondaryButton>*/}
          {/*}*/}
          <SecondaryButton
            onClick={(e) => {
              e.preventDefault()
              setStep(prev => prev+1)
            } }
          >
            Продолжить
          </SecondaryButton>
        
        </Box>

        
        
      </motion.form>
    </AuthPageLayout>
  )
}

export default withRouter(Register)
