import React from 'react'
import styled from 'styled-components'
import StyledText from './Text.styled';

export interface ITextProps {
  children: React.ReactNode
  color?: string;
  size?: string;
  weight?: number;
  margin?: string;
}

const Text: React.FC<ITextProps> = (props) => {
  return (
    <StyledText { ...props }/>
  )
}

export default Text