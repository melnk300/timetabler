import {FC} from "react";
import { RecentCoursesContainer, RecentCoursesInner, CourseDetailsSplitter } from "components/NewsComponents/RecentCourses/style";
import CurrentCourse from './CurseCardForRecent/index'
import { PageSubTitle } from "components/Global/style";

interface CoursesI {
  id: number
  name: string,
  progress: number,
}

const RecentCourses: FC = () => {
  const courses: CoursesI[] = [
    {
      id: 0,
      name: 'PythonJnr',
      progress: 10
    },
    {
      id: 1,
      name: 'PythonJnr',
      progress: 100
    },
    {
      id: 2,
      name: 'PythonJnr',
      progress: 87
    },
    {
      id: 3,
      name: 'PythonJnr',
      progress: 63
    },
  ]

  const Courses = courses.map((course) => <CurrentCourse key={course.id} id={course.id} progress={course.progress} name={course.name}/>)

  return (
    <RecentCoursesContainer>
      <PageSubTitle>Ваши курсы:</PageSubTitle>
      <CourseDetailsSplitter />
      <RecentCoursesInner>
        {Courses}
      </RecentCoursesInner>
    </RecentCoursesContainer>
  )
}

export default RecentCourses
