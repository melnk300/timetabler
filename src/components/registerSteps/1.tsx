import {Dispatch, SetStateAction} from "react";

import FormInput from "src/components/FormComponents/FormInput";
import FormCheckbox from "src/components/FormComponents/FormCheclbox";
import FormDatePicker from "components/FormComponents/FormDatePicker";
import FormStepContainer from "components/FormComponents/FormStepContainer";
import SecondaryButton from "components/SecondaryButton";


interface RegisterStep1Props {
  setStep: Dispatch<SetStateAction<number>>
}

const RegisterStep1 = (props:RegisterStep1Props) => {
  const {setStep} = props;

  return (
    <FormStepContainer>
      <FormInput placeholder="Номер телефона"/>
      <FormInput placeholder="E-mail"/>
      <FormInput placeholder="Имя"/>
      <FormInput placeholder="Фамилия"/>
      <FormDatePicker/>
      <FormCheckbox description="Согласие на обработку персональных данных"/>
      <SecondaryButton onClick={()=>setStep(2)}>Продолжить</SecondaryButton>
    </FormStepContainer>
  )
};

export default RegisterStep1;
