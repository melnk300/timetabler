import { FC } from 'react';

import StyledTextField from "./style";
import {TextFieldProps} from "@mui/material";

type FormInputProps = TextFieldProps & {
  placeholder?: string;
};


const FormInput:FC<FormInputProps> = ((props) => {

  const { placeholder } = props;

  return (
    
      <StyledTextField
        label={placeholder}
        variant="filled"
        InputProps={{ disableUnderline: true }}
        color="primary"
        // size="small"
        fullWidth
        {...props}
      />
  );
});


FormInput.displayName = "FormInput";
export default FormInput;