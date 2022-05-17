import styled from 'styled-components'

const CoursesContainer = styled.div`
`


const CoursesContentContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  margin-top: 2vh;
  gap: 15px;
  
  @media (max-width: 450px) {
    display: grid;
    grid-template-columns: 1fr;
    
    & > *{
      height: 100%;
    }
  }

  &>* {
    position: relative;
    top: 0;
    transition: .2s ease-in-out;
    
    &:hover {
      position: relative;
      top: 2px;
      box-shadow: 4px 4px 14px -3px rgba(34, 60, 80, 0.2);
    }
  }
`

const NewCourseCard = styled.div`
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  cursor: pointer;
  border-radius: 10px;
  
  @media (max-width: 450px) {
    padding: 10vh 0;
  }
`

const PlusForNewCourse = styled.p`
  font-size: 4em;
  text-align: center;
`

const TitleForNewCourse = styled.p`
  font-size: 2em;
  text-align: center;
`



export { CoursesContainer, CoursesContentContainer, NewCourseCard, PlusForNewCourse, TitleForNewCourse }
