import React, { ReactNode } from "react";
import Link from "next/link";
import { UserMenu } from "@workspace/ui/components/user-menu";
import { Providers } from "@/app/providers";
// import { useAuth } from "@workspace/ui/context/auth-context";
// import { useRouter } from "next/navigation";

interface DashboardLayoutProps {
  children: ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  // const { isAuthenticated, isLoading } = useAuth();
  // const router = useRouter();

  // useEffect(() => {
  //   // Redirect if not authenticated
  //   if (!isLoading && !isAuthenticated) {
  //     console.log("Unauthorized access to Dashboard. Redirecting to /signup");
  //     router.replace("http://localhost:3000/signup");
  //   }
  // }, [isLoading, isAuthenticated, router]);

  return (
    <Providers>
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <header className="sticky top-0 z-50 w-full border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
        <div className="flex h-16 items-center px-4 sm:px-6">
          <div className="flex flex-1 items-center justify-between">
            <Link href="/dashboard" className="font-semibold text-xl">
              DocQ
            </Link>
            <UserMenu />
          </div>
        </div>
      </header>
     
        <main>{children}</main>
     
    </div> </Providers>
  );
};

export default DashboardLayout;
