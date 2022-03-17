import styled from "styled-components";

const NavContainer = styled.div`
  display: flex;
  justify-content: space-around;
  background-color: ${({theme}) => theme.colors.primary};
  color: ${({theme}) => theme.colors.white};
  padding: 1vh 0;
`

const LinkContainer = styled.div`
  * {
    font-size: 1.2em;
    color: ${({theme}) => theme.colors.white};
  }
  
  > a {
    color: ${({theme}) => theme.colors.white};
    text-decoration: none;
    position: relative;
    margin: 0 .3em;
      
    
    &:after {
      display: block;
      position: absolute;
      bottom: 0;
      left: 50%;
      width: 0;
      height: 2px;
      background-color: ${({theme}) => theme.colors.secondary};
      content: ' ';
      opacity: 0;
      transition: .3s ease-in-out;
    }
      
    &:hover:after {
      opacity: 1;
      left: 0;
      width: 100%;
    }
}
`

export {NavContainer, LinkContainer}
