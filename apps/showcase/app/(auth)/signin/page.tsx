"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import SigninForm from "@workspace/ui/components/signin-form";
import { useAuth } from "@workspace/ui/context/auth-context";
import Link from "next/link";

export default function Signin() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { user, login } = useAuth();

  useEffect(() => {
    if (user) {
      console.log("[Signin] User already authenticated, redirecting to dashboard");
      router.push("/dashboard");
    }
  }, [user, router]);

  const handleSubmit = async (email: string, password: string) => {
    if (loading) return;

    try {
      setLoading(true);
      console.log("[Signin] Attempting login...");
      const response = await login(email, password);
      
      if (response.success) {
        toast.success("Welcome back!");
        console.log("[Signin] Login successful, redirecting to dashboard");
        router.push("/dashboard");
      } else {
        toast.error(response.error || "Login failed");
      }
    } catch (error: any) {
      console.error("[Signin] Login error:", error);
      toast.error(error.message || "An unexpected error occurred");
    } finally {
      setLoading(false);
    }
  };

  // Only show loading state during initial auth check
  if (loading && !user) {
    return <div>Loading...</div>;
  }

  // Don't render the form if user is authenticated
  if (user) {
    return null;
  }

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="flex flex-col items-center gap-4 w-full max-w-md px-4">
        <h1 className="text-2xl font-bold mb-4">Welcome back</h1>
        <SigninForm onSubmit={handleSubmit} loading={loading} />
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
