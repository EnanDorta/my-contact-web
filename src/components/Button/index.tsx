import { ReactNode, ButtonHTMLAttributes } from "react";
import { Button } from "./styles";
import Spinner from "../Spinner";

type ButtonType = "button" | "submit" | "reset";

interface ButtonFormProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  isLoading?: boolean;
  danger: boolean;
  type?: ButtonType;
}

const ButtonForm = ({
  children,
  isLoading = false,
  disabled,
  type = "button",
  danger = false,
}: ButtonFormProps) => {
  return (
    <Button type={type} disabled={isLoading || disabled} danger={danger}>
      {!isLoading && children}
      {isLoading && <Spinner size={16} />}
    </Button>
  );
};

export default ButtonForm;
