import React, { ReactNode, memo } from "react";
import Link from "next/link";
import { UserMenu } from "@workspace/ui/components/user-menu";
import { Providers } from "@/app/providers";

interface DashboardLayoutProps {
  children: ReactNode;
}

const DashboardLayout = memo(({ children }: DashboardLayoutProps) => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
        <div className="flex h-16 items-center px-4 sm:px-6">
          <div className="flex flex-1 items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <Link href="/dashboard" className="font-semibold text-xl">
                DocQ
              </Link>
            </div>

            {/* User Menu */}
            <div className="flex items-center gap-4">
              <UserMenu />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <Providers>
        <main>{children}</main>
      </Providers>
    </div>
  );
});

DashboardLayout.displayName = "DashboardLayout";

export default DashboardLayout;
