"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, ArrowUpRight, Layers, Monitor, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const projects = [
  {
    name: "Quali",
    url: "https://quali.de/",
    description: "Enterprise digital platform with modern UI and scalable architecture for business process optimization.",
    tags: ["Enterprise", "Web App", "UI/UX"],
    image: "/projects/ecommerce.jpg",
    category: "Enterprise",
    year: "2024",
    tech: ["React", "Node.js", "PostgreSQL"],
  },
  {
    name: "Smart Publicity Hub",
    url: "https://www.smartpublicityhub.com/",
    description: "Marketing and advertising platform designed for business growth with analytics dashboard.",
    tags: ["Marketing", "SaaS", "Analytics"],
    image: "/projects/ai-analytics.jpg",
    category: "SaaS",
    year: "2024",
    tech: ["Next.js", "TypeScript", "AWS"],
  },
  {
    name: "Rapid Pest Control India",
    url: "https://rapidpestcontrolindia.com/",
    description: "Business website with service management, booking system, and customer portal.",
    tags: ["Business", "Services", "Booking"],
    image: "/projects/healthcare.jpg",
    category: "Business",
    year: "2023",
    tech: ["React", "Express", "MongoDB"],
  },
  {
    name: "Digital Invitation Platform",
    url: "https://invitation-card-fawn.vercel.app/",
    description: "Interactive digital invitation card platform with customizable templates and animations.",
    tags: ["Consumer", "Interactive", "Design"],
    image: "/projects/realestate.jpg",
    category: "Consumer",
    year: "2024",
    tech: ["Next.js", "Framer Motion", "Tailwind"],
  },
  {
    name: "Garmiq",
    url: "https://www.garmiq.co/",
    description: "Modern e-commerce platform with scalable system architecture and inventory management.",
    tags: ["E-commerce", "Platform", "Scalable"],
    image: "/projects/logistics.jpg",
    category: "E-commerce",
    year: "2024",
    tech: ["React", "Node.js", "Stripe"],
  },
  {
    name: "Nostro Markets",
    url: "https://www.nostromarkets.com/",
    description: "Financial trading platform with real-time data, portfolio management, and analytics.",
    tags: ["Finance", "Trading", "Dashboard"],
    image: "/projects/fintech.jpg",
    category: "Fintech",
    year: "2023",
    tech: ["Next.js", "WebSocket", "Redis"],
  },
];

const categories = ["All", "Enterprise", "SaaS", "Business", "Consumer", "E-commerce", "Fintech"];

export function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState("All");
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="py-24 lg:py-32 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div ref={ref} className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <span className="inline-flex items-center gap-2 text-primary font-medium text-sm uppercase tracking-wider mb-4">
              <Layers className="w-4 h-4" />
              Our Portfolio
            </span>
            <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-balance">
              Featured Work & Projects
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Delivering exceptional digital solutions that drive real business results for clients worldwide.
            </p>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                    activeCategory === category
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary hover:bg-secondary/80 text-foreground"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="group relative"
                onMouseEnter={() => setHoveredProject(index)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <div className="relative overflow-hidden rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-500 shadow-lg hover:shadow-2xl hover:shadow-primary/10">
                  {/* Project Image */}
                  <div className="relative h-64 lg:h-72 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 text-xs font-semibold bg-primary text-primary-foreground rounded-full">
                        {project.category}
                      </span>
                    </div>

                    {/* Year Badge */}
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 text-xs font-medium bg-background/80 backdrop-blur-sm rounded-full">
                        {project.year}
                      </span>
                    </div>

                    {/* Hover Action */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ 
                        opacity: hoveredProject === index ? 1 : 0,
                        y: hoveredProject === index ? 0 : 20
                      }}
                      className="absolute inset-0 flex items-center justify-center"
                    >
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-colors"
                      >
                        View Live
                        <ArrowUpRight className="w-4 h-4" />
                      </a>
                    </motion.div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-xl lg:text-2xl font-bold group-hover:text-primary transition-colors">
                        {project.name}
                      </h3>
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                    
                    <p className="text-muted-foreground mb-4 line-clamp-2">
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-3 py-1 text-xs font-medium bg-secondary text-muted-foreground rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-center mt-12"
          >
            <p className="text-muted-foreground mb-4">
              Want to see more of our work or discuss your project?
            </p>
            <Button asChild size="lg">
              <a href="#contact">
                Start a Project
                <ArrowUpRight className="ml-2 w-4 h-4" />
              </a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
