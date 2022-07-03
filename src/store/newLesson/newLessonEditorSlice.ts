import { createSlice } from "@reduxjs/toolkit";

interface SlideI {
  id: number;
  title?: string;
  content: Array<TextContentI | CodeContentI>;
}

interface ContentI {
  blockId: number;
}

interface TextContentI extends ContentI {
  type: TextType;
  value: string;
  url?: string;
}

interface CodeContentI extends ContentI {
  blockId: number;
  language: string;
  value: string;
  url?: string;
}

type Lesson = Array<SlideI>;
export type TextType = "header" | "subheader" | "text" | "link" | "divider";

export interface editorStateI {
  lesson: Lesson;
  currentSlide: number;
}

const initialState: editorStateI = {
  lesson: [
    {
      id: 0,
      title: "First Slide",
      content: [
        {
          blockId: 0,
          type: "header",
          value: "hello world",
        },
      ],
    },
  ],
  currentSlide: 0,
};

interface AddBlockPayloadI {
  blockId?: number;
}

export interface AddTextBlockPayloadI extends AddBlockPayloadI {
  type: TextType;
  value: string;
}

interface AddTextBlockActionI {
  payload: AddTextBlockPayloadI;
}

export const newLessonEditor = createSlice({
  name: "newLessonEditor",
  initialState,
  reducers: {
    addBlock: (state, action: AddTextBlockActionI) => {
      const newBlock: TextContentI = {
        blockId:
          action.payload.blockId ||
          state.lesson[state.currentSlide].content.length,
        type: action.payload.type,
        value: action.payload.value,
      };
      state.lesson[state.currentSlide].content.push(newBlock);
      console.log(state, action);
    },
    editBlock: (state, action) => {
      const blockIndex = state.lesson[state.currentSlide].content.findIndex(
        (block) => block.blockId == action.payload.blockId
      );
      state.lesson[state.currentSlide].content[blockIndex].value =
        action.payload.value;
    },
  },
});

export const { addBlock } = newLessonEditor.actions;

export default newLessonEditor.reducer;
