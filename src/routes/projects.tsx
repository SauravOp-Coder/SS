import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { PageHero, Section } from "@/components/site/Section";
import { ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — AuraSkill Tech" },
      { name: "description", content: "Selected AI, automation, and product engineering projects shipped by AuraSkill Tech." },
    ],
    links: [{ rel: "canonical", href: "/projects" }],
  }),
  component: Projects,
});

const projects = [
  { name: "NeuralFlow", tag: "AI Automation", desc: "Multi-agent platform automating ops for a fintech." },
  { name: "DataPulse", tag: "Analytics", desc: "Realtime BI dashboards with anomaly detection." },
  { name: "AuraChat", tag: "Chatbot", desc: "Enterprise support bot handling 70% of inbound." },
  { name: "Lumen RAG", tag: "RAG System", desc: "Private knowledge AI for a legal team." },
  { name: "FinEdge AI", tag: "Custom LLM", desc: "Fine-tuned model for financial analyst workflows." },
  { name: "GrowthOS", tag: "Marketing AI", desc: "AI growth engine for D2C brands." },
];

function Projects() {
  return (
    <>
      <PageHero eyebrow="Projects" title="Selected work. Real outcomes." subtitle="A handful of engagements that show how we work and what we ship." />
      <Section>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((p, i) => (
            <motion.a
              key={p.name}
              href="#"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group relative aspect-[4/5] glass overflow-hidden block"
            >
              <div className="absolute inset-0 bg-orange-gradient opacity-10 group-hover:opacity-25 transition-opacity" />
              <div className="absolute inset-0 grid-pattern opacity-30" />
              <div className="absolute top-5 right-5 h-9 w-9 grid place-items-center glass opacity-0 group-hover:opacity-100 transition-opacity">
                <ArrowUpRight className="h-4 w-4 text-primary" />
              </div>
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <div className="text-xs uppercase tracking-widest text-primary mb-2">{p.tag}</div>
                <div className="text-2xl font-semibold mb-2">{p.name}</div>
                <p className="text-sm text-muted-foreground">{p.desc}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </Section>
    </>
  );
}
