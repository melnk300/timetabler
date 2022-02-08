import type { NextPage } from 'next';
import AuthPageLayout from 'src/components/AuthPageLayout';

import {RegisterTitle, StepFormCounter} from "style/pages/register";
import FormInput from "../components/FormInput";
import FormCheckbox from "../components/FormCheclbox";
import SecondaryButton from "../components/SecondaryButton";


const Home: NextPage = () => {
    return (
        <AuthPageLayout>
          <form action="">
            <RegisterTitle>Регистрация</RegisterTitle>
            <StepFormCounter className="font24">Шаг 1 из 3</StepFormCounter>
            <FormInput placeholder="Номер телефона"/>
            <FormInput placeholder="Имя"/>
            <FormInput placeholder="Фамилия"/>
            <FormInput placeholder="Дата рождения"/>
            <FormCheckbox description="Согласие на обработку персональных данных"/>
            <SecondaryButton>Продолжить</SecondaryButton>
          </form>
        </AuthPageLayout>
    )
};

export default Home;
