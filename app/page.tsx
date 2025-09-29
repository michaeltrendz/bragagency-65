"use client";

import { ArrowRight, Code, Palette, TrendingUp, Star, Users, Award, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import Link from "next/link"

export default function AgencyPortfolio() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
<nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex justify-between items-center h-16">
      <img
        src="/logo.png"
        alt="BragAgency Logo"
        className="h-8 w-auto"
      />
      <div className="hidden md:flex space-x-4">
        {[
          { name: "Services", href: "#services" },
          { name: "Portfolio", href: "#portfolio" },
          { name: "About", href: "#about" },
          { name: "Contact", href: "#contact" },
        ].map((item) => (
          <a
            key={item.name}
            href={item.href}
            className="px-3 py-1 rounded-md transition-all duration-200 
                       hover:bg-[#10D83D] hover:text-white hover:-translate-y-0.5"
          >
            {item.name}
          </a>
        ))}
      </div>
      <Button>Get Started</Button>
    </div>
  </div>
</nav>


      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-secondary/5"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge variant="secondary" className="mb-6">
              Award-Winning Agency
            </Badge>
            <h3 className="font-heading font-bold text-4xl md:text-6xl lg:text-7xl text-foreground mb-6">
              Remember, People spend money when and where they feel good. 
              <span className="text-accent block"> - Walt Disney</span>
            </h3>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              A creative digital agency delivering strategy, design, and marketing that drives results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8">
                View Our Work
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 bg-transparent">
                Schedule Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-4">Our Services</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive solutions to elevate your brand and accelerate your growth
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-accent/20">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-colors">
                  <TrendingUp className="h-8 w-8 text-accent" />
                </div>
                <CardTitle className="font-heading text-2xl">Marketing</CardTitle>
                <CardDescription className="text-base">
                  Strategic marketing solutions that drive engagement and conversions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    <span>Digital Marketing Strategy</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    <span>Social Media Management</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    <span>SEO & Content Marketing</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    <span>PPC & Advertising</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-accent/20">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-colors">
                  <Code className="h-8 w-8 text-accent" />
                </div>
                <CardTitle className="font-heading text-2xl">Software & Web</CardTitle>
                <CardDescription className="text-base">
                  Custom software solutions and modern web applications
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    <span>Web Application Developments</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    <span>Mobile App Development</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    <span>E-commerce Solutions</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    <span>API Integration</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-accent/20">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-colors">
                  <Palette className="h-8 w-8 text-accent" />
                </div>
                <CardTitle className="font-heading text-2xl">Design & Graphics</CardTitle>
                <CardDescription className="text-base">
                  Creative design solutions that captivate and convert
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    <span>Brand Identity Design</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    <span>UI/UX Design</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    <span>Print & Digital Graphics</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    <span>Marketing Materials</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-4">Success Stories</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Showcasing our latest projects. 
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Sport Propfirm - MSF",
                category: "Project Management",
                description: "Digital Presence and Brand Strategy",
                image: "/modern-ecommerce-dashboard.png",
              },
              {
                title: "Brand identity - Weighout",
                category: "Graphic Design & Branding",
                description: "Complete brand identity overhaul for Body Fitness startup",
                image: "/modern-brand-identity-design-mockup.png",
              },
              {
                title: "Digital Campaign",
                category: "Marketing",
                description: "Multi-channel campaign generating 300% ROI",
                image: "/digital-marketing-dashboard.png",
              },
              {
                title: "Mobile App",
                category: "Software Development",
                description: "React Native app with 50k+ downloads",
                image: "/modern-mobile-app-interface.png",
              },
              {
                title: "Website Redesign",
                category: "Design & Development",
                description: "Modern website with 40% conversion increase",
                image: "/modern-website-homepage.png",
              },
              {
                title: "Social Strategy",
                category: "Marketing",
                description: "Social media strategy driving 200% engagement",
                image: "/social-media-analytics-and-engagement-metrics.png",
              },
            ].map((project, index) => (
              <Card key={index} className="group overflow-hidden hover:shadow-lg transition-all duration-300">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary">{project.category}</Badge>
                  </div>
                  <CardTitle className="font-heading">{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-heading font-bold text-accent mb-2">150+</div>
              <div className="text-muted-foreground">Projects Completed</div>
            </div>
            <div>
              <div className="text-4xl font-heading font-bold text-accent mb-2">98%</div>
              <div className="text-muted-foreground">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-4xl font-heading font-bold text-accent mb-2">5+</div>
              <div className="text-muted-foreground">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl font-heading font-bold text-accent mb-2">24/7</div>
              <div className="text-muted-foreground">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-6">About BragAgency</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                We're a passionate team of designers, developers, and marketers dedicated to helping businesses thrive
                in the digital landscape. With over 5 years of experience, we've helped 150+ companies transform their
                vision into reality.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Our approach combines creative excellence with strategic thinking, ensuring every project not only looks
                great but delivers measurable results.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2">
                  <Award className="h-5 w-5 text-accent" />
                  <span>Award-Winning Team</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-accent" />
                  <span>Expert Professionals</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="h-5 w-5 text-accent" />
                  <span>5-Star Reviews</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img src="/professional-creative-team-working-together-in-mod.png" alt="Our team at work" className="rounded-lg shadow-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-4">Let's Work Together</h2>
            <p className="text-xl text-muted-foreground">
              Ready to transform your business? Get in touch for a free consultation.
            </p>
          </div>

          <Card className="p-8">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Name
                  </label>
                  <Input id="name" placeholder="Your name" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email
                  </label>
                  <Input id="email" type="email" placeholder="your@email.com" />
                </div>
              </div>
              <div>
                <label htmlFor="service" className="block text-sm font-medium text-foreground mb-2">
                  Service Interested In
                </label>
                <select className="w-full px-3 py-2 border border-input bg-background rounded-md focus:outline-none focus:ring-2 focus:ring-ring">
                  <option>Marketing</option>
                  <option>Project Management</option>
                  <option>Graphics and Product Design</option>
                  <option>All Services</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <Textarea id="message" placeholder="Tell us about your project..." rows={4} />
              </div>
              <Button size="lg" className="w-full">
                Send Message
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </form>
          </Card>
        </div>
      </section>

      {/* Footer */}
<footer className="bg-foreground text-background py-12">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid md:grid-cols-4 gap-8">
      <div>
        <div className="font-heading font-bold text-xl mb-4">BragAgency</div>
        <p className="text-background/80 mb-4">
          Transforming businesses through creative excellence and
          strategic innovation.
        </p>
      </div>

      <div>
        <h4 className="font-semibold mb-4">Company</h4>
        <ul className="space-y-2 text-background/80">
          {[
            { name: "Marketing", href: "/marketing" },
            { name: "Project Management", href: "/ProjectManagement" },
            { name: "Graphics and Product Design", href: "/Graphics-and-Product-Design" },
            { name: "Consultancy", href: "/Consultancy" },
          ].map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                className="px-2 py-1 rounded-md transition-all duration-200 
                           hover:bg-[#10D83D] hover:text-white hover:-translate-y-0.5 inline-block"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h4 className="font-semibold mb-4">Company</h4>
        <ul className="space-y-2 text-background/80">
          {[
            { name: "About Us", href: "/about" },
            { name: "Portfolio", href: "/portfolio" },
            { name: "Careers", href: "/careers" },
            { name: "Contact", href: "/contact" },
          ].map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                className="px-2 py-1 rounded-md transition-all duration-200 
                           hover:bg-[#10D83D] hover:text-white hover:-translate-y-0.5 inline-block"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h4 className="font-semibold mb-4">Connect</h4>
        <ul className="space-y-2 text-background/80">
          {[
            {
              name: "LinkedIn",
              href: "https://www.linkedin.com/company/108298687/",
            },
            { name: "Twitter", href: "https://twitter.com/" },
            { name: "Instagram", href: "https://instagram.com/" },
            { name: "TikTok", href: "https://tiktok.com/" },
          ].map((social) => (
            <li key={social.name}>
              <a
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="px-2 py-1 rounded-md transition-all duration-200 
                           hover:bg-[#10D83D] hover:text-white hover:-translate-y-0.5 inline-block"
              >
                {social.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>

    <div className="border-t border-background/20 mt-8 pt-8 text-center text-background/60">
      <p>&copy; 2025 BragAgency. All rights reserved.</p>
    </div>
  </div>
</footer>

    </div>
  )
}
