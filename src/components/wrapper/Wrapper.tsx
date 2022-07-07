import React from 'react'
import StyledWrapper from './Wrapper.styled';

export interface IWrapperProps {
  children: React.ReactNode;
  display?: string;
  direction?: string;
  gap?: string;
  justify?: string;
  items?: string;
  width?: string;
  height?: string;
  borderRight?: string;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

const Wrapper: React.FC<IWrapperProps> = (props) => {
  return (
    <StyledWrapper {...props}/>
  )
}

export default Wrapper