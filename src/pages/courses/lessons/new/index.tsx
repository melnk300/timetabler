import { NextPage } from "next";
import NewLessonBlockSidebar from "components/CoursesComponents/NewLesson/NewLessonBlockSidebar";
import {NewCourseContainer} from "./style";
import NewLessonEditor from "components/CoursesComponents/NewLesson/NewLessonEditor";

const NewLesson: NextPage = () => {
  return (
    <NewCourseContainer>
      <div></div>
      <NewLessonEditor />
      <NewLessonBlockSidebar />
    </NewCourseContainer>
  )
}

export default  NewLesson
