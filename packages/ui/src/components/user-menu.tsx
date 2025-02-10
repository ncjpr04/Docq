"use client";
import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { toast } from 'sonner';
import { useAuth } from '../context/auth-context.js';

export function UserMenu() {
  const { logout } = useAuth();

  const handleLogout = () => {
    toast.promise(
      new Promise((resolve) => {
        // Show confirmation dialog
        toast.custom((t) => (
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg">
            <h3 className="font-medium mb-2">Confirm Logout</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
              Are you sure you want to log out?
            </p>
            <div className="flex justify-end gap-2">
              <button
                onClick={() => toast.dismiss(t)}
                className="px-3 py-1 text-sm rounded-md bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  logout();
                  resolve(true);
                  toast.dismiss(t);
                }}
                className="px-3 py-1 text-sm rounded-md bg-red-500 text-white hover:bg-red-600"
              >
                Logout
              </button>
            </div>
          </div>
        ), {
          duration: Infinity,
        });
      }),
      {
        loading: 'Logging out...',
        success: 'Logged out successfully',
        error: 'Failed to logout',
      }
    );
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
                    active ? 'bg-gray-100 dark:bg-gray-700' : ''
                  } w-full text-left block px-4 py-2 text-sm text-red-600 dark:text-red-400`}
                >
                  Sign out
                </button>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
} 