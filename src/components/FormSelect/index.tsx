import * as React from 'react';
import {ChangeEvent, forwardRef, useState} from "react";
import cn from "classnames";
import FormInput from "../FormInput";
import {SelectContainer, SelectList, SelectListItem} from './style';
import CheckMark from 'icons/CheckMark';
import IconWithLeft from 'components/IconWithLeft'


type SelectOption = {
  value: number,
  title: string
}

type FormSelectProps = {
  name: string,
  items: SelectOption[],
  placeholder?: string,
};

const FormSelect = forwardRef<HTMLSelectElement, FormSelectProps>((props, ref) => {
    const { name, items, placeholder } = props;

    const [ selectedItem, setSelectedItem ] = useState<Number>(0);
    const [ value, setValue ] = useState<String>('')

    return (
      <SelectContainer>
        <FormInput placeholder={placeholder}/>
        <SelectList>
          {items.map(({value, title}) => (
              <SelectListItem data-value={value} key={value}>{title}
                <IconWithLeft><CheckMark /></IconWithLeft>
              </SelectListItem>
          ))}
        </SelectList>
        <select name={name} ref={ref}>
          {items.map(({value, title}) => (
              <option value={value} key={value}>{title}</option>
          ))}
        </select>
      </SelectContainer>
    )
});
FormSelect.displayName="FormSelect"
export default FormSelect
