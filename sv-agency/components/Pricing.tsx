"use client";

import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "₹4,999",
    period: "one-time",
    description: "Mobile-first landing page with basic automation for new businesses.",
    features: [
      "Mobile-first landing page (home, services, location, contact)",
      "WhatsApp chatbot (answers top 5 customer questions)",
      "Google Business Profile setup + optimization",
      "1 round of revisions",
      "Delivered in 2-3 days"
    ],
    popular: false,
    cta: "Get Started",
    whatsappMessage: "Hi Sai, I want these services that are in Starter plan: Mobile-first landing page, WhatsApp chatbot, Google Business Profile setup. Let's discuss getting started."
  },
  {
    name: "Growth",
    price: "₹6,999",
    period: "one-time",
    description: "Everything in Starter plus lead capture and automation features.",
    features: [
      "Everything in Starter",
      "Lead capture form (name + number collected automatically)",
      "Automated WhatsApp follow-up after enquiry",
      "Basic loyalty message (\"Visit us again, here's 10% off\")",
      "Instagram link + basic SEO setup",
      "Delivered in 5 days"
    ],
    popular: true,
    cta: "Choose Growth",
    whatsappMessage: "Hi Sai, I want these services that are in Growth plan: Everything in Starter plus lead capture form, automated WhatsApp follow-up, loyalty messaging, Instagram link and SEO setup. Let's discuss this."
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "pricing",
    description: "Everything in Growth plus advanced AI and analytics features.",
    features: [
      "Everything in Growth",
      "AI voice agent for call handling (basic FAQ answering)",
      "Automated Google review request after visit",
      "Monthly analytics report (who visited, who enquired)",
      "Delivered in 6-7 days (a week)"
    ],
    popular: false,
    cta: "Contact Sales",
    whatsappMessage: "Hi Sai, I want to discuss about the pricing for Pro plan. I'm interested in: Everything in Growth plus AI voice agent, automated Google review requests, and monthly analytics reports. Let's talk about custom pricing."
  }
];

const maintenance = {
  name: "Monthly Maintenance",
  price: "₹1,999",
  period: "month",
  description: "Keep your customer system running smoothly with ongoing support and updates.",
  features: [
    "Landing page content updates",
    "Chatbot flow updates",
    "Google Business post once a week",
    "Priority WhatsApp support"
  ],
  cta: "Subscribe Now"
};

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

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 relative">
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
            Simple Pricing
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Choose the perfect plan for your business. One-time payment, lifetime value.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12"
        >
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              variants={itemVariants}
              className={`relative p-8 bg-gradient-to-br from-secondary to-background shadow-xl border ${
                plan.popular 
                  ? "border-primary" 
                  : "border-accent/50 hover:border-primary/50"
              } transition-all duration-300 ${
                plan.popular ? "hover:-translate-y-1" : ""
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-primary text-primary-foreground text-xs">
                  Most Popular
                </div>
              )}

              {/* Plan Name */}
              <h3 className="text-xl mb-2">{plan.name}</h3>
              
              {/* Price */}
              <div className="mb-4">
                <span className="text-3xl">{plan.price}</span>
                <span className="text-muted-foreground text-sm">/{plan.period}</span>
              </div>

              {/* Description */}
              <p className="text-muted-foreground text-sm mb-6">{plan.description}</p>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <a
                href={`https://wa.me/917396733009?text=${encodeURIComponent(plan.whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full inline-flex items-center justify-center gap-2 px-6 py-3 font-medium relative overflow-hidden transition-all group ${
                  plan.popular
                    ? "bg-primary text-primary-foreground border border-primary hover:text-primary"
                    : "bg-transparent border border-primary text-primary hover:text-primary-foreground"
                }`}
              >
                <span className="relative z-10 flex items-center gap-2">
                  {plan.cta}
                  <ArrowRight className="w-4 h-4" />
                </span>
                <span className={`absolute inset-0 ${
                  plan.popular
                    ? "bg-background transform -translate-x-full group-hover:translate-x-0"
                    : "bg-primary transform -translate-x-full group-hover:translate-x-0"
                } transition-transform duration-300 ease-out`}></span>
              </a>
            </motion.div>
          ))}
        </motion.div>

        {/* Monthly Maintenance Card - Rectangular */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="max-w-4xl mx-auto"
        >
          <div className="p-8 bg-gradient-to-br from-secondary to-background shadow-xl border border-accent/50 hover:border-primary/50 transition-all duration-300">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Left Side - Plan Info */}
              <div>
                <h3 className="text-2xl mb-2">{maintenance.name}</h3>
                <div className="mb-4">
                  <span className="text-3xl">{maintenance.price}</span>
                  <span className="text-muted-foreground text-sm">/{maintenance.period}</span>
                </div>
                <p className="text-muted-foreground text-sm mb-6">{maintenance.description}</p>
              </div>
              
              {/* Right Side - Features */}
              <div>
                <ul className="space-y-3 mb-6">
                  {maintenance.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-xs text-muted-foreground italic">
                  Available for all plans as maintainer
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Trust Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-12"
        >
          <p className="text-sm text-muted-foreground">
            No hidden fees · One-time payment · Lifetime support available
          </p>
        </motion.div>
      </div>
    </section>
  );
}
