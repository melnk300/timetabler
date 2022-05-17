import styled from "styled-components";

const NewsCardInner = styled.div`
  background-color: ${({theme}) => theme.colors.white};
  border-radius: 10px;
  padding: 2vh 1vw;
  margin: 2vh 0;
  
  > a {
    color: ${({theme}) => theme.colors.primary};
    font-size: 1.2em;
  }

  @media (max-width: 450px) {
    padding: 2vh 4vw;
  }
`

export {NewsCardInner}
