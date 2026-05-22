import { Link } from "@tanstack/react-router";
import { Github, Linkedin, Mail, Instagram } from "lucide-react";
import logo from "@/assets/logo.png";

export function Footer() {
  return (
    <footer className="border-t border-border mt-32 bg-surface/50 relative overflow-hidden">
      <div className="absolute left-0 bottom-0 h-80 w-80 bg-orange-gradient opacity-10 blur-3xl" />
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-4 gap-10 relative">
        <div className="md:col-span-1">
          <div className="flex items-center gap-3 mb-4">
            <span className="h-10 w-10 premium-border bg-background/60 grid place-items-center"><img src={logo} alt="AuraSkill Tech" className="h-7 w-7" /></span>
            <span className="font-display font-semibold">AuraSkill <span className="text-gradient-orange">Tech</span></span>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">AI automation, premium websites, custom tools and practical internship programs for modern Indian businesses.</p>
          <a href="mailto:team@auraskilltech.com" className="inline-flex mt-4 text-sm text-primary hover:text-primary-glow">team@auraskilltech.com</a>
        </div>
        <div>
          <h4 className="text-sm font-semibold mb-4">Company</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/about" className="hover:text-foreground">About</Link></li>
            <li><Link to="/projects" className="hover:text-foreground">Projects</Link></li>
            <li><Link to="/internships" className="hover:text-foreground">Internships</Link></li>
            <li><Link to="/contact" className="hover:text-foreground">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold mb-4">Services</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/services" className="hover:text-foreground">Web Development</Link></li>
            <li><Link to="/solutions" className="hover:text-foreground">AI Automation</Link></li>
            <li><Link to="/solutions" className="hover:text-foreground">Chatbots</Link></li>
            <li><Link to="/services" className="hover:text-foreground">Data Dashboards</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold mb-4">Connect</h4>
          <div className="flex gap-3">
            {[Instagram, Linkedin, Github, Mail].map((Icon, i) => (
              <a key={i} href={i === 3 ? "mailto:team@auraskilltech.com" : "#"} className="h-9 w-9 grid place-items-center premium-border bg-background/50 hover:glow-soft transition-shadow" aria-label="social link">
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
          <p className="mt-5 text-xs text-muted-foreground leading-relaxed">Built sharp, responsive and deployment-ready for Vercel / Cloudflare.</p>
        </div>
      </div>
      <div className="border-t border-border relative">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col sm:flex-row justify-between gap-2 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} AuraSkill Tech. All rights reserved.</p>
          <p>Built with intelligence. Designed with intent.</p>
        </div>
      </div>
    </footer>
  );
}
