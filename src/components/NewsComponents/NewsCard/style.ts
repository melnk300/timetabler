import styled from "styled-components";

const Card = styled.div`
  background-color: ${({theme}) => theme.colors.white};
  border-radius: 15px;
  padding: 2vh 1vw;
  margin: 2vh 0;
  
  > a {
    color: ${({theme}) => theme.colors.primary};
    font-size: 1.2em;
  }
`

const CardTitle = styled.h2``

const CardText = styled.p`
`

export {Card, CardTitle, CardText}
