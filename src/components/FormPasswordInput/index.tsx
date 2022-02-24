import * as React from 'react';
import {ChangeEvent, forwardRef, useState} from "react";
import cn from "classnames";

import { FaEye, FaEyeSlash } from "react-icons/fa";

import {Label, Placeholder, InputContainer} from "../FormInput/style";
import IconWithLeft from "../IconWithLeft"
import {IconButton, InputAdornment, OutlinedInput} from "@mui/material";
import FormInput from "components/FormInput";
import { Visibility, VisibilityOff } from '@mui/icons-material';

type FormInputProps = {
  placeholder?: string;
};
const FormPasswordInput = forwardRef<HTMLInputElement, FormInputProps>((props, ref) => {

  const { placeholder } = props;

  const [value, setValue] = useState<string>('');
  const [hidden, setHidden] = useState<boolean>(true);
  
  
  const handleMouseDownPassword = (event: MouseEvent) => {
    event.preventDefault();
  };

  return (
    <FormInput
      label={placeholder}
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
