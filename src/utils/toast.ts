import EventManager from "../lib/EventManager";

interface ToastProps {
  type: "default" | "success" | "danger";
  text: string;
}

export const ToastEventManager = new EventManager();

export function toast({ type, text }: ToastProps) {
  ToastEventManager.emit("addtoast", { type, text });
}
