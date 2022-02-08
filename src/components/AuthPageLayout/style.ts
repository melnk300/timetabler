import { col } from 'style/utils/';
import styled from 'styled-components';

const AuthContainer = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
`;

const AuthBar = styled.section`
  background: ${({theme}) => theme.colors.primary};
  color: ${({theme}) => theme.colors.white};
  width: ${col(8)};
  padding: 0 ${col(2)};
  display: flex;
  align-items: center;
`

const AuthImageContainer = styled.section`
  width: ${col(16)};
`


export {AuthContainer, AuthBar, AuthImageContainer}