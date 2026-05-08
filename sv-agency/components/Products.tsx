"use client";

import { motion } from "framer-motion";

const products = [
  {
    title: "DropiQ",
    description: "A location-aware search engine to find products across local and online stores. Features precision filters and a specialized recommendation engine.",
    result: "Successfully indexed 2,100+ product links and features with 99.8% accuracy and 0.33ms response times.",
    whatsappText: "Hi Sai, I came across DropiQ and would like to try it out. Can you share access or demo details?",
  },
  {
    title: "Security Engine",
    description: "A Chrome extension that gives you the risk score of any link you hover over, and provides loopback ways to enter the link safely.",
    result: "Achieved 76% accuracy in real-time risk scoring for 430+ hovered links during initial testing.",
    whatsappText: "Hi Sai, your Security Engine extension looks interesting. I'd like to try it and see how it works.",
  },
  {
    title: "Contract Bot",
    description: "Generates legal contracts from a single prompt using fixed templates. Keep your private information confidential with zero hallucinations.",
    result: "Successfully generated 30+ secure legal documents with 100% template compliance, and secure information storage",
    whatsappText: "Hi Sai, I'm interested in the Contract Bot. Would love to try it out and see how it generates legal documents.",
  },
];

export default function Products() {
  return (
    <section id="products" className="py-24 relative">
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
            Products
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto">
            Tools and platforms I've built. Try them out by requesting access.
          </p>
        </motion.div>

        {/* Product Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {products.map((product, index) => (
            <motion.div
              key={product.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-6 bg-gradient-to-br from-secondary to-background shadow-xl border border-accent/50 hover:border-primary/50 transition-all duration-500 hover:-translate-y-1 overflow-hidden flex flex-col rounded-3xl"
            >
              {/* Title */}
              <h3 className="text-xl mb-3 font-medium">{product.title}</h3>

              {/* Description */}
              <p className="text-muted-foreground text-sm mb-6 leading-relaxed">{product.description}</p>

              {/* Result Box */}
              <div className="mb-8 p-4 bg-primary/5 border border-primary/20 rounded-2xl">
                <p className="text-xs text-foreground leading-relaxed italic">
                  <span className="font-semibold text-primary not-italic">Result: </span>
                  {product.result}
                </p>
              </div>

              {/* CTA Link */}
              <div className="mt-auto">
                <a
                  href={`https://wa.me/917396733009?text=${encodeURIComponent(product.whatsappText)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-primary hover:text-foreground transition-colors group/btn"
                >
                  Request Access
                  <span className="transform group-hover/btn:translate-x-1 transition-transform">→</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
