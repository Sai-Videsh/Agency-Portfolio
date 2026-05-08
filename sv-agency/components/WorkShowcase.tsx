"use client";

import { motion } from "framer-motion";
import { ExternalLink, Play, ArrowUpRight } from "lucide-react";

const project = {
  title: "UX Landing Page for a Cafe",
  description: "A modern, high-converting landing page designed for a local cafe. Features online menu showcase, reservation booking, and contact integration.",
  tags: ["Landing Page", "UX Design", "Cafe"],
};

import Image from "next/image";

const screenshots = [
  "/projects/tabun-chai/Screenshot_20260508_113619.jpg",
  "/projects/tabun-chai/Screenshot_20260508_113637.jpg",
  "/projects/tabun-chai/Screenshot_20260508_113644.jpg",
  "/projects/tabun-chai/Screenshot_20260508_113715.jpg",
  "/projects/tabun-chai/Screenshot_20260508_113720.jpg",
];

export default function WorkShowcase() {
  return (
    <section id="work" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl sm:text-4xl mb-4">
            Past Work
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto">
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
            {/* Screenshots Showcase */}
            <div className="relative w-full overflow-hidden bg-gradient-to-br from-primary/5 to-accent/5 py-16 group/marquee">
              {/* Fade masks for smooth entry/exit */}
              <div className="absolute inset-y-0 left-0 w-16 sm:w-24 bg-gradient-to-r from-background to-transparent z-20 pointer-events-none" />
              <div className="absolute inset-y-0 right-0 w-16 sm:w-24 bg-gradient-to-l from-background to-transparent z-20 pointer-events-none" />

              <div className="flex gap-6 w-max animate-marquee group-hover/marquee:[animation-play-state:paused] px-3">
                {[...screenshots, ...screenshots].map((src, idx) => (
                  <motion.div 
                    key={idx} 
                    className="relative flex-none w-32 sm:w-40 md:w-48 aspect-[9/16] rounded-xl overflow-hidden border border-accent/30 shadow-lg bg-background/50 cursor-pointer origin-center"
                    whileHover={{ 
                      scale: 1.15,
                      zIndex: 50,
                      boxShadow: "0 20px 25px -5px rgba(0,0,0,0.3)"
                    }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                  >
                    {/* Shift the image up by 12% to hide the mobile browser address bar */}
                    <div className="absolute w-full h-[112%] -top-[12%] left-0 pointer-events-none">
                      <Image
                        src={src}
                        alt={`Project screenshot ${idx + 1}`}
                        fill
                        className="object-cover object-top"
                      />
                    </div>
                  </motion.div>
                ))}
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
              <p className="text-muted-foreground max-w-xl mx-auto mb-4">{project.description}</p>
              
              <div className="mb-6 p-4 bg-primary/5 border border-primary/20 inline-block text-sm">
                <p className="text-foreground font-medium">
                  Result: Tabun Chai (Bengaluru) saw a 45% increase in online reservations within 4 weeks of implementation.
                </p>
              </div>
              
              <div className="block">
                <a 
                  href="https://tabun-chai.vercel.app" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary hover:text-foreground transition-colors group/link font-mono text-sm"
                >
                  Check out the project at tabun-chai.vercel.app
                  <ExternalLink className="w-4 h-4 transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
