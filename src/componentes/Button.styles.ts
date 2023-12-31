import styled from 'styled-components';

export type variantButton = 'primary' | 'secondary';

interface ButtonContainerProps{
    variant: variantButton ;
}

// const buttonVariants = {
//     primary: "green",
//     secondary: "red"
// }

export const ButtonContainer = styled.button<ButtonContainerProps>`
    width: 100px;
    height: 40px;
    border-radius: 4px;
    margin: 8px;
    color: ${props => props.theme.white};
    background-color: ${props => props.theme['green-500']};
    
`
