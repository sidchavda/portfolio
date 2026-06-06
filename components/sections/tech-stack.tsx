"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { 
  Code2, 
  Server, 
  Database, 
  Cloud, 
  Smartphone, 
  Palette,
  Shield,
  Workflow
} from "lucide-react";

const categories = [
  { id: "all", name: "All", icon: Code2 },
  { id: "frontend", name: "Frontend", icon: Palette },
  { id: "backend", name: "Backend", icon: Server },
  { id: "database", name: "Database", icon: Database },
  { id: "mobile", name: "Mobile", icon: Smartphone },
  { id: "cloud", name: "Cloud & DevOps", icon: Cloud },
  { id: "tools", name: "Tools & Testing", icon: Workflow },
];

const technologies = [
  // Frontend
  { name: "React", category: "frontend", color: "#61DAFB", icon: "⚛️" },
  { name: "Next.js", category: "frontend", color: "#ffffff", icon: "▲" },
  { name: "Vue.js", category: "frontend", color: "#4FC08D", icon: "🟢" },
  { name: "Angular", category: "frontend", color: "#DD0031", icon: "🅰️" },
  { name: "TypeScript", category: "frontend", color: "#3178C6", icon: "TS" },
  { name: "JavaScript", category: "frontend", color: "#F7DF1E", icon: "JS" },
  { name: "HTML5", category: "frontend", color: "#E34F26", icon: "📄" },
  { name: "CSS3", category: "frontend", color: "#1572B6", icon: "🎨" },
  { name: "Tailwind CSS", category: "frontend", color: "#06B6D4", icon: "💨" },
  { name: "SASS/SCSS", category: "frontend", color: "#CC6699", icon: "💅" },
  { name: "Redux", category: "frontend", color: "#764ABC", icon: "🔄" },
  { name: "Framer Motion", category: "frontend", color: "#0055FF", icon: "✨" },
  
  // Backend
  { name: "Node.js", category: "backend", color: "#339933", icon: "🟩" },
  { name: "Express.js", category: "backend", color: "#ffffff", icon: "🚂" },
  { name: "NestJS", category: "backend", color: "#E0234E", icon: "🐱" },
  { name: "Laravel", category: "backend", color: "#FF2D20", icon: "🔺" },
  { name: "PHP", category: "backend", color: "#777BB4", icon: "🐘" },
  { name: "Python", category: "backend", color: "#3776AB", icon: "🐍" },
  { name: "Django", category: "backend", color: "#092E20", icon: "🎸" },
  { name: "FastAPI", category: "backend", color: "#009688", icon: "⚡" },
  { name: "Java", category: "backend", color: "#ED8B00", icon: "☕" },
  { name: "Spring Boot", category: "backend", color: "#6DB33F", icon: "🍃" },
  { name: "GraphQL", category: "backend", color: "#E10098", icon: "◈" },
  { name: "REST API", category: "backend", color: "#0096D6", icon: "🔗" },
  
  // Database
  { name: "MySQL", category: "database", color: "#4479A1", icon: "🐬" },
  { name: "PostgreSQL", category: "database", color: "#4169E1", icon: "🐘" },
  { name: "MongoDB", category: "database", color: "#47A248", icon: "🍃" },
  { name: "Redis", category: "database", color: "#DC382D", icon: "🔴" },
  { name: "Supabase", category: "database", color: "#3ECF8E", icon: "⚡" },
  { name: "Firebase", category: "database", color: "#FFCA28", icon: "🔥" },
  { name: "Prisma", category: "database", color: "#2D3748", icon: "△" },
  { name: "SQLite", category: "database", color: "#003B57", icon: "📦" },
  
  // Mobile
  { name: "React Native", category: "mobile", color: "#61DAFB", icon: "📱" },
  { name: "Flutter", category: "mobile", color: "#02569B", icon: "🦋" },
  { name: "Swift", category: "mobile", color: "#FA7343", icon: "🍎" },
  { name: "Kotlin", category: "mobile", color: "#7F52FF", icon: "🤖" },
  { name: "Expo", category: "mobile", color: "#000020", icon: "📲" },
  { name: "Ionic", category: "mobile", color: "#3880FF", icon: "⚡" },
  
  // Cloud & DevOps
  { name: "AWS", category: "cloud", color: "#FF9900", icon: "☁️" },
  { name: "Google Cloud", category: "cloud", color: "#4285F4", icon: "🌐" },
  { name: "Azure", category: "cloud", color: "#0078D4", icon: "☁️" },
  { name: "Vercel", category: "cloud", color: "#ffffff", icon: "▲" },
  { name: "Netlify", category: "cloud", color: "#00C7B7", icon: "🌐" },
  { name: "Docker", category: "cloud", color: "#2496ED", icon: "🐳" },
  { name: "Kubernetes", category: "cloud", color: "#326CE5", icon: "☸️" },
  { name: "CI/CD", category: "cloud", color: "#FC6D26", icon: "🔄" },
  { name: "Nginx", category: "cloud", color: "#009639", icon: "🌐" },
  { name: "Linux", category: "cloud", color: "#FCC624", icon: "🐧" },
  
  // Tools & Testing
  { name: "Git", category: "tools", color: "#F05032", icon: "📚" },
  { name: "GitHub", category: "tools", color: "#ffffff", icon: "🐙" },
  { name: "GitLab", category: "tools", color: "#FC6D26", icon: "🦊" },
  { name: "Jest", category: "tools", color: "#C21325", icon: "🃏" },
  { name: "Cypress", category: "tools", color: "#17202C", icon: "🧪" },
  { name: "Postman", category: "tools", color: "#FF6C37", icon: "📮" },
  { name: "Figma", category: "tools", color: "#F24E1E", icon: "🎨" },
  { name: "Jira", category: "tools", color: "#0052CC", icon: "📋" },
  { name: "Webpack", category: "tools", color: "#8DD6F9", icon: "📦" },
  { name: "Vite", category: "tools", color: "#646CFF", icon: "⚡" },
];

