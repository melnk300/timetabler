import * as React from 'react';
import cn from "classnames";
import {CheckBoxLabel, CheckboxContainer, CheckboxDeskription} from "./style";
import {ChangeEvent, forwardRef, useState} from "react";

type FormInputProps = {
  description?: string;
};
const FormCheckbox = forwardRef<HTMLInputElement,FormInputProps>((props, ref) => {

  const {description} = props;
  const [value, setValue] = useState<boolean>(false);
  const [focus, setFocus] = useState<boolean>(false);

  const changeValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.checked);
  }

  return (
    <CheckBoxLabel className={cn({'input_checked': value, 'input_focused': focus })}>
      <CheckboxContainer>
        <input
          ref={ref}
          type="checkbox"
          onChange={changeValueHandler}
          onFocus={()=>setFocus(true)}
          onBlur={()=>setFocus((false))}
        />
      </CheckboxContainer>
      { description && <CheckboxDeskription>{description}</CheckboxDeskription> }
    </CheckBoxLabel>
  )
});


FormCheckbox.displayName = "FormCheckbox";


export default FormCheckbox;