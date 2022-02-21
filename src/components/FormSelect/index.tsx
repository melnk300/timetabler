import * as React from 'react';
import { forwardRef, Ref, useContext } from "react";

import Select from 'react-select'
import {StyledSelect} from "./style";
import {ThemeContext} from "styled-components";



type FormSelectProps = {
  name: string,
  options: {value: string, label: string}[],
  placeholder?: string,
  isMulti?: boolean
};





const FormSelect = forwardRef<Ref<Select>, FormSelectProps>((props, ref) => {
  const {name, options, placeholder, isMulti=false} = props;
  const {colors} = useContext(ThemeContext);
  
  
  return (
    <StyledSelect
      classNamePrefix="formSelect"
      options={options}
      placeholder={placeholder}
      isMulti={isMulti}
      
    />

  )
});
FormSelect.displayName = "FormSelect"
export default FormSelect
