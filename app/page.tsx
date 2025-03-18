import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0e17] to-[#0d1321] text-white">
      {/* Header */}
      <header className="container mx-auto py-6 px-4 flex justify-between items-center">
        <div className="flex items-center">
          <Image
            src="/placeholder.svg?height=32&width=120"
            alt="TopicTrail Logo"
            width={120}
            height={32}
            className="h-8"
          />
        </div>
        <nav className="hidden md:flex items-center gap-8">
          <Link href="#features" className="text-gray-300 hover:text-teal-400 transition">
            Features
          </Link>
          <Link href="#pricing" className="text-gray-300 hover:text-teal-400 transition">
            Pricing
          </Link>
          <Link href="#about" className="text-gray-300 hover:text-teal-400 transition">
            About
          </Link>
          <Button variant="outline" className="border-teal-400 text-teal-400 hover:bg-teal-400/10">
            Log in
          </Button>
          <Button className="bg-teal-400 text-[#0a0e17] hover:bg-teal-500">Sign up</Button>
        </nav>
        <Button variant="ghost" className="md:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
          </svg>
        </Button>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-24 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Empowering academic excellence</h1>
          <p className="text-xl text-gray-300 mb-6">Discover Your Academic Potential.</p>
          <p className="text-gray-400 mb-8 max-w-md">
            Unlock your academic potential with our comprehensive, AI-powered platform for research, curriculum
            planning, and mastering writing for academic success.
          </p>
          <Button className="bg-teal-400 text-[#0a0e17] hover:bg-teal-500 px-6 py-6 rounded-md flex items-center gap-2 text-base">
            Start your academic journey now <ArrowRight size={16} />
          </Button>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <div className="relative w-full max-w-md aspect-square">
            <div className="absolute inset-0 bg-[#1a2333] rounded-3xl overflow-hidden border border-[#2a3343]">
              <div className="absolute inset-0 flex items-center justify-center">
                <Image
                  src="/placeholder.svg?height=400&width=400"
                  alt="Academic visualization"
                  width={400}
                  height={400}
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16 md:py-24" id="features">
        <div className="text-center mb-16">
          <p className="text-teal-400 mb-2 uppercase tracking-wider text-sm">Features we offer</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Discover How We Can Help</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Our AI-driven learning tool facilitates curriculum exploration, personalized study plans, and resource
            recommendations, enhancing academic performance and streamlining research.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <Card className="bg-[#1a2333] border-[#2a3343] p-6 rounded-xl">
            <div className="mb-4 bg-[#0d1321] p-3 rounded-lg w-12 h-12 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-teal-400"
              >
                <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Curriculum Assistance</h3>
            <p className="text-gray-400 mb-4">
              Analyze course materials and generate comprehensive learning materials.
            </p>
          </Card>

          {/* Feature 2 */}
          <Card className="bg-[#1a2333] border-[#2a3343] p-6 rounded-xl">
            <div className="mb-4 bg-[#0d1321] p-3 rounded-lg w-12 h-12 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-teal-400"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                <path d="M2 12h20" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Topic Exploration</h3>
            <p className="text-gray-400 mb-4">
              Discover related topics and build a strong foundation for your research.
            </p>
          </Card>

          {/* Feature 3 */}
          <Card className="bg-[#1a2333] border-[#2a3343] p-6 rounded-xl">
            <div className="mb-4 bg-[#0d1321] p-3 rounded-lg w-12 h-12 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-teal-400"
              >
                <path d="M14 5.5a2.5 2.5 0 0 0-5 0v13a2.5 2.5 0 0 0 5 0z" />
                <path d="M8.5 2.5a2.5 2.5 0 0 0-5 0v13a2.5 2.5 0 0 0 5 0z" />
                <path d="M19.5 2.5a2.5 2.5 0 0 0-5 0v13a2.5 2.5 0 0 0 5 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Resource Roadmaps</h3>
            <p className="text-gray-400 mb-4">Find the resources and references you need for your academic success.</p>
          </Card>
        </div>
      </section>

      {/* AI Section */}
      <section className="container mx-auto px-4 py-16 md:py-24 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-teal-400">AI - Powered Engagement</h2>
        <p className="text-2xl md:text-3xl font-semibold mb-8">Redefining The Potential Of Your Website</p>
        <Button className="bg-[#1a2333] border border-[#2a3343] hover:bg-[#2a3343] text-white">Learn More</Button>
      </section>

      {/* All in One Tool Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="flex flex-col md:flex-row gap-12">
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">All in one tool!</h2>
            <div className="bg-[#1a2333] border border-[#2a3343] rounded-xl p-6">
              <Image
                src="/placeholder.svg?height=300&width=500"
                alt="Platform visualization"
                width={500}
                height={300}
                className="w-full rounded-lg"
              />
            </div>
          </div>
          <div className="md:w-1/2">
            <h3 className="text-2xl font-bold mb-6">Why TopicTrail Stands Out</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="mt-1 bg-teal-400 rounded-full p-1">
                  <Check size={16} className="text-[#0a0e17]" />
                </div>
                <div>
                  <h4 className="font-semibold">Specialized Academic Support</h4>
                  <p className="text-gray-400">Tailored assistance for your specific academic needs</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 bg-teal-400 rounded-full p-1">
                  <Check size={16} className="text-[#0a0e17]" />
                </div>
                <div>
                  <h4 className="font-semibold">Comprehensive Features</h4>
                  <p className="text-gray-400">Everything you need in one integrated platform</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 bg-teal-400 rounded-full p-1">
                  <Check size={16} className="text-[#0a0e17]" />
                </div>
                <div>
                  <h4 className="font-semibold">Ethical and Accessible Resources</h4>
                  <p className="text-gray-400">Properly cited and accessible academic materials</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Choosing The Right
          <br />
          Academic Companion
        </h2>
        <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          Select the tool that best fits your academic needs with our comparison data.
        </p>

        <div className="overflow-x-auto">
          <div className="bg-[#1a2333] border border-[#2a3343] rounded-xl p-6 min-w-[768px]">
            <table className="w-full">
              <thead>
                <tr className="border-b border-[#2a3343]">
                  <th className="text-left py-4 px-4">Features</th>
                  <th className="text-left py-4 px-4">TopicTrail</th>
                  <th className="text-left py-4 px-4">Platform A</th>
                  <th className="text-left py-4 px-4">Platform B</th>
                  <th className="text-left py-4 px-4">Platform C</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[#2a3343]">
                  <td className="py-4 px-4">AI Research Assistant</td>
                  <td className="py-4 px-4 text-teal-400">Yes</td>
                  <td className="py-4 px-4">Limited</td>
                  <td className="py-4 px-4">No</td>
                  <td className="py-4 px-4">Yes</td>
                </tr>
                <tr className="border-b border-[#2a3343]">
                  <td className="py-4 px-4">Study Plan Generation</td>
                  <td className="py-4 px-4 text-teal-400">Yes</td>
                  <td className="py-4 px-4">No</td>
                  <td className="py-4 px-4">Limited</td>
                  <td className="py-4 px-4">No</td>
                </tr>
                <tr className="border-b border-[#2a3343]">
                  <td className="py-4 px-4">Resource Recommendations</td>
                  <td className="py-4 px-4 text-teal-400">Yes</td>
                  <td className="py-4 px-4">Yes</td>
                  <td className="py-4 px-4">Limited</td>
                  <td className="py-4 px-4">No</td>
                </tr>
                <tr className="border-b border-[#2a3343]">
                  <td className="py-4 px-4">Citation Management</td>
                  <td className="py-4 px-4 text-teal-400">Yes</td>
                  <td className="py-4 px-4">No</td>
                  <td className="py-4 px-4">Yes</td>
                  <td className="py-4 px-4">Limited</td>
                </tr>
                <tr>
                  <td className="py-4 px-4">Pricing</td>
                  <td className="py-4 px-4 text-teal-400">$9.99/mo</td>
                  <td className="py-4 px-4">$14.99/mo</td>
                  <td className="py-4 px-4">$19.99/mo</td>
                  <td className="py-4 px-4">Free w/ ads</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Get Started Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get Started with TopicTrail
          <br />
          in 3 Simple Steps
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {/* Step 1 */}
          <div className="bg-[#1a2333] border border-[#2a3343] rounded-xl p-6 relative">
            <div className="absolute -top-6 -left-2 bg-teal-400 text-[#0a0e17] w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl">
              1
            </div>
            <h3 className="text-xl font-semibold mb-4 mt-4">Identify Your Learning Goals</h3>
            <p className="text-gray-400">
              Set clear objectives and identify your academic priorities to maximize your learning journey.
            </p>
          </div>

          {/* Step 2 */}
          <div className="bg-[#1a2333] border border-[#2a3343] rounded-xl p-6 relative">
            <div className="absolute -top-6 -left-2 bg-teal-400 text-[#0a0e17] w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl">
              2
            </div>
            <h3 className="text-xl font-semibold mb-4 mt-4">Organize Your Research</h3>
            <p className="text-gray-400">
              Discover related topics and build a strong foundation for your academic projects and papers.
            </p>
          </div>

          {/* Step 3 */}
          <div className="bg-[#1a2333] border border-[#2a3343] rounded-xl p-6 relative">
            <div className="absolute -top-6 -left-2 bg-teal-400 text-[#0a0e17] w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl">
              3
            </div>
            <h3 className="text-xl font-semibold mb-4 mt-4">Finalize Your Work</h3>
            <p className="text-gray-400">
              Use our tools to polish your work, ensure proper citations, and create professional academic content.
            </p>
          </div>
        </div>
      </section>

      {/* Second Features Section */}
      <section className="container mx-auto px-4 py-16 md:py-24 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Empowering Academic Excellence</h2>
        <p className="text-gray-400 max-w-2xl mx-auto mb-12">
          Our platform provides comprehensive tools to enhance your academic journey, from research to writing and
          presentation.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="bg-[#1a2333] border border-[#2a3343] rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-4">Simplify Learning</h3>
            <p className="text-gray-400">
              Break complex concepts into manageable learning modules for better understanding.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-[#1a2333] border border-[#2a3343] rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-4">Streamline Research</h3>
            <p className="text-gray-400">
              Efficiently organize and analyze research materials to save time and improve quality.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-[#1a2333] border border-[#2a3343] rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-4">Foster Academic Success</h3>
            <p className="text-gray-400">
              Develop skills and strategies that lead to improved academic performance and outcomes.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="bg-gradient-to-r from-[#1a2333] to-[#2a3343] rounded-2xl p-8 md:p-12 text-center md:text-left flex flex-col md:flex-row items-center justify-between">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-teal-400">
              Ready to Supercharge Your
              <br />
              Academics?
            </h2>
            <Button className="bg-teal-400 text-[#0a0e17] hover:bg-teal-500 px-6 py-6 rounded-md flex items-center gap-2 text-base">
              Get started with our Chrome extension <ArrowRight size={16} />
            </Button>
          </div>
          <div className="mt-8 md:mt-0">
            <Image
              src="/placeholder.svg?height=200&width=200"
              alt="Chrome extension"
              width={200}
              height={200}
              className="rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0a0e17] border-t border-[#2a3343] py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <div className="mb-8 md:mb-0">
              <Image
                src="/placeholder.svg?height=32&width=120"
                alt="TopicTrail Logo"
                width={120}
                height={32}
                className="h-8"
              />
            </div>
            <nav className="flex gap-8">
              <Link href="#features" className="text-gray-300 hover:text-teal-400 transition">
                Features
              </Link>
              <Link href="#pricing" className="text-gray-300 hover:text-teal-400 transition">
                Pricing
              </Link>
              <Link href="#about" className="text-gray-300 hover:text-teal-400 transition">
                About
              </Link>
              <Link href="#contact" className="text-gray-300 hover:text-teal-400 transition">
                Contact
              </Link>
            </nav>
          </div>

          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold mb-6">Stay Connected</h3>
            <div className="flex max-w-md mx-auto">
              <input
                type="email"
                placeholder="Email address"
                className="flex-1 bg-[#1a2333] border border-[#2a3343] rounded-l-full px-4 py-2 text-white focus:outline-none focus:border-teal-400"
              />
              <Button className="bg-teal-400 text-[#0a0e17] hover:bg-teal-500 rounded-r-full">Subscribe</Button>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
            <div className="flex gap-4 mb-4 md:mb-0">
              <Link href="/terms" className="hover:text-teal-400">
                Terms of Service
              </Link>
              <Link href="/privacy" className="hover:text-teal-400">
                Privacy Policy
              </Link>
            </div>
            <div className="flex gap-4">
              <Link href="#" className="hover:text-teal-400">
                LinkedIn
              </Link>
              <Link href="#" className="hover:text-teal-400">
                Instagram
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

