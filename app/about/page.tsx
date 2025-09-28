import Link from "next/link"
import { CheckCircle, Users, Target, Award } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center h-16">
          <Link href="/" className="text-2xl font-bold text-black">
            BragAgency
          </Link>
          <ul className="flex space-x-6">
            {[
              { name: "Home", href: "/" },
              { name: "About Us", href: "/about" },
              { name: "Services", href: "/services" },
              { name: "Portfolio", href: "/portfolio" },
              { name: "Careers", href: "/careers" },
              { name: "Contact", href: "/contact" },
            ].map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="relative px-3 py-1 rounded-md font-medium text-gray-800 transition-all duration-300 
                             after:absolute after:inset-0 after:rounded-md after:scale-0 after:bg-[#10D83D]/20 
                             after:transition-transform after:duration-300 hover:after:scale-100 hover:text-[#10D83D]"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Main content */}
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl font-bold text-black mb-6">About Our Agency</h1>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              At <span className="text-[#10D83D] font-semibold">BragAgency</span>,
              we pride ourselves on delivering innovative marketing,
              software, and design solutions that empower businesses to thrive.
              With a dedicated team and proven expertise, we create strategies
              that drive measurable growth.
            </p>
            <div className="flex gap-4">
              <button className="px-6 py-3 bg-[#10D83D] text-white font-medium rounded-lg hover:bg-green-600 transition">
                Get Started
              </button>
              <button className="px-6 py-3 border border-[#10D83D] text-[#10D83D] font-medium rounded-lg hover:bg-[#10D83D] hover:text-white transition">
                Free Consultation
              </button>
            </div>
          </div>
          <div>
            <img
              src="/about-hero.jpg"
              alt="About BragAgency"
              className="w-full rounded-xl shadow-lg object-cover"
            />
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-gray-50 px-6">
          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="text-4xl font-bold text-black">95%</h3>
              <p className="text-gray-600">Client satisfaction rate</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-black">10+</h3>
              <p className="text-gray-600">Years of innovation</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-black">$10M+</h3>
              <p className="text-gray-600">Value created for clients</p>
            </div>
          </div>
        </section>

        {/* Mission & Values */}
        <section className="py-20 px-6 max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-black mb-12">Our Mission & Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition">
              <Users className="h-10 w-10 text-[#10D83D] mb-4" />
              <h3 className="text-xl font-semibold text-black mb-2">Collaboration</h3>
              <p className="text-gray-700">
                We work side by side with our clients, building trust and delivering
                results together.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition">
              <Target className="h-10 w-10 text-[#10D83D] mb-4" />
              <h3 className="text-xl font-semibold text-black mb-2">Innovation</h3>
              <p className="text-gray-700">
                We embrace new ideas and cutting-edge technology to keep our
                clients ahead of the curve.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition">
              <Award className="h-10 w-10 text-[#10D83D] mb-4" />
              <h3 className="text-xl font-semibold text-black mb-2">Excellence</h3>
              <p className="text-gray-700">
                Quality is at the heart of everything we do, ensuring impactful
                and lasting results.
              </p>
            </div>
          </div>
        </section>

        {/* Highlights Section */}
        <section className="py-20 bg-gray-50 px-6">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <img
              src="/team-collaboration.jpg"
              alt="Team Collaboration"
              className="w-full rounded-xl shadow-md object-cover"
            />
            <div>
              <h2 className="text-3xl font-bold text-black mb-6">
                Why Businesses Trust Us
              </h2>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-center gap-3">
                  <CheckCircle className="text-[#10D83D] h-6 w-6" />
                  Measurable proven results
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="text-[#10D83D] h-6 w-6" />
                  Customized business strategies
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="text-[#10D83D] h-6 w-6" />
                  Reliable expert guidance
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="text-[#10D83D] h-6 w-6" />
                  Multi-industry expertise
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-white text-lg font-bold mb-4">BragAgency</h3>
            <p className="text-sm text-gray-400">
              Innovative marketing, design & software solutions that help
              businesses thrive in the modern world.
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              {[
                { name: "About Us", href: "/about" },
                { name: "Portfolio", href: "/portfolio" },
                { name: "Careers", href: "/careers" },
                { name: "Contact", href: "/contact" },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="relative inline-block px-2 py-1 rounded-md transition-all duration-300 
                               after:absolute after:inset-0 after:rounded-md after:scale-0 after:bg-[#10D83D]/20 
                               after:transition-transform after:duration-300 hover:after:scale-100 hover:text-[#10D83D]"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Follow Us</h4>
            <ul className="space-y-2">
              <li><a href="https://www.linkedin.com/company/108298687/" target="_blank" className="hover:text-[#10D83D] transition">LinkedIn</a></li>
              <li><a href="#" className="hover:text-[#10D83D] transition">Twitter</a></li>
              <li><a href="#" className="hover:text-[#10D83D] transition">Instagram</a></li>
              <li><a href="#" className="hover:text-[#10D83D] transition">TikTok</a></li>
            </ul>
          </div>
        </div>
        <div className="text-center text-gray-500 text-sm mt-12">
          © {new Date().getFullYear()} BragAgency. All rights reserved.
        </div>
      </footer>
    </div>
  )
}
