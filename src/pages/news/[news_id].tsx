import { useRouter } from 'next/router'
import BasicLayout from "components/BasicLayout";
import {NextPage} from "next";
import { Article } from './style'

interface MetaI {
  author: string,
  date: Date,
  theme: string[],
}

interface ArticleDataI {
  meta: MetaI,
  title: string,
  content: content[]
}

interface ImgContentI {
  url: string,
  alt: string,
  caption?: string,
}

interface CodeContentI {
  content: string,
  language?: string,
}


type content = string | ImgContentI | CodeContentI

const CurrentNews: NextPage = () => {
  const router = useRouter()
  const nid: number = Number(router.query.news_id)

  let ArticleData: ArticleDataI

  return (
    <BasicLayout>
      <Article>

      </Article>
      <></>
    </BasicLayout>
  )
}

export default CurrentNews
