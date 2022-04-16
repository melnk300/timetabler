import {NextPage} from "next";
import BasicLayout from "components/BasicLayout";
import NewsCard from "components/NewsComponents/NewsCard";
import {NewsContent, NewsSidebar} from './style'
import RecentCourses from "components/NewsComponents/RecentCourses";

interface NewsI {
  title:string,
  text: string,
  id?:number
}

const News: NextPage = () => {
  const news: NewsI[] = [
    {title: 'Hello world', text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur ducimus eligendi explicabo ipsa ipsam iste, possimus quibusdam recusandae sapiente unde? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur ducimus eligendi explicabo ipsa ipsam iste, possimus quibusdam recusandae sapiente unde?"}
  ]

  const courses = [{
    name: 'python'
  }]

  return (
    <BasicLayout>
      <NewsContent>
        <NewsCard title={news[0].title} text={news[0].text} id={1}/>
        <NewsCard title={news[0].title} text={news[0].text} id={1}/>
        <NewsCard title={news[0].title} text={news[0].text} id={1}/>
        <NewsCard title={news[0].title} text={news[0].text} id={1}/>
        <NewsCard title={news[0].title} text={news[0].text} id={1}/>
        <NewsCard title={news[0].title} text={news[0].text} id={1}/>
        <NewsCard title={news[0].title} text={news[0].text} id={1}/>
        <NewsCard title={news[0].title} text={news[0].text} id={1}/>
        <NewsCard title={news[0].title} text={news[0].text} id={1}/>
        <NewsCard title={news[0].title} text={news[0].text} id={1}/>
        <NewsCard title={news[0].title} text={news[0].text} id={1}/>
        <NewsCard title={news[0].title} text={news[0].text} id={1}/>
        <NewsCard title={news[0].title} text={news[0].text} id={1}/>
        <NewsCard title={news[0].title} text={news[0].text} id={1}/>
        <NewsCard title={news[0].title} text={news[0].text} id={1}/>
        <NewsCard title={news[0].title} text={news[0].text} id={1}/>
      </NewsContent>
      <NewsSidebar>
        <RecentCourses />
      </NewsSidebar>
    </BasicLayout>
  )
}

export default News
