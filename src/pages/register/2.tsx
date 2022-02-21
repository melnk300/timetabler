import { NextPage } from "next"

import AuthPageLayout from "src/components/AuthPageLayout"
import FormPasswordInput from "src/components/FormPasswordInput"
import FormInput from "src/components/FormInput";
import SecondaryButton from "src/components/SecondaryButton";
import {RegisterTitle, StepFormCounter} from "src/style/pages/register/firstStep";
import { ButtonsContainer } from "src/style/pages/register/secondStep";



const Home: NextPage = () => {

  return (
      <AuthPageLayout>
        <form action="">
          <RegisterTitle>Регистрация</RegisterTitle>
          <StepFormCounter className="font24">Шаг 2 из 3</StepFormCounter>
          <FormInput placeholder="Код подтверждения"/>

          <FormPasswordInput placeholder="Пароль"/>
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
