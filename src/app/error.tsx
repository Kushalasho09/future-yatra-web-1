"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("App Router Error:", error);
  }, [error]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-slate-50 text-slate-800 font-sans text-center space-y-4">
      <div className="w-12 h-12 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center font-bold text-xl">
        !
      </div>
      <h2 className="text-2xl font-bold text-slate-900">Something went wrong</h2>
      <p className="text-sm text-slate-600 max-w-md">
        An unexpected error occurred. You can try refreshing or clicking below to reset.
      </p>
      <button
        onClick={() => reset()}
        className="px-6 py-2.5 bg-[#0263CC] text-white font-bold text-xs rounded-full shadow hover:bg-[#02A7BB] transition-colors"
      >
        Try again
      </button>
    </div>
  );
}
