"use client";

import { motion } from "framer-motion";
import { ExternalLink, Play, ArrowUpRight } from "lucide-react";

const project = {
  title: "UX Landing Page for a Cafe",
  description: "A modern, high-converting landing page designed for a local cafe. Features online menu showcase, reservation booking, and contact integration.",
  tags: ["Landing Page", "UX Design", "Cafe"],
};

export default function WorkShowcase() {
  return (
    <section id="work" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl mb-4">
            Past Work
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Real results from real businesses. See how AI automation transforms customer engagement.
          </p>
        </motion.div>

        {/* Project */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <div className="group relative overflow-hidden bg-gradient-to-br from-secondary to-background shadow-xl border border-accent/50 hover:border-primary/30 transition-all">
            {/* Video Demo Placeholder */}
            <div className="relative aspect-video bg-gradient-to-br from-primary/5 to-accent/5 flex items-center justify-center">
              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:32px_32px]" />
              
              <div className="relative z-10 flex flex-col items-center gap-4">
                <Play className="w-12 h-12 text-primary cursor-pointer" />
                <span className="text-sm text-muted-foreground">Watch Demo Video</span>
              </div>
            </div>

            {/* Project Info */}
            <div className="p-8 text-center">
              <div className="flex flex-wrap justify-center gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs bg-primary/10 text-primary border border-primary/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="text-2xl mb-3">{project.title}</h3>
              <p className="text-muted-foreground max-w-xl mx-auto">{project.description}</p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
