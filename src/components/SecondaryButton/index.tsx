import React, {FC} from 'react';
import {ButtonBox} from "./style";

interface SecondaryButtonProps {

}


const SecondaryButton: FC<SecondaryButtonProps> = (props) => {

  
  
  return (
    <ButtonBox className="font18">
      {props.children}
    </ButtonBox>
  );
}

export default SecondaryButton;