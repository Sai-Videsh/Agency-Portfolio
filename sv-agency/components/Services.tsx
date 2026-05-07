"use client";

import { motion } from "framer-motion";

const services = [
  {
    title: "Landing Page",
    description: "High-converting, professionally designed landing pages that turn visitors into customers.",
  },
  {
    title: "WhatsApp Chatbot",
    description: "24/7 AI-powered WhatsApp automation that answers queries, takes orders, and nurtures leads.",
  },
  {
    title: "Google Business Setup",
    description: "Complete Google Business Profile optimization for local visibility and customer discovery.",
  },
  {
    title: "AI Voice Agent",
    description: "Intelligent voice assistants that handle calls, bookings, and customer support autonomously.",
  },
  {
    title: "Automated Review Follow-ups",
    description: "Smart review request system that boosts your ratings and builds social proof automatically.",
  },
  {
    title: "Loyalty Messaging",
    description: "Personalized retention campaigns that keep customers engaged and coming back for more.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export default function Services() {
  return (
    <section id="services" className="py-24 relative">
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
            Complete Customer System
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Everything you need to attract, engage, and retain customers. Fully automated
          </p>
        </motion.div>

        {/* Service Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              className="p-6 bg-gradient-to-br from-secondary to-background shadow-xl border border-accent/50 hover:border-primary/30 transition-all card-hover"
            >
              <h4 className="text-lg mb-2">{service.title}</h4>
              <p className="text-muted-foreground text-sm">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
