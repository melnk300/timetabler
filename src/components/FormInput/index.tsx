import {ReactChild, FocusEvent, ReactNode} from 'react';
import cn from "classnames";
import {Label, Placeholder, InputContainer} from "./style";
import {ChangeEvent, forwardRef, useState} from "react";

type FormInputProps = {
  placeholder?: string;
  children?: string | ReactChild | ReactChild[];
  noFocus?: boolean;
  tag?: 'input' | 'textarea';
};


const FormInput = forwardRef<HTMLInputElement,FormInputProps>((props, ref) => {

  const { placeholder, children, noFocus = false, tag='input' } = props;

  const [value, setValue] = useState<string>('')
  const [focus, setFocus] = useState<boolean>(false);

  const changeValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  }
  
  const changeFocusHandler = (event: FocusEvent<HTMLInputElement> ) => {
    if(!noFocus) {
      switch (event.type) {
        case 'focus': setFocus(true); break;
        case 'blur': setFocus(false); break;
      }
    }
  }
  
  const TagName = tag;

  return (

    <Label className={cn({'input_active': value.trim() || focus})}>
      <InputContainer>
        
        <TagName
          className="font18"
          ref={ref}
          value={value}
          onChange={changeValueHandler}
          onFocus={changeFocusHandler}
          onBlur={changeFocusHandler}
          type="text"
        />
        {placeholder && <Placeholder className="font18">{placeholder}</Placeholder> }
        {children}
      </InputContainer>
    </Label>
  );
});


FormInput.displayName = "FormInput";
export default FormInput;