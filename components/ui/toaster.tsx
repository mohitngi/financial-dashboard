'use client';

import * as React from 'react';
import {
  Toast,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from '@/components/ui/toast';

type ToasterToast = {
  id: string;
  title?: string;
  description?: string;
  action?: React.ReactNode;
};

const Toaster = () => {
  const [toasts, setToasts] = React.useState<ToasterToast[]>([]);

  return (
    <ToastProvider>
      {toasts.map(({ id, title, description, action }) => (
        <Toast key={id}>
          <div className="grid gap-1">
            {title && <ToastTitle>{title}</ToastTitle>}
            {description && (
              <ToastDescription>{description}</ToastDescription>
            )}
          </div>
          {action}
        </Toast>
      ))}
      <ToastViewport />
    </ToastProvider>
  );
};

export { Toaster };
export type { ToasterToast };
