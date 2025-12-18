import { Metadata } from 'next'
import { Phone, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Water Heater Removal in Eagle, Idaho | Boise Appliance Removal',
  description: 'Professional water heater removal in Eagle, ID. Fast service, upfront pricing, eco-friendly disposal. Call (208) 505-9352.',
  alternates: { canonical: 'https://boise-appliance-removal.com/eagle/water-heater-removal' },
}

export default function EagleWaterHeaterRemovalPage() {
  return (
    <main className="pt-20">
      <section className="py-16 bg-gradient-to-b from-dark-blue to-[#1a5a9e]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Water Heater Removal in Eagle</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">Fast, professional water heater removal for Eagle homes and businesses.</p>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none text-gray-600 mb-12">
              <p>We provide water heater removal throughout Eagle and the Treasure Valley.</p>
              <p>Call us, we'll give you a quote, and schedule a pickup that works for you. Usually same-day or next-day.</p>
            </div>
            <h2 className="text-2xl font-bold text-dark-blue mb-6">What We Do</h2>
            <div className="space-y-3 mb-12">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <p className="text-gray-700">Show up on time for your scheduled pickup</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <p className="text-gray-700">Handle all the heavy lifting and hauling</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <p className="text-gray-700">Recycle or dispose of items responsibly</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <p className="text-gray-700">Clean up any mess before we leave</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-12 bg-dark-blue text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-white mb-4">Serving Eagle and Surrounding Areas</h2>
          <a href="tel:2085059352" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-3 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
            <Phone className="w-5 h-5" />(208) 505-9352
          </a>
        </div>
      </section>
    </main>
  )
}
