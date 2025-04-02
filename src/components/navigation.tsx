"use client";
import React from "react";
import NavHeader from "@/components/ui/nav-header";

interface NavigationProps {
  scrollToSection: (id: string) => void;
}

export function Navigation({ scrollToSection }: NavigationProps) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/10 backdrop-blur-[2px]">
      <div className="container mx-auto px-4 py-4">
        <NavHeader scrollToSection={scrollToSection} />
      </div>
    </nav>
  );
}