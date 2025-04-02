"use client";
import { Github, Linkedin, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useState } from "react";

export function Footer() {
  const [activeIcon, setActiveIcon] = useState<string | null>(null);

  const socialIcons = [
    { id: 'github', icon: Github, href: 'https://github.com/benduard' },
    { id: 'linkedin', icon: Linkedin, href: 'https://www.linkedin.com/in/ruben-valderrama-27b956328/' },
    { id: 'instagram', icon: Instagram, href: 'https://www.instagram.com/rubsxen/' }
  ];

  return (
    <footer className="w-full py-8 border-t border-purple-500/30">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center gap-6">
          <div className="flex items-center justify-center gap-6">
            {socialIcons.map(({ id, icon: Icon, href }) => (
              <a
                key={id}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => setActiveIcon(id)}
                onMouseLeave={() => setActiveIcon(null)}
                className="relative group"
              >
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-white/60 relative z-10 hover:text-white transition-colors duration-300 hover:bg-transparent"
                >
                  <Icon className="h-6 w-6 transition-transform duration-300 group-hover:scale-110" />
                </Button>
                {activeIcon === id && (
                  <motion.div
                    layoutId="social-lamp"
                    className="absolute inset-0 w-full h-full pointer-events-none"
                    initial={false}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 30,
                    }}
                  >
                    <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-6 h-1 bg-purple-500 rounded-t-full">
                      <div className="absolute w-8 h-4 bg-purple-500/20 rounded-full blur-md -top-2 -left-1" />
                      <div className="absolute w-6 h-4 bg-purple-500/20 rounded-full blur-md -top-1" />
                      <div className="absolute w-4 h-4 bg-purple-500/20 rounded-full blur-sm top-0 left-1" />
                    </div>
                  </motion.div>
                )}
              </a>
            ))}
          </div>
          <p className="text-sm text-white/60 font-mono">
            © {new Date().getFullYear()} Ruben Valderrama. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
} 