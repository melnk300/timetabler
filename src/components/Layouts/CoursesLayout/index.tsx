import {FC} from "react";
import {Container} from "@mui/material";
import Navigation from "../../Navigation"
import { Content } from "./style";
import { LayoutContent} from 'components/Layouts/style'

const BasicLayout: FC= ({ children }) => {
  return (
    <LayoutContent>
      <Navigation />
      <Container>
          <Content>{children}</Content>
      </Container>
    </LayoutContent>
  )
}

export default BasicLayout
