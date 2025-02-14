"use client";
import { Button } from "@workspace/ui/components/ui/button";
import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@workspace/ui/context/auth-context";

export default function Page() {
  const router = useRouter();
  const { user, loading } = useAuth();

  useEffect(() => {
    if (!loading && user) {
      console.log("[Root] User authenticated, redirecting to dashboard");
      router.push("/dashboard");
    }
  }, [loading, user, router]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="flex flex-col items-center gap-4">
          <h1 className="text-4xl font-bold mb-8">Welcome to DocQ</h1>
          <div className="flex gap-4">
            <Link href="/signin" passHref>
              <Button variant="default">Sign In</Button>
            </Link>
            <Link href="/signup" passHref>
              <Button variant="outline">Sign Up</Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return null;
}
