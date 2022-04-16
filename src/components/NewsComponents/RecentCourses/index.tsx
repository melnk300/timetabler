import {FC} from "react";
import {RecentCoursesTitle, RecentCoursesContainer, RecentCourseName} from "components/NewsComponents/RecentCourses/style";

interface CourceI {
  id?: number,
  name: string,
  progress: number
}

const RecentCourses: FC = (props) => {

  // const CoursesList = props.courses.map((cource) =>
  //   <RecentCourseName key={cource}>{cource.name}</RecentCourseName>
  // )

  return (
    <RecentCoursesContainer>
      <RecentCoursesTitle>Ваши курсы:</RecentCoursesTitle>
      <hr />
      {/*<CoursesList />*/}
    </RecentCoursesContainer>
  )
}

export default RecentCourses
