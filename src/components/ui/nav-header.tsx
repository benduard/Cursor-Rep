"use client"; 

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

interface NavHeaderProps {
  scrollToSection: (id: string) => void;
}

function NavHeader({ scrollToSection }: NavHeaderProps) {
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });

  const sections = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'projects', label: 'Projects' },
    { id: 'blog', label: 'Blog' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <ul
      className="relative mx-auto flex w-fit rounded-full border-[0.5px] border-purple-500/10 bg-black/5 backdrop-blur-[2px] p-1"
      onMouseLeave={() => setPosition((pv) => ({ ...pv, opacity: 0 }))}
    >
      {sections.map((section) => (
        <Tab 
          key={section.id} 
          setPosition={setPosition}
          onClick={() => scrollToSection(section.id)}
        >
          {section.label}
        </Tab>
      ))}
      <Cursor position={position} />
    </ul>
  );
}

interface TabProps {
  children: React.ReactNode;
  setPosition: any;
  onClick: () => void;
}

const Tab = ({
  children,
  setPosition,
  onClick
}: TabProps) => {
  const ref = useRef<HTMLLIElement>(null);
  return (
    <li
      ref={ref}
      onMouseEnter={() => {
        if (!ref.current) return;

        const { width } = ref.current.getBoundingClientRect();
        setPosition({
          width,
          opacity: 1,
          left: ref.current.offsetLeft,
        });
      }}
      onClick={onClick}
      className="relative z-10 block cursor-pointer px-3 py-1.5 text-xs uppercase text-white mix-blend-difference md:px-5 md:py-3 md:text-base"
    >
      {children}
    </li>
  );
};

const Cursor = ({ position }: { position: any }) => {
  return (
    <motion.li
      animate={position}
      className="absolute z-0 h-7 rounded-full bg-purple-500/20 backdrop-blur-[1px] md:h-12"
    />
  );
};

export default NavHeader; 