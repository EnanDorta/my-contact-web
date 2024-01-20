import { ReactNode } from "react";
import { Container } from "./styles";
import Spinner from "../Spinner";

interface FormGroupsProps {
  children: ReactNode;
  isLoading?: boolean;
  error?: string;
}

const FormGroup = ({ children, isLoading, error }: FormGroupsProps) => {
  return (
    <Container>
      <div className="form-item">
        {children}
        {isLoading && (
          <div className="loader">
            <Spinner size={18} />
          </div>
        )}
      </div>

      {error && <small>{error}</small>}
    </Container>
  );
};

export default FormGroup;
