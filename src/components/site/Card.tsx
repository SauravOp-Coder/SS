import { motion } from "framer-motion";
import { ReactNode } from "react";

export function FeatureCard({ icon: Icon, title, desc, index = 0 }: { icon: any; title: string; desc: string; index?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      whileHover={{ y: -4 }}
      className="group relative p-7 premium-border bg-surface/55 hover:border-primary/40 transition-colors magnetic-card"
    >
      <div className="h-11 w-11 grid place-items-center bg-orange-gradient text-primary-foreground mb-5 glow-soft">
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
    </motion.div>
  );
}

export function StatCard({ value, label }: { value: string; label: string }) {
  return (
    <div className="p-6 premium-border bg-surface/55 magnetic-card">
      <div className="text-3xl md:text-4xl font-semibold text-gradient-orange">{value}</div>
      <div className="text-xs uppercase tracking-widest text-muted-foreground mt-2">{label}</div>
    </div>
  );
}

export function GlassPanel({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`premium-border bg-surface/55 p-6 ${className}`}>{children}</div>;
}
