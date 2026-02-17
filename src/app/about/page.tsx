import { Terminal, Github, Linkedin, ExternalLink } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-12 pb-20">
      {/* Header */}
      <header className="border-b border-cyber-border pb-8">
        <h1 className="text-4xl md:text-6xl font-black tracking-tight">
          KIRAN SR
        </h1>
        <div className="text-accent font-mono mt-2 flex flex-wrap gap-x-4">
          <span>Full Stack Engineer</span>
          <span>•</span>
          <span>MERN Specialist</span>
          <span>•</span>
          <span>Professional Div-Centerer</span>
        </div>
      </header>

      {/* Terminal Log */}
      <section className="brutalist-card font-mono text-sm overflow-hidden">
        <div className="flex items-center gap-2 mb-4 text-gray-400">
          <Terminal size={16} />
          <span>🧊 Log: /var/log/kiran.log</span>
        </div>
        <div className="space-y-2">
          <p className="text-accent">
            "I’m a Full-Stack Developer who writes code so complex that even I don't understand it a week later. I build scalable apps that *usually* work on my machine."
          </p>
        </div>
      </section>

      {/* Stats Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 font-mono">
        <div className="space-y-4">
          <h2 className="text-xl font-bold uppercase tracking-wider text-gray-500">Quick Stats</h2>
          <ul className="space-y-2">
            <li><span className="text-accent">🔭</span> Current Project: A Tours Platform (to help people get lost).</li>
            <li><span className="text-accent">🌱</span> Learning: How to not delete production databases.</li>
            <li><span className="text-accent">💬</span> Ask me about: Why 'undefined' is not a function.</li>
          </ul>
        </div>
        <div className="space-y-4">
          <h2 className="text-xl font-bold uppercase tracking-wider text-gray-500">The Reality Check</h2>
          <div className="space-y-6">
            <div className="space-y-2">
              <div className="flex justify-between text-xs">
                <span>Naming a single variable</span>
                <span>90%</span>
              </div>
              <div className="h-1 bg-cyber-border">
                <div className="h-full bg-accent w-[90%]" />
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-xs">
                <span>Asking AI why code is broken</span>
                <span>8%</span>
              </div>
              <div className="h-1 bg-cyber-border">
                <div className="h-full bg-white w-[8%]" />
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-xs">
                <span>Actually writing code</span>
                <span>2%</span>
              </div>
              <div className="h-1 bg-cyber-border">
                <div className="h-full bg-white/20 w-[2%]" />
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

      {/* Footer / Socials */}
      <footer className="flex flex-col md:flex-row justify-between items-center gap-6 pt-12 border-t border-cyber-border">
        <div className="flex gap-4">
          <a href="https://github.com/skkiran1258" target="_blank" className="flex items-center gap-2 hover:text-accent transition-colors font-mono uppercase text-sm">
            <Github size={18} /> GitHub
          </a>
          <a href="https://linkedin.com" target="_blank" className="flex items-center gap-2 hover:text-accent transition-colors font-mono uppercase text-sm">
            <Linkedin size={18} /> LinkedIn
          </a>
        </div>
        <div className="font-mono text-xs text-gray-600 italic">
          Commit Message: 'fixed stuff (again)'
        </div>
      </footer>
    </div>
  );
}
