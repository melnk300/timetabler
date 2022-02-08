import * as React from 'react';
import cn from "classnames";
import {Label, Placeholder, InputContainer} from "./style";
import {ChangeEvent, forwardRef, useState} from "react";

type FormInputProps = {
  placeholder?: string;
};
const FormInput = forwardRef<HTMLInputElement,FormInputProps>((props, ref) => {

  const { placeholder } = props;

  const [value, setValue] = useState<string>('')
  const [focus, setFocus] = useState<boolean>(false);

  const changeValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  }

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
          type="text"
        />
      </InputContainer>
    </Label>
  );
});


FormInput.displayName = "FormInput";
export default FormInput;