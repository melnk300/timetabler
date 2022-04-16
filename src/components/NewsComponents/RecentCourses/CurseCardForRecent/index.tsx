import { FC } from 'react'

import { CourseTitle, MetaContainer } from "./style";

interface CurrentCurse {
  id: number,
  name: string,
  progress: number,
}

const CurrentCourse: FC<CurrentCurse> = (props) => {
  let { id, name, progress } = props

  return (
    <>
      <CourseTitle>{name}</CourseTitle>
      <MetaContainer ></MetaContainer>
    </>
  )
}

export default CurrentCourse
