import { Github, Linkedin, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";

interface NavigationProps {
  scrollToSection: (id: string) => void;
}

export function Navigation({ scrollToSection }: NavigationProps) {
  return (
    <nav className="fixed top-0 w-full z-50 bg-black/90 backdrop-blur-lg border-b border-purple-500/30">
      <div className="container flex h-14 items-center justify-between">
        <div className="flex gap-6 md:gap-10">
          <button onClick={() => scrollToSection('home')} className="flex items-center space-x-2">
            <span className="font-mono text-white">
              Ruben Valderrama
            </span>
          </button>
          <div className="flex gap-6">
            <button onClick={() => scrollToSection('about')} className="text-sm font-mono text-white/80 transition-colors hover:text-purple-500">
              About
            </button>
            <button onClick={() => scrollToSection('projects')} className="text-sm font-mono text-white/80 transition-colors hover:text-purple-500">
              Projects
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-sm font-mono text-white/80 transition-colors hover:text-purple-500">
              Contact
            </button>
          </div>
        </div>
        <div className="flex items-center justify-center gap-6">
          <a href="https://github.com/benduard" target="_blank" rel="noopener noreferrer">
            <Button variant="ghost" size="icon" className="text-white/80 hover:text-purple-500">
              <Github className="h-5 w-5" />
            </Button>
          </a>
          <a href="https://www.linkedin.com/in/ruben-valderrama-27b956328/" target="_blank" rel="noopener noreferrer">
            <Button variant="ghost" size="icon" className="text-white/80 hover:text-purple-500">
              <Linkedin className="h-5 w-5" />
            </Button>
          </a>
          <a href="https://www.instagram.com/rubsxen/" target="_blank" rel="noopener noreferrer">
            <Button variant="ghost" size="icon" className="text-white/80 hover:text-purple-500">
              <Instagram className="h-5 w-5" />
            </Button>
          </a>
        </div>
      </div>
    </nav>
  );
}