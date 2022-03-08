import DatePicker from '@mui/lab/DatePicker';

import {UnControlledFormInput} from "components/FormComponents/FormInput";
import {useState} from "react";



const FormDatePicker = () => {
  const [value, setValue] = useState<any>(null)
  
  return (
    <DatePicker
      label="Дата рождения"
      
      value={value}
      mask="__.__.____"
      
      onChange={(newValue) => setValue(newValue)}
      renderInput={(params) => <UnControlledFormInput {...params} />}
    />
  )
}


export default FormDatePicker;