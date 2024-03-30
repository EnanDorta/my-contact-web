interface ToastProps {
  type: "default" | "success" | "danger";
  text: string;
}

export function toast({ type, text }: ToastProps) {
  const addEvent = new CustomEvent("addtoast", {
    detail: {
      type,
      text,
    },
  });

  document.dispatchEvent(addEvent);
}
