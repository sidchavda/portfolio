"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Users,
  Layers,
  Shield,
  Zap,
  CheckCircle,
  HeadphonesIcon,
} from "lucide-react";

const reasons = [
  {
    icon: Users,
    title: "Experienced Team",
    description: "Our skilled developers bring years of expertise across diverse technologies and industries.",
  },
  {
    icon: Layers,
    title: "Scalable Architecture",
    description: "We build solutions that grow with your business, ensuring long-term sustainability.",
  },
  {
    icon: Shield,
    title: "Secure Development",
    description: "Security is at the core of our development process with industry best practices.",
  },
  {
    icon: Zap,
    title: "Fast Delivery",
    description: "Agile methodology ensures rapid development cycles and timely project delivery.",
  },
  {
    icon: CheckCircle,
    title: "Quality Assurance",
    description: "Rigorous testing processes guarantee bug-free, high-performance applications.",
  },
  {
    icon: HeadphonesIcon,
    title: "Ongoing Support",
    description: "Dedicated support team available to assist you even after project completion.",
  },
];

export function WhyUsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="why-us" className="py-24 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <div ref={ref} className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              Why Choose Us
            </span>
            <h2 className="text-3xl lg:text-5xl font-bold mt-4 mb-6 text-balance">
              Your Success Is Our Priority
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We combine technical excellence with a client-first approach to deliver exceptional results.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {reasons.map((reason, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="group relative p-8 rounded-2xl glass hover:bg-card transition-all duration-300"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-accent rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <reason.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{reason.title}</h3>
                <p className="text-muted-foreground">{reason.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
