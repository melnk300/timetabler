import styled, { css } from "styled-components";

interface ContentPropsI {
  isEditing: boolean
  type: string
}

const EditableText = css`
  font-weight: 400;

  @media (max-width: 450px) {
    font-size: 14px;
  }

  @media (max-width: 1400px) {
    font-size: 18px;
  }

  @media (min-width: 1400px) {
    font-size: 22px;
  }
`

const EditableHeader = css`
  font-weight: 700;

  @media (max-width: 450px) {
    font-size: 24px;
  }

  @media (max-width: 1400px) {
    font-size: 28px;
  }

  @media (min-width: 1400px) {
    font-size: 32px;
  }
`

const EditableSubHeader = css`
  font-weight: 600;

  @media (max-width: 450px) {
    font-size: 22px;
  }

  @media (max-width: 1400px) {
    font-size: 26px;
  }

  @media (min-width: 1400px) {
    font-size: 30px;
  }
`

interface BlockTypesI {
  [key: string]: any
}

const blockTypes: BlockTypesI = {
  text: EditableText,
  header: EditableHeader,
  subheader: EditableSubHeader
}

const EditableTextBlockContent = styled.p<ContentPropsI>`
  display: block;
  position: relative;
  outline: none;
  padding: .2em;
  ${props => blockTypes[props.type]}
  

  ${props => props.isEditing && `
    border: 2px dashed gray
  `}
`


const EditableTextBlockEditIcon = styled.div`
  position: absolute;
  top: 0;
  right: -1.5em;
  transform: scale(.8);
`
const EditableTextBlockTypeIcon = styled.div`
  position: absolute;
  top: 0;
  left: -3.5em;
  height: 1em;
  transform: scale(.4);
`

const EditableTextBlockContainer = styled.div`
  position: relative;
  width: 80%;
  margin: .5em 0;
`

export { EditableTextBlockContainer, EditableTextBlockContent, EditableTextBlockEditIcon, EditableTextBlockTypeIcon }
