import {FC} from "react";
import {Container} from "@mui/material";
import Navigation from "../Navigation"
import { BasicLayoutContent, ContentContainer, Content, Sidebar, SidebarContent } from "./style";

const BasicLayout: FC = ({ children }) => {
    return (
        <BasicLayoutContent>
            <Navigation />
            <Container>
              <ContentContainer>
                <Content>{children[0]}</Content>
                <SidebarContent>
                  <Sidebar>{children[1]}</Sidebar>
                </SidebarContent>
              </ContentContainer>
            </Container>
        </BasicLayoutContent>
    )
}

export default BasicLayout
