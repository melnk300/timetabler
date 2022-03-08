import * as React from 'react';
import { forwardRef, Ref } from "react";

import Select from 'react-select'
import {StyledSelect} from "./style";




type FormSelectProps = {
  name: string,
  options: {value: string, label: string}[],
  placeholder?: string,
  isMulti?: boolean
};





const FormSelect = forwardRef<Ref<Select>, FormSelectProps>((props) => {
  const { options, placeholder, isMulti=false} = props;
  
  
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
