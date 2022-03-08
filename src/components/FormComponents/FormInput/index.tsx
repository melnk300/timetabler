import { FC } from 'react';
import { Controller } from "react-hook-form";
import StyledTextField from "./style";
import {TextFieldProps} from "@mui/material";

type FormInputProps = TextFieldProps & {
  name: string;
  control: any;
  label?: string;
};

const FormInput:FC<FormInputProps> = ((props) => {
  const { name, control, label } = props;
  
  return (
    <Controller
      name={name}
      control={control}
      render={({
         field: { onChange, value },
         fieldState: { error },
         // formState,
       }) => (
        <UnControlledFormInput
          helperText={error ? error.message : null}
          error={!!error}
          onChange={onChange}
          value={value}
          label={label}
        />
      )}
    />
  )
});


export const UnControlledFormInput:FC<any> = ((props) => {
  return (
      <StyledTextField
        variant="filled"
        InputProps={{ disableUnderline: true }}
        color="primary"
        // size="small"
        fullWidth
        {...props}
      />
  );
});





export default FormInput;