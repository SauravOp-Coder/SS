import { Link } from "@/static-router";
import { motion } from "framer-motion";
import { ArrowRight, Bot, Code2, BarChart3, Megaphone, GraduationCap, Wrench, MessageSquare, Workflow, CheckCircle2, Sparkles, Zap, Shield, Layers, Target, Cpu, Globe2 } from "lucide-react";
import { Spline3D } from "@/components/site/Spline3D";
import { Section, SectionHeading } from "@/components/site/Section";
import { FeatureCard, StatCard } from "@/components/site/Card";
import { FloatingCube, NeuralNetwork, HoloPanel } from "@/components/site/Three";

const services = [
  { icon: Code2, title: "Premium Web Development", desc: "Modern websites, landing pages and product UIs with strong SEO, speed and conversion focus." },
  { icon: Bot, title: "AI Automation Systems", desc: "Lead capture, support, reporting and internal workflows powered by AI agents." },
  { icon: Workflow, title: "Business Process Automation", desc: "Connect forms, sheets, WhatsApp, emails, CRMs and dashboards into one clean flow." },
  { icon: BarChart3, title: "Data Dashboards", desc: "Turn Excel, sales and operational data into clear visual business intelligence." },
  { icon: Megaphone, title: "AI Digital Marketing", desc: "SEO, content systems, campaigns and analytics workflows designed to generate leads." },
  { icon: GraduationCap, title: "Project-Based Internships", desc: "Practical AI, web development, data and marketing tracks with real deliverables." },
  { icon: Wrench, title: "Custom AI Tools", desc: "Private AI tools for your exact company workflow, team and customer journey." },
  { icon: MessageSquare, title: "Chatbot Development", desc: "Website and WhatsApp chatbots for support, admissions, sales and internal knowledge." },
];

const outcomes = ["More qualified leads", "Lower manual workload", "Premium digital presence", "Faster operations", "Better customer response", "Internship-ready talent pipeline"];

