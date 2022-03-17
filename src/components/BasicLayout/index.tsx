import {FC} from "react";
import {Container} from "@mui/material";
import Navigation from "../Navigation"
import { BasicLayout, ContentContainer, Content, Sidebar, SidebarContent } from "./style";

const Navbar: FC = ({ children }) => {
    return (
        <BasicLayout>
            <Navigation />
            <Container>
              <ContentContainer>
                <Content>{children[0]}</Content>
                <SidebarContent>
                  <Sidebar>{children[1]}</Sidebar>
                </SidebarContent>
              </ContentContainer>
            </Container>
        </BasicLayout>
    )
}

export default Navbar
