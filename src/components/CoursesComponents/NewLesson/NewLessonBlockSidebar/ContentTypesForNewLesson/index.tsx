import {FC} from "react";
import {useDispatch, useSelector} from "react-redux";
import {addBlock, AddTextBlockPayloadI, TextType} from 'src/store/newLesson/newLessonEditorSlice'

import { BlocksContainer, TypeBlocks } from "./style";
import {CardText} from "components/Global/style";
import {BlockTypesIcons} from "components/CoursesComponents/NewLesson/NewLessonEditor/EditableTextBlock";

interface ContentTypeI {
  ident: number
  title: string
  img: string
  type: TextType
}

// @ts-ignore
const TypeBlock: FC<ContentTypeI> = ({ident, title, img, type}) => {
  const dispatch = useDispatch()
  const lesson = useSelector(state => state.newLesson.lesson)

  const handleClick = async () => {
    const payload: AddTextBlockPayloadI = {
      type: type,
      value: ''
    }
    dispatch(addBlock(payload))
  }

  return (
    <TypeBlocks onClick={handleClick}>
      {BlockTypesIcons[type]}
      <CardText>{title}</CardText>
    </TypeBlocks>
  )
}

const ContentTypesBlocks: FC<ContentTypeI[] | null> = () => {
  const types: ContentTypeI[] = [
    {
      ident: 1,
      title: 'Заголовок',
      img: 'https://cdn2.iconfinder.com/data/icons/font-awesome/1792/code-512.png',
      type: 'header'
    },{
      ident: 2,
      title: 'Подзаголовок',
      img: 'https://cdn2.iconfinder.com/data/icons/font-awesome/1792/code-512.png',
      type: 'subheader'
    },{
      ident: 3,
      title: 'Текст',
      img: 'https://cdn2.iconfinder.com/data/icons/font-awesome/1792/code-512.png',
      type: "text"
    },{
      ident: 4,
      title: 'Разделитель',
      img: 'https://cdn2.iconfinder.com/data/icons/font-awesome/1792/code-512.png',
      type: 'divider'
    },{
      ident: 5,
      title: 'Ссылка',
      img: 'https://cdn2.iconfinder.com/data/icons/font-awesome/1792/code-512.png',
      type: "link"
    },
  ]

  return (
    <BlocksContainer>
      {types.map((type) => <TypeBlock ident={type.ident} key={type.ident} title={type.title} img={type.img} type={type.type} />)}
    </BlocksContainer>
  )
}

export { ContentTypesBlocks }
