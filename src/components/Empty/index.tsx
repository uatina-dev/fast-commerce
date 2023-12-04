import { Button, Container } from "./style"

import manAndBurgerImg from '../../assets/man-and-burger.svg'

interface EmptyProps {
  title: string
}
export function Empty({ title }: EmptyProps) {
  return (
    <Container>
      <h2>{title}</h2>
      <Button to='/'>Checar o cardápio</Button>
      <img src={manAndBurgerImg} alt="Homem ocm hambúrguer" />
    </Container>
  )
}
