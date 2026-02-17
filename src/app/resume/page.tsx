'use client';

import { FileText, Download, ArrowLeft, ExternalLink, Printer, Mail, Phone, MapPin, Globe, Linkedin, Github, Shield } from "lucide-react";
import Link from "next/link";

export default function ResumePage() {
  const resumeUrl = "/resume.pdf";

  return (
    <div className="max-w-5xl mx-auto space-y-8 pb-20">
      {/* Navigation & Actions */}
      <nav className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-cyber-border pb-6">
        <Link 
          href="/about/detailed" 
          className="flex items-center gap-2 text-gray-500 hover:text-accent transition-colors font-mono uppercase text-sm group"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> Back to Profile
        </Link>
        
        <div className="flex flex-wrap gap-3">
          <a 
            href={resumeUrl}
            download
            className="flex items-center gap-2 px-4 py-2 bg-accent text-black font-bold uppercase text-xs hover:bg-white transition-colors"
          >
            <Download size={16} /> Download PDF
          </a>
          <button 
            onClick={() => window.print()}
            className="flex items-center gap-2 px-4 py-2 border border-cyber-border text-gray-400 font-bold uppercase text-xs hover:border-white hover:text-white transition-colors"
          >
            <Printer size={16} /> Print Profile
          </button>
        </div>
      </nav>

      {/* Main Content Area */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Quick Summary / Meta */}
        <div className="space-y-6">
          <div className="brutalist-card space-y-4">
            <h2 className="text-xl font-black uppercase tracking-tighter italic flex items-center gap-2">
              <Shield size={20} className="text-accent" /> Profile Summary
            </h2>
            <div className="space-y-3 font-mono text-sm">
              <div className="flex justify-between border-b border-cyber-border pb-1">
                <span className="text-gray-500">Name:</span>
                <span>KIRAN SR</span>
              </div>
              <div className="flex justify-between border-b border-cyber-border pb-1">
                <span className="text-gray-500">Role:</span>
                <span className="text-accent">Frontend Dev</span>
              </div>
              <div className="flex justify-between border-b border-cyber-border pb-1">
                <span className="text-gray-500">Location:</span>
                <span>Bengaluru, IN</span>
              </div>
            </div>
          </div>

          <div className="p-6 border border-cyber-border space-y-6 bg-white/5">
            <div className="space-y-2">
              <h3 className="font-bold uppercase text-xs tracking-[0.2em] text-gray-500">Professional Summary</h3>
              <p className="text-sm font-mono text-gray-400 italic leading-relaxed">
                "Frontend Developer with hands-on experience building scalable, responsive web applications using React, JavaScript, and REST APIs."
              </p>
            </div>
            
            <div className="space-y-3 pt-4 border-t border-cyber-border">
              <h3 className="font-bold uppercase text-xs tracking-[0.2em] text-gray-500">Contact Channels</h3>
              <div className="space-y-2 text-xs font-mono">
                <div className="flex items-center gap-2 hover:text-accent transition-colors">
                  <Mail size={14} className="text-accent" /> skkiran1258@gmail.com
                </div>
                <div className="flex items-center gap-2">
                  <Phone size={14} className="text-accent" /> +91 81247 85632
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* High-Fidelity Web Resume Preview */}
        <div className="lg:col-span-2 space-y-6">
          <div className="w-full bg-white text-black p-8 md:p-12 shadow-[12px_12px_0px_0px_#ff4d4d] border-2 border-black min-h-[800px] font-sans selection:bg-accent selection:text-white">
            <div className="flex flex-col md:flex-row justify-between items-baseline border-b-4 border-black pb-4 mb-8">
              <h1 className="text-5xl font-black uppercase tracking-tighter">KIRAN SR</h1>
              <div className="text-right font-bold text-xs uppercase tracking-widest mt-2 md:mt-0">
                Frontend Developer • Bengaluru, KA
              </div>
            </div>

            <div className="grid grid-cols-1 gap-10">
              {/* Experience */}
              <section className="space-y-4">
                <h2 className="text-lg font-black uppercase border-b-2 border-black inline-block">Professional Experience</h2>
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between items-baseline mb-1">
                      <h3 className="font-black uppercase">Zupper</h3>
                      <span className="text-xs font-bold">Oct 2024 – Mar 2025</span>
                    </div>
                    <p className="text-xs font-bold italic mb-2">Frontend Developer Intern</p>
                    <ul className="text-xs space-y-1 list-disc pl-4">
                      <li>Built 20+ reusable React components, reducing UI development time by 30%.</li>
                      <li>Optimized component re-renders using hooks, improving performance by 25%.</li>
                      <li>Integrated RESTful APIs for products and users, improving data consistency.</li>
                    </ul>
                  </div>
                  <div>
                    <div className="flex justify-between items-baseline mb-1">
                      <h3 className="font-black uppercase">Jozzby Bazar</h3>
                      <span className="text-xs font-bold">Sep 2023 – Jan 2024</span>
                    </div>
                    <p className="text-xs font-bold italic mb-2">React Developer Intern</p>
                    <ul className="text-xs space-y-1 list-disc pl-4">
                      <li>Developed responsive UI screens using React and modern CSS.</li>
                      <li>Implemented form validation, reducing onboarding errors significantly.</li>
                      <li>Assisted in debugging API and UI issues, reducing UI bugs by 20%.</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Education & Skills */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <section className="space-y-4">
                  <h2 className="text-lg font-black uppercase border-b-2 border-black inline-block">Education</h2>
                  <div>
                    <h3 className="font-black uppercase text-sm">REVA University</h3>
                    <p className="text-xs font-bold">Master of Computer Applications (MCA)</p>
                    <p className="text-xs mt-1 italic">Graduation: 2025 | CGPA: 8.2</p>
                  </div>
                </section>
                <section className="space-y-4">
                  <h2 className="text-lg font-black uppercase border-b-2 border-black inline-block">Technical Skills</h2>
                  <div className="text-xs space-y-1">
                    <p><span className="font-black">Frontend:</span> React, Next.js, Tailwind, JavaScript</p>
                    <p><span className="font-black">Backend:</span> Node.js, Express, MongoDB</p>
                    <p><span className="font-black">Tools:</span> Git, GitHub, Postman, Vercel</p>
                  </div>
                </section>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t-2 border-black flex justify-center gap-6 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all">
              <Github size={20} />
              <Linkedin size={20} />
              <Globe size={20} />
            </div>
          </div>
          
          <p className="text-[10px] font-mono text-gray-600 uppercase text-center tracking-widest animate-pulse">
            LIVE WEB PREVIEW ACTIVE // PDF VERSION AVAILABLE VIA DOWNLOAD
          </p>
        </div>
      </div>
    </div>
  );
}
