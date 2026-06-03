"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechStart Inc.",
    content:
      "S&S Tech Labs delivered our SaaS platform ahead of schedule. Their attention to detail and technical expertise exceeded our expectations. Highly recommended!",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Founder, GrowthHub",
    content:
      "Working with S&S Tech Labs was a game-changer for our business. They understood our vision and transformed it into a beautiful, functional product.",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    role: "CTO, DataFlow Systems",
    content:
      "The team at S&S Tech Labs brings a perfect blend of creativity and technical skill. Our enterprise solution is now handling 10x the traffic with ease.",
    rating: 5,
  },
  {
    name: "David Park",
    role: "Product Manager, InnovateCo",
    content:
      "Exceptional communication and delivery. S&S Tech Labs kept us informed at every step and delivered a product that our users love.",
    rating: 5,
  },
];

export function TestimonialsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div ref={ref} className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              Testimonials
            </span>
            <h2 className="text-3xl lg:text-5xl font-bold mt-4 mb-6 text-balance">
              What Our Clients Say
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {"Don't just take our word for it. Here's what our clients have to say about working with us."}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="relative p-8 rounded-2xl bg-card border border-border hover:border-primary/30 transition-colors"
              >
                <Quote className="absolute top-6 right-6 w-10 h-10 text-primary/10" />
                
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {`"${testimonial.content}"`}
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-lg font-semibold text-primary">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
