import { useState, useEffect } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Sparkles, Bot, Code2, GraduationCap, BarChart3, MessageSquare, Workflow } from "lucide-react";
import logo from "@/assets/logo.png";
import { ThemeToggle } from "./ThemeToggle";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "Company" },
  { to: "/services", label: "Services", mega: "services" },
  { to: "/solutions", label: "AI Studio", mega: "solutions" },
  { to: "/internships", label: "Internships" },
  { to: "/projects", label: "Work" },
  { to: "/contact", label: "Contact" },
];

const megaItems = {
  services: [
    { icon: Code2, title: "Web Development", desc: "Premium websites, landing pages, SEO-ready builds", to: "/services" },
    { icon: Bot, title: "AI Automation", desc: "Agents, RAG, lead workflows and internal tools", to: "/solutions" },
    { icon: Workflow, title: "Business Automation", desc: "Operations, sales and support systems", to: "/services" },
    { icon: BarChart3, title: "Data + Dashboards", desc: "Analytics dashboards and business insights", to: "/services" },
  ],
  solutions: [
    { icon: Sparkles, title: "AI Transformation", desc: "Strategy, roadmap, MVP and launch support", to: "/solutions" },
    { icon: MessageSquare, title: "Chatbot Systems", desc: "Website, WhatsApp and knowledge-base bots", to: "/solutions" },
    { icon: GraduationCap, title: "Training Programs", desc: "Internship tracks with project-based learning", to: "/internships" },
    { icon: Bot, title: "Custom AI Tools", desc: "Private AI tools for your exact workflow", to: "/solutions" },
  ],
};

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState<string | null>(null);
  const { location } = useRouterState();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); setMegaOpen(null); }, [location.pathname]);

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled ? "bg-background/86 backdrop-blur-2xl border-b border-border shadow-[0_18px_80px_rgba(0,0,0,.14)]" : "bg-background/35 backdrop-blur-md"}`}>
      <nav className="max-w-7xl mx-auto px-5 sm:px-6 h-[74px] flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <span className="relative h-10 w-10 grid place-items-center premium-border bg-surface/70">
            <img src={logo} alt="AuraSkill Tech" className="h-7 w-7 object-contain" />
            <span className="absolute -inset-px border border-primary/25 opacity-0 group-hover:opacity-100 transition-opacity" />
          </span>
          <span className="leading-none">
            <span className="block font-display font-semibold tracking-tight text-[15px]">AuraSkill <span className="text-gradient-orange">Tech</span></span>
            <span className="block text-[10px] uppercase tracking-[0.28em] text-muted-foreground mt-1">AI Systems Studio</span>
          </span>
        </Link>

        <ul className="hidden lg:flex items-center gap-1 border border-border bg-surface/35 px-2 py-1 backdrop-blur-xl">
          {nav.map((item) => (
            <li key={item.to} className="relative" onMouseEnter={() => item.mega && setMegaOpen(item.mega)} onMouseLeave={() => item.mega && setMegaOpen(null)}>
              <Link
                to={item.to}
                className="px-3 py-2.5 text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1"
                activeProps={{ className: "px-3 py-2.5 text-sm text-foreground inline-flex items-center gap-1 bg-surface-2" }}
                activeOptions={{ exact: item.to === "/" }}
              >
                {item.label}
                {item.mega && <ChevronDown className="h-3.5 w-3.5" />}
              </Link>
              {item.mega && (
                <AnimatePresence>
                  {megaOpen === item.mega && (
                    <motion.div initial={{ opacity: 0, y: 12, scale: .98 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 8, scale: .98 }} transition={{ duration: 0.18 }} className="absolute left-1/2 -translate-x-1/2 top-full pt-4 w-[760px]">
                      <div className="premium-border bg-background/92 backdrop-blur-2xl p-4 shadow-2xl">
                        <div className="grid grid-cols-[1.05fr_1fr] gap-4">
                          <div className="aura-frame scanline bg-surface/70 p-5 min-h-[220px] flex flex-col justify-between">
                            <div>
                              <p className="text-xs uppercase tracking-[0.28em] text-primary">AuraSkill Lab</p>
                              <h3 className="mt-3 text-2xl font-semibold leading-tight">Build, automate and scale with AI-first systems.</h3>
                            </div>
                            <Link to="/contact" className="relative z-10 inline-flex w-fit items-center gap-2 bg-orange-gradient px-4 py-2.5 text-sm font-medium text-primary-foreground glow-soft">Start a build <Sparkles className="h-4 w-4" /></Link>
                          </div>
                          <div className="grid grid-cols-2 gap-2">
                            {megaItems[item.mega as keyof typeof megaItems].map(({ icon: Icon, ...s }) => (
                              <Link key={s.title} to={s.to} className="group p-4 bg-surface/50 border border-border hover:border-primary/45 hover:bg-surface-2 transition-all block">
                                <div className="flex items-center gap-2">
                                  <span className="h-8 w-8 grid place-items-center bg-orange-gradient text-primary-foreground"><Icon className="h-4 w-4" /></span>
                                  <span className="font-medium text-sm">{s.title}</span>
                                </div>
                                <p className="text-xs text-muted-foreground mt-2 leading-relaxed">{s.desc}</p>
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              )}
            </li>
          ))}
        </ul>

        <div className="hidden lg:flex items-center gap-3">
          <ThemeToggle />
          <Link to="/contact" className="bg-orange-gradient text-primary-foreground px-5 py-3 text-sm font-medium glow-soft hover:glow-orange transition-shadow inline-block">Start Project</Link>
        </div>

        <div className="lg:hidden flex items-center gap-2">
          <ThemeToggle />
          <button className="p-2 text-foreground border border-border bg-surface/60" onClick={() => setOpen(!open)} aria-label="Menu">
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="lg:hidden border-t border-border bg-background/96 backdrop-blur-xl overflow-hidden">
            <div className="px-6 py-5 flex flex-col gap-1">
              {nav.map((item) => (
                <Link key={item.to} to={item.to} className="py-3 px-3 text-sm text-muted-foreground hover:text-foreground hover:bg-surface" activeProps={{ className: "py-3 px-3 text-sm text-foreground bg-surface" }} activeOptions={{ exact: item.to === "/" }}>{item.label}</Link>
              ))}
              <Link to="/contact" className="bg-orange-gradient text-primary-foreground px-5 py-3 text-sm font-medium mt-3 text-center">Start Project</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
