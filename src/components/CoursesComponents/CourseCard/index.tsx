import { FC, useState } from "react";
import {CourseButton, CourseContainer, CourseDescription, CourseImage, CourseTitle} from "./style";
import {CourseI} from '../../../pages/courses'
import Link from 'next/link'

interface CoursePropsI {
  course: CourseI
}

const CourseCard: FC<CoursePropsI> = (props) => {
  const [isCourseHover, setIsCourseHover] = useState(false)
  const handleOver = () => {setIsCourseHover(true)}
  const handleLeave = () => {setIsCourseHover(false)}
  const { id, name, description, progress } = props.course

  return (
    <Link href={`/courses/${id}`} passHref>
      <CourseContainer onMouseOver={handleOver}
                       onMouseLeave={handleLeave}
                       progress={progress}>
        <CourseImage src='https://api.lorem.space/image/movie?w=300&h=180' />
        <CourseTitle>{name}</CourseTitle>
        <CourseDescription>{description}</CourseDescription>
        <CourseButton progress={progress}>{isCourseHover ? `Прогресс: ${progress}%` : 'Перейти к курсу'}</CourseButton>
      </CourseContainer>
    </Link>
  )
}

export default CourseCard
