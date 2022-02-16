import * as React from 'react';
import {ChangeEvent, forwardRef, useState} from "react";
import cn from "classnames";

import FormInput from "src/components/FormInput";
import SelectContainer from './style'

type FormSelectProps = {
  items: string[];
};
// ts-ignore
const FormSelect = (props: FormSelectProps) => {
    let { items } = props;
    const [ selectedItem, setSelectedItem ] = useState<Number>(0);
    const [ value, setValue ] = useState<String>('')

    return (
      <SelectContainer>
        <FormInput placeholder='Образование' />
        
      </SelectContainer>
    )
};
FormSelect.displayName="FormSelect"
export default FormSelect