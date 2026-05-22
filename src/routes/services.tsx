import { PageHero, Section, SectionHeading } from "@/components/site/Section";
import { FeatureCard } from "@/components/site/Card";
import { Code2, Bot, Workflow, BarChart3, Megaphone, GraduationCap, Wrench, MessageSquare } from "lucide-react";

const all = [
  { icon: Code2, title: "Web Development", desc: "High-performance, accessible websites with modern stacks, SEO, and CMS integrations." },
  { icon: Bot, title: "AI Automation", desc: "End-to-end agent and workflow automation using LLMs, tools, and your data." },
  { icon: Workflow, title: "Business Automation", desc: "Automate ops across sales, marketing, finance, and customer support." },
  { icon: BarChart3, title: "Data Analysis", desc: "Dashboards, BI, and predictive modeling. Turn data into decisions." },
  { icon: Megaphone, title: "Digital Marketing", desc: "AI-driven SEO, content, paid, and analytics — designed to compound." },
  { icon: GraduationCap, title: "Internship Training", desc: "Structured AI & dev internships with mentorship and certificates." },
  { icon: Wrench, title: "Custom AI Tools", desc: "Bespoke internal AI tools tailored to your team's exact workflow." },
  { icon: MessageSquare, title: "Chatbot Development", desc: "Conversational AI for support, sales, and internal knowledge." },
];

export default function Services() {
  return (
    <>
      <PageHero eyebrow="Services" title="Premium AI, web and automation services for growing brands." subtitle="Choose one service or build a full digital growth system — website, chatbot, automation, dashboard and marketing flow." />
      <Section>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {all.map((s, i) => <FeatureCard key={s.title} {...s} index={i} />)}
        </div>
      </Section>
      <Section>
        <SectionHeading eyebrow="Engagement" title="Flexible engagement models." />
        <div className="grid md:grid-cols-3 gap-5">
          {[
            { title: "Starter Build", desc: "Landing page, business website or focused automation setup.", price: "From ₹14,999" },
            { title: "Growth System", desc: "Website + chatbot + lead automation + analytics setup.", price: "From ₹49,999" },
            { title: "Custom AI Studio", desc: "Advanced AI tools, dashboards and multi-step automation.", price: "Custom" },
          ].map((p) => (
            <div key={p.title} className="premium-border bg-surface/55 p-7 magnetic-card">
              <div className="text-xs uppercase tracking-widest text-primary mb-3">{p.title}</div>
              <div className="text-2xl font-semibold mb-2">{p.price}</div>
              <p className="text-sm text-muted-foreground">{p.desc}</p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
