import { motion } from 'framer-motion';
// import { col } from 'components/Layouts/AuthPageLayout/style';
import styled from 'styled-components';

const AuthContainer = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
`;

const AuthBar = styled(motion.section)`
  background: ${({theme}) => theme.colors.primary};
  position: relative;
  color: ${({theme}) => theme.colors.white};
  //width: ${col(8)};
  width: 30vw;
  //padding: 0 ${col(2)};
  padding: 0 4vw;
  display: flex;
  align-items: center;
  
  &::before {
    content: '';
    position: absolute; top: 0; left: -100%;
    height: 100%; width: 100%;
    background: ${({theme}) => theme.colors.primary};
  }
  
`

const AuthImageContainer = styled.section`
  //width: ${col(16)};
  width: 70vw;
`


export {AuthContainer, AuthBar, AuthImageContainer}
