"use client";

import { motion } from "framer-motion";
import { Quote, Star, MessageSquarePlus } from "lucide-react";

const testimonial = {
  quote: "Working with SV Agency completely transformed our online presence. Professional, fast, and delivered exactly what we needed. Highly recommended.",
  author: "Client Name",
  role: "Business Owner",
  rating: 5,
};

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            What Clients Say
          </h2>
        </motion.div>

        {/* Single Testimonial Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative p-8 bg-secondary/20 border border-border card-hover mb-8"
        >
          {/* Quote Icon */}
          <div className="absolute top-6 right-6">
            <Quote className="w-5 h-5 text-primary" />
          </div>

          {/* Rating */}
          <div className="flex gap-1 mb-4">
            {[...Array(testimonial.rating)].map((_, i) => (
              <Star key={i} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
            ))}
          </div>

          {/* Quote Text */}
          <blockquote className="text-foreground/90 mb-6 leading-relaxed">
            "{testimonial.quote}"
          </blockquote>

          {/* Author */}
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-lg">
              CN
            </div>
            <div>
              <div className="font-semibold">{testimonial.author}</div>
              <div className="text-sm text-muted-foreground">{testimonial.role}</div>
            </div>
          </div>
        </motion.div>

        {/* Leave a Review Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center"
        >
          <button
            onClick={() => alert("Review functionality coming soon!")}
            className="inline-flex items-center gap-2 px-6 py-3 border border-border text-foreground relative overflow-hidden transition-all group hover:text-background"
          >
            <span className="relative z-10 flex items-center gap-2">
              <MessageSquarePlus className="w-4 h-4" />
              Leave a Review
            </span>
            <span className="absolute inset-0 bg-foreground transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></span>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
