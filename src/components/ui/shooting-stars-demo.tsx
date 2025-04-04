"use client";
import React from "react";
import { ShootingStars } from "@/components/ui/shooting-stars";
import styles from "./shooting-stars-demo.module.css";

export function ShootingStarsDemo() {
  return (
    <div className="h-[40rem] w-full bg-black relative overflow-hidden">
      {/* Background with stars */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.15)_0%,rgba(0,0,0,0)_80%)]" />
        <div className={styles.stars} />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-8">
          Shooting Stars Effect
        </h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto px-4">
          A mesmerizing background effect with customizable shooting stars traversing across the screen
        </p>
      </div>

      {/* Multiple shooting star layers with different colors and speeds */}
      <ShootingStars
        starColor="#9E00FF"
        trailColor="#2EB9DF"
        minSpeed={15}
        maxSpeed={35}
        minDelay={1000}
        maxDelay={3000}
      />
      <ShootingStars
        starColor="#FF0099"
        trailColor="#FFB800"
        minSpeed={10}
        maxSpeed={25}
        minDelay={2000}
        maxDelay={4000}
      />
      <ShootingStars
        starColor="#00FF9E"
        trailColor="#00B8FF"
        minSpeed={20}
        maxSpeed={40}
        minDelay={1500}
        maxDelay={3500}
      />
    </div>
  );
} 