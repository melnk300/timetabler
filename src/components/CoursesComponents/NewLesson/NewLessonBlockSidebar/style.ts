import styled, { css } from "styled-components";

interface SliderI {
  isActive: boolean
}

const NewLessonCoursesContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  height: 100vh;
`

const Slider = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: .1em;
  padding: 0 5%;
`

const activeSlider = css`
  color: ${({theme}) => theme.colors.text};

  &:after {
    width: 140%;
    left: -20%;
    opacity: 1;
  }
`

const SliderElement = styled.span<SliderI>`
  cursor: pointer;
  color: #888;
  position: relative;
  transition: .2s ease-in-out;

  &:after {
    display: block;
    bottom: -4px;
    position: absolute;
    content: ' ';
    width: 0;
    left: 50%;
    height: 2.5px;
    transition: .2s ease-in-out;
    background-color: ${({theme}) => theme.colors.text};
  }

  ${props => props.isActive && activeSlider}
`

export { Slider, NewLessonCoursesContainer, SliderElement }
