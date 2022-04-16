import styled from "styled-components";

const BasicLayoutContent = styled.div`
  background-color: ${({theme}) => theme.colors.basicGray};
`

const ContentContainer = styled.div`
  display: grid;
  grid-template-columns: 5fr 2fr;
  gap: 3vh;
  padding: 2vh 0;
`

const Content = styled.div`
`

const SidebarContainer = styled.div`
`

const SidebarContent = styled.div`
  top: 0;
  position: sticky;
  margin-top: 2vh;
`


export {BasicLayoutContent, ContentContainer, Content, SidebarContainer, SidebarContent}
