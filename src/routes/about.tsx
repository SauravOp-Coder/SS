import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section, SectionHeading } from "@/components/site/Section";
import { FeatureCard, StatCard } from "@/components/site/Card";
import { Target, Eye, Heart, Users } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — AuraSkill Tech" },
      { name: "description", content: "AuraSkill Tech is an AI studio building automation, custom AI tools, and training the next generation of AI engineers." },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

function About() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="We're building the AI layer for modern business."
        subtitle="AuraSkill Tech is an AI-first technology company combining engineering, design, and applied research to ship intelligent products."
      />
      <Section>
        <div className="grid md:grid-cols-3 gap-5 mb-16">
          <StatCard value="120+" label="Projects Shipped" />
          <StatCard value="35+" label="AI Engineers" />
          <StatCard value="12" label="Countries Served" />
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {[
            { icon: Target, title: "Mission", desc: "Make AI useful for every business — production-grade, transparent, and measurable." },
            { icon: Eye, title: "Vision", desc: "A world where intelligent automation amplifies human work, not replaces it." },
            { icon: Heart, title: "Values", desc: "Craft, honesty, deep work, and obsessive care for the customer." },
          ].map((x, i) => <FeatureCard key={x.title} {...x} index={i} />)}
        </div>
      </Section>
      <Section>
        <SectionHeading eyebrow="Team" title="Senior practitioners. No middle-layer agencies." />
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-5">
          {["Aarav K.", "Sara M.", "Devon W.", "Ishita P."].map((n, i) => (
            <div key={n} className="glass p-6">
              <div className="aspect-square bg-orange-gradient opacity-80 mb-4 glow-soft grid place-items-center">
                <Users className="h-8 w-8 text-primary-foreground" />
              </div>
              <div className="text-sm font-semibold">{n}</div>
              <div className="text-xs text-muted-foreground">{["CEO & AI Lead", "Head of Engineering", "Design Director", "Head of Internships"][i]}</div>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
