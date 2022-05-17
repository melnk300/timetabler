import styled from "styled-components";

const ContentContainer = styled.div`
  display: grid;
  grid-template-columns: 5fr 2fr;
  gap: 3vh;
  padding: 2vh 0;
  
  @media (max-width: 450px) {
    display: flex;
    flex-direction: column-reverse;
  }
`

const Content = styled.div`
`

const SidebarContainer = styled.div`
`

const SidebarContent = styled.div`
  top: 2vh;
  position: sticky;
  margin-top: 2vh;
  
  @media (max-width: 450px) {
    position: relative;
    margin-top: 0;
  }
`


export { ContentContainer, Content, SidebarContainer, SidebarContent}
