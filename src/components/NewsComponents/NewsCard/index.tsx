import {FC} from "react";
import { Card, CardTitle, CardText } from './style'
import Link from 'next/link'

interface CardProps {
  id?: number
  title: string,
  text: string
}

const NewsCard: FC<CardProps> = (props) => {
  const { id, title, text } = props
  return (
    <Card>
      <CardTitle>{title}</CardTitle>
      <CardText>{text}</CardText>
      <Link href={`/news/${id}`}>Читать новость ></Link>
    </Card>
  )
}

export default NewsCard
