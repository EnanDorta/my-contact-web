import { useState, useEffect } from "react";
import { Container } from "./styles";
import ToastMessage from "../ToastMessage";
import { ToastEventManager } from "../../../utils/toast";

interface Messages {
  id: number;
  type: "default" | "success" | "danger";
  text: string;
}

interface AddToastEvent extends Event {
  type: "default" | "success" | "danger";
  text: string;
}

const ToastContainer = () => {
  const [messages, setMessages] = useState<Messages[]>([]);

  useEffect(() => {
    function handleAddToast({ type, text }: AddToastEvent) {
      setMessages((prevState) => [
        ...prevState,
        {
          id: Math.random() * 1000,
          text,
          type,
        },
      ]);
    }

    ToastEventManager.on("addtoast", handleAddToast);

    return () => {
      ToastEventManager.removeListener("addtoast", handleAddToast);
    };
  }, []);

  return (
    <Container>
      {messages.map(({ id, text, type }) => (
        <ToastMessage key={id} type={type} text={text} />
      ))}
    </Container>
  );
};

export default ToastContainer;
