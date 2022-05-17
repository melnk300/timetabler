import styled from "styled-components";

const PageTitle = styled.p`
  font-weight: 600;
  
  @media (max-width: 450px) {
    font-size: 24px;
  }
  
  @media (max-width: 1400px) {
    font-size: 28px;
  }
  
  @media (min-width: 1400px) {
    font-size: 32px;
  }
`

const PageSubTitle = styled.p`
  @media (max-width: 450px) {
    font-size: 22px;
  }
  
  @media (max-width: 1400px) {
    font-size: 26px;
  }
  
  @media (min-width: 1400px) {
    font-size: 30px;
  }
`

const CardTitle = styled.p`
  font-weight: 600;
  
  @media (max-width: 450px) {
    font-size: 20px;
  }
  
  @media (max-width: 1400px) {
    font-size: 24px;
  }
  
  @media (min-width: 1400px) {
    font-size: 28px;
  }
`
const CardText = styled.p`
  @media (max-width: 450px) {
    font-size: 16px;
  }
  
  @media (max-width: 1400px) {
    font-size: 20px;
  }
  
  @media (min-width: 1400px) {
    font-size: 24px;
  }
`
export {PageTitle, CardTitle, CardText, PageSubTitle}
