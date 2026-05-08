"use client";

import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, Globe, Bot, MapPin, Phone, Star, Repeat } from "lucide-react";
import FloatingParticles from "./FloatingParticles";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-hero-glow" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,black,transparent)]" />
      
      {/* Floating Particles */}
      <FloatingParticles />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        {/* Caption */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="mb-6 flex justify-center"
        >
          <motion.p
            animate={{ 
              opacity: [0.7, 1, 0.7],
              filter: [
                "drop-shadow(0 0 2px rgba(255,255,255,0.1))", 
                "drop-shadow(0 0 12px rgba(255,255,255,0.6))", 
                "drop-shadow(0 0 2px rgba(255,255,255,0.1))"
              ]
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="text-primary font-serif italic text-lg sm:text-xl"
          >
            "Your business never sleeps online."
          </motion.p>
        </motion.div>

        {/* Main USP Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight mb-6"
        >
          I build your entire
          <br />
          <span className="text-white">online customer system</span>
        </motion.h1>

        {/* Explanation Text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          We help restaurants, salons, and retail shops in Bengaluru get more repeat customers using AI voice agents, automated review follow-ups, and loyalty programs. Set up in under a week, no tech knowledge needed.
        </motion.p>

        {/* CTA Button - WhatsApp */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <a
            href="https://wa.me/917396733009?text=Hi%20Sai,%20I'm%20interested%20in%20building%20my%20customer%20system"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 px-8 py-4 bg-primary border border-primary text-primary-foreground relative overflow-hidden transition-all hover:text-primary"
          >
            <span className="relative z-10 flex items-center gap-3">
              <MessageCircle className="w-5 h-5" />
              Contact Now
            </span>
            <span className="absolute inset-0 bg-background transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></span>
          </a>
        </motion.div>

        {/* Trust Line */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-6 text-sm text-muted-foreground"
        >
          Response given immediately · No commitment required
        </motion.p>

        {/* Scrolling Services Marquee */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="mt-16 relative overflow-hidden"
        >
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10" />
          
          <div className="flex animate-marquee whitespace-nowrap">
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex items-center gap-12 mr-12">
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Globe className="w-5 h-5" />
                  <span className="text-sm uppercase tracking-wider">Landing Page</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Bot className="w-5 h-5" />
                  <span className="text-sm uppercase tracking-wider">WhatsApp Chatbot</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <MapPin className="w-5 h-5" />
                  <span className="text-sm uppercase tracking-wider">Google Business Setup</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Phone className="w-5 h-5" />
                  <span className="text-sm uppercase tracking-wider">AI Voice Agent</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Star className="w-5 h-5" />
                  <span className="text-sm uppercase tracking-wider">Automated Review Follow-ups</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Repeat className="w-5 h-5" />
                  <span className="text-sm uppercase tracking-wider">Loyalty Messaging</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.9 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-accent/50 flex items-start justify-center p-2">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-primary"
          />
        </div>
      </motion.div>
    </section>
  );
}
