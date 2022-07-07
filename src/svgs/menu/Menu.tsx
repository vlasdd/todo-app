import React from 'react'
import StyledSVG from './Menu.styled'

interface IMenuProps {
    isOpen: boolean
}

const Menu: React.FC<IMenuProps> = (props) => {
  return (
        <StyledSVG 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-6 w-6" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor" 
            strokeWidth={2}
            isOpen={props.isOpen}
        >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
        </StyledSVG>
    )
}

export default Menu