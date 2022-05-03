import { FC } from 'react'

import { Course, CourseTitle, MetaContainer, CourseProgressBar } from "./style";
import Link from 'next/link'

interface CurrentCurse {
  id: number,
  name: string,
  progress: number,
}

const CurrentCourse: FC<CurrentCurse> = (props) => {
  let { id, name, progress } = props

  return (
    <Course>
      <MetaContainer>
        <CourseTitle>{name}</CourseTitle>
        <CourseProgressBar progress={progress} />
      </MetaContainer>
      <Link href={`/${id}`}>К курсу</Link>
    </Course>
  )
}

export default CurrentCourse
