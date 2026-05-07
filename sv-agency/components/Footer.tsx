"use client";

import { motion } from "framer-motion";
import { Globe, Mail, MessageCircle, Code, Phone } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer id="footer" className="py-16 border-t border-accent/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-1.5 mb-4">
              <Image src="/logo.jpeg" alt="SV Agency" width={48} height={48} className="rounded object-contain" />
              <span className="text-2xl tracking-wide font-serif">Agency</span>
            </div>
            <p className="text-muted-foreground text-sm mb-6">
              Building complete AI customer systems for modern businesses. Your customers find you, get answered instantly, and keep coming back.
            </p>
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

          {/* Owner Info */}
          <div>
            <h4 className="mb-4">About the Builder</h4>
            <div className="p-4 bg-gradient-to-br from-secondary to-background shadow-xl border border-accent/50">
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
                  <div className="">Sai Videsh</div>
                  <div className="text-xs text-muted-foreground">Founder & Developer</div>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                IIIT student, content creator, and developer passionate about building AI solutions that help businesses grow. I create tools that work while you sleep.
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
