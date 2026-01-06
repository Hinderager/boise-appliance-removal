import { Metadata } from 'next'
import { VisibleBreadcrumb } from '@/components/VisibleBreadcrumb'
import { Phone, Clock, Recycle, DollarSign, Truck, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Why Choose Us | Boise Appliance Removal',
  description: 'Why choose Boise Appliance Removal? Same-day service, eco-friendly disposal, upfront pricing, and no hidden fees. Serving the Treasure Valley.',
  alternates: { canonical: 'https://boise-appliance-removal.com/about-us/why-choose-us' },
}

export default function WhyChooseUsPage() {
  return (
    <main className="pt-20">
      <section className="py-16 bg-gradient-to-b from-dark-blue to-[#1a5a9e]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Why Choose Us</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">What makes us different from other appliance removal companies in Boise.</p>
        </div>
      </section>
      <VisibleBreadcrumb />
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none text-gray-600 mb-12">
              <p>You've got options when it comes to getting rid of old appliances. So why work with us?</p>
              <p>Here's what sets us apart.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-gray-50 p-6 rounded-lg">
                <Clock className="w-10 h-10 text-[#FFC845] mb-4" />
                <h3 className="text-xl font-bold text-dark-blue mb-3">Same-Day Service Available</h3>
                <p className="text-gray-600">Need that fridge gone today? We can usually make it happen. Call in the morning, and there's a good chance we'll be there that afternoon.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <DollarSign className="w-10 h-10 text-[#FFC845] mb-4" />
                <h3 className="text-xl font-bold text-dark-blue mb-3">No Hidden Fees</h3>
                <p className="text-gray-600">We'll quote you a price over the phone or after seeing the appliance. That's what you pay. No surprise charges for stairs, disposal fees, or "labor adjustments."</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <Recycle className="w-10 h-10 text-[#FFC845] mb-4" />
                <h3 className="text-xl font-bold text-dark-blue mb-3">Eco-Friendly Disposal</h3>
                <p className="text-gray-600">Most appliances are made of recyclable metal. We work with local recycling centers to keep as much material out of landfills as possible.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <Truck className="w-10 h-10 text-[#FFC845] mb-4" />
                <h3 className="text-xl font-bold text-dark-blue mb-3">We Do All the Work</h3>
                <p className="text-gray-600">You don't have to disconnect anything, drag it to the curb, or rent a truck. Just point at what needs to go and we'll handle the rest.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 bg-dark-blue text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">What You Can Expect</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-[#FFC845] flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold mb-1">We Show Up On Time</h4>
                  <p className="text-gray-300 text-sm">You'll get a call when we're on the way. If we're running late, we'll let you know.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-[#FFC845] flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold mb-1">We Clean Up After Ourselves</h4>
                  <p className="text-gray-300 text-sm">No scuff marks, no debris left behind. We'll sweep up if needed.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-[#FFC845] flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold mb-1">We're Respectful of Your Home</h4>
                  <p className="text-gray-300 text-sm">We'll protect your floors and walls while moving heavy items through your house.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-[#FFC845] flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold mb-1">We're Fully Insured</h4>
                  <p className="text-gray-300 text-sm">If something gets damaged during the removal, our insurance covers it.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-12 bg-gradient-to-br from-slate-50 to-blue-50 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-dark-blue mb-4">See the Difference for Yourself</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">Give us a call and we'll walk you through the process. No pressure, no sales pitch—just straight answers.</p>
          <a href="tel:2089435231" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-3 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
            <Phone className="w-5 h-5" />(208) 943-5231
          </a>
        </div>
      </section>
    </main>
  )
}
