import {FC, useState} from "react";
import {NewLessonCoursesContainer, Slider, SliderElement } from "./style";
import {ContentTypesBlocks} from "components/CoursesComponents/NewLesson/NewLessonBlockSidebar/ContentTypesForNewLesson";
import {BlockTypesIcons} from "components/CoursesComponents/NewLesson/NewLessonEditor/EditableTextBlock";


interface CategoriesI {
  categories: CategoryI[]
}

interface CategoryI {
  id: number,
  title: string,
}

const Categories = (props: CategoriesI) => {
  const {categories} = props
  const [activeBlock, setActiveBlock] = useState(0)
  return categories.map(category =>
    <SliderElement
      key={category.id}
      onClick={() => setActiveBlock(category.id)}
      isActive={category.id == activeBlock}>
      {category.title}
    </SliderElement>
  )
}



const NewLessonBlockSidebar: FC = () => {
  const categories = [
    {
      id: 1,
      title: 'Текст',
    },{
      id: 2,
      title: 'Мультимедиа'
    },{
      id: 3,
      title: 'Интерактивные'
    },
  ]

  return (
    <NewLessonCoursesContainer>
      <Slider>
        <Categories categories={categories}/>
      </Slider>
      <hr/>
      <ContentTypesBlocks />
    </NewLessonCoursesContainer>
  )
}

export default NewLessonBlockSidebar
