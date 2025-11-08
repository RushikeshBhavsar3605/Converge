"use client";

import { useRouter } from "next/navigation";

export default function HomePage() {
  const router = useRouter();

  const handleSignIn = () => {
    router.push("/setup");
  };

  const handleSignUp = () => {
    router.push("/setup");
  };

  return (
    <div className="min-h-screen bg-white dark:bg-[#313338] flex items-center justify-center">
      <div className="text-center space-y-6">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
          Welcome to Converge
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Connect and chat with your community
        </p>
        <div className="flex gap-4 justify-center">
          <button
            onClick={handleSignIn}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Sign In
          </button>
          <button
            onClick={handleSignUp}
            className="px-6 py-3 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
}
