import { Metadata } from 'next'
import { Phone } from 'lucide-react'
import { FAQ } from '@/components/FAQ'

export const metadata: Metadata = {
  title: 'FAQ | Boise Appliance Removal',
  description: 'Frequently asked questions about appliance removal in Boise. Pricing, scheduling, what we take, and how the process works.',
  alternates: { canonical: 'https://boise-appliance-removal.com/resources/faq' },
}

export default function FAQPage() {
  return (
    <main className="pt-20">
      <section className="py-16 bg-gradient-to-b from-dark-blue to-[#1a5a9e]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Frequently Asked Questions</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">Common questions about our appliance removal service in Boise.</p>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none text-gray-600 mb-12">
              <p>We get a lot of the same questions from customers. Here are the answers to the most common ones.</p>
              <p>Don't see your question below? Give us a call and we'll walk you through it.</p>
            </div>
          </div>
        </div>
      </section>
      <FAQ />
      <section className="py-12 bg-dark-blue text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-white mb-4">Didn't Find Your Answer?</h2>
          <p className="text-gray-200 mb-6">Call us and we'll help you out.</p>
          <a href="tel:2085059352" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-3 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
            <Phone className="w-5 h-5" />(208) 505-9352
          </a>
        </div>
      </section>
    </main>
  )
}
