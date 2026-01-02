import { Metadata } from 'next'
import { Phone, CheckCircle } from 'lucide-react'
import { QuickQuoteBar } from '@/components/QuickQuoteBar'

export const metadata: Metadata = {
  title: 'Refrigerator Removal in Boise | Boise Appliance Removal',
  description: 'Professional refrigerator and freezer removal in Boise, Idaho. Fast, professional service with eco-friendly disposal.',
  alternates: { canonical: 'https://boise-appliance-removal.com/services/kitchen-appliances/refrigerator-removal' },
}

export default function RefrigeratorRemovalPage() {
  return (
    <main className="pt-20">
      <section className="py-16 bg-gradient-to-b from-dark-blue to-[#1a5a9e]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Refrigerator Removal in Boise</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">Professional refrigerator and freezer removal throughout the Treasure Valley.</p>
        </div>
      </section>
      <QuickQuoteBar />
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none text-gray-600 mb-12">
              <p>Got an old unit you need gone? We'll handle it.</p>
              <p>Call us, schedule a pickup, and we'll do the heavy lifting. Most jobs are done same-day or next-day.</p>
            </div>
            <h2 className="text-2xl font-bold text-dark-blue mb-6">What's Included</h2>
            <div className="space-y-3 mb-12">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <p className="text-gray-700">Free on-site quote</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <p className="text-gray-700">Complete removal and hauling</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <p className="text-gray-700">Eco-friendly recycling when possible</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <p className="text-gray-700">Cleanup after we're done</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-12 bg-dark-blue text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-white mb-4">Ready to Schedule?</h2>
          <a href="tel:2089435231" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-3 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
            <Phone className="w-5 h-5" />(208) 943-5231
          </a>
        </div>
      </section>
    </main>
  )
}
