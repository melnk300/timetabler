import styled from "styled-components";

import BasicLayout from "components/Layouts/BasicLayout";

const NewsLayout = styled(BasicLayout)`
  margin-top: 400px;
`

const NewsContent = styled.div`
  &>div {
    position: relative;
    top: 0;
    transition: .2s ease-in-out;

    &:hover {
      position: relative;
      top: 2px;
      box-shadow: 4px 4px 14px -3px rgba(34, 60, 80, 0.2);
    }
  }
`



const NewsSidebar = styled.div``

const Article = styled.div`
  background-color: ${({theme}) => theme.colors.white};
`

const Author = styled.div`
`



export { NewsContent, NewsSidebar, Article, Author, NewsLayout }
