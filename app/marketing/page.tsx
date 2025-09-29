"use client";

import Link from "next/link";
import {
  ArrowRight,
  // other icons you might use
} from "lucide-react";
import { Button } from "@/components/ui/button";
// import your existing header/footer components if separated

export default function MarketingPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center h-16">
          <Link href="/" className="text-2xl font-bold text-black">BragAgency</Link>
          <nav>
            <ul className="flex space-x-6">
              
              
              <li>
                <Link href="/marketing" className="px-3 py-1 rounded-md transition-all duration-200 bg-[#10D83D] text-white">  
                  Marketing
                </Link>
              </li>
              <li>
                <Link href="/software-development" className="px-3 py-1 rounded-md transition-all duration-200 hover:bg-[#10D83D] hover:text-white hover:-translate-y-0.5">
                  Software Dev
                </Link>
              </li>
              <li>
                <Link href="/graphics-design" className="px-3 py-1 rounded-md transition-all duration-200 hover:bg-[#10D83D] hover:text-white hover:-translate-y-0.5">
                  Graphics & Design
                </Link>
              </li>
              <li>
                <Link href="/marketing-consultancy" className="px-3 py-1 rounded-md transition-all duration-200 hover:bg-[#10D83D] hover:text-white hover:-translate-y-0.5">
                  Consultancy
                </Link>
              </li>
              
            </ul>
          </nav>
        </div>
      </header>

      {/* Main content */}
      <main className="flex-1 px-6 py-20 max-w-4xl mx-auto">
        {/* Hero */}
        <section className="mb-16 text-center">
          <h1 className="text-4xl font-bold text-black mb-4">Marketing Services</h1>
          <p className="text-lg text-gray-700 mb-6">
            We deliver data-driven marketing strategies that drive real growth.
          </p>
          <Button className="bg-[#10D83D] text-white px-8 py-3 hover:bg-green-600 transition">
            Get Started
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </section>

        {/* What We Do */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-black mb-4">What We Do</h2>
          <ul className="space-y-4 text-gray-700">
            <li>SEO & Content Strategy</li>
            <li>Social Media Management</li>
            <li>Paid Advertising (PPC)</li>
            <li>Email Marketing & Automation</li>
          </ul>
        </section>

        {/* Why Choose Us */}
        <section className="mb-16 bg-gray-50 p-8 rounded-lg">
          <h2 className="text-2xl font-semibold text-black mb-4">Why Choose Us</h2>
          <p className="text-gray-700">
            Because we focus on ROI, and have delivered results for clients in many industries.
          </p>
        </section>

        {/* Process */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-black mb-4">Our Process</h2>
          <ol className="list-decimal list-inside space-y-3 text-gray-700">
            <li>Audit & Research</li>
            <li>Strategy & Plan</li>
            <li>Implementation & Execution</li>
            <li>Measure & Optimize</li>
          </ol>
        </section>

        {/* Testimonials / Case Study */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-black mb-4">Client Results</h2>
          <blockquote className="border-l-4 border-accent pl-4 italic text-gray-700">
            "BragAgency boosted our ROI by 300% within 6 months" — Client X
          </blockquote>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-8 mt-12">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 px-6">
          <div>
            <Link href="/" className="text-2xl font-bold text-white">BragAgency</Link>
            <p className="mt-4 text-sm text-gray-400">
              Marketing, design & software solutions that drive growth.
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><Link href="/marketing" className="transition hover:text-[#10D83D]">Marketing</Link></li>
              <li><Link href="/software-development" className="transition hover:text-[#10D83D]">Software Dev</Link></li>
              <li><Link href="/graphics-design" className="transition hover:text-[#10D83D]">Graphics & Design</Link></li>
              <li><Link href="/marketing-consultancy" className="transition hover:text-[#10D83D]">Consultancy</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <p>Email: info@bragagency.com</p>
            <p>Phone: +123 456 7890</p>
          </div>
        </div>
        <p className="text-center text-sm text-gray-500 mt-8">
          © {new Date().getFullYear()} BragAgency. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
