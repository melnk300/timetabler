import styled from "styled-components";

const BlocksContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 5px;
  cursor: pointer;
`

const TypeBlocks = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: white;
  transition: .2s ease-in-out;
  
  &:hover {
    box-shadow: 2px 3px 4px 1px rgba(34, 60, 80, 0.1);  }
  
  img {
    width: 45%;
  }
`

export {BlocksContainer, TypeBlocks}