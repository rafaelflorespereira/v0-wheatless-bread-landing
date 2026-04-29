"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Emily Thompson",
    role: "Health Coach",
    image: "/images/testimonial-1.jpg",
    content: "I recommend Pure Grain to all my clients who need wheat-free options. The quality is exceptional, and the taste is indistinguishable from traditional bread.",
    rating: 5,
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Home Chef",
    image: "/images/testimonial-2.jpg",
    content: "Their pizza dough has been a game-changer for family pizza nights. My kids can't even tell the difference, and I feel good about what I'm feeding them.",
    rating: 5,
  },
  {
    id: 3,
    name: "Sarah Williams",
    role: "Yoga Instructor",
    image: "/images/testimonial-3.jpg",
    content: "After years of avoiding bread, Pure Grain brought it back into my life. The sourdough is absolutely incredible—crusty outside, soft inside, perfect every time.",
    rating: 5,
  },
]

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const activeTestimonial = testimonials[activeIndex]

  return (
    <section className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm uppercase tracking-widest text-primary font-medium mb-4">
            Testimonials
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-foreground text-balance">
            Loved by thousands
          </h2>
        </div>

        {/* Testimonial Carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-card rounded-3xl p-8 md:p-12 border border-border">
            {/* Stars */}
            <div className="flex gap-1 mb-6">
              {[...Array(activeTestimonial.rating)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-accent text-accent" />
              ))}
            </div>

            {/* Quote */}
            <blockquote className="text-xl md:text-2xl font-serif text-foreground leading-relaxed mb-8">
              &ldquo;{activeTestimonial.content}&rdquo;
            </blockquote>

            {/* Author */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="h-14 w-14 rounded-full overflow-hidden bg-secondary">
                  <Image
                    src={activeTestimonial.image}
                    alt={activeTestimonial.name}
                    width={56}
                    height={56}
                    className="object-cover h-full w-full"
                  />
                </div>
                <div>
                  <p className="font-semibold text-foreground">{activeTestimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{activeTestimonial.role}</p>
                </div>
              </div>

              {/* Navigation */}
              <div className="flex gap-2">
                <button
                  onClick={prevTestimonial}
                  className="h-10 w-10 rounded-full border border-border flex items-center justify-center hover:bg-secondary transition-colors"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="h-5 w-5 text-foreground" />
                </button>
                <button
                  onClick={nextTestimonial}
                  className="h-10 w-10 rounded-full border border-border flex items-center justify-center hover:bg-secondary transition-colors"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="h-5 w-5 text-foreground" />
                </button>
              </div>
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`h-2 rounded-full transition-all ${
                  index === activeIndex ? "w-8 bg-primary" : "w-2 bg-border"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
