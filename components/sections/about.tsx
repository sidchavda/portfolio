"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Target, Lightbulb, Rocket } from "lucide-react";

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 lg:py-32 relative">
      <div className="container mx-auto px-4 lg:px-8">
        <div ref={ref} className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <span className="text-primary font-medium text-sm uppercase tracking-wider">About Us</span>
            <h2 className="text-3xl lg:text-5xl font-bold mt-4 mb-6 text-balance">
              Technology-Driven Innovation
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
              We are a technology-driven software company focused on creating scalable and 
              innovative digital solutions. We help startups and enterprises build products 
              that solve real business problems.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Target,
                title: "Our Mission",
                description:
                  "To empower businesses with cutting-edge technology solutions that drive growth and operational excellence.",
              },
              {
                icon: Lightbulb,
                title: "Our Vision",
                description:
                  "To be the leading technology partner for businesses seeking digital transformation and innovation.",
              },
              {
                icon: Rocket,
                title: "Our Approach",
                description:
                  "Agile methodology combined with deep technical expertise to deliver solutions that exceed expectations.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
                className="group p-8 rounded-2xl glass hover:bg-card/80 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
