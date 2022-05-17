import {NextPage} from "next";
import NewsCard from "components/NewsComponents/NewsCard";
import {NewsContent, NewsLayout, NewsSidebar} from './style'
import RecentCourses from "components/NewsComponents/RecentCourses";
import BasicLayout from "components/Layouts/BasicLayout";
import { PageTitle } from "components/Global/style";

interface NewsI{
  title:string,
  text: string,
  id:number
}

const News: NextPage = () => {
  const news: NewsI[] = [
    {id: 0,title: 'Hello world', text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur ducimus eligendi explicabo ipsa ipsam iste, possimus quibusdam recusandae sapiente unde? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur ducimus eligendi explicabo ipsa ipsam iste, possimus quibusdam recusandae sapiente unde?"},
    {id: 1,title: 'Hello world', text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur ducimus eligendi explicabo ipsa ipsam iste, possimus quibusdam recusandae sapiente unde? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur ducimus eligendi explicabo ipsa ipsam iste, possimus quibusdam recusandae sapiente unde?"},
    {id: 2,title: 'Hello world', text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur ducimus eligendi explicabo ipsa ipsam iste, possimus quibusdam recusandae sapiente unde? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur ducimus eligendi explicabo ipsa ipsam iste, possimus quibusdam recusandae sapiente unde?"},
    {id: 3,title: 'Hello world', text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur ducimus eligendi explicabo ipsa ipsam iste, possimus quibusdam recusandae sapiente unde? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur ducimus eligendi explicabo ipsa ipsam iste, possimus quibusdam recusandae sapiente unde?"},
    {id: 4,title: 'Hello world', text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur ducimus eligendi explicabo ipsa ipsam iste, possimus quibusdam recusandae sapiente unde? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur ducimus eligendi explicabo ipsa ipsam iste, possimus quibusdam recusandae sapiente unde?"},
    {id: 5,title: 'Hello world', text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur ducimus eligendi explicabo ipsa ipsam iste, possimus quibusdam recusandae sapiente unde? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur ducimus eligendi explicabo ipsa ipsam iste, possimus quibusdam recusandae sapiente unde?"},
    {id: 6,title: 'Hello world', text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur ducimus eligendi explicabo ipsa ipsam iste, possimus quibusdam recusandae sapiente unde? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur ducimus eligendi explicabo ipsa ipsam iste, possimus quibusdam recusandae sapiente unde?"}
  ]

  const News = news.map((curNews) => <NewsCard key={curNews.id} title={curNews.title} text={curNews.text} id={curNews.id}/>)

  return (
    <BasicLayout>
      <NewsContent>
        <PageTitle>Новости</PageTitle>
        {News}
      </NewsContent>
      <NewsSidebar>
        <RecentCourses />
      </NewsSidebar>
    </BasicLayout>
  )
}

export default News