export default function Home() {
  return (
    <>
      <section className="relative min-h-[calc(100vh-74px)] overflow-hidden bg-hero noise">
        <div className="absolute inset-0 grid-pattern opacity-45" />
        <div className="absolute left-0 top-20 h-96 w-96 bg-primary/5 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-[34rem] w-[34rem] bg-primary/4 blur-3xl" />
        <div className="max-w-7xl mx-auto px-6 pt-24 pb-20 relative">
          <div className="grid lg:grid-cols-[1.02fr_.98fr] gap-12 items-center">
            <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <div className="inline-flex items-center gap-2 px-3 py-1 premium-border bg-surface/70 text-xs uppercase tracking-[0.28em] text-primary mb-6">
                <Sparkles className="h-3.5 w-3.5" /> AI Systems Studio for India’s next-gen businesses
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold leading-[0.98] tracking-tight">
                Build a premium brand with <span className="text-gradient-orange">AI, automation & 3D web</span> experiences.
              </h1>
              <p className="mt-6 text-lg text-muted-foreground max-w-2xl leading-relaxed">
                AuraSkill Tech creates high-converting websites, AI automation workflows, chatbots, dashboards and internship programs for businesses that want a serious digital presence.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link to="/contact" className="inline-flex items-center gap-2 bg-orange-gradient text-primary-foreground px-6 py-3 text-sm font-medium glow-soft hover:glow-orange transition-shadow">
                  Start Your Project <ArrowRight className="h-4 w-4" />
                </Link>
                <Link to="/services" className="inline-flex items-center gap-2 border border-border bg-surface/50 px-6 py-3 text-sm font-medium hover:bg-surface transition-colors">
                  Explore Services
                </Link>
              </div>
              <div className="mt-12 grid grid-cols-3 gap-3 max-w-xl">
                <StatCard value="3D" label="Web Experience" />
                <StatCard value="AI" label="Automation First" />
                <StatCard value="0px" label="Sharp UI Radius" />
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.92 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: .12 }}>
              <div className="relative min-h-[520px] flex items-center justify-center overflow-visible hero-model-wrap">
                <Spline3D />
                <div className="pointer-events-none absolute left-1/2 bottom-10 h-10 w-[58%] -translate-x-1/2 bg-black/20 blur-2xl" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Section>
        <div className="grid lg:grid-cols-[.8fr_1.2fr] gap-10 items-start">
          <SectionHeading eyebrow="Signature Stack" title="A complete AI + web growth stack in one studio." subtitle="Instead of only designing pages, AuraSkill Tech builds systems: website, lead flow, automation, AI assistant, dashboard and ongoing growth." />
          <div className="grid sm:grid-cols-2 gap-4">
            {outcomes.map((o, i) => (
              <motion.div key={o} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * .04 }} className="premium-border bg-surface/55 p-5 magnetic-card">
                <CheckCircle2 className="h-5 w-5 text-primary mb-4" />
                <div className="font-semibold">{o}</div>
                <p className="mt-2 text-sm text-muted-foreground">Designed with clean execution, measurable outcomes and a premium brand feel.</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="Services" title="Everything needed to launch intelligent digital experiences." subtitle="From idea to live deployment, every service is shaped for speed, trust and business results." center />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((s, i) => <FeatureCard key={s.title} {...s} index={i} />)}
        </div>
      </Section>

      <Section>
        <div className="grid lg:grid-cols-[1fr_.9fr] gap-8 items-center">
          <div className="premium-border bg-surface/50 p-8 md:p-10 aura-frame">
            <SectionHeading eyebrow="3D Experience" title="A website that feels alive, not flat." subtitle="Interactive 3D visuals, layered cards, motion, orange glow and sharp corporate spacing make the brand feel more memorable than a normal template." />
            <div className="grid sm:grid-cols-3 gap-3">
              {[{ icon: Target, label: "Conversion UI" }, { icon: Cpu, label: "AI Identity" }, { icon: Globe2, label: "Global Feel" }].map(({ icon: Icon, label }) => (
                <div key={label} className="bg-background/55 border border-border p-4">
                  <Icon className="h-5 w-5 text-primary mb-3" />
                  <div className="text-sm font-semibold">{label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="grid gap-5">
            <div className="glass p-8 magnetic-card"><FloatingCube /><div className="text-center mt-3 text-sm font-semibold">Modular 3D System</div></div>
            <div className="glass p-8 magnetic-card"><HoloPanel /><div className="text-center mt-3 text-sm font-semibold">Layered Premium UI</div></div>
          </div>
        </div>
      </Section>

      <section className="relative border-y border-border">
        <div className="absolute inset-0 bg-orange-gradient opacity-[0.045]" />
        <Section className="relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading eyebrow="AI Automation" title="Automations that connect directly to your business workflow." subtitle="Build AI systems for lead qualification, customer replies, document handling, reporting and decision support." />
              <div className="space-y-3">
                {["Website to WhatsApp lead flow", "AI chatbot with company knowledge", "CRM / Google Sheet automation", "Dashboards with weekly insight reports"].map((t) => (
                  <div key={t} className="flex items-center gap-3 text-sm bg-surface/45 border border-border p-3">
                    <CheckCircle2 className="h-4 w-4 text-primary" /> {t}
                  </div>
                ))}
              </div>
              <Link to="/solutions" className="inline-flex items-center gap-2 mt-8 text-sm text-primary hover:text-primary-glow">
                View AI Solutions <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="premium-border bg-background/50 p-6 scanline">
              <NeuralNetwork />
            </div>
          </div>
        </Section>
      </section>

      <Section>
        <div className="premium-border bg-surface/55 p-10 md:p-14 relative overflow-hidden">
          <div className="absolute -right-20 -top-20 h-72 w-72 bg-orange-gradient opacity-20 blur-3xl rounded-full" />
          <div className="relative grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <SectionHeading eyebrow="Internships" title="Train students on real projects, not only theory." subtitle="Practical internship tracks for AI, web development, data analysis and digital marketing with portfolio-ready outcomes." />
              <Link to="/internships" className="inline-flex items-center gap-2 bg-orange-gradient text-primary-foreground px-6 py-3 text-sm font-medium glow-soft">
                View Internship Tracks <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="space-y-3">
              {["AI / ML Internship", "Full-Stack Development", "Data Analysis", "Digital Marketing AI"].map((p) => (
                <Link key={p} to="/internships" className="flex items-center justify-between p-4 bg-background/55 border border-border hover:border-primary/45 transition-colors">
                  <div className="text-sm font-semibold">{p}</div>
                  <ArrowRight className="h-4 w-4 text-primary" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="Process" title="From first call to live launch." center />
        <div className="grid md:grid-cols-4 gap-5">
          {[
            { n: "01", title: "Discover", desc: "Understand your brand, target customers and business goal." },
            { n: "02", title: "Design", desc: "Create premium UI, page flow, content and AI workflow map." },
            { n: "03", title: "Build", desc: "Develop responsive website, automation and integrations." },
            { n: "04", title: "Launch", desc: "Deploy, test, optimize and prepare your growth pipeline." },
          ].map((s, i) => (
            <motion.div key={s.n} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="p-7 premium-border bg-surface/55 magnetic-card relative">
              <div className="section-number text-5xl font-semibold mb-5">{s.n}</div>
              <h3 className="text-lg font-semibold mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </Section>
    </>
  );
}
