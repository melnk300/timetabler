import FormPasswordInput from "src/components/FormPasswordInput"
import FormInput from "src/components/FormInput";



const RegisterStep2 = () => {
  
  return (
    <>
      <FormInput placeholder="Код подтверждения"/>
      <FormPasswordInput placeholder="Пароль"/>
      <FormPasswordInput placeholder="Повторите пароль"/>
    </>
  )
}

export default RegisterStep2
