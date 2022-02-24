import FormSelect from "components/FormSelect";
import FormInput from "components/FormInput";


const educationOptions = [
  {value: '1', label: 'Дошкольное'},
  {value: '2', label: 'Начальное общее'},
  {value: '3', label: 'Основное общее'},
  {value: '4', label: 'Среднее общее (школа)'},
  {value: '5', label: 'Среднее специальное'},
  {value: '6', label: 'Высшее'},
  {value: '7', label: 'Высшее (неоконченое)'},
]

const HobbyOptions = [
  {value: '1', label: 'Художественная гимнастика'},
  {value: '2', label: 'Программирование'},
  {value: '3', label: 'Музыка'},
  {value: '4', label: 'Книги'},
  {value: '5', label: 'Рисование'},
  {value: '6', label: 'Пилатес'},
]

const RegisterStep3 = () => {
  return (
    <>
      <FormSelect name="eudcation" placeholder="Образование" options={educationOptions}/>
      <FormSelect name="eudcation" placeholder="Ваши увлечения" options={HobbyOptions} isMulti/>
      <FormInput name="about-user" placeholder="О себе..." multiline maxRows={5}/>
    </>
  )
};

export default RegisterStep3;
