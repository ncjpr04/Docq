"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import SignupForm from "@workspace/ui/components/signup-form";
import { useAuth } from "@workspace/ui/context/auth-context";
import Link from "next/link";

export default function Signup() {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const { user, loading, signup } = useAuth();

  useEffect(() => {
    if (!loading && user) {
      console.log("[Signup] User already authenticated, redirecting to dashboard");
      router.push("/dashboard");
    }
  }, [loading, user, router]);

  const handleSubmit = async ({ name, email, password, confirmPassword }: {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
  }) => {
    if (isLoading) return;

    try {
      setIsLoading(true);

      // Basic validations with user-friendly messages
      if (!name?.trim()) {
        toast.error("Please enter your name");
        return;
      }
      if (!email?.trim()) {
        toast.error("Please enter your email address");
        return;
      }
      if (!password) {
        toast.error("Please enter a password");
        return;
      }
      if (!confirmPassword) {
        toast.error("Please confirm your password");
        return;
      }
      if (password !== confirmPassword) {
        toast.error("Passwords don't match. Please try again.");
        return;
      }

      // Password validation before API call
      const passwordErrors = [];
      if (password.length < 8) {
        passwordErrors.push("At least 8 characters long");
      }
      if (!password.match(/[A-Z]/)) {
        passwordErrors.push("One uppercase letter");
      }
      if (!password.match(/[a-z]/)) {
        passwordErrors.push("One lowercase letter");
      }
      if (!password.match(/[0-9]/)) {
        passwordErrors.push("One number");
      }
      if (!password.match(/[\W_]/)) {
        passwordErrors.push("One special character");
      }

      if (passwordErrors.length > 0) {
        toast.error("Password must include:", {
          description: passwordErrors.join(", "),
          duration: 5000
        });
        return;
      }

      // Show loading toast
      const loadingToast = toast.loading("Creating your account...");

      try {
        const response = await signup(name, email, password);
        
        if (response.success) {
          toast.dismiss(loadingToast);
          toast.success("Account created successfully! Welcome aboard!");
          console.log("[Signup] Registration successful, redirecting to dashboard");
          router.push("/dashboard");
        } else {
          toast.dismiss(loadingToast);
          handleSignupError(response.error);
        }
      } catch (error: any) {
        console.error("[Signup] Error:", error);
        toast.dismiss(loadingToast);
        handleSignupError(error.message);
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleSignupError = (error?: string) => {
    if (!error) {
      toast.error("Something went wrong", {
        description: "Please try again later"
      });
      return;
    }

    if (error.includes("already exists")) {
      toast.error("This email is already registered", {
        description: "Please sign in instead or use a different email",
        action: {
          label: "Sign In",
          onClick: () => router.push("/signin")
        }
      });
    } else if (error.toLowerCase().includes("password")) {
      toast.error("Invalid Password", {
        description: error,
        duration: 5000
      });
    } else {
      toast.error("Registration failed", {
        description: error
      });
    }
  };

  // Show loading state during initial auth check
  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900 dark:border-white" />
      </div>
    );
  }

  // Don't render the form if user is authenticated
  if (user) return null;

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="flex flex-col items-center gap-4 w-full max-w-md px-4">
        <h1 className="text-2xl font-bold mb-4">Create your account</h1>
        <SignupForm onSubmit={handleSubmit} loading={isLoading} />
        <div className="text-sm text-gray-600 dark:text-gray-400 space-y-2">
          <p>
            Already have an account?{" "}
            <Link href="/signin" className="text-blue-600 hover:underline">
              Sign in
            </Link>
          </p>
          <p className="text-xs">
            By signing up, you agree to our{" "}
            <Link href="/terms" className="text-blue-600 hover:underline">
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link href="/privacy" className="text-blue-600 hover:underline">
              Privacy Policy
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
