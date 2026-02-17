import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] text-center space-y-6">
      <h1 className="text-9xl font-black text-accent opacity-20">404</h1>

      <div className="space-y-2">
        <h2 className="text-3xl font-bold uppercase tracking-tighter italic">Found a Dead Link?</h2>
        <p className="font-mono text-gray-400">
          This URL has been buried in the digital cemetery. Maybe it never existed, or it's just socially distancing.
        </p>
      </div>

      <Link
        href="/"
        className="px-8 py-3 bg-white text-black font-black uppercase tracking-tighter hover:bg-accent transition-colors"
      >
        Return to Homepage
      </Link>
    </div>
  );
}
