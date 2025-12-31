import { Metadata } from 'next'
import Link from 'next/link'
import { Phone, HelpCircle, DollarSign, List, Recycle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Resources | Boise Appliance Removal',
  description: 'Helpful resources for appliance removal in Boise. FAQs, pricing guides, recycling info, and what we take.',
  alternates: { canonical: 'https://boise-appliance-removal.com/resources' },
}

export default function ResourcesPage() {
  return (
    <main className="pt-20">
      <section className="py-16 bg-gradient-to-b from-dark-blue to-[#1a5a9e]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Appliance Removal Resources</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">Everything you need to know about appliance removal in Boise.</p>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none text-gray-600 mb-12">
              <p>Got questions about getting rid of old appliances? You're in the right place.</p>
              <p>We've put together guides on pricing, what we take, recycling options, and answers to the most common questions we get.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <Link href="/resources/faq" className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-shadow">
                <HelpCircle className="w-10 h-10 text-[#FFC845] mb-4" />
                <h3 className="text-xl font-bold text-dark-blue mb-2">Frequently Asked Questions</h3>
                <p className="text-gray-600">Common questions about our appliance removal service, pricing, and what to expect.</p>
              </Link>
              <Link href="/resources/pricing" className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-shadow">
                <DollarSign className="w-10 h-10 text-[#FFC845] mb-4" />
                <h3 className="text-xl font-bold text-dark-blue mb-2">Pricing Guide</h3>
                <p className="text-gray-600">How we price appliance removal and what factors affect the cost.</p>
              </Link>
              <Link href="/resources/what-we-take" className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-shadow">
                <List className="w-10 h-10 text-[#FFC845] mb-4" />
                <h3 className="text-xl font-bold text-dark-blue mb-2">What We Take</h3>
                <p className="text-gray-600">Complete list of appliances we remove, from refrigerators to commercial equipment.</p>
              </Link>
              <Link href="/resources/recycling" className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-shadow">
                <Recycle className="w-10 h-10 text-[#FFC845] mb-4" />
                <h3 className="text-xl font-bold text-dark-blue mb-2">Recycling & Disposal</h3>
                <p className="text-gray-600">How we recycle appliances and why it matters for the environment.</p>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="py-12 bg-dark-blue text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-white mb-4">Still Have Questions?</h2>
          <p className="text-gray-200 mb-6">Give us a call. We're happy to help.</p>
          <a href="tel:2089435231" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-3 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
            <Phone className="w-5 h-5" />(208) 943-5231
          </a>
        </div>
      </section>
    </main>
  )
}
