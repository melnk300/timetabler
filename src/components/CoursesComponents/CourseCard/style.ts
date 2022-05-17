import { CurrentCourseProgressI, colorForProgressBar } from "components/NewsComponents/RecentCourses/CurseCardForRecent/style";
import styled from "styled-components";

const CourseContainer = styled.div<CurrentCourseProgressI>`
  background-color: ${({theme}) => theme.colors.white};
  padding: .8em 1em;
  border-radius: 10px;
  cursor: pointer;
  
  &:hover > button:after{
    width: ${props => props.progress ? props.progress : 0}%;
  }
`

const CourseImage = styled.img`
  border-radius: 10px;
  width: 100%;
`

const CourseTitle = styled.p`
  font-size: 1.4em;
`

const CourseDescription = styled.p`
  margin: .3vh 0;
`

const CourseButton = styled.button<CurrentCourseProgressI>`
  all: unset;
  position:relative;
  background-color: ${({theme}) => theme.colors.primary};
  cursor: pointer;
  text-align: center;
  width: 100%;
  color: ${({theme}) => theme.colors.white};
  font-size: 1.2em;
  padding: .3em 0;
  border-radius: 10px;
  margin-top: 5px;
  
  &:after {
    display: block;
    content: '';
    height: 3px;
    background-color: ${props => colorForProgressBar(props.progress)};
    border-radius: 1px;
    position: absolute;
    bottom: 0;
    width: 0;
    transition: .2s ease-in-out;
    transform: scaleX(.95);
  }
  
  
`



export { CourseContainer, CourseImage, CourseTitle, CourseDescription, CourseButton }
