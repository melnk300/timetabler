import * as React from 'react';
import {forwardRef, MouseEvent, useState} from "react";

import {IconButton, InputAdornment} from "@mui/material";
import FormInput from "components/FormInput";
import { Visibility, VisibilityOff } from '@mui/icons-material';

type FormInputProps = {
  placeholder?: string;
};
const FormPasswordInput = forwardRef<HTMLInputElement, FormInputProps>((props) => {

  const { placeholder } = props;
  const [hidden, setHidden] = useState<boolean>(true);
  
  
  const handleMouseDownPassword = (event: MouseEvent) => {
    event.preventDefault();
  };

  return (
    <FormInput
      placeholder={placeholder}
      type={ hidden ? 'password': 'text' }
      InputProps={{endAdornment:
        <InputAdornment position="end">
          <IconButton
            aria-label="toggle password visibility"
            onClick={() => setHidden(prev => !prev)}
            onMouseDown={handleMouseDownPassword}
            edge="end"
          >
            {hidden ? <VisibilityOff /> : <Visibility />}
          </IconButton>
        </InputAdornment>
      }}
    />
  );
});


FormPasswordInput.displayName = "FormPaswordInput";
export default FormPasswordInput;
