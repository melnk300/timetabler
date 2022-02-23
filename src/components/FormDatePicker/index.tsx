import DatePicker from '@mui/lab/DatePicker';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import TextField from '@mui/material/TextField';
import FormInput from "components/FormInput";
import {useState} from "react";



const FormDatePicker = (props) => {
  const [value, setValue] = useState<any>('')
  
  return (
    <DatePicker
      label="Дата рождения"
      
      value={value}
      mask="__.__.____"
      toolbarPlaceholder={"123"}
      onChange={(newValue) => {
        setValue(newValue);
      }}
      renderInput={(params) => <TextField {...params} variant={"standard"} fullWidth color="warning" />}
    />
  )
}


export default FormDatePicker;