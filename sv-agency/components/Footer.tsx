"use client";

import { motion } from "framer-motion";
import { Globe, Mail, MessageCircle, Code, Phone } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer id="footer" className="py-16 border-t border-accent/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-1.5 mb-4">
              <Image src="/logo.jpeg" alt="SV Agency" width={48} height={48} className="rounded object-contain" />
              <span className="text-2xl tracking-wide font-serif">Agency</span>
            </div>
            <div className="mb-6">
              <p className="text-lg font-serif italic text-foreground mb-2">
                "Your business never sleeps online."
              </p>
              <p className="text-muted-foreground text-sm">
                Building complete AI customer systems for modern businesses.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <a href="mailto:saividesh29@gmail.com" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                <Mail className="w-4 h-4" />
                <span className="text-sm">saividesh29@gmail.com</span>
              </a>
              <a href="tel:+917396733009" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                <Phone className="w-4 h-4" />
                <span className="text-sm">+91 73967 33009</span>
              </a>
              <a href="https://wa.me/917396733009?text=Hi%20Sai" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                <MessageCircle className="w-4 h-4" />
                <span className="text-sm">WhatsApp</span>
              </a>
            </div>
          </div>

          {/* About the Agency - Trust Anchor */}
          <div>
            <h4 className="mb-4 font-serif italic">About the Agency</h4>
            <div className="p-5 bg-primary/5 border border-primary/10 rounded-2xl">
              <p className="text-sm text-muted-foreground leading-relaxed">
                SV Agency is a <span className="text-foreground">Bengaluru-based</span> AI consulting firm specializing in AI voice agents, WhatsApp automation, and loyalty systems for local businesses. Founded in 2026, we have helped a couple of local clients and built many individual products around these core services to scale business operations.
              </p>
            </div>
          </div>

          {/* Owner Info */}
          <div>
            <h4 className="mb-4">About the Builder</h4>
            <div className="p-4 bg-gradient-to-br from-secondary to-background shadow-xl border border-accent/50 rounded-2xl">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 relative rounded overflow-hidden flex-shrink-0">
                  <Image 
                    src="/pic_black_bck.png" 
                    alt="Sai Videsh" 
                    fill 
                    className="object-cover object-top"
                  />
                </div>
                <div>
                  <div className="font-medium">Sai Videsh</div>
                  <div className="text-xs text-muted-foreground">Founder & Developer</div>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                AI automation consultant with 2 years of experience building systems for Bengaluru F&B and retail businesses.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-accent/50 text-center">
          <p className="text-sm text-muted-foreground">
            © 2026 SV Agency. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
