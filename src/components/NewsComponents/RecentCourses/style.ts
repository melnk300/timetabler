import styled from "styled-components";
import fontVariants from "style/fontVariants";

const RecentCoursesContainer = styled.div`
  background-color: ${({theme}) => theme.colors.white};
  padding: 2vh 1vw;
  border-radius: 10px;
`

const RecentCoursesTitle = styled.p`
  font: ${fontVariants.font28b}
`

export { RecentCoursesTitle, RecentCoursesContainer }
