"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sparkles } from "lucide-react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Services", href: "#services" },
    { name: "Work", href: "#work" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Products", href: "#products" },
    { name: "Pricing", href: "#pricing" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.getElementById("navbar");
      if (navbar) {
        if (window.scrollY > 50) {
          navbar.classList.add("bg-background/90", "backdrop-blur-md", "border-b", "border-border");
        } else {
          navbar.classList.remove("bg-background/90", "backdrop-blur-md", "border-b", "border-border");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Desktop Navbar */}
      <nav id="navbar" className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-primary" />
              <span className="text-lg font-bold">SV Agency</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#footer"
                className="px-5 py-2 border border-primary text-primary text-sm font-medium relative overflow-hidden transition-all group hover:text-primary-foreground"
              >
                <span className="relative z-10">Contact Us</span>
                <span className="absolute inset-0 bg-primary transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></span>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 hover:bg-secondary transition-colors"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 md:hidden"
          >
            {/* Backdrop */}
            <div
              onClick={() => setIsMobileMenuOpen(false)}
              className="absolute inset-0 bg-black/50"
            />

            {/* Menu Content */}
            <motion.nav
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="absolute right-0 top-0 h-full w-80 bg-background border-l border-border"
            >
              <div className="p-6">
                {/* Close Button */}
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="absolute top-6 right-6 p-2 hover:bg-secondary transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>

                {/* Logo */}
                <div className="flex items-center gap-2 mb-8">
                  <Sparkles className="w-5 h-5 text-primary" />
                  <span className="text-lg font-bold">SV Agency</span>
                </div>

                {/* Navigation Links */}
                <div className="flex flex-col gap-2">
                  {navLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="px-4 py-3 text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
                    >
                      {link.name}
                    </a>
                  ))}
                  <a
                    href="#footer"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="mt-4 px-4 py-3 border border-primary text-primary text-center font-medium relative overflow-hidden transition-all group hover:text-primary-foreground"
                  >
                    <span className="relative z-10">Contact</span>
                    <span className="absolute inset-0 bg-primary transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></span>
                  </a>
                </div>
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
