import styled from "styled-components"
import { ITextProps } from "./Text"

const StyledText = styled.p`
word-break: break-word;
color: ${(props: ITextProps) => props.color || "inherit"};
font-size: ${(props: ITextProps) => props.size || "16px"};
font-weight: ${(props: ITextProps) => props.weight || "inherit"};
margin: ${(props: ITextProps) => props.margin || 0};
`

export default StyledText