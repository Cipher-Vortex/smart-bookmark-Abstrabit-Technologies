import Link from "next/link";
import LoginButton from "@/components/LoginButton";

export default function Home() {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-[85vh] w-full px-4 text-center">
      
      <div className="flex flex-col items-center space-y-6 mb-12">
        <h1 className="text-6xl md:text-8xl font-black tracking-tighter uppercase italic leading-none">
          The <span className="text-accent underline decoration-4 underline-offset-8 block md:inline">Link Cemetery</span>
        </h1>
        
        <p className="text-lg md:text-xl font-mono text-zinc-500 max-w-2xl mx-auto leading-relaxed">
          A digital artifact cemetery for the links you'll never actually visit. 
          <span className="block mt-2 text-xs opacity-50 italic font-normal tracking-normal">
            (Where productivity goes to rest in peace)
          </span>
        </p>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full mx-auto">
        <div className="w-full sm:w-auto flex justify-center">
          <LoginButton />
        </div>
        
        <Link 
          href="/about" 
          className="w-full sm:w-auto px-8 py-3 border border-zinc-800 hover:border-accent hover:bg-white/5 transition-all text-sm font-mono flex items-center justify-center gap-2 uppercase tracking-widest"
        >
          MEET THE ARCHITECT
        </Link>
      </div>

      {/* Footer Decal */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 md:left-8 md:translate-x-0 text-[10px] font-mono text-zinc-700 uppercase tracking-[0.3em]">
        Ver: 0.1.0-alpha (Usually works on my machine)
      </div>
    </div>
  );
}