import {FC} from "react";
import {RecentCoursesTitle, RecentCoursesContainer} from "components/NewsComponents/RecentCourses/style";
import CurrentCourse from './CurseCardForRecent/index'

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
      progress: 40
    },
  ]

  const Courses = courses.map((course) => <CurrentCourse key={course.id} id={course.id} progress={course.progress} name={course.name}/>)

  return (
    <RecentCoursesContainer>
      <RecentCoursesTitle>Ваши курсы:</RecentCoursesTitle>
      <hr />
      {Courses}
    </RecentCoursesContainer>
  )
}

export default RecentCourses
