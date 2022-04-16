import {FC} from "react";
import {Container} from "@mui/material";
import Navigation from "../Navigation"
import {BasicLayoutContent, ContentContainer, Content, SidebarContainer, SidebarContent} from "./style";

const BasicLayout: FC = ({ children }) => {
    return (
        <BasicLayoutContent>
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
        </BasicLayoutContent>
    )
}

export default BasicLayout
