import styled, { keyframes } from "styled-components";
import Wrapper from "../wrapper/Wrapper";

export const StyledCategoryLabel = styled.div`
width: 90px;
height: 23px;
background: #EA5959;
display: flex;
align-items: center;
justify-content: center;
border-radius: 4px;
`

const displaceContent = keyframes`
0% { 
    opacity: 0;
}
100%{ 
    opacity: 1;
} 
`

export const TaskWrapper = styled(Wrapper)`
&:hover > button{
    animation-name: ${displaceContent};
    animation-duration: 1.2s;
    animation-iteration-count: 1;
}
`