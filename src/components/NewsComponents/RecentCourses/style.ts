import styled from "styled-components";
import fontVariants from "style/fontVariants";

const RecentCoursesContainer = styled.div`
  background-color: ${({theme}) => theme.colors.white};
  
`

const RecentCoursesTitle = styled.p`
  font: ${fontVariants.font28b}
`

const RecentCourseName = styled.p``

export { RecentCoursesTitle, RecentCoursesContainer, RecentCourseName }
