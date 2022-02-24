import DatePicker from '@mui/lab/DatePicker';

import FormInput from "components/FormInput";
import {useState} from "react";



const FormDatePicker = (props) => {
  const [value, setValue] = useState<any>(null)
  
  return (
    <DatePicker
      label="Дата рождения"
      
      value={value}
      mask="__.__.____"
      
      onChange={(newValue) => setValue(newValue)}
      renderInput={(params) => <FormInput {...params} />}
    />
  )
}


export default FormDatePicker;