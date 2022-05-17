import { FC } from 'react'

import { Course, CourseTitle, MetaContainer, CourseProgressBar, CourseLink } from "./style";
import Link from 'next/link'
import { CardTitle } from 'components/Global/style';

interface CurrentCurse {
  id: number,
  name: string,
  progress: number,
}

const CurrentCourse: FC<CurrentCurse> = (props) => {
  let { id, name, progress } = props

  return (
    <Course>
      <Link href={`/courses/${id}`}>
        <>
          <MetaContainer>
            <CardTitle>{name}</CardTitle>
            <CourseProgressBar progress={progress} />
          </MetaContainer>
          <Link href={`/courses/${id}`}>К курсу</Link>
        </>
      </Link>
    </Course>
  )
}

export default CurrentCourse
