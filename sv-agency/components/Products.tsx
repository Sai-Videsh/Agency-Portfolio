"use client";

import { motion } from "framer-motion";

const products = [
  {
    title: "DropiQ",
    description: "A platform where you can browse the products you need across multiple online and offline (local) stores according to your location. It includes a recommendation engine with very specific filters. Initially confined to audio products.",
    whatsappText: "Hi Sai, I came across DropiQ and would like to try it out. Can you share access or demo details?",
  },
  {
    title: "Security Engine",
    description: "A Chrome extension that gives you the risk score of any link you hover over, and provides loopback ways to enter the link safely.",
    whatsappText: "Hi Sai, your Security Engine extension looks interesting. I'd like to try it and see how it works.",
  },
  {
    title: "Contract Bot",
    description: "Generates legal contracts (like rental agreements, freelance NDAs, etc.) from a single prompt using fixed templates. You can customize the templates while keeping your private information completely confidential with zero hallucinations.",
    whatsappText: "Hi Sai, I'm interested in the Contract Bot. Would love to try it out and see how it generates legal documents.",
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
            Products
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
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
