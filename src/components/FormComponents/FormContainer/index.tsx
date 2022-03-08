import {createContext, FC} from "react";

export const FormContainerContext = createContext(null);

interface FormContainerProps {
  value: any
  
}

const FormContainer:FC<FormContainerProps> = ({children, ...ownProps}) => {
  
  return (
    <FormContainerContext.Provider {...ownProps}>
      {children}
    </FormContainerContext.Provider>
  )
  
}


export default FormContainer;

