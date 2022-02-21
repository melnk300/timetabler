import type { NextPage } from 'next';
import AuthPageLayout from 'src/components/AuthPageLayout';

import {RegisterTitle, StepFormCounter} from "src/style/pages/register/firstStep";
import SecondaryButton from "components/SecondaryButton";
import FormSelect from "components/FormSelect";
import FormInput from "components/FormInput";
import {ButtonsContainer} from "style/pages/register/secondStep";

const educationOptions = [
  { value: '1', label: 'Дошкольное' },
  { value: '2', label: 'Начальное общее' },
  { value: '3', label: 'Основное общее' },
  { value: '4', label: 'Среднее общее (школа)' },
  { value: '5', label: 'Среднее специальное' },
  { value: '6', label: 'Высшее' },
  { value: '7', label: 'Высшее (неоконченое)' },
]

const HobbyOptions = [
  { value: '1', label: 'Художественная гимнастика' },
  { value: '2', label: 'Программирование' },
  { value: '3', label: 'Музыка' },
  { value: '4', label: 'Книги' },
  { value: '5', label: 'Рисование' },
  { value: '6', label: 'Пилатес' },
]

const Home: NextPage = () => {
    return (
        <AuthPageLayout>
          <form action="">
            <RegisterTitle>Регистрация</RegisterTitle>
            <StepFormCounter className="font24">Шаг 3 из 3</StepFormCounter>
            <FormSelect name="eudcation" placeholder="Образование" options={educationOptions}/>
            <FormSelect name="eudcation" placeholder="Ваши увлечения" options={HobbyOptions} isMulti />
            <FormInput name="about-user" placeholder="О себе..." tag="textarea"/>
            <ButtonsContainer>
              <SecondaryButton>Обратно</SecondaryButton>
              <SecondaryButton>Продолжить</SecondaryButton>
            </ButtonsContainer>
          </form>
        </AuthPageLayout>
    )
};

export default Home;
