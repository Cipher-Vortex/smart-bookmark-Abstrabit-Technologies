'use client';

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] text-center space-y-6">
      <h1 className="text-6xl font-black text-red-500 uppercase">System Failure</h1>
      <div className="space-y-2">
        <h2 className="text-2xl font-mono text-gray-400 italic">Error Code: {error.digest || 'UNKNOWN_ANOMALY'}</h2>
        <p className="font-mono text-gray-400 max-w-md mx-auto">
          The cemetery's containment system has been breached. Our digital gravediggers are looking into it.
        </p>
      </div>
      <button
        onClick={() => reset()}
        className="px-8 py-3 border border-red-500 text-red-500 font-bold uppercase tracking-tighter hover:bg-red-500 hover:text-white transition-colors"
      >
        Attempt Stabilization
      </button>
    </div>
  );
}
