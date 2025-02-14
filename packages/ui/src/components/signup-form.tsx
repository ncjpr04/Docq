"use client";
import React from "react";
import { Label } from "./ui/label.js";
import { Input } from "./ui/input.js";
import { cn } from "../lib/utils.js";
// import {
//   IconBrandGithub,
//   IconBrandGoogle,
//   IconBrandOnlyfans,
// } from "@tabler/icons-react";

interface SignupFormProps {
  onSubmit: (formData: {
     name: string;
    email: string;
    password: string;
    confirmPassword: string;
  }) => void;
  loading?: boolean;
}

export default function SignupForm({ onSubmit, loading }: SignupFormProps) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    
    onSubmit({
      // firstName: formData.get('firstName') as string,
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      password: formData.get('password') as string,
      confirmPassword: formData.get('confirmPassword') as string,
    });
  };

  return (
    <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
      <form className="my-8" onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
        {/* <LabelInputContainer>
            <Label htmlFor="firstName">First name</Label>
            <Input 
              id="firstName" 
              name="firstName" 
              placeholder="John" 
              type="text" 
              required
              minLength={2}
              className="focus-visible:ring-2 focus-visible:ring-blue-500"
            />
          </LabelInputContainer> */}
          <LabelInputContainer>
            <Label htmlFor="name">First name</Label>
            <Input 
              id="name" 
              name="name" 
              placeholder="John" 
              type="text" 
              required
              minLength={2}
              className="focus-visible:ring-2 focus-visible:ring-blue-500"
            />
          </LabelInputContainer>
          {/* <LabelInputContainer>
            <Label htmlFor="lastName">Last name</Label>
            <Input 
              id="lastName" 
              name="lastName" 
              placeholder="Doe" 
              type="text" 
              required
              minLength={2}
              className="focus-visible:ring-2 focus-visible:ring-blue-500"
            />
          </LabelInputContainer> */}
        </div>
        
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Email Address</Label>
          <Input
            id="email"
            name="email"
            placeholder="you@example.com"
            type="email"
            required
            className="focus-visible:ring-2 focus-visible:ring-blue-500"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
          />
        </LabelInputContainer>
        
        <LabelInputContainer className="mb-4">
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            name="password"
            placeholder="••••••••"
            type="password"
            required
            minLength={6}
            className="focus-visible:ring-2 focus-visible:ring-blue-500"
          />
          <p className="text-xs text-gray-500 mt-1">Must be at least 6 characters</p>
        </LabelInputContainer>

        <LabelInputContainer className="mb-8">
          <Label htmlFor="confirmPassword">Confirm Password</Label>
          <Input
            id="confirmPassword"
            name="confirmPassword"
            placeholder="••••••••"
            type="password"
            required
            className="focus-visible:ring-2 focus-visible:ring-blue-500"
          />
        </LabelInputContainer>

        <button
          className={cn(
            "bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] transition-all hover:shadow-[0px_0px_0px_2px_#ffffff40_inset]",
            loading && "opacity-50 cursor-not-allowed"
          )}
          type="submit"
          disabled={loading}
        >
          {loading ? (
            <span className="flex items-center justify-center">
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Creating account...
            </span>
          ) : (
            "Create account →"
          )}
          <BottomGradient />
        </button>
      </form>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <div className="group-hover/btn:opacity-100 opacity-0 transition duration-500 absolute inset-0 w-full h-full bg-[linear-gradient(transparent,transparent,#ffffff20)] pointer-events-none" />
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
