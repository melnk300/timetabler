import styled from "styled-components";
import fontVariants from "style/fontVariants";

const RecentCoursesContainer = styled.div`
  background-color: ${({theme}) => theme.colors.white};
  padding: 2vh 1vw;
  border-radius: 10px;

  @media (max-width: 450px) {
    background: none;
    padding: 0;
  }
`

const RecentCoursesInner = styled.div`
  @media (max-width: 450px) {
    display: flex;
    flex-direction: row;
    overflow-x: scroll;
    
    & > * {
      margin: 0 15px;
    }
  }
`

const CourseDetailsSplitter = styled.hr`
  @media (max-width: 450px) {
    display: none;
  }
`

export { RecentCoursesContainer, RecentCoursesInner, CourseDetailsSplitter }
