import {ReactChild, FocusEvent, ReactNode} from 'react';
import cn from "classnames";
import {Label, Placeholder, InputContainer} from "./style";
import {ChangeEvent, forwardRef, useState} from "react";
import StyledTextField from "./style";

type FormInputProps = {
  placeholder?: string;
  children?: string | ReactChild | ReactChild[];
  noFocus?: boolean;
  inputProps?: any,
  InputProps?: any,
  tag?: 'input' | 'textarea';
};


const FormInput = ((props) => {

  const { placeholder, children, noFocus = false, tag='input', inputProps, InputProps } = props;

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
    
      <StyledTextField
        label={placeholder}
        variant="filled"
        InputProps={{ disableUnderline: true }}
        color="primary"
        // size="small"
        fullWidth
        {...props}
      />
    

    // <Label className={cn({'input_active': value.trim() || focus})}>
    //   <InputContainer>
    //
    //     <TagName
    //       className="font18"
    //       ref={ref}
    //       value={value}
    //       onChange={changeValueHandler}
    //       onFocus={changeFocusHandler}
    //       onBlur={changeFocusHandler}
    //       type="text"
    //       {...inputProps}
    //     />
    //     {placeholder && <Placeholder className="font18">{placeholder}</Placeholder> }
    //     {InputProps?.endAdornment}
    //     {children}
    //   </InputContainer>
    // </Label>
  );
});


FormInput.displayName = "FormInput";
export default FormInput;