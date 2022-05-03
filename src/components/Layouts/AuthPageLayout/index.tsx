import { FC } from 'react';
import { AuthContainer, AuthBar, AuthImageContainer } from './style';




const AuthPageLayout:FC = ({children}) => {
  return (
    <AuthContainer>
      <AuthBar
        initial={{opacity: 0, x: "-100%"}}
        animate={{opacity: 1, x: 0}}
      >
        {children}
      </AuthBar>
      <AuthImageContainer/>
    </AuthContainer>
  );
}

export default AuthPageLayout;