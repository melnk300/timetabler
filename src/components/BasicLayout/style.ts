import styled from "styled-components";

const BasicLayoutContent = styled.div`
  min-height: 100vh;
  background-color: ${({theme}) => theme.colors.basicGray};
`

const ContentContainer = styled.div`
  display: grid;
  grid-template-columns: 5fr 2fr;
  gap: 3vh;
  padding: 2vh 0;
`

const Content = styled.div``

const SidebarContainer = styled.div`
  position: relative;
  width: 100%;
`

const Sidebar = styled.div`
  position: fixed;
`

export {BasicLayoutContent, ContentContainer, Content, Sidebar, SidebarContainer}
