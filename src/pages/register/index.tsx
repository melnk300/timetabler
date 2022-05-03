import type { NextPage } from 'next';
import {Dispatch, SetStateAction, useState} from "react";
import {AnimatePresence, motion} from "framer-motion";

import AuthPageLayout from "components/Layouts/AuthPageLayout";
import StepFormCounter from "components/FormComponents/StepFormCounter";
import {RegisterTitle} from "style/pages/register/firstStep";

import RegisterStep1 from "components/registerSteps/1";
import RegisterStep2 from "components/registerSteps/2";
import RegisterStep3 from "components/registerSteps/3";


interface RenderStepProps {
  step: number,
  setStep: Dispatch<SetStateAction<number>>
}

const RenderStep = (props: RenderStepProps) => {
  const {step, setStep} = props;
  switch (step){
    case 1: return <RegisterStep1 setStep={setStep}/>;
    case 2: return <RegisterStep2 setStep={setStep}/>;
    case 3: return <RegisterStep3 setStep={setStep}/>;
    default: return <RegisterStep1 setStep={setStep}/>;
  }
}



const Register: NextPage = () => {

  const [step, setStep] = useState<number>(1);

  return (
    <AuthPageLayout>
      <motion.div
        style={{height: 'auto'}}
      >
        <RegisterTitle>Регистрация</RegisterTitle>
        <StepFormCounter step={step}/>

        <AnimatePresence initial={false} exitBeforeEnter>
          <RenderStep {...{step, setStep}}/>
        </AnimatePresence>

      </motion.div>
    </AuthPageLayout>
  )
}

export default Register
