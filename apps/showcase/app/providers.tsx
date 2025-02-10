"use client";

import { FC, ReactNode } from "react";
import { Toaster } from "sonner";
import { AuthProvider } from "@workspace/ui/context/auth-context";

interface ProvidersProps {
  children: ReactNode;
}

// Extract toast options for reusability & performance
const toastOptions = {
  className: "custom-toast",
};

export const Providers: FC<ProvidersProps> = ({ children }) => {
  return (
    <AuthProvider>
      {children}
      <Toaster
        position="top-center"
        richColors
        closeButton
        theme="system"
        toastOptions={toastOptions} // Avoid re-creating object on each render
      />
    </AuthProvider>
  );
};
