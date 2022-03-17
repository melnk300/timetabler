import styled from "styled-components";

const BasicLayout = styled.div`
  min-height: 100vh;
  background-color: ${({theme}) => theme.colors.basicGray};
`

const ContentContainer = styled.div`
  display: grid;
  grid-template-columns: 5fr 2fr;
  gap: 3vh;
`

const Content = styled.div``

const SidebarContent = styled.div`
  position: relative;
  width: 100%;
`

const Sidebar = styled.div`
  position: fixed;
  margin: 2vh 0;
`

export {BasicLayout, ContentContainer, Content, Sidebar, SidebarContent}
