import React from 'react'
import StyledSVG from './CheckedMinus.styled'

const Minus: React.FC = () => {
    return (
        <StyledSVG xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
        </StyledSVG>
    )
}

export default Minus