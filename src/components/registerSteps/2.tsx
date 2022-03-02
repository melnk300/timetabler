import FormPasswordInput from "src/components/FormPasswordInput"
import FormInput from "src/components/FormInput";
import FormStepContainer from "components/FormStepContainer";



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
