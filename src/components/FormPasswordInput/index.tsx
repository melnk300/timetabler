import * as React from 'react';
import {ChangeEvent, forwardRef, useState} from "react";
import cn from "classnames";

import { FaEye, FaEyeSlash } from "react-icons/fa";

import {Label, Placeholder, InputContainer} from "../FormInput/style";
import IconWithLeft from "./style"

type FormInputProps = {
  placeholder?: string;
};
const FormPasswordInput = forwardRef<HTMLInputElement, FormInputProps>((props, ref) => {

  const { placeholder } = props;

  const [value, setValue] = useState<string>('123');
  const [focus, setFocus] = useState<boolean>(false);
  const [hidden, setHidden] = useState<boolean>(true);

  const changeValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
      <Label className={cn({'input_active': value.trim() || focus})}>
        <InputContainer>
          {placeholder && <Placeholder className="font18">{placeholder}</Placeholder> }
          <input
              className="font18"
              ref={ref}
              value={value}
              onChange={changeValueHandler}
              onFocus={()=>setFocus(true)}
              onBlur={()=>setFocus(false)}
              type={hidden ? "password" : "text"}
          />
          {hidden ?
          <IconWithLeft><FaEye onClick={()=>setHidden(false)} /></IconWithLeft>
          : <IconWithLeft><FaEyeSlash onClick={()=>setHidden(true)} /></IconWithLeft>
          }
        </InputContainer>
      </Label>
  );
});


FormPasswordInput.displayName = "FormPaswordInput";
export default FormPasswordInput;
