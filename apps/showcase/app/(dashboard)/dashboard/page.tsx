"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@workspace/ui/context/auth-context";

export default function Dashboard() {
  const router = useRouter();
  const { user, loading } = useAuth();

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    if (!loading && !user) {
      console.log("[Dashboard] No authenticated user, redirecting to signin");
      timeoutId = setTimeout(() => {
        router.push("/signin");
      }, 100); // Small delay to prevent immediate redirect
    }

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [loading, user, router]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user) return null;

  return (
    <div className="flex flex-col gap-4 p-6">
      <h1 className="text-2xl font-bold">Welcome, {user.name}!</h1>
      <div className="grid gap-6">
        {/* Dashboard content */}
      </div>
    </div>
  );
}
