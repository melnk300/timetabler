import { NextPage } from "next"
import { useRef, useEffect } from "react";

import AuthPageLayout from "src/components/AuthPageLayout"
import FormPasswordInput from "src/components/FormPasswordInput"
import FormInput from "src/components/FormInput";
import FormCheckbox from "src/components/FormCheclbox";
import SecondaryButton from "src/components/SecondaryButton";
import {RegisterTitle, StepFormCounter} from "src/style/pages/register/firstStep";
import { ButtonsContainer } from "src/style/pages/register/secondStep";



const Home: NextPage = () => {
  const ref = useRef<HTMLInputElement>();

  useEffect(() => {
    console.log(ref)
  });


  return (
      <AuthPageLayout>
        <form action="">
          <RegisterTitle>Регистрация</RegisterTitle>
          <StepFormCounter className="font24">Шаг 2 из 3</StepFormCounter>
          <FormInput placeholder="Код подтверждения"/>
          <FormPasswordInput placeholder="Пароль" ref={ ref }/>
          <FormPasswordInput placeholder="Повторите пароль"/>
          <ButtonsContainer>
            <SecondaryButton>Обратно</SecondaryButton>
            <SecondaryButton>Продолжить</SecondaryButton>
          </ButtonsContainer>
        </form>
      </AuthPageLayout>
  )
}

export default Home
