import {TextField} from "@mui/material";
import { alpha, styled } from '@mui/material/styles'


const StyledTextField = styled(TextField)(({ theme }) => ({
  '&': {
    marginBottom: 10,
  
  },
  '& input': {
  
  },
  
  '& .MuiFilledInput-root': {
    backgroundColor: '#ffffff',
  
    border: '1px solid #e2e2e1',
    overflow: 'hidden',
    borderRadius: 4,
    transition: theme.transitions.create([
      'border-color',
      'background-color',
      'box-shadow',
    ]),
    '&:hover': { backgroundColor: '#ffffff'},
    '&::before': { content: 'none'},
    '&::after': { content: 'none'},
    
    '&.Mui-focused': {
      boxShadow: `${alpha(theme.palette.secondary.main, 0.25)} 0 0 0 2px`,
      borderColor: theme.palette.secondary.main,
      borderWidth: 0,
      backgroundColor: '#ffffff',
    },
    '& label': {
      backgroundColor: 'red'
    }
  },
}));


export default StyledTextField;