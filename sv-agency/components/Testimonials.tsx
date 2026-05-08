"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, Star, MessageSquarePlus, X, Send, Loader2 } from "lucide-react";

const testimonial = {
  quote: "His dedication towards work is what inspires me, like the order was given and within 2 days, he delivered a cleanly designed Customer page for my cafe, and also gave constant support for update cycles and bugs that users encountered. He was also ready to add AI automation of booking system with a whatsapp chat bot integration to the system.",
  author: "S Ramesh",
  role: "Cafe Owner",
  rating: 4.5,
};

export default function Testimonials() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (rating === 0) {
      setErrorMessage("Please select a star rating.");
      setSubmitStatus("error");
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("idle");

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      quality: formData.get("quality"),
      speed: formData.get("speed"),
      feedback: formData.get("feedback"),
      rating,
    };

    try {
      const response = await fetch("/api/review", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to send review");
      }

      setSubmitStatus("success");
    } catch (error) {
      setSubmitStatus("error");
      setErrorMessage("Something went wrong. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => {
      setSubmitStatus("idle");
      setRating(0);
      setErrorMessage("");
    }, 300); // Reset after closing animation
  };

  return (
    <section id="testimonials" className="py-24 relative">
      <div className="max-w-4xl mx-auto px-6 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl sm:text-4xl mb-4 font-serif font-light tracking-wide">
            What Clients Say
          </h2>
        </motion.div>

        {/* Single Testimonial Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative p-8 bg-gradient-to-br from-secondary to-background shadow-xl border border-accent/50 card-hover mb-8"
        >
          {/* Quote Icon */}
          <div className="absolute top-6 right-6">
            <Quote className="w-5 h-5 text-primary" />
          </div>

          {/* Rating */}
          <div className="flex gap-1 mb-4">
            {Array.from({ length: 5 }).map((_, i) => {
              const isFull = i < Math.floor(testimonial.rating);
              const isHalf = i === Math.floor(testimonial.rating) && testimonial.rating % 1 !== 0;
              return (
                <div key={i} className="relative">
                  <Star className="w-5 h-5 text-muted-foreground/30" />
                  {(isFull || isHalf) && (
                    <div
                      className="absolute inset-0 overflow-hidden"
                      style={{ width: isHalf ? '50%' : '100%' }}
                    >
                      <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Quote Text */}
          <blockquote className="text-foreground/90 mb-6 leading-relaxed">
            "{testimonial.quote}"
          </blockquote>

          {/* Author */}
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white text-lg rounded">
              SR
            </div>
            <div>
              <div className="font-serif tracking-wide">{testimonial.author}</div>
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
            onClick={() => setIsModalOpen(true)}
            className="inline-flex items-center gap-2 px-6 py-3 border border-accent/50 text-foreground relative overflow-hidden transition-all group hover:text-background"
          >
            <span className="relative z-10 flex items-center gap-2">
              <MessageSquarePlus className="w-4 h-4" />
              Leave a Review
            </span>
            <span className="absolute inset-0 bg-foreground transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></span>
          </button>
        </motion.div>
      </div>

      {/* Review Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center px-4 py-8 bg-background/80 backdrop-blur-sm overflow-y-auto"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              className="relative w-full max-w-2xl my-auto bg-gradient-to-br from-secondary to-background shadow-2xl border border-accent/50 p-8"
            >
              <button
                onClick={closeModal}
                className="absolute top-6 right-6 text-muted-foreground hover:text-foreground transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              {submitStatus === "success" ? (
                <div className="text-center py-16">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 border border-primary/20">
                    <Star className="w-8 h-8 text-yellow-500 fill-yellow-500" />
                  </div>
                  <h3 className="text-2xl font-serif mb-2">Review Sent</h3>
                  <p className="text-muted-foreground mb-8">
                    Thank you for your review. Your feedback means the world to us!
                  </p>
                  <button
                    onClick={closeModal}
                    className="px-6 py-2 border border-primary text-primary hover:text-primary-foreground hover:bg-primary transition-all"
                  >
                    Close
                  </button>
                </div>
              ) : (
                <>
                  <div className="mb-8">
                    <h3 className="text-2xl font-serif font-light mb-2">Leave a Review</h3>
                    <p className="text-muted-foreground text-sm">We'd love to hear about your experience working with us.</p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm text-muted-foreground">Name</label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          className="w-full px-4 py-3 bg-background border border-accent/50 text-foreground focus:outline-none focus:border-primary transition-colors"
                          placeholder="Your Name"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm text-muted-foreground">Email</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          className="w-full px-4 py-3 bg-background border border-accent/50 text-foreground focus:outline-none focus:border-primary transition-colors"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm text-muted-foreground block">Overall Rating</label>
                      <div className="flex gap-2">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <button
                            key={star}
                            type="button"
                            onClick={() => setRating(star)}
                            onMouseEnter={() => setHoveredRating(star)}
                            onMouseLeave={() => setHoveredRating(0)}
                            className="focus:outline-none"
                          >
                            <Star
                              className={`w-8 h-8 transition-colors ${
                                star <= (hoveredRating || rating)
                                  ? "text-yellow-500 fill-yellow-500"
                                  : "text-muted-foreground/30"
                              }`}
                            />
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="quality" className="text-sm text-muted-foreground">
                        How would you rate the work quality and value for money?
                      </label>
                      <input
                        type="text"
                        id="quality"
                        name="quality"
                        required
                        className="w-full px-4 py-3 bg-background border border-accent/50 text-foreground focus:outline-none focus:border-primary transition-colors"
                        placeholder="e.g. Excellent quality, definitely worth the investment."
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="speed" className="text-sm text-muted-foreground">
                        How was the speed and support during the project?
                      </label>
                      <input
                        type="text"
                        id="speed"
                        name="speed"
                        required
                        className="w-full px-4 py-3 bg-background border border-accent/50 text-foreground focus:outline-none focus:border-primary transition-colors"
                        placeholder="e.g. Very responsive and delivered on time."
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="feedback" className="text-sm text-muted-foreground">
                        Any other words for us?
                      </label>
                      <textarea
                        id="feedback"
                        name="feedback"
                        rows={3}
                        className="w-full px-4 py-3 bg-background border border-accent/50 text-foreground focus:outline-none focus:border-primary transition-colors resize-none"
                        placeholder="Optional additional feedback..."
                      ></textarea>
                    </div>

                    {submitStatus === "error" && (
                      <p className="text-red-500 text-sm">{errorMessage}</p>
                    )}

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary border border-primary text-primary-foreground relative overflow-hidden transition-all hover:text-primary group disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      <span className="relative z-10 flex items-center gap-2">
                        {isSubmitting ? (
                          <>
                            <Loader2 className="w-5 h-5 animate-spin" />
                            Sending...
                          </>
                        ) : (
                          <>
                            <Send className="w-5 h-5" />
                            Submit Review
                          </>
                        )}
                      </span>
                      {!isSubmitting && (
                        <span className="absolute inset-0 bg-background transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></span>
                      )}
                    </button>
                  </form>
                </>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
