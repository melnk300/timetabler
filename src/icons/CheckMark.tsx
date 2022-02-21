import { FC, useContext } from 'react';
import { ThemeContext } from 'styled-components';

interface IMarkProps {
  color?: string
}

const CheckMark: FC<IMarkProps> = (props) => {
  const theme = useContext(ThemeContext);
  const { color = theme.colors.grey2 } = props

  return (
      <svg viewBox="0 0 23 19" fill="none">
        <path stroke={color} d="M2.00055 8.81L8.40436 15.2138L21.2144 2.40381" strokeWidth="4"/>
      </svg>
  )
}

export default  CheckMark;
