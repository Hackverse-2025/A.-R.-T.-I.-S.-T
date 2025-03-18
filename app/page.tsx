import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CheckCircle } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0e14] text-white">
      {/* Header */}
      <header className="container mx-auto py-6 px-4">
        <div className="flex items-center">
          <Image
            src="/placeholder.svg?height=30&width=120"
            alt="TopicTrail Logo"
            width={120}
            height={30}
            className="h-8"
          />
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">Empowering academic excellence</h1>
            <p className="text-lg text-gray-300">Discover Your Academic Potential.</p>
            <p className="text-sm text-gray-400">
              Stand out as a serious student with our comprehensive, personalized academic assistance, guidance, and
              mentoring service for exceptional students.
            </p>
            <div className="pt-4">
              <Link
                href="https://paperpilotai.tech/"
                className="inline-flex items-center gap-2 bg-transparent border border-[#4cd3c2] text-[#4cd3c2] px-4 py-2 rounded-md hover:bg-[#4cd3c2]/10 transition-colors"
              >
                Start your academic journey now <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="bg-[#0e1b33] rounded-3xl p-6 relative overflow-hidden">
              <Image
                src="/placeholder.svg?height=400&width=400"
                alt="Academic Excellence Illustration"
                width={400}
                height={400}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16 md:py-24 bg-[#0c1220] rounded-3xl">
        <div className="text-center mb-12">
          <p className="text-sm text-gray-400 mb-2">Take a tour of our</p>
          <h2 className="text-2xl md:text-3xl font-bold">Discover How We Can Help</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-[#0e1b33] p-6 rounded-xl">
            <div className="mb-4">
              <div className="bg-[#0c1220] p-3 rounded-lg inline-block">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="4" y="2" width="16" height="20" rx="2" stroke="#4cd3c2" strokeWidth="2" />
                  <line x1="8" y1="6" x2="16" y2="6" stroke="#4cd3c2" strokeWidth="2" />
                  <line x1="8" y1="10" x2="16" y2="10" stroke="#4cd3c2" strokeWidth="2" />
                  <line x1="8" y1="14" x2="16" y2="14" stroke="#4cd3c2" strokeWidth="2" />
                  <line x1="8" y1="18" x2="12" y2="18" stroke="#4cd3c2" strokeWidth="2" />
                </svg>
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-2">Curriculum Assistance</h3>
            <p className="text-sm text-gray-400">
              Access comprehensive curriculum resources designed to enhance your academic learning process.
            </p>
          </div>
          <div className="bg-[#0e1b33] p-6 rounded-xl">
            <div className="mb-4">
              <div className="bg-[#0c1220] p-3 rounded-lg inline-block">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="8" stroke="#4cd3c2" strokeWidth="2" />
                  <path d="M12 8V12L15 15" stroke="#4cd3c2" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-2">Topic Exploration</h3>
            <p className="text-sm text-gray-400">
              Discover and explore topics that align with your interests and academic goals.
            </p>
          </div>
          <div className="bg-[#0e1b33] p-6 rounded-xl">
            <div className="mb-4">
              <div className="bg-[#0c1220] p-3 rounded-lg inline-block">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M3 17L9 11L13 15L21 7"
                    stroke="#4cd3c2"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path d="M17 7H21V11" stroke="#4cd3c2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-2">Resource Roadmaps</h3>
            <p className="text-sm text-gray-400">
              Find the resources and guidance you need to excel in your academic career or field.
            </p>
          </div>
        </div>
        <div className="text-center mt-12">
          <p className="text-sm text-gray-400 max-w-xl mx-auto">
            Our AI-driven learning tool facilitates personalized educational experiences, comprehensive curriculum
            assistance, topic exploration, resource roadmaps, academic planning, and community network.
          </p>
        </div>
      </section>

      {/* AI Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-[#4cd3c2]">
            AI - Powered Engagement Redefining The Potential Of Your Website
          </h2>
        </div>
      </section>

      {/* All in one tool Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-8 bg-[#0c1220] p-8 rounded-3xl">
          <div>
            <h2 className="text-2xl font-bold mb-8">All in one tool</h2>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=200&width=400"
                alt="Workflow Diagram"
                width={400}
                height={200}
                className="w-full h-auto"
              />
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-6">Why TopicTrail Stands Out</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-[#4cd3c2] mt-0.5 flex-shrink-0" />
                <span>Specialized Academic Support</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-[#4cd3c2] mt-0.5 flex-shrink-0" />
                <span>Comprehensive Features</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-[#4cd3c2] mt-0.5 flex-shrink-0" />
                <span>Ethical and Accessible Resources</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Comparison Table Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="bg-[#0c1220] p-8 rounded-3xl">
          <h2 className="text-2xl font-bold mb-2">Choosing The Right Academic Companion</h2>
          <p className="text-sm text-gray-400 mb-8">
            Select the tool that best fits your academic needs with our comparison data.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="text-left text-gray-400 border-b border-gray-800">
                <tr>
                  <th className="pb-3">Features</th>
                  <th className="pb-3">TopicTrail</th>
                  <th className="pb-3">Platform A</th>
                  <th className="pb-3">Platform B</th>
                  <th className="pb-3">Platform C</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-800">
                <tr>
                  <td className="py-3">Academic Support</td>
                  <td className="py-3 text-[#4cd3c2]">Comprehensive</td>
                  <td className="py-3">Basic</td>
                  <td className="py-3">Limited</td>
                  <td className="py-3">Moderate</td>
                </tr>
                <tr>
                  <td className="py-3">Study Tools</td>
                  <td className="py-3 text-[#4cd3c2]">Advanced</td>
                  <td className="py-3">Basic</td>
                  <td className="py-3">Moderate</td>
                  <td className="py-3">Limited</td>
                </tr>
                <tr>
                  <td className="py-3">AI Integration</td>
                  <td className="py-3 text-[#4cd3c2]">Full</td>
                  <td className="py-3">Partial</td>
                  <td className="py-3">None</td>
                  <td className="py-3">Limited</td>
                </tr>
                <tr>
                  <td className="py-3">Resource Library</td>
                  <td className="py-3 text-[#4cd3c2]">Extensive</td>
                  <td className="py-3">Limited</td>
                  <td className="py-3">Moderate</td>
                  <td className="py-3">Basic</td>
                </tr>
                <tr>
                  <td className="py-3">Pricing</td>
                  <td className="py-3 text-[#4cd3c2]">Flexible</td>
                  <td className="py-3">Expensive</td>
                  <td className="py-3">Moderate</td>
                  <td className="py-3">Free & paid</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="bg-[#0c1220] p-8 rounded-3xl">
          <div className="text-center mb-12">
            <p className="text-sm text-gray-400 mb-2">EASY</p>
            <h2 className="text-2xl md:text-3xl font-bold">
              Get Started with TopicTrail
              <br />
              in 3 Simple Steps
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-[#0e1b33] p-6 rounded-xl relative">
              <div className="absolute -top-4 -left-4 bg-[#4cd3c2] text-[#0c1220] w-8 h-8 rounded-full flex items-center justify-center font-bold">
                1
              </div>
              <h3 className="text-xl font-semibold mb-4">Identify Your Learning Goals</h3>
              <p className="text-sm text-gray-400">
                Set clear objectives and identify your academic priorities to get the most out of your learning
                experience.
              </p>
            </div>
            <div className="bg-[#0e1b33] p-6 rounded-xl relative">
              <div className="absolute -top-4 -left-4 bg-[#4cd3c2] text-[#0c1220] w-8 h-8 rounded-full flex items-center justify-center font-bold">
                2
              </div>
              <h3 className="text-xl font-semibold mb-4">Organize Your Research</h3>
              <p className="text-sm text-gray-400">
                Discover relevant topics and organize your research materials efficiently with our intuitive tools.
              </p>
            </div>
            <div className="bg-[#0e1b33] p-6 rounded-xl relative">
              <div className="absolute -top-4 -left-4 bg-[#4cd3c2] text-[#0c1220] w-8 h-8 rounded-full flex items-center justify-center font-bold">
                3
              </div>
              <h3 className="text-xl font-semibold mb-4">Finalize Your Work</h3>
              <p className="text-sm text-gray-400">
                Use our tools to refine and finalize your academic work to ensure it meets the highest standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Second Features Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-[#4cd3c2]">Empowering Academic Excellence</h2>
          <p className="text-sm text-gray-400 mt-4 max-w-2xl mx-auto">
            Our platform provides comprehensive tools and resources to help students excel in their academic pursuits,
            from research to writing to presentation.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-[#0e1b33] p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-4">Simplify Learning</h3>
            <p className="text-sm text-gray-400">
              Access organized content and tools to streamline your learning process.
            </p>
          </div>
          <div className="bg-[#0e1b33] p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-4">Streamline Research</h3>
            <p className="text-sm text-gray-400">
              Efficiently organize and analyze research materials for better outcomes.
            </p>
          </div>
          <div className="bg-[#0e1b33] p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-4">Foster Academic Success</h3>
            <p className="text-sm text-gray-400">Leverage tools to achieve academic excellence and reach your goals.</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="bg-[#0e1b33] p-8 md:p-12 rounded-3xl">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-[#4cd3c2] mb-4">Ready to Supercharge Your Academics?</h2>
            <Link
              href="#"
              className="inline-flex items-center gap-2 bg-transparent border border-[#4cd3c2] text-[#4cd3c2] px-6 py-3 rounded-md hover:bg-[#4cd3c2]/10 transition-colors mt-6"
            >
              Get started with our Chrome extension <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0c1220] py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <Image
              src="/placeholder.svg?height=30&width=120"
              alt="TopicTrail Logo"
              width={120}
              height={30}
              className="h-8 mb-6 md:mb-0"
            />
            <div className="flex gap-8">
              <Link href="#" className="text-sm hover:text-[#4cd3c2]">
                Features
              </Link>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-12">
            <div className="text-center mb-8">
              <h3 className="text-xl font-bold mb-6">Stay Connected</h3>
              <div className="flex max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Email address"
                  className="flex-grow bg-[#0e1b33] border border-gray-700 rounded-l-full px-4 py-2 text-sm focus:outline-none focus:border-[#4cd3c2]"
                />
                <button className="bg-[#4cd3c2] text-[#0c1220] rounded-r-full px-6 py-2 text-sm font-medium">
                  Subscribe
                </button>
              </div>
            </div>
            <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-400">
              <div className="flex gap-4 mb-4 md:mb-0">
                <Link href="#" className="hover:text-[#4cd3c2]">
                  Terms of Service
                </Link>
                <Link href="#" className="hover:text-[#4cd3c2]">
                  Privacy Policy
                </Link>
              </div>
              <div className="flex gap-4">
                <Link href="#" className="hover:text-[#4cd3c2]">
                  LinkedIn
                </Link>
                <Link href="#" className="hover:text-[#4cd3c2]">
                  Instagram
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

