import {NextPage} from "next";
import {CoursesContainer, CoursesContentContainer, NewCourseCard, PlusForNewCourse, TitleForNewCourse } from './style'
import CourseCard from "components/CoursesComponents/CourseCard";
import CoursesLayout from "components/Layouts/CoursesLayout";
import {useState} from "react";
import Link from "next/link";
import { PageTitle } from "components/Global/style";

export interface CourseI {
  id: number,
  name: string,
  description: string,
  progress: number,
}

interface PayableCourseI extends CourseI{
  price: number
}

const Courses: NextPage = () => {
  const courses: Array<CourseI> = [
    {
      id: 0,
      name: 'PythonJnr',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores beatae cum debitis est exercitationem facilis fuga impedit laborum perferendis perspiciatis quam recusandae sunt tenetur, vel, veniam voluptatem voluptates? Alias aut dolorem ex facere, fugiat neque odio praesentium, quasi, soluta sunt tempora voluptates.',
      progress: 80
    },
    {
      id: 1,
      name: 'PythonJnr',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores beatae cum debitis est exercitationem facilis fuga impedit laborum perferendis perspiciatis quam recusandae sunt tenetur, vel, veniam voluptatem voluptates? Alias aut dolorem ex facere, fugiat neque odio praesentium, quasi, soluta sunt tempora voluptates.',
      progress: 20
    },
    {
      id: 2,
      name: 'PythonJnr',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores beatae cum debitis est exercitationem facilis fuga impedit laborum perferendis perspiciatis quam recusandae sunt tenetur, vel, veniam voluptatem voluptates? Alias aut dolorem ex facere, fugiat neque odio praesentium, quasi, soluta sunt tempora voluptates.',
      progress: 81
    },
    {
      id: 3,
      name: 'PythonJnr',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores beatae cum debitis est exercitationem facilis fuga impedit laborum perferendis perspiciatis quam recusandae sunt tenetur, vel, veniam voluptatem voluptates? Alias aut dolorem ex facere, fugiat neque odio praesentium, quasi, soluta sunt tempora voluptates.',
      progress: 80
    },
  ]

  const CoursesList = courses.map((course) => (<CourseCard course={course} />))
  const [isTeacher, _] = useState(true)

  const NewCourseCardCustom = (
    <NewCourseCard>
      <PlusForNewCourse>+</PlusForNewCourse>
      <TitleForNewCourse>Добавить новый курс</TitleForNewCourse>
    </NewCourseCard>
  )

  return (
    <CoursesLayout>
      <CoursesContainer>
        <PageTitle>
          Доступные курсы
        </PageTitle>
        <CoursesContentContainer>
          {CoursesList}
          <Link href={'/courses/new/'}>
            {isTeacher && NewCourseCardCustom}
          </Link>
        </CoursesContentContainer>
      </CoursesContainer>
    </CoursesLayout>
  )
}

export default Courses
