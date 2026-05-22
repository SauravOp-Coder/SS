import { PageHero, Section, SectionHeading } from "@/components/site/Section";
import { FeatureCard } from "@/components/site/Card";
import { Bot, Brain, Network, Database, Shield, Sparkles, MessageSquare, Workflow } from "lucide-react";

const sols = [
  { icon: Bot, title: "AI Agents", desc: "Multi-step agents that reason, call tools, and complete real work." },
  { icon: Brain, title: "Custom LLMs", desc: "Fine-tuned models for your domain — finance, legal, healthcare, ops." },
  { icon: Network, title: "RAG Systems", desc: "Retrieval-augmented generation grounded in your private knowledge." },
  { icon: Database, title: "Data Pipelines", desc: "Realtime, batched, and event-driven AI data pipelines." },
  { icon: MessageSquare, title: "Chatbots", desc: "Conversational AI for support, sales, and internal teams." },
  { icon: Workflow, title: "Workflow AI", desc: "AI woven directly into your operations — not bolted on." },
  { icon: Shield, title: "Guardrails & Evals", desc: "Continuous evaluation, safety, and observability for AI in production." },
  { icon: Sparkles, title: "AI Strategy", desc: "Roadmaps, build-vs-buy analysis, ROI modeling, and pilot design." },
];

export default function Solutions() {
  return (
    <>
      <PageHero eyebrow="AI Solutions" title="Production AI, designed for outcomes." subtitle="We build AI systems that are reliable, observable, and aligned with business KPIs." />
      <Section>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {sols.map((s, i) => <FeatureCard key={s.title} {...s} index={i} />)}
        </div>
      </Section>
    </>
  );
}
