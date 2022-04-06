import {NextPage} from "next";
import BasicLayout from "components/BasicLayout";
import NewsCard from "components/NewsComponents/NewsCard";
import {NewsContent, NewsSidebar} from './style'

const News: NextPage = () => {
  const news = [
    {title: 'Hello world', text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur ducimus eligendi explicabo ipsa ipsam iste, possimus quibusdam recusandae sapiente unde? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur ducimus eligendi explicabo ipsa ipsam iste, possimus quibusdam recusandae sapiente unde?"}
  ]

  return (
    <BasicLayout>
      <NewsContent>
        <NewsCard title={news[0].title} text={news[0].text} id={1}/>
      </NewsContent>
      <NewsSidebar>

      </NewsSidebar>
    </BasicLayout>
  )
}

export default News