export function TechStackSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredTech = activeCategory === "all" 
    ? technologies 
    : technologies.filter(tech => tech.category === activeCategory);

  return (
    <section id="tech" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 lg:px-8">
        <div ref={ref} className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-6">
              <Code2 className="w-4 h-4" />
              Tech Stack
            </span>
          </motion.div>

          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-2 mb-12"
          >
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeCategory === category.id
                      ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                      : "bg-card border border-border hover:border-primary/50 text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {category.name}
                </button>
              );
            })}
          </motion.div>

          {/* Tech Grid */}
          <motion.div
            layout
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4"
          >
            {filteredTech.map((tech, index) => (
              <motion.div
                key={tech.name}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3, delay: 0.02 * index }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="group relative"
              >
                <div className="relative p-4 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 h-full flex flex-col items-center justify-center gap-3 text-center">
                  {/* Glow effect on hover */}
                  <div 
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-xl"
                    style={{ backgroundColor: `${tech.color}20` }}
                  />
                  
                  {/* Icon/Badge */}
                  <div 
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-xl font-bold transition-transform duration-300 group-hover:scale-110"
                    style={{ 
                      backgroundColor: `${tech.color}15`,
                      color: tech.color === "#ffffff" ? "currentColor" : tech.color
                    }}
                  >
                    {tech.icon}
                  </div>
                  
                  {/* Name */}
                  <span className="font-medium text-sm text-foreground">
                    {tech.name}
                  </span>
                  
                  {/* Color indicator */}
                  <div 
                    className="w-8 h-1 rounded-full opacity-50 group-hover:opacity-100 transition-opacity"
                    style={{ backgroundColor: tech.color === "#ffffff" ? "currentColor" : tech.color }}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {[
              { number: "60+", label: "Technologies", icon: Code2 },
              { number: "8+", label: "Years Experience", icon: Workflow },
              { number: "100%", label: "Code Quality", icon: Shield },
              { number: "24/7", label: "Support", icon: Cloud },
            ].map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  className="text-center p-6 rounded-2xl bg-gradient-to-br from-primary/10 to-transparent border border-primary/20"
                >
                  <Icon className="w-6 h-6 text-primary mx-auto mb-3" />
                  <div className="text-3xl lg:text-4xl font-bold text-primary mb-1">
                    {stat.number}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
