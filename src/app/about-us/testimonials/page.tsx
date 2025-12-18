import { Metadata } from 'next'
import { Phone, Star } from 'lucide-react'
import { GoogleReviews } from '@/components/GoogleReviews'

export const metadata: Metadata = {
  title: 'Customer Reviews | Boise Appliance Removal',
  description: 'Read reviews from Boise homeowners and businesses who used our appliance removal service. Real feedback from real customers.',
  alternates: { canonical: 'https://boise-appliance-removal.com/about-us/testimonials' },
}

export default function TestimonialsPage() {
  return (
    <main className="pt-20">
      <section className="py-16 bg-gradient-to-b from-dark-blue to-[#1a5a9e]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Customer Reviews</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">See what people are saying about our appliance removal service.</p>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none text-gray-600 mb-12">
              <p>We're proud of the work we do, but don't just take our word for it.</p>
              <p>Here's what Boise-area homeowners and businesses have to say about working with us.</p>
            </div>
          </div>
        </div>
      </section>
      <GoogleReviews />
      <section className="py-12 bg-dark-blue text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-white mb-4">Ready to Schedule Your Pickup?</h2>
          <a href="tel:2085059352" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-3 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
            <Phone className="w-5 h-5" />(208) 505-9352
          </a>
        </div>
      </section>
    </main>
  )
}
