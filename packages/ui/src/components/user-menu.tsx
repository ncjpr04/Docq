"use client";

import { Fragment, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import { toast } from "sonner";
import { useAuth } from "@workspace/ui/context/auth-context.js";

export function UserMenu() {
  const { logout } = useAuth();
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  const handleLogout = async () => {
    try {
      setIsLoggingOut(true);
      const response = await logout();
      if (response.success) {
        toast.success("Logged out successfully");
        // The redirect is now handled in the auth context
      } else {
        toast.error(response.error || "Failed to logout");
      }
    } catch (error) {
      console.error("[UserMenu] Logout error:", error);
      toast.error("An error occurred while logging out");
    } finally {
      setIsLoggingOut(false);
    }
  };

  return (
    <Menu as="div" className="relative">
      <Menu.Button className="flex items-center gap-2 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800">
        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-500" />
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          className="text-gray-600 dark:text-gray-400"
        >
          <path
            d="M5 7.5L10 12.5L15 7.5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </Menu.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 mt-2 w-48 origin-top-right rounded-md bg-white dark:bg-gray-800 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <button
                  onClick={handleLogout}
                  className={`${
                    active ? "bg-gray-100 dark:bg-gray-700" : ""
                  } w-full text-left block px-4 py-2 text-sm text-red-600 dark:text-red-400`}
                  disabled={isLoggingOut}
                >
                  {isLoggingOut ? "Logging out..." : "Sign out"}
                </button>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
