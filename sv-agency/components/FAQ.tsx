"use client";

import { motion } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "How long does it take to set up an AI system for my cafe?",
    answer: "Most systems are fully functional within 5 to 7 days. We start by analyzing your current workflow, designing the AI logic, and testing it with your staff before going live. This timeline includes two rounds of revisions to ensure everything works perfectly for your specific business needs."
  },
  {
    question: "Do I need a developer to run these tools?",
    answer: "No, you don't need any technical knowledge. We handle the entire setup, coding, and integration. Once live, the system runs automatically in the background. If you ever need to change a message or update a promotion, we provide a simple dashboard or handle the updates for you as part of our support."
  },
  {
    question: "What's the difference between a loyalty program and a review follow-up system?",
    answer: "A review follow-up system is designed to build your public reputation by asking happy customers to post on Google Maps immediately after their visit. A loyalty program is a long-term retention tool that tracks customer visits and sends personalized offers (like birthday discounts) to keep them coming back to your store regularly."
  },
  {
    question: "How much do these systems cost?",
    answer: "We offer flexible pricing based on the size of your business and the specific systems you need. Most of our tools pay for themselves within the first month by increasing repeat visits and reducing the time your staff spends on phones or routine messages. Contact us for a custom quote tailored to your volume."
  },
  {
    question: "Can it integrate with my existing billing or POS software?",
    answer: "Yes, our systems are designed to connect with most modern POS and billing software through simple integrations. This allows the AI to automatically know when a customer has visited, what they purchased, and when it's the perfect time to send a follow-up message or loyalty reward."
  }
];

const FAQItem = ({ question, answer, index }: { question: string; answer: string; index: number }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="border-b border-accent/30"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left group"
      >
        <h3 className="text-base md:text-xl font-medium pr-8 group-hover:text-primary transition-colors">
          {question}
        </h3>
        <div className="flex-shrink-0 w-8 h-8 rounded-full border border-accent/50 flex items-center justify-center group-hover:border-primary transition-colors">
          {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
        </div>
      </button>
      
      <motion.div
        initial={false}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="overflow-hidden"
      >
        <p className="text-muted-foreground text-base pb-6 leading-relaxed max-w-4xl">
          {answer}
        </p>
      </motion.div>
    </motion.div>
  );
};

export default function FAQ() {
  return (
    <section id="faq" className="py-24 bg-secondary/10">
      <div className="max-w-4xl mx-auto px-6 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-4xl mb-4 font-serif italic">Common Questions</h2>
          <p className="text-muted-foreground text-base sm:text-lg">
            Everything you need to know about our AI systems and how they help your business.
          </p>
        </div>

        <div className="bg-background/50 rounded-3xl p-4 md:p-8 border border-accent/20">
          {faqs.map((faq, index) => (
            <FAQItem key={index} index={index} {...faq} />
          ))}
        </div>
      </div>
    </section>
  );
}
