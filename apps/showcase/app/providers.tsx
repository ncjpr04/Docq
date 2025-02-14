"use client";
import { FC, ReactNode } from "react";
import { Toaster } from "sonner";
import { AuthProvider } from "@workspace/ui/context/auth-context";
import { ThemeProvider as NextThemesProvider } from "next-themes";

interface ProvidersProps {
  children: ReactNode;
}

const toastOptions = {
  className: "custom-toast",
};

export const Providers: FC<ProvidersProps> = ({ children }) => {
  return (
    <AuthProvider>
      <NextThemesProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        enableColorScheme
        disableTransitionOnChange
      >
        {children}
      </NextThemesProvider>
      <Toaster
        position="top-center"
        richColors
        closeButton
        theme="system"
        toastOptions={toastOptions}
      />
    </AuthProvider>
  );
};
