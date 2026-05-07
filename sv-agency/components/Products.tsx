"use client";

import { motion } from "framer-motion";

const products = [
  {
    title: "WhatsApp Bot Builder",
    description: "A no-code tool to create custom WhatsApp chatbots with AI responses, automated replies, and business integrations.",
    whatsappText: "Hi Sai, I came across your WhatsApp Bot Builder and would like to try it out. Can you share access or demo details?",
  },
  {
    title: "Landing Page Generator",
    description: "AI-powered landing page creator that generates high-converting pages with copy, images, and CTAs in minutes.",
    whatsappText: "Hi Sai, your Landing Page Generator looks interesting. I'd like to try it and see how it can help my business.",
  },
  {
    title: "Review Automation System",
    description: "Automated review collection and management system that follows up with customers and boosts ratings organically.",
    whatsappText: "Hi Sai, I'm interested in your Review Automation System. Would love to try it out and see how it can help get more reviews.",
  },
  {
    title: "Voice Agent Platform",
    description: "AI voice assistant platform for handling calls, bookings, and customer support with natural conversation flow.",
    whatsappText: "Hi Sai, your Voice Agent Platform caught my attention. I'd like to try it out and understand how it can handle my business calls.",
  },
];

export default function Products() {
  return (
    <section id="products" className="py-24 relative">
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
            My Past Built Projects
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Tools and platforms I've built. Try them out by requesting access.
          </p>
        </motion.div>

        {/* Product Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {products.map((product, index) => (
            <motion.div
              key={product.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-6 bg-gradient-to-br from-secondary to-background shadow-xl border border-accent/50 hover:border-primary/50 transition-all duration-500 hover:-translate-y-1 overflow-hidden flex flex-col"
            >
              {/* Title */}
              <h3 className="text-lg mb-3">{product.title}</h3>

              {/* Description */}
              <p className="text-muted-foreground text-sm mb-6 flex-grow">{product.description}</p>

              {/* CTA Link */}
              <a
                href={`https://wa.me/917396733009?text=${encodeURIComponent(product.whatsappText)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-primary hover:text-muted-foreground transition-colors"
              >
                Try Now
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
