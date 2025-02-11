"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import axios from "axios";
import SignupForm from "@workspace/ui/components/signup-form";
import { useAuth } from "@workspace/ui/context/auth-context";

interface SignupData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

export default function Signup() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { isAuthenticated, isLoading, setToken } = useAuth();

  useEffect(() => {
    if (!isLoading && isAuthenticated) {
      router.replace("/dashboard");
    }
  }, [isLoading, isAuthenticated, router]);

  const handleSubmit = async (formData: SignupData) => {
    if (loading) return; // Prevent multiple submissions

    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords don't match");
      return;
    }

    try {
      setLoading(true);
      console.log("Signing up user:", formData.email);

      const { data } = await axios.post(`${API_BASE_URL}/auth/register`, {
        firstName: formData.firstName.trim(),
        lastName: formData.lastName.trim(),
        email: formData.email.toLowerCase().trim(),
        password: formData.password,
      });

      console.log("Signup response:", data);

      // Automatically log in the user after signup
      if (data.token) {
        setToken(data.token);
        toast.success("Account created successfully! Redirecting to dashboard...");
        router.push("/dashboard");
      } else {
        toast.success("Account created successfully! Please sign in.");
        router.push("/signin?registered=true");
      }
    } catch (error: any) {
      console.error("Signup error:", error.response.data.message);
      toast.error(error.response.data.message)
      const errorMsg =
        axios.isAxiosError(error) && error.response?.data?.error
          ? error.message
          : "Something went wrong. Please try again.";
      console.log(errorMsg);
      // toast.error(errorMsg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="flex flex-col items-center gap-4 w-full max-w-md px-4">
        <h1 className="text-2xl font-bold mb-4">Create your account</h1>
        <SignupForm onSubmit={handleSubmit} loading={loading} />
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Already have an account?{" "}
          <a href="/signin" className="text-blue-600 hover:underline">
            Sign in
          </a>
        </p>
      </div>
    </div>
  );
}