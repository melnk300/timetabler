import {Dispatch, SetStateAction} from "react";
import { FormProvider, useForm } from "react-hook-form";

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
  
  const methods = useForm();
  const {
    handleSubmit,
    reset,
    control,
    setValue,
    watch
  } = methods;
  const onSubmit = (data: any) => console.log(data);

  return (
    <FormStepContainer>
      <FormInput name="user-phone" label="Номер телефона" control={control}/>
      <FormInput name="email" label="e-mail" control={control}/>
      <FormInput name="first-name" label="Имя" control={control}/>
      <FormInput name="last-name" label="Фамилия" control={control}/>
      <FormDatePicker/>
      <FormCheckbox description="Согласие на обработку персональных данных"/>
      <SecondaryButton onClick={handleSubmit(onSubmit)}>Продолжить</SecondaryButton>
    </FormStepContainer>
  )
};

export default RegisterStep1;
