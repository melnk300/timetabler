import styled from "styled-components";

export interface CurrentCourseProgressI {
  progress: number
}

export function colorForProgressBar(prgoress: number): string {
  if (prgoress <= 20) return 'red'
  if (prgoress <= 50) return 'orange'
  if (prgoress <= 80) return 'lime'
  if (prgoress >= 81) return 'green'
  return 'red'
}

const Course = styled.div`
  display: flex;
  margin: 1em 0;
  justify-content: space-between;
  align-items: center;
  
  @media (max-width: 450px) {
    margin-left: 0 !important;
    margin-top: .2em !important;
    background-color: ${({theme}) => theme.colors.white};
    padding: .4em .6em;
  }
  
  a {
    font-size: 1.2em;
    color: ${({theme}) => theme.colors.primary};

    @media (max-width: 450px) {
      display: none;
    }
  }
`

const CourseTitle = styled.p`
  font-size: 1.2em;
`

const MetaContainer = styled.div`
  width: 70%;
`

const CourseProgressBar = styled.div<CurrentCourseProgressI>`
  width: 100%;
  content: ' ';
  height: 3px;
  background-color: #cecece;
  margin-top: .3em;
  border-radius: 1px;
  
  &:after {
    width: ${props => props.progress ? props.progress : 0}%;
    display: block;
    content: '';
    height: 3px;
    background-color: ${props => colorForProgressBar(props.progress)};
    border-radius: 1px;
  }
`

export {Course, CourseTitle, MetaContainer, CourseProgressBar}
