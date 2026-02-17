import { Terminal, Github, Linkedin, Briefcase, Code, Award, ChevronRight, User, Globe, Shield, Database, Smartphone } from "lucide-react";
import Link from "next/link";

export default function DetailedAboutPage() {
  const experiences = [
    {
      company: "Zupper",
      role: "Frontend Developer Intern",
      period: "Oct 2024 – Mar 2025",
      description: "Built 20+ reusable React components and integrated RESTful APIs, reducing UI development time by 30%.",
      skills: ["React", "REST APIs", "Hooks", "Performance"]
    },
    {
      company: "Jozzby Bazar",
      role: "React Developer Intern",
      period: "Sep 2023 – Jan 2024",
      description: "Developed responsive UI screens and implemented form validation, reducing reported UI bugs by 20%.",
      skills: ["React", "Formik/Yup", "CSS", "Git"]
    }
  ];

  const projects = [
    {
      title: "E-Commerce Multi-Vendor",
      tech: "MERN Stack",
      highlights: "JWT Authentication, Redux Toolkit, Multi-seller support.",
      link: "https://zupper.co",
      linkText: "Visit Zupper",
      icon: <Globe size={20} className="text-accent" />
    },
    {
      title: "Tours & Travels System",
      tech: "MERN Stack",
      highlights: "Role-based access, Pagination, Cloud storage integration.",
      link: "https://www.yeshutoursandtravels.com",
      linkText: "Visit Yeshu Tours & Travels",
      icon: <Smartphone size={20} className="text-accent" />
    }
  ];

  const skills = [
    { name: "JavaScript (ES6+)", level: 92, color: "bg-accent" },
    { name: "React & Next.js", level: 95, color: "bg-white" },
    { name: "Node.js & Express ", level: 80, color: "bg-accent" },
    { name: "MongoDB & Mongoose", level: 85, color: "bg-white/40" },
    { name: "Tailwind CSS", level: 98, color: "bg-accent" }
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-16 pb-24">
      {/* Hero Section */}
      <section className="space-y-6 pt-12">
        <div className="flex items-center gap-4 text-accent font-mono uppercase tracking-[0.3em] text-sm group">
          <User size={16} className="group-hover:rotate-12 transition-transform" />
          <span>Technical Profile</span>
        </div>
        <h1 className="text-6xl md:text-8xl font-black tracking-tighter uppercase italic leading-[0.8]">
          The <span className="text-accent underline decoration-8 underline-offset-8">Blueprint</span>
        </h1>
        <p className="text-xl md:text-2xl font-mono text-gray-400 max-w-2xl border-l-4 border-cyber-border pl-6 py-2">
          Deconstructing the engineer behind the cemetery. A deep dive into my professional artifacts.
        </p>
      </section>

      {/* Experience Timeline */}
      <section className="space-y-8">
        <h2 className="flex items-center gap-3 text-2xl font-black uppercase tracking-tight italic">
          <Briefcase className="text-accent" /> Professional Experience
        </h2>
        <div className="space-y-12 relative before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-[2px] before:bg-cyber-border">
          {experiences.map((exp, idx) => (
            <div key={idx} className="relative pl-12 group">
              <div className="absolute left-0 top-1.5 w-6 h-6 bg-black border-2 border-cyber-border group-hover:border-accent group-hover:bg-accent transition-colors duration-300" />
              <div className="space-y-2 brutalist-card hover:translate-x-2 transition-transform cursor-default">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                  <h3 className="text-xl font-bold uppercase">{exp.role} @ {exp.company}</h3>
                  <span className="text-accent font-mono text-sm">{exp.period}</span>
                </div>
                <p className="text-gray-400 font-mono text-sm italic">{exp.description}</p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {exp.skills.map(skill => (
                    <span key={skill} className="px-2 py-0.5 border border-cyber-border text-[10px] font-mono uppercase text-gray-400 group-hover:text-white group-hover:border-white transition-colors">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Gallery */}
      <section className="space-y-8">
        <h2 className="flex items-center gap-3 text-2xl font-black uppercase tracking-tight italic">
          <Award className="text-accent" /> Project Portfolio
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((proj, idx) => (
            <div key={idx} className="p-6 border border-cyber-border bg-white/5 space-y-4 hover:bg-white/10 transition-colors">
              <div className="flex items-center gap-3">
                {proj.icon}
                <h3 className="text-lg font-bold uppercase tracking-tight">{proj.title}</h3>
              </div>
              <div className="flex justify-between items-center gap-3">
                <p className="text-xs font-mono text-gray-500 uppercase">{proj.tech}</p>
                <a target="_blank" rel="noopener noreferrer" href={proj.link} className="text-xs font-mono text-accent uppercase">{proj.linkText}</a>
              </div>
              <p className="text-sm text-gray-400 italic">"{proj.highlights}"</p>
            </div>
          ))}
        </div>
      </section>

      {/* Skills Matrix */}
      <section className="space-y-8">
        <h2 className="flex items-center gap-3 text-2xl font-black uppercase tracking-tight italic">
          <Code className="text-accent" /> Technical Reality
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
          {skills.map(skill => (
            <div key={skill.name} className="space-y-3">
              <div className="flex justify-between font-mono text-xs uppercase tracking-widest text-gray-500">
                <span>{skill.name}</span>
                <span>{skill.level}%</span>
              </div>
              <div className="h-2 bg-cyber-border relative overflow-hidden">
                <div 
                  className={`h-full ${skill.color} transition-all duration-1000 ease-out`}
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="brutalist-card bg-accent text-black p-8 md:p-12 text-center space-y-6">
        <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter">View the formal document</h2>
        <p className="text-lg font-bold font-mono opacity-80 uppercase italic">
          Standard resume format for the corporate entities.
        </p>
        <Link 
          href="/resume" 
          className="inline-flex items-center gap-2 px-10 py-4 bg-black text-white font-black uppercase tracking-tighter hover:bg-white hover:text-black transition-all group"
        >
          Access Resume <ChevronRight className="group-hover:translate-x-1 transition-transform" />
        </Link>
      </section>

      {/* Footer Navigation */}
      <footer className="flex justify-between items-center font-mono text-sm pt-8 border-t border-cyber-border">
        <Link href="/about" className="text-gray-500 hover:text-white transition-colors uppercase">&larr; Back to Profile</Link>
        <div className="flex gap-4">
          <a href="https://github.com/Cipher-Vortex/" target="_blank" className="hover:text-accent transition-colors"><Github size={18} /></a>
          <a href="https://www.linkedin.com/in/kiran-s-r-774530268/" target="_blank" className="hover:text-accent transition-colors"><Linkedin size={18} /></a>
        </div>
      </footer>
    </div>
  );
}
