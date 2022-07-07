import React from 'react'
import StyledButton from './Button.styled';

interface IButtonProps {
    children: React.ReactNode;
    onClick: () => void;
}

const Button: React.FC<IButtonProps> = (props) => {
    return (
        <StyledButton {...props}/>
    )
}

export default Button