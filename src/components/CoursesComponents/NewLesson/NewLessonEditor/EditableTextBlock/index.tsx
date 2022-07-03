import {FC, useRef, useState} from "react";

import EditIcon from '@mui/icons-material/Edit';
import OutsideClickHandler from 'react-outside-click-handler'

import { EditableTextBlockContainer, EditableTextBlockContent, EditableTextBlockEditIcon, EditableTextBlockTypeIcon} from "./style";

import CodeIcon from 'src/Icons/CodeIcon'
import TextIcon from 'src/Icons/TextIcon'
import HeaderIcon from 'src/Icons/HeaderIcon'
import {PageTitle, CardText} from "components/Global/style";

interface EditableTextBlockI {
  value: string
  type: string
}

interface BlockTypesI {
  [key: string]: JSX.Element
}

export const BlockTypesIcons: BlockTypesI = {
  text: <TextIcon />,
  header: <HeaderIcon />,
}

const EditableTextBlock: FC<EditableTextBlockI> = (props) => {
  const [isEditing, setIsEditing] = useState(false)
  const [value, setValue] = useState(props.value)
  const inputDiv = useRef<HTMLDivElement>(null)

  const handleClickToEdit = () => {
    setIsEditing(true)
    inputDiv.current.focus()
  }

  const handleBlockClickToEdit = (e) => {
    switch (e.detail) {
      case 2:
        setIsEditing(true)
        inputDiv.current.focus()
    }
  }

  const handleBlurToUnedited = () => {
    if (isEditing) {
      setIsEditing(false)
      setValue(inputDiv.current?.innerText || '')
    }
  }

  return (
    <OutsideClickHandler  onOutsideClick={handleBlurToUnedited}>
        <EditableTextBlockContainer>
          <EditableTextBlockTypeIcon>
            {BlockTypesIcons[props.type]}
          </EditableTextBlockTypeIcon>
          <EditableTextBlockContent type={props.type} ref={inputDiv} contentEditable={isEditing} isEditing={isEditing} onClick={handleBlockClickToEdit}>
            {value}
          </EditableTextBlockContent>
          {!isEditing &&
              <EditableTextBlockEditIcon onClick={handleClickToEdit}>
                  <EditIcon/>
              </EditableTextBlockEditIcon>
          }
        </EditableTextBlockContainer>
    </OutsideClickHandler>
  )
}

export default EditableTextBlock
