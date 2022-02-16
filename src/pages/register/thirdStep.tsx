import type { NextPage } from 'next';
import AuthPageLayout from 'src/components/AuthPageLayout';

import {RegisterTitle, StepFormCounter} from "src/style/pages/register/firstStep";
import SecondaryButton from "components/SecondaryButton";
import FormSelect from "components/FormSelect";



const Home: NextPage = () => {
    return (
        <AuthPageLayout>
          <form action="">
            <RegisterTitle>Регистрация</RegisterTitle>
            <StepFormCounter className="font24">Шаг 3 из 3</StepFormCounter>
            <FormSelect name="eudcation" placeholder="Образование" items={[
              {title: 'НСГК', value: 1},
              {title: 'НСГК', value: 2},
              {title: 'НСГК', value: 3},
              {title: 'НСГК', value: 4},
              {title: 'НСГК', value: 5}
            ]}/>
            <SecondaryButton>Продолжить</SecondaryButton>
          </form>
        </AuthPageLayout>
    )
};

export default Home;
