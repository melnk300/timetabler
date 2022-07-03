import { configureStore } from '@reduxjs/toolkit'
import NewLessonEditorSlice from "./newLesson/newLessonEditorSlice";

export default configureStore({
  reducer: {
    newLesson: NewLessonEditorSlice
  },
})