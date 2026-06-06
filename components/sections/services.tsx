"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Code,
  Globe,
  Cloud,
  Database,
  Smartphone,
  Cpu,
  Palette,
  Server,
  Wrench,
  Layers,
  Search,
} from "lucide-react";

const services = [
  {
    icon: Code,
    title: "Custom Software Development",
    description: "Tailored solutions designed to meet your unique business requirements.",
  },
  {
    icon: Globe,
    title: "Web Application Development",
    description: "Modern, responsive web applications built with cutting-edge technologies.",
  },
  {
    icon: Layers,
    title: "SaaS Development",
    description: "Scalable software-as-a-service platforms for recurring revenue businesses.",
  },
  {
    icon: Database,
    title: "CRM Development",
    description: "Custom CRM solutions to streamline customer relationship management.",
  },
  {
    icon: Server,
    title: "API Development",
    description: "Robust and secure APIs for seamless system integrations.",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Native and cross-platform mobile applications for iOS and Android.",
  },
  {
    icon: Cpu,
    title: "IoT Solutions",
    description: "Connected device solutions for smart automation and monitoring.",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "User-centered design that creates engaging digital experiences.",
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description: "Cloud infrastructure setup, migration, and optimization services.",
  },
  {
    icon: Wrench,
    title: "Maintenance & Support",
    description: "Ongoing technical support and maintenance for your applications.",
  },
  {
    icon: Globe,
    title: "SEO",
    description: "Search engine optimization to improve visibility and drive organic traffic.",
  },
];

export function ServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="py-24 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div ref={ref} className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              Our Services
            </span>
            <h2 className="text-3xl lg:text-5xl font-bold mt-4 mb-6 text-balance">
              What We Do Best
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive software development services to help you build, scale, and succeed.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.05 * index }}
                className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <service.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                <p className="text-sm text-muted-foreground">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
