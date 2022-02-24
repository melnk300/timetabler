
import FormInput from "src/components/FormInput";
import FormCheckbox from "src/components/FormCheclbox";
import FormDatePicker from "components/FormDatePicker";


const RegisterStep1 = () => {
  return (
    <>
      <FormInput placeholder="Номер телефона"/>
      <FormInput placeholder="E-mail"/>
      <FormInput placeholder="Имя"/>
      <FormInput placeholder="Фамилия"/>
      <FormDatePicker/>
      <FormCheckbox description="Согласие на обработку персональных данных"/>
    </>
  )
};

export default RegisterStep1;
