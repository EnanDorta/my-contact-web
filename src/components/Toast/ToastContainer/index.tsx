import { useState, useEffect } from "react";
import { Container } from "./styles";
import ToastMessage from "../ToastMessage";

interface Messages {
  id: number;
  type: "default" | "success" | "danger";
  text: string;
}

interface AddToastEvent extends Event {
  detail: {
    type: "default" | "success" | "danger";
    text: string;
  };
}

const ToastContainer = () => {
  const [messages, setMessages] = useState<Messages[]>([]);

  useEffect(() => {
    function handleAddToast(event: Event) {
      const addToastEvent = event as AddToastEvent;
      const { type, text } = addToastEvent.detail;

      setMessages((prevState) => [
        ...prevState,
        {
          id: Math.random() * 1000,
          text,
          type,
        },
      ]);
    }

    document.addEventListener("addtoast", handleAddToast);

    return () => {
      document.removeEventListener("addtoast", handleAddToast);
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
