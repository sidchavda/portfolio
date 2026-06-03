"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

function FloatingParticle({ delay, duration, x, y, size }: { delay: number; duration: number; x: number; y: number; size: number }) {
  return (
    <motion.div
      className="absolute rounded-full bg-primary/20"
      style={{ width: size, height: size }}
      initial={{ x, y, opacity: 0 }}
      animate={{
        x: [x, x + 50, x - 30, x],
        y: [y, y - 80, y - 40, y],
        opacity: [0, 0.6, 0.3, 0],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
}

const featuredProjects = [
  { name: "Quali", image: "/projects/ecommerce.jpg", url: "https://quali.de/" },
  { name: "Nostro Markets", image: "/projects/fintech.jpg", url: "https://www.nostromarkets.com/" },
  { name: "Garmiq", image: "/projects/logistics.jpg", url: "https://www.garmiq.co/" },
];

export function HeroSection() {
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    delay: Math.random() * 5,
    duration: 8 + Math.random() * 4,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: 4 + Math.random() * 8,
  }));

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
        
        {/* Floating particles */}
        <div className="absolute inset-0">
          {particles.map((particle) => (
            <FloatingParticle key={particle.id} {...particle} />
          ))}
        </div>

        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left">
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8"
              >
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium">Building the future of software</span>
              </motion.div>

              {/* Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6"
              >
                <span className="text-balance">
                  We Build{" "}
                  <span className="text-primary">Digital Products</span>{" "}
                  That Drive Results
                </span>
              </motion.h1>

              {/* Subheadline */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-lg text-muted-foreground max-w-xl mb-8 text-pretty"
              >
                From SaaS platforms to enterprise systems, we transform complex ideas 
                into elegant, scalable software solutions.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex flex-col sm:flex-row items-center lg:items-start gap-4"
              >
                <Button asChild size="lg" className="text-base px-8">
                  <Link href="#projects">
                    View Our Work
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="text-base px-8">
                  <Link href="#contact">Start a Project</Link>
                </Button>
              </motion.div>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="grid grid-cols-3 gap-6 mt-12"
              >
                {[
                  { value: "50+", label: "Projects" },
                  { value: "30+", label: "Clients" },
                  { value: "5+", label: "Years" },
                ].map((stat, index) => (
                  <div key={index} className="text-center lg:text-left">
                    <div className="text-2xl lg:text-3xl font-bold text-primary mb-1">{stat.value}</div>
                    <div className="text-xs text-muted-foreground uppercase tracking-wider">{stat.label}</div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Right - Featured Projects Preview */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="relative hidden lg:block"
            >
              <div className="relative">
                {/* Main featured image */}
                <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-primary/20 border border-border">
                  <Image
                    src="/projects/fintech.jpg"
                    alt="Featured Project"
                    width={600}
                    height={400}
                    className="object-cover w-full"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="px-3 py-1 text-xs font-semibold bg-primary text-primary-foreground rounded-full">
                      Latest Project
                    </span>
                    <h3 className="text-xl font-bold mt-2">Nostro Markets</h3>
                    <p className="text-sm text-muted-foreground">Financial Trading Platform</p>
                  </div>
                </div>

                {/* Floating mini cards */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="absolute -bottom-6 -left-6 bg-card rounded-xl p-3 shadow-lg border border-border"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-lg overflow-hidden">
                      <Image
                        src="/projects/ecommerce.jpg"
                        alt="Quali"
                        width={48}
                        height={48}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <div>
                      <p className="font-medium text-sm">Quali</p>
                      <p className="text-xs text-muted-foreground">Enterprise</p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                  className="absolute -top-4 -right-4 bg-card rounded-xl p-3 shadow-lg border border-border"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-lg overflow-hidden">
                      <Image
                        src="/projects/logistics.jpg"
                        alt="Garmiq"
                        width={48}
                        height={48}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <div>
                      <p className="font-medium text-sm">Garmiq</p>
                      <p className="text-xs text-muted-foreground">E-commerce</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2"
        >
          <motion.div className="w-1.5 h-1.5 rounded-full bg-primary" />
        </motion.div>
      </motion.div>
    </section>
  );
}
