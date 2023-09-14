import { ButtonContainer } from "./styles";
export default function Button({label, onClick}) {
  return (
    <ButtonContainer onClick={onClick} type="button">
      {label}
    </ButtonContainer>
  )
}
