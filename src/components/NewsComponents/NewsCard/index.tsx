import {FC} from "react";
import { NewsCardInner } from './style'
import Link from 'next/link'
import { CardText, CardTitle } from "components/Global/style";

interface CardProps {
  id: number
  title: string,
  text: string
}

const NewsCard: FC<CardProps> = (props) => {
  const { id, title, text } = props
  return (
    <NewsCardInner>
      <CardTitle>{title}</CardTitle>
      <CardText>{text}</CardText>
      <Link href={`news/${id}`}>Читать новость &gt;</Link>
    </NewsCardInner>
  )
}

export default NewsCard
