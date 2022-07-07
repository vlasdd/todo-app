import styled, { css } from "styled-components"

const StyledSVG = styled.svg`
width: 20px;
height: 20px;
color: #000000;

${(props: {isOpen: boolean}) => props.isOpen && css`
color: #EA5959;
`}
`

export default StyledSVG