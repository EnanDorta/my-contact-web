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

  function handleRemoveMessage(id: number) {
    const filteredMessages = messages.filter((message) => message.id !== id);

    setMessages(filteredMessages);
  }

  return (
    <Container>
      {messages.map((message) => (
        <ToastMessage
          key={message.id}
          message={message}
          onRemoveMessage={handleRemoveMessage}
        />
      ))}
    </Container>
  );
};

export default ToastContainer;
