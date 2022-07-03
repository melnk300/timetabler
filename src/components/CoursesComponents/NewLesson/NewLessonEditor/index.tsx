import {FC} from "react";
import {useSelector} from "react-redux";
import {editorStateI} from "../../../../store/newLesson/newLessonEditorSlice";
import EditableTextBlock from "components/CoursesComponents/NewLesson/NewLessonEditor/EditableTextBlock";

type NewLessonState = {
  newLesson: editorStateI
}

const NewLessonEditor: FC = () => {
  const content = useSelector((state: NewLessonState )=> state.newLesson.lesson[0].content)
  return (
    <div>
      {content.map((block) => <EditableTextBlock value='Вводите текст' type={block.type} />)}
    </div>
  )
}

export default NewLessonEditor
