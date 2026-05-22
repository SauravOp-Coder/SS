import { motion } from "framer-motion";
import { ReactNode } from "react";

export function Section({ children, className = "", id }: { children: ReactNode; className?: string; id?: string }) {
  return (
    <section id={id} className={`max-w-7xl mx-auto px-6 py-24 ${className}`}>{children}</section>
  );
}

export function SectionHeading({ eyebrow, title, subtitle, center = false }: { eyebrow?: string; title: string; subtitle?: string; center?: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
      className={`max-w-3xl mb-14 ${center ? "mx-auto text-center" : ""}`}
    >
      {eyebrow && (
        <div className={`inline-flex items-center gap-2 px-3 py-1 glass text-xs uppercase tracking-widest text-primary mb-5`}>
          <span className="h-1 w-1 bg-primary" /> {eyebrow}
        </div>
      )}
      <h2 className="text-4xl md:text-5xl font-semibold leading-[1.05]">{title}</h2>
      {subtitle && <p className="mt-5 text-muted-foreground text-lg">{subtitle}</p>}
    </motion.div>
  );
}

export function PageHero({ eyebrow, title, subtitle }: { eyebrow: string; title: string; subtitle: string }) {
  return (
    <div className="bg-hero noise relative overflow-hidden pt-32 pb-20 border-b border-border">
      <div className="absolute inset-0 grid-pattern opacity-40" />
      <div className="max-w-7xl mx-auto px-6 relative">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <div className="inline-flex items-center gap-2 px-3 py-1 glass text-xs uppercase tracking-widest text-primary mb-6">
            <span className="h-1 w-1 bg-primary" /> {eyebrow}
          </div>
          <h1 className="text-5xl md:text-6xl font-semibold max-w-4xl leading-[1.05]">{title}</h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl">{subtitle}</p>
        </motion.div>
      </div>
    </div>
  );
}
