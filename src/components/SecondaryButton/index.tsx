import React, {FC, MouseEventHandler} from 'react';
import {ButtonBox} from "./style";

interface SecondaryButtonProps {
  onClick?: MouseEventHandler<HTMLButtonElement>;
}


const SecondaryButton: FC<SecondaryButtonProps> = (props) => {

  const  {onClick} = props;
  
  return (
    <ButtonBox className="font18" onClick={onClick}>
      {props.children}
    </ButtonBox>
  );
}

export default SecondaryButton;