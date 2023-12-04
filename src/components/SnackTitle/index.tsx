import { ReactNode } from "react"
import { Title } from "./style"

interface TitleProps {
  children: ReactNode
}

export default function SnackTitle ({children}: TitleProps) {
  return <Title>{children}</Title>
}
