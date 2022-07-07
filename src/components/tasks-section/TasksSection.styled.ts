import styled from "styled-components"
import Wrapper from "../wrapper/Wrapper"

export const StyledTasksSection = styled.div`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
gap: 3.5%;
padding: ${(props: {width: number}) => props.width > 450 ? "20px 30px": "10px 15px"};
`

export const StyledTaskInput = styled.input`
width: 100%;
height: 33px;
border: none;
outline: none;
background: #F3F3F3;
border-radius: 8px;
font-weight: 400;
font-size: 14px;
padding: 10px 15px;
color: #838386;

::placeholder,
::-webkit-input-placeholder {
  color: #838386;
}
:-ms-input-placeholder {
  color: #838386;
}

&:placeholder-shown {
  text-overflow: ellipsis;
}
`

export const TasksWrapper = styled(Wrapper)`
overflow: hidden; 
overflow-y: auto;

&::-webkit-scrollbar{
  display: none;
}
`
