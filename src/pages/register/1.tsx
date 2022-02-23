import type { NextPage } from 'next';
import AuthPageLayout from 'src/components/AuthPageLayout';

import {RegisterTitle, StepFormCounter} from "src/style/pages/register/firstStep";
import FormInput from "src/components/FormInput";
import FormCheckbox from "src/components/FormCheclbox";
import SecondaryButton from "src/components/SecondaryButton";
import FormDatePicker from "components/FormDatePicker";


const Home: NextPage = () => {
    return (
        <AuthPageLayout>
          <form action="">
            <RegisterTitle>Регистрация</RegisterTitle>
            <StepFormCounter className="font24">Шаг 1 из 3</StepFormCounter>
            <FormInput placeholder="Номер телефона"/>
            <FormInput placeholder="Имя"/>
            <FormInput placeholder="Фамилия"/>
            <FormDatePicker/>
            <FormCheckbox description="Согласие на обработку персональных данных"/>
            <SecondaryButton>Продолжить</SecondaryButton>
          </form>
        </AuthPageLayout>
    )
};

export default Home;
