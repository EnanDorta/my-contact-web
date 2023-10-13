import { ReactNode } from "react"
import { Container } from "./styles"

interface FormGroupsProps {
  children: ReactNode
  error?: string
}

const FormGroup = ({ children, error }: FormGroupsProps) => {
  return (
    <Container>
      {children}
      <small>{error}</small>
    </Container>
  )
}

export default FormGroup
