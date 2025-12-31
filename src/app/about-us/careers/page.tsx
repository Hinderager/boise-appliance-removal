import { Metadata } from 'next'
import { Phone, Truck, Clock, DollarSign } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Career Opportunities | Boise Appliance Removal',
  description: 'Join the Boise Appliance Removal team. We\'re hiring drivers, haulers, and customer service professionals in the Treasure Valley.',
  alternates: { canonical: 'https://boise-appliance-removal.com/about-us/careers' },
}

export default function CareersPage() {
  return (
    <main className="pt-20">
      <section className="py-16 bg-gradient-to-b from-dark-blue to-[#1a5a9e]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Join Our Team</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">We're looking for reliable people who like physical work and helping customers.</p>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none text-gray-600 mb-12">
              <p>Boise Appliance Removal is growing, and we need good people.</p>
              <p>If you're someone who shows up on time, works hard, and treats customers with respect, we'd like to talk to you. No fancy degrees required—just a solid work ethic and a clean driving record.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-gray-50 p-6 rounded-lg">
                <Truck className="w-10 h-10 text-[#FFC845] mb-4" />
                <h3 className="text-xl font-bold text-dark-blue mb-3">Drivers & Haulers</h3>
                <p className="text-gray-600 mb-4">Our core team. You'll drive the truck, haul appliances, and work directly with customers.</p>
                <ul className="text-gray-600 space-y-2">
                  <li>• Valid driver's license required</li>
                  <li>• Able to lift heavy items safely</li>
                  <li>• Friendly and professional with customers</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <Clock className="w-10 h-10 text-[#FFC845] mb-4" />
                <h3 className="text-xl font-bold text-dark-blue mb-3">What We Offer</h3>
                <ul className="text-gray-600 space-y-2">
                  <li>• Competitive hourly pay</li>
                  <li>• Flexible schedules available</li>
                  <li>• Local routes (home most nights)</li>
                  <li>• Room to grow within the company</li>
                </ul>
              </div>
            </div>
            <div className="bg-gradient-to-br from-slate-50 to-blue-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-dark-blue mb-4">Interested?</h3>
              <p className="text-gray-600 mb-4">Give us a call and we'll set up a time to chat. We're always looking for dependable people.</p>
              <a href="tel:2089435231" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-6 py-3 rounded-lg font-bold hover:bg-yellow-400 transition-colors">
                <Phone className="w-5 h-5" />(208) 943-5231
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
