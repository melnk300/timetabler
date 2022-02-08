import { FC } from 'react';
import { AuthContainer, AuthBar, AuthImageContainer } from './style';




const AuthPageLayout:FC = ({children}) => {
  return (
    <AuthContainer>
      <AuthBar>
        {children}
      </AuthBar>
      <AuthImageContainer/>
    </AuthContainer>
  );
}

export default AuthPageLayout;