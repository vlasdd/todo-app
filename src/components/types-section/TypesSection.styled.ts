import styled, { css } from "styled-components"
import Button from "../button/Button"

export const StyledTypesSection = styled.div`
width: 200px;
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;
gap: 4%;
padding: 0 5% 20% 5%;
overflow: hidden; 
overflow-y: auto;

&::-webkit-scrollbar{
  display: none;
}

${(props: {border: boolean}) => props.border && css`
border-right: 1px solid #D8D8D8;
`}
`

export const TypesButton = styled(Button)`
${(props: {isCurrent: boolean}) => props.isCurrent && css`
color: #EA5959;
font-weight: 700;
`}
`