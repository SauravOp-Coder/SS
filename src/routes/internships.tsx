import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero, Section, SectionHeading } from "@/components/site/Section";
import { ArrowRight, GraduationCap, Briefcase, Award, Users } from "lucide-react";

export const Route = createFileRoute("/internships")({
  head: () => ({
    meta: [
      { title: "Internships — AuraSkill Tech" },
      { name: "description", content: "Hands-on AI, full-stack, data, and digital marketing internships with mentorship and real-world projects." },
    ],
    links: [{ rel: "canonical", href: "/internships" }],
  }),
  component: Internships,
});

const programs = [
  { title: "AI / ML Internship", duration: "8 weeks", level: "Intermediate", desc: "Build LLM apps, agents, RAG systems, and ship to production." },
  { title: "Full-Stack Development", duration: "8 weeks", level: "Beginner+", desc: "React, Node, databases, and deployment with modern tooling." },
  { title: "Data Analysis", duration: "6 weeks", level: "Beginner", desc: "SQL, Python, dashboards, and storytelling with data." },
  { title: "Digital Marketing AI", duration: "6 weeks", level: "Beginner", desc: "SEO, content engines, and AI-driven growth experiments." },
  { title: "Chatbot Engineering", duration: "6 weeks", level: "Intermediate", desc: "Design, build, and deploy production chatbots." },
  { title: "Business Automation", duration: "6 weeks", level: "Beginner+", desc: "Automate ops with low-code tools and AI." },
];

function Internships() {
  return (
    <>
      <PageHero eyebrow="Internships" title="Train with engineers shipping real AI." subtitle="Structured curriculum, real projects, mentorship, and a certificate that actually means something." />
      <Section>
        <div className="grid md:grid-cols-4 gap-5 mb-16">
          {[
            { icon: GraduationCap, label: "Curriculum", value: "Real projects" },
            { icon: Users, label: "Mentors", value: "1:1 sessions" },
            { icon: Briefcase, label: "Outcomes", value: "Job-ready portfolio" },
            { icon: Award, label: "Certificate", value: "Verified" },
          ].map((s, i) => (
            <div key={i} className="glass p-6">
              <s.icon className="h-5 w-5 text-primary mb-3" />
              <div className="text-xs uppercase tracking-widest text-muted-foreground">{s.label}</div>
              <div className="text-lg font-semibold mt-1">{s.value}</div>
            </div>
          ))}
        </div>

        <SectionHeading eyebrow="Programs" title="Pick the track that fits your goal." />
        <div className="grid md:grid-cols-2 gap-5">
          {programs.map((p) => (
            <div key={p.title} className="glass p-7 group hover:border-primary/40 transition-colors">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-lg font-semibold">{p.title}</h3>
                <span className="text-xs px-2 py-1 bg-surface-2 text-primary">{p.duration}</span>
              </div>
              <p className="text-sm text-muted-foreground mb-5">{p.desc}</p>
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase tracking-widest text-muted-foreground">{p.level}</span>
                <Link to="/contact" className="inline-flex items-center gap-1 text-sm text-primary hover:text-primary-glow">Apply <ArrowRight className="h-3 w-3" /></Link>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
