import type { NextPage } from 'next';
import AuthPageLayout from "components/AuthPageLayout";
import {RegisterTitle, StepFormCounter} from "style/pages/register/firstStep";
import RegisterStep1 from "components/registerSteps/1";
import RegisterStep2 from "components/registerSteps/2";
import RegisterStep3 from "components/registerSteps/3";
import {NextRouter, withRouter} from 'next/dist/client/router';


const renderStep = (step?: string) => {
  switch (step){
    case '1': return <RegisterStep1/>;
    case '2': return <RegisterStep2/>;
    case '3': return <RegisterStep3/>;
    default: return <RegisterStep1/>;
  }
}

const normalizeStep = (steps: string[],step: string | undefined): string => {
  return steps.find(el => el === step) || '1';
}



const Register: NextPage<{router: NextRouter}> = (props) => {
  
  const { router } = props;
  const step = normalizeStep(['1','2','3'], router.query.step as string);
  
  
  
  return (
    <AuthPageLayout>
      <form>
        <RegisterTitle>Регистрация</RegisterTitle>
        <StepFormCounter className="font24">Шаг {step} из 3</StepFormCounter>
        
        { renderStep(step) }
        
        
      </form>
    </AuthPageLayout>
  )
}


export async function getStaticPaths() {

  const paths = ['1','2','3'].map((step) => ({
    params: { step },
  }))
  
  return { paths, fallback: true }
}

export async function getStaticProps() {
  return { props: {} }
 }

export default withRouter(Register)
