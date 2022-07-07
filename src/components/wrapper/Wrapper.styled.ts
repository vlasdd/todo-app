import { IWrapperProps } from "./Wrapper";
import styled from "styled-components";

const StyledWrapper = styled.div`
display: ${(props: IWrapperProps) => props.display || "flex"};
justify-content: ${(props: IWrapperProps) => props.justify || "center"};
align-items: ${(props: IWrapperProps) => props.items || "center"};
flex-direction: ${(props: IWrapperProps) => props.direction || "row"};
gap: ${(props: IWrapperProps) => props.gap || 0};
width: ${(props: IWrapperProps) => props.width || "auto"};
height: ${(props: IWrapperProps) => props.height || "auto"};
`

export default StyledWrapper