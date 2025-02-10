"use client";

import { useState, useEffect, useCallback } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { toast } from "sonner";
import axios from "axios";
import SigninForm from "@workspace/ui/components/signin-form";
import { handleAuth } from "@workspace/ui/utils/auth";
import { useAuth } from "@workspace/ui/context/auth-context";
import Link from "next/link";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

export default function Signin() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  const { setToken, isAuthenticated, isLoading } = useAuth();

  // Redirect if already authenticated
  useEffect(() => {
    if (!isLoading && isAuthenticated) {
      router.replace("/dashboard");
    }
  }, [isLoading, isAuthenticated, router]);

  // Show success message if user is redirected after registration
  useEffect(() => {
    if (searchParams.get("registered") === "true") {
      toast.success("Account created successfully! Please sign in.");
    }
  }, [searchParams]);

  // Input validation function
  const validateInput = (email: string, password: string) => {
    if (!email.trim() || !password.trim()) {
      throw new Error("All fields are required.");
    }

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      throw new Error("Invalid email format.");
    }
  };

  // Debounced API call to prevent multiple submissions
  const handleSubmit = useCallback(
    async (email: string, password: string) => {
      if (loading) return; // Prevent multiple submissions

      try {
        setLoading(true);
        validateInput(email, password);

        console.log("Signing in user:", { email });

        const { data } = await axios.post(`${API_BASE_URL}/auth/login`, {
          email: email.toLowerCase().trim(),
          password,
        });

        console.log("Login response:", data);
        handleAuth(data.token);
        setToken(data.token);
        router.push("/dashboard");
        toast.success("Signed in successfully!");
      } catch (error: any) {
        console.error("Login error:", error);

        let errorMsg = "An unexpected error occurred. Please try again.";
        if (error.response) {
          errorMsg = error.response.data?.error || errorMsg;
        } else if (error.request) {
          errorMsg = "Network error. Please check your connection.";
        }

        toast.error(errorMsg);
      } finally {
        setLoading(false);
      }
    },
    [loading, setToken, router]
  );

  // Prevent rendering form if already authenticated
  if (isAuthenticated) return null;

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="flex flex-col items-center gap-4 w-full max-w-md px-4">
        <h1 className="text-2xl font-bold mb-4">Welcome back</h1>
        <SigninForm onSubmit={handleSubmit} loading={loading} aria-busy={loading} />
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Don't have an account?{" "}
          <Link href="/signup" className="text-blue-600 hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}
