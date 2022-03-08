import FormPasswordInput from "src/components/FormComponents/FormPasswordInput"
import FormInput from "src/components/FormComponents/FormInput";
import FormStepContainer from "components/FormComponents/FormStepContainer";



const RegisterStep2 = () => {
  
  return (
    <FormStepContainer>
      <FormInput placeholder="Код подтверждения"/>
      <FormPasswordInput placeholder="Пароль"/>
      <FormPasswordInput placeholder="Повторите пароль"/>
    </FormStepContainer>
  )
}

export default RegisterStep2
