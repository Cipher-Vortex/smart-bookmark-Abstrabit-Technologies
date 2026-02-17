import Link from "next/link";
import LoginButton from "@/components/LoginButton";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] text-center space-y-8">
      <div className="space-y-4 items-center">
        <h1 className="text-6xl md:text-8xl font-black tracking-tighter uppercase italic">
          The <span className="text-accent underline decoration-4 underline-offset-8">Link Cemetery</span>
        </h1>
        <p className="text-xl md:text-xl font-mono text-gray-400 max-w-2xl">
          A digital artifact cemetery for the links you'll never actually visit.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-4">
        <LoginButton />
        <Link href="/about" className="px-6 py-2 border border-cyber-border hover:bg-white/5 transition-colors text-lg font-mono flex items-center gap-2">
          MEET THE DEVELOPER
        </Link>
      </div>

      <div className="absolute bottom-8 left-8 text-xs font-mono text-gray-600 uppercase tracking-widest">
        Ver: 0.1.0-alpha (Bug or Feature?)
      </div>
    </div>
  );
}
