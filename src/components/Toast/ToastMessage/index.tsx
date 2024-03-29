import { Container } from "./styles";
import CheckCircle from "../../../assets/icons/check-circle.svg";
import Xcircle from "../../../assets/icons/x-circle.svg";

interface ToastMessageProps {
  text: string;
  type?: "default" | "success" | "danger";
}

const ToastMessage = ({ text, type = "default" }: ToastMessageProps) => {
  return (
    <Container type={type}>
      {type === "success" && <img src={CheckCircle} alt="CheckX" />}

      {type === "danger" && <img src={Xcircle} alt="x" />}

      <strong>{text}</strong>
    </Container>
  );
};

export default ToastMessage;
