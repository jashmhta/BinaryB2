'use client';

import { useEffect, useState } from "react";
import { APP_LOGO } from "@/lib/constants";

export default function Loading() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white dark:bg-black transition-colors duration-300">
      <div className="text-center">
        {/* Logo */}
        <div className="mb-8 animate-pulse">
          <img 
            src={APP_LOGO} 
            alt="Binary Bonds Loading" 
            className="h-24 w-24 mx-auto"
          />
        </div>

        {/* Spinner */}
        <div className="relative w-16 h-16 mx-auto">
          <div className="absolute inset-0 border-4 border-gray-200 dark:border-gray-700 rounded-full"></div>
          <div className="absolute inset-0 border-4 border-[hsl(var(--golden))] rounded-full border-t-transparent animate-spin"></div>
        </div>

        {/* Loading Text */}
        <p className="mt-6 text-[hsl(var(--navy))] dark:text-white font-medium">
          Loading Binary Bonds...
        </p>
      </div>
    </div>
  );
}
