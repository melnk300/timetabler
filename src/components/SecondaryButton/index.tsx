import React, {FC, MouseEventHandler, MouseEvent} from 'react';
import {ButtonBox} from "./style";

interface SecondaryButtonProps {
  onClick?: MouseEventHandler<HTMLButtonElement>;
}


const SecondaryButton: FC<SecondaryButtonProps> = (props) => {

  const  {
    onClick = ()=>{}
  } = props;
  
  const clickHandler = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    onClick(e)
  }
  
  return (
    <ButtonBox className="font18" onClick={clickHandler}>
      {props.children}
    </ButtonBox>
  );
}

export default SecondaryButton;