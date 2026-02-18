import { Terminal, Github, Linkedin, ExternalLink, Mail, Phone, MapPin } from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-12 pb-20">
      {/* Header */}
      <header className="border-b border-cyber-border pb-8">
        <div className="flex justify-between items-start">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-black tracking-tight">
              KIRAN SR
            </h1>
            <div className="text-accent font-mono text-sm flex flex-wrap gap-x-4">
              <span>Frontend Developer</span>
              <span>•</span>
          <span>MERN Specialist</span>
              <span>•</span>
              <span>MCA @ REVA University</span>
            </div>
            <div className="flex flex-wrap gap-4 text-xs font-mono text-gray-500 uppercase tracking-widest">
              <a href="mailto:skkiran1258@gmail.com"><span className="flex items-center gap-1"><Mail size={12} /> skkiran1258@gmail.com</span></a>
              <a href="tel:+918124785632"><span className="flex items-center gap-1"><Phone size={12} /> +91 81247 85632</span></a>
              <span className="flex items-center gap-1"><MapPin size={12} /> Bengaluru, KA</span>
            </div>
          </div>
          {/* <Link href="/about/detailed" className="hidden md:flex items-center gap-2 px-4 py-2 bg-accent text-black font-black uppercase text-xs hover:bg-white transition-colors">
            Detailed Portfolio<ExternalLink size={14} />
          </Link> */}
        </div>
      </header>

      {/* Terminal Log */}
      <section className="brutalist-card font-mono text-sm overflow-hidden">
        <div className="flex items-center gap-2 mb-4 text-gray-400">
          <Terminal size={16} />
          <span>Profile: kiran_profile_v2.log</span>
        </div>
        <div className="space-y-4">
          <p className="text-accent">
            "I’m a Full-Stack Developer who writes code so complex that even I don't understand it a week later. I build scalable apps that *usually* work on my machine."
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-400">
            <div className="p-3 border border-cyber-border bg-white/5">
              <h3 className="text-xs font-bold uppercase mb-2 text-white">Current Focus</h3>
              <p className="text-xs">MERN Stack, Next.js, and scaling UI performance.</p>
            </div>
            <div className="p-3 border border-cyber-border bg-white/5">
              <h3 className="text-xs font-bold uppercase mb-2 text-white">Education</h3>
              <p className="text-xs">Master of Computer Applications (MCA) - CGPA: 8.2</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 font-mono">
        <div className="space-y-4">
          <h2 className="text-xl font-bold uppercase tracking-wider text-gray-500">Quick Stats</h2>
          <ul className="space-y-4">
            
           <li className="flex gap-3">
              <span className="text-accent">[01]</span>
              <span> Current Project: A Tours Platform (to help people get lost). <a className="italic text-accent" href="https://www.yeshutoursandtravels.com"> Visit Site</a></span>
            </li>
            <li className="flex gap-3">
              <span className="text-accent">[02]</span>
              <span>Learning: How to not delete production databases.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-accent">[03]</span>
              <span>Ask me about: Why 'undefined' is not a function.</span>
            </li>
          </ul>
        </div>
        <div className="space-y-4">
          <h2 className="text-xl font-bold uppercase tracking-wider text-gray-500">Technical Affinity</h2>
          <div className="space-y-6">
            <div className="space-y-2">
             <div className="space-y-6">
  <div className="space-y-2">
    <div className="flex justify-between text-xs font-mono uppercase tracking-widest text-accent">
      <span>Delusion that the code works</span>
      <span>95%</span>
    </div>
    <div className="h-1.5 bg-zinc-900 rounded-full overflow-hidden border border-zinc-800">
      <div className="h-full bg-accent w-[95%] shadow-[0_0_10px_#00ff88]" />
    </div>
  </div>

  <div className="space-y-2">
    <div className="flex justify-between text-xs font-mono uppercase tracking-widest text-zinc-400">
      <span>Asking AI why code is broken</span>
      <span>8%</span>
    </div>
    <div className="h-1.5 bg-zinc-900 rounded-full overflow-hidden border border-zinc-800">
      <div className="h-full bg-white w-[8%]" />
    </div>
  </div>

  <div className="space-y-2">
    <div className="flex justify-between text-xs font-mono uppercase tracking-widest text-zinc-500">
      <span>Actually writing code</span>
      <span>2%</span>
    </div>
    <div className="h-1.5 bg-zinc-900 rounded-full overflow-hidden border border-zinc-800">
      <div className="h-full bg-white/40 w-[2%]" />
    </div>
  </div>
</div>
            </div>
          </div>
        </div>
      </section>

{/* Stack Table */}
      <section className="space-y-6">
        <h2 className="text-2xl font-black uppercase tracking-tighter italic">
          The "Actually Works" Stack
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border border-cyber-border bg-white/5">
                <th className="p-4 text-left font-mono text-gray-500 uppercase text-xs">Category</th>
                <th className="p-4 text-left font-mono text-gray-500 uppercase text-xs">Technologies</th>
                <th className="p-4 text-left font-mono text-gray-500 uppercase text-xs">The Reality</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border border-cyber-border hover:bg-white/5 transition-colors">
                <td className="p-4 font-bold">Frontend</td>
                <td className="p-4 font-mono">React / Next.js</td>
                <td className="p-4 text-sm text-gray-400 italic">Making things pretty so users ignore the bugs.</td>
              </tr>
              <tr className="border border-cyber-border hover:bg-white/5 transition-colors">
                <td className="p-4 font-bold">Backend</td>
                <td className="p-4 font-mono">Node / Supabase</td>
                <td className="p-4 text-sm text-gray-400 italic">Where logic goes to hide from the UI.</td>
              </tr>
              <tr className="border border-cyber-border hover:bg-white/5 transition-colors">
                <td className="p-4 font-bold">Infrastructure</td>
                <td className="p-4 font-mono">Vercel / Docker</td>
                <td className="p-4 text-sm text-gray-400 italic">Restarting containers until the error goes away.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Abstrabit Section */}
      <section className="brutalist-card bg-accent text-black space-y-4">
        <h2 className="text-3xl font-black uppercase tracking-tighter">Why hire me for Abstrabit?</h2>
        <p className="text-lg font-bold">
          "Because I build production-ready UI components that load 25% faster than your average intern's coffee run."
        </p>
        <div className="text-sm font-mono opacity-70">
          Professional Ego: Reduced UI dev time by 30% at Zupper; crushed bugs by 20% at Jozzby Bazar.
        </div>
        </section>
      {/* Featured Projects View Link */}
      <section className="p-8 border-2 border-dashed border-cyber-border flex flex-col items-center gap-6 text-center">
        <h2 className="text-2xl font-black uppercase italic">Technical Deep Dive</h2>
        <p className="font-mono text-gray-400 max-w-lg">
          Explore full-stack e-commerce and tours management platforms in the detailed variant.
        </p>
        <Link href="/about/detailed" className="px-8 py-3 bg-white text-black font-black uppercase tracking-tighter hover:bg-accent transition-colors">
          View Detailed Blueprint
        </Link>
      </section>

      {/* Footer / Socials */}
      <footer className="flex flex-col md:flex-row justify-between items-center gap-6 pt-12 border-t border-cyber-border">
        <div className="flex gap-8">
          <a href="https://github.com/Cipher-Vortex/" target="_blank" className="flex items-center gap-2 hover:text-accent transition-colors font-mono uppercase text-sm">
            <Github size={18} /> GitHub
          </a>
          <a href="https://www.linkedin.com/in/kiran-s-r-774530268/" target="_blank" className="flex items-center gap-2 hover:text-accent transition-colors font-mono uppercase text-sm">
            <Linkedin size={18} /> LinkedIn
          </a>
          <Link href="/" className="flex items-center gap-2 hover:text-accent transition-colors font-mono uppercase text-sm">
            &larr; HOME
          </Link>
        </div>
        <div className="font-mono text-[10px] text-gray-600 uppercase tracking-widest">
          SYS_ID: KIRAN_SR_2025
        </div>
      </footer>
    </div>
  );
}
