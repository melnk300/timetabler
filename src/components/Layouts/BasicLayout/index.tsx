import {FC} from "react";
import {Container} from "@mui/material";
import Navigation from "../../Navigation"
import { ContentContainer, Content, SidebarContainer, SidebarContent} from "./style";
import { LayoutContent } from 'components/Layouts/style'

const BasicLayout: FC= ({ children }) => {
    return (
        <LayoutContent>
          <Navigation />
          <Container>
            <ContentContainer>
              <Content>{children[0]}</Content>
              <SidebarContainer>
                <SidebarContent>
                  {children[1]}
                </SidebarContent>
              </SidebarContainer>
            </ContentContainer>
          </Container>
        </LayoutContent>
    )
}

export default BasicLayout
