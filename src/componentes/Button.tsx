import { ButtonContainer, variantButton } from "./Button.styles";


interface PropsButton{
    variant?: variantButton;
}

export function Button({variant='primary'}: PropsButton) {
  return <ButtonContainer variant={variant}>Teste</ButtonContainer>;
}
