import { useEffect } from "react";
import { Container } from "./styles";
import CheckCircle from "../../../assets/icons/check-circle.svg";
import Xcircle from "../../../assets/icons/x-circle.svg";

interface ToastMessageProps {
  message: {
    id: number;
    text: string;
    type: "default" | "success" | "danger";
    duration?: number;
  };

  onRemoveMessage: (id: number) => void;
}

const ToastMessage = ({ message, onRemoveMessage }: ToastMessageProps) => {
  const { id, text, type, duration } = message;

  useEffect(() => {
    const timeOutId = setTimeout(() => {
      onRemoveMessage(id);
    }, duration || 3000);

    return () => {
      clearTimeout(timeOutId);
    };
  }, [id, duration, onRemoveMessage]);

  function removeMessage() {
    onRemoveMessage(id);
  }

  return (
    <Container type={type} onClick={removeMessage} tabIndex={0} role="button">
      {type === "success" && <img src={CheckCircle} alt="CheckX" />}

      {type === "danger" && <img src={Xcircle} alt="x" />}

      <strong>{text}</strong>
    </Container>
  );
};

export default ToastMessage;
