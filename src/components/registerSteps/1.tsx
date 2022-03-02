
import FormInput from "src/components/FormInput";
import FormCheckbox from "src/components/FormCheclbox";
import FormDatePicker from "components/FormDatePicker";
import FormStepContainer from "components/FormStepContainer";


const RegisterStep1 = () => {
  return (
    <FormStepContainer>
      <FormInput placeholder="Номер телефона"/>
      <FormInput placeholder="E-mail"/>
      <FormInput placeholder="Имя"/>
      <FormInput placeholder="Фамилия"/>
      <FormDatePicker/>
      <FormCheckbox description="Согласие на обработку персональных данных"/>
    </FormStepContainer>
  )
};

export default RegisterStep1;
