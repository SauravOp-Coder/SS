import { useState } from "react";
import { motion } from "framer-motion";
import { PageHero, Section } from "@/components/site/Section";
import { Mail, MapPin, Phone, Send, MessageCircle } from "lucide-react";

export default function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <>
      <PageHero eyebrow="Contact" title="Let’s build your next intelligent digital system." subtitle="Share your project idea, internship inquiry or business requirement. AuraSkill Tech will help you turn it into a clean execution plan." />
      <Section>
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="space-y-4">
            {[
              { icon: Mail, label: "Email", value: "team@auraskilltech.com" },
              { icon: Phone, label: "Phone", value: "Add your business number" },
              { icon: MessageCircle, label: "WhatsApp", value: "Connect for project discussion" },
              { icon: MapPin, label: "Base", value: "India · Remote-first" },
            ].map((c, i) => (
              <div key={i} className="premium-border bg-surface/55 p-6 flex gap-4 magnetic-card">
                <div className="h-10 w-10 grid place-items-center bg-orange-gradient text-primary-foreground glow-soft">
                  <c.icon className="h-4 w-4" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">{c.label}</div>
                  <div className="text-sm font-medium mt-1">{c.value}</div>
                </div>
              </div>
            ))}
          </div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            onSubmit={(e) => { e.preventDefault(); setSent(true); }}
            className="lg:col-span-2 premium-border bg-surface/55 p-8 space-y-5 scanline"
          >
            <div className="grid md:grid-cols-2 gap-5">
              <Field label="Name" name="name" placeholder="Your name" />
              <Field label="Email" name="email" type="email" placeholder="you@company.com" />
            </div>
            <Field label="Company / College" name="company" placeholder="Company, startup or college name" />
            <div>
              <label className="text-xs uppercase tracking-widest text-muted-foreground">Service</label>
              <select className="mt-2 w-full bg-background/65 border border-border px-4 py-3 text-sm focus:outline-none focus:border-primary">
                {["AI Automation","Website Development","Custom AI Tools","Chatbot Development","Data Dashboard","Digital Marketing","Internship Inquiry","Other"].map(o => <option key={o}>{o}</option>)}
              </select>
            </div>
            <div>
              <label className="text-xs uppercase tracking-widest text-muted-foreground">Message</label>
              <textarea rows={5} placeholder="Tell us about your goal..." className="mt-2 w-full bg-background/65 border border-border px-4 py-3 text-sm focus:outline-none focus:border-primary resize-none" />
            </div>
            <button type="submit" className="inline-flex items-center gap-2 bg-orange-gradient text-primary-foreground px-6 py-3 text-sm font-medium glow-soft hover:glow-orange transition-shadow">
              {sent ? "Message ready ✓" : <>Send message <Send className="h-4 w-4" /></>}
            </button>
            {sent && <p className="text-sm text-muted-foreground">Connect this form to Formspree, EmailJS or your backend to receive messages live.</p>}
          </motion.form>
        </div>
      </Section>
    </>
  );
}

function Field({ label, name, type = "text", placeholder }: { label: string; name: string; type?: string; placeholder?: string }) {
  return (
    <div>
      <label htmlFor={name} className="text-xs uppercase tracking-widest text-muted-foreground">{label}</label>
      <input id={name} name={name} type={type} placeholder={placeholder} className="mt-2 w-full bg-background/65 border border-border px-4 py-3 text-sm focus:outline-none focus:border-primary" />
    </div>
  );
}
