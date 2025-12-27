// src/components/ui/use-toast.tsx
import { useState } from 'react';

export function useToast() {
  const [toasts, setToasts] = useState<string[]>([]);

  const addToast = (message: string) => {
    setToasts([...toasts, message]);
    setTimeout(() => {
      setToasts((currentToasts) => currentToasts.slice(1));
    }, 3000); // Auto dismiss after 3 seconds
  };

  const toast = (options: { title: string; description: string }) => {
    addToast(`${options.title}: ${options.description}`);
  };

  return { toasts, addToast, toast };
}
