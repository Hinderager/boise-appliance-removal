import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { DollarSign, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'How Much Does Appliance Removal Cost in Boise? 2025 Pricing | Appliance Removal Pros',
  description: 'Appliance removal in Boise costs $75-200. Get the real breakdown of pricing factors for hauling away old refrigerators, washers, and more in the Treasure Valley.',
  alternates: {
    canonical: 'https://boise-appliance-removal.com/blogs/how-much-does-appliance-removal-cost',
  },
}

export default function HowMuchDoesApplianceRemovalCost() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-[300px] md:h-[400px] flex items-end">
        <Image
          src="/generated/appliance-removal-cost.webp"
          alt="Appliance Removal Cost in Boise Idaho"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-blue/90 via-dark-blue/50 to-transparent" />
        <div className="relative z-10 container mx-auto px-4 pb-12">
          <Link
            href="/blogs"
            className="inline-flex items-center text-white/80 hover:text-white mb-4 transition-colors"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Blog
          </Link>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            How Much Does Appliance Removal Cost in Boise?
          </h1>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              Let's get straight to the numbers. In Boise, you'll typically pay between $75 and $200 for professional appliance removal.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              That's a big range, so let me explain what affects the price. Whether you're hauling away an old refrigerator in Meridian or getting rid of a washer-dryer set in Nampa, understanding these factors helps you budget accurately.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Here's what actually determines what you'll pay for appliance removal in the Treasure Valley.
            </p>
          </div>
        </div>
      </section>

      {/* Cost Factors */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-dark-blue rounded-full flex items-center justify-center">
                <DollarSign className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gunmetal">
                The Main Cost Factors
              </h2>
            </div>

            <h3 className="text-xl font-bold text-gunmetal mb-4">Type and Size of Appliance</h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              A small microwave costs less to remove than a side-by-side refrigerator. Makes sense—bigger items require more labor and take up more truck space.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              Here's a rough breakdown: Small appliances like microwaves and window AC units run $50-75. Medium appliances—washers, dryers, dishwashers—cost $75-125. Large appliances like refrigerators and stoves are $100-175. Extra large commercial units or built-in appliances can run $150-250.
            </p>

            <h3 className="text-xl font-bold text-gunmetal mb-4">Location and Access</h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              Getting an appliance out of a ground-floor garage is straightforward. Getting a 300-pound refrigerator down a narrow basement staircase with a turn at the bottom? That's a different story. Difficult access adds to the price because it takes more time and sometimes requires additional crew members.
            </p>

            <h3 className="text-xl font-bold text-gunmetal mb-4">Number of Items</h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              Here's where you can actually save money. Most removal services offer better per-item pricing when you're getting rid of multiple appliances at once. If you've been putting off that basement cleanout because you have three old appliances down there, bundle them together. You'll pay less per item than removing them separately.
            </p>

            <h3 className="text-xl font-bold text-gunmetal mb-4">Disconnection Requirements</h3>
            <p className="text-gray-600 leading-relaxed">
              Most appliance removal services assume the item is already disconnected. If your washer is still hooked up to the water lines, or your stove is connected to gas, that's additional work. We can handle disconnection, but it adds to the cost. If you're comfortable doing it yourself (electric appliances are usually straightforward), you'll save money.
            </p>
          </div>
        </div>
      </section>

      {/* Comparing Options */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gunmetal mb-6">
              Comparing Your Options in Boise
            </h2>

            <p className="text-gray-600 leading-relaxed mb-6">
              Professional removal isn't the only way to go. Here's how the costs stack up:
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>DIY with Truck Rental:</strong> $50-100 plus your time and effort. You'll need someone to help with heavy items, and you'll need to find a proper disposal facility that accepts appliances.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Retailer Haul-Away:</strong> $15-50 but only when buying new. Can't use this option for getting rid of appliances without a purchase.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Utility Rebate Programs:</strong> Free (and you get paid) but only for refrigerators and freezers. Idaho Power offers $30-50 for qualifying units in the Treasure Valley.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Scrap Metal Recyclers:</strong> Free or you might make a few dollars. You need to transport it yourself and handle refrigerant removal for fridges and AC units.
            </p>

            <p className="text-gray-600 leading-relaxed">
              <strong>Professional Removal:</strong> $75-200. We do all the work, handle disposal properly, and you're done in one appointment.
            </p>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-12 md:py-16 bg-dark-blue text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              What's Included in Professional Appliance Removal?
            </h2>

            <p className="text-blue-100 leading-relaxed mb-6">
              When you hire a legitimate appliance removal service in Boise, you should get:
            </p>

            <div className="space-y-3 mb-6">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <span className="text-blue-100">Pickup from wherever the appliance is located—garage, basement, kitchen</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <span className="text-blue-100">All labor and loading included</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <span className="text-blue-100">Proper transportation and responsible disposal</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <span className="text-blue-100">Same-day or next-day service availability</span>
              </div>
            </div>

            <p className="text-blue-100 leading-relaxed">
              Some companies charge extra for stairs, long carries, or same-day service. We don't nickel and dime—the price we quote is the price you pay.
            </p>
          </div>
        </div>
      </section>

      {/* Getting a Quote */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gunmetal mb-6">
              Getting an Accurate Quote
            </h2>

            <p className="text-gray-600 leading-relaxed mb-6">
              The best way to know exactly what you'll pay is to describe your situation honestly when you call. Tell us what appliance(s) you have, where they're located, whether they're connected or disconnected, and any access challenges.
            </p>

            <p className="text-gray-600 leading-relaxed">
              With that information, we can give you a firm price before we show up. No surprises.
            </p>
          </div>
        </div>
      </section>

      {/* Bottom Line */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gunmetal mb-6">
              Is Professional Removal Worth It?
            </h2>

            <p className="text-gray-600 leading-relaxed mb-6">
              That depends on your situation. If you have a truck, a strong friend, and time to deal with disposal facilities, DIY can save money.
            </p>

            <p className="text-gray-600 leading-relaxed mb-6">
              But if you value your time, don't want to risk injury moving heavy items, or just want the problem solved today, professional removal is usually worth every penny.
            </p>

            <p className="text-gray-600 leading-relaxed">
              Most of our Boise customers tell us the same thing: "I should have called sooner."
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-gunmetal mb-4">
              Need an Appliance Removed?
            </h2>
            <p className="text-gray-600 mb-8">
              Get a free quote for appliance removal anywhere in the Treasure Valley. We'll give you a firm price upfront.
            </p>
            <a
              href="tel:2083611982"
              className="inline-block bg-dark-blue hover:bg-light-blue text-white font-bold text-lg px-8 py-4 rounded-lg transition-colors"
            >
              Call (208) 361-1982
            </a>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-gunmetal mb-8 text-center">
            More Appliance Removal Tips
          </h2>
          <div className="text-center">
            <Link
              href="/blogs"
              className="inline-flex items-center text-dark-blue font-semibold hover:text-light-blue transition-colors"
            >
              View All Posts
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
