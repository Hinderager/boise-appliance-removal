import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { HelpCircle, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'What to Do With Old Appliances in Boise: Complete Guide | Appliance Removal Pros',
  description: 'Not sure what to do with that old fridge or washer? Here are your best options for getting rid of appliances in Boise and the Treasure Valley.',
  alternates: {
    canonical: 'https://boise-appliance-removal.com/blogs/what-to-do-with-old-appliances-boise',
  },
}

export default function WhatToDoWithOldAppliancesBoise() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-[300px] md:h-[400px] flex items-end">
        <Image
          src="/generated/old-appliances-boise-options.webp"
          alt="What to Do With Old Appliances in Boise Idaho"
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
            What to Do With Old Appliances in Boise
          </h1>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              So you've got an old refrigerator taking up space in your garage. Or maybe a washer that finally gave up after fifteen years of faithful service. Now what?
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              Getting rid of large appliances isn't as simple as dragging them to the curb. In Boise and throughout the Treasure Valley, you've got several options—and some are definitely better than others.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Here's a complete breakdown of your options, from free to paid, along with the pros and cons of each.
            </p>
          </div>
        </div>
      </section>

      {/* Retailer Take-Back */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-dark-blue rounded-full flex items-center justify-center">
                <HelpCircle className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gunmetal">
                Option 1: Retailer Take-Back Programs
              </h2>
            </div>

            <p className="text-gray-600 leading-relaxed mb-6">
              If you're buying a new appliance, this is often the easiest route.
            </p>

            <p className="text-gray-600 leading-relaxed mb-6">
              Most major retailers in Boise—Home Depot, Lowe's, Best Buy—offer haul-away service when they deliver your new unit. They'll typically charge $15-50 for this service, but it saves you the hassle entirely. The delivery crew takes your old appliance when they drop off the new one.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>The catches:</strong> They usually won't take your old appliance unless you're buying a replacement. And the appliance needs to be disconnected and ready to go when the delivery truck arrives. If your washer is still hooked up to water lines, that's on you to handle beforehand.
            </p>

            <p className="text-gray-600 leading-relaxed">
              <strong>Best for:</strong> People who are replacing an appliance and want one-stop convenience.
            </p>
          </div>
        </div>
      </section>

      {/* Utility Rebates */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gunmetal mb-6">
              Option 2: Utility Company Rebates
            </h2>

            <p className="text-gray-600 leading-relaxed mb-6">
              Here's something a lot of Boise residents don't know about: Idaho Power offers rebates for recycling old refrigerators and freezers.
            </p>

            <p className="text-gray-600 leading-relaxed mb-6">
              You can get $30-50 just for letting them haul away your old unit. They'll come pick it up for free. Why do they do this? Old appliances are energy hogs. That refrigerator from 1995 uses three times more electricity than a new one. By getting these old units out of circulation, the utility company reduces overall energy demand.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Requirements:</strong> The unit must be working, between 10-30 cubic feet, and you need to be an Idaho Power customer. They won't take commercial units or fridges with broken seals.
            </p>

            <p className="text-gray-600 leading-relaxed">
              <strong>Best for:</strong> Anyone with a working fridge or freezer who qualifies. Free pickup plus cash? That's hard to beat.
            </p>
          </div>
        </div>
      </section>

      {/* Donation */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gunmetal mb-6">
              Option 3: Donation
            </h2>

            <p className="text-gray-600 leading-relaxed mb-6">
              If your appliance still works, donation is a great option that helps someone else.
            </p>

            <p className="text-gray-600 leading-relaxed mb-6">
              The Salvation Army and Habitat for Humanity ReStore in Boise both accept working appliances. They'll sometimes even pick up from your home if the appliance is in good condition and they have availability.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Key word: working.</strong> These organizations can't accept broken appliances, and they're pretty strict about condition. A few cosmetic scratches are fine, but the appliance needs to actually function. They're not looking for restoration projects.
            </p>

            <p className="text-gray-600 leading-relaxed">
              <strong>Best for:</strong> Working appliances in decent cosmetic condition. You might get a tax deduction, and you're helping someone furnish their home affordably.
            </p>
          </div>
        </div>
      </section>

      {/* Scrap Metal */}
      <section className="py-12 md:py-16 bg-dark-blue text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              Option 4: Scrap Metal Recyclers
            </h2>

            <p className="text-blue-100 leading-relaxed mb-6">
              For appliances that are truly dead, scrap metal recyclers will take them.
            </p>

            <div className="space-y-3 mb-6">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <span className="text-blue-100">Pacific Steel & Recycling in Boise accepts large appliances</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <span className="text-blue-100">You might get a few dollars for the metal content</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <span className="text-blue-100">Materials get properly recycled rather than landfilled</span>
              </div>
            </div>

            <p className="text-blue-100 leading-relaxed mb-6">
              <strong>The downsides:</strong> You'll need to transport the appliance yourself. For refrigerators and air conditioners, the refrigerant must be properly evacuated first—that's an EPA requirement. Some facilities charge a processing fee for this; others won't take units with refrigerant still inside.
            </p>

            <p className="text-blue-100 leading-relaxed">
              <strong>Best for:</strong> DIYers with trucks who don't mind doing the legwork and want to maximize any scrap value.
            </p>
          </div>
        </div>
      </section>

      {/* Professional Removal */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gunmetal mb-6">
              Option 5: Professional Appliance Removal
            </h2>

            <p className="text-gray-600 leading-relaxed mb-6">
              This is where we come in. A professional removal service handles everything—disconnection if needed, hauling, proper disposal, and recycling.
            </p>

            <p className="text-gray-600 leading-relaxed mb-6">
              It costs more than DIY options, typically $75-200 depending on the appliance type and location. But you don't have to lift a finger, worry about disposal regulations, or figure out where to take it.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>We handle:</strong> Getting the appliance out of wherever it's located (basement, second floor, tight spaces), loading it, transporting it, and ensuring proper disposal. For refrigerators and AC units, we make sure the refrigerant is recovered according to EPA guidelines.
            </p>

            <p className="text-gray-600 leading-relaxed">
              <strong>Best for:</strong> People who value their time, don't have access to a truck, want the problem solved today, or have appliances in difficult locations.
            </p>
          </div>
        </div>
      </section>

      {/* What About the Curb */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gunmetal mb-6">
              What About Just Leaving It at the Curb?
            </h2>

            <p className="text-gray-600 leading-relaxed mb-6">
              In Ada County, you can't just leave large appliances at the curb for regular trash pickup. The garbage service won't take them, and leaving them out can result in fines.
            </p>

            <p className="text-gray-600 leading-relaxed mb-6">
              Some areas do offer bulk pickup days a few times per year. Check with your local waste service to see when these are scheduled and what items they'll accept. But these are limited—you might be waiting months for the next pickup date.
            </p>

            <p className="text-gray-600 leading-relaxed">
              And please don't just abandon appliances somewhere hoping they'll disappear. Illegal dumping carries serious fines, and it's bad for the environment. The refrigerant in that old fridge you left in a field? It's now in the atmosphere.
            </p>
          </div>
        </div>
      </section>

      {/* Special Note */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gunmetal mb-6">
              A Note on Refrigerators and Freezers
            </h2>

            <p className="text-gray-600 leading-relaxed mb-6">
              These appliances need special handling because of the refrigerant inside. It's illegal to just dump a fridge—the refrigerant must be recovered by a certified technician before disposal.
            </p>

            <p className="text-gray-600 leading-relaxed mb-6">
              This is one of the main reasons professional removal makes sense for these items. We handle the refrigerant properly and ensure everything is disposed of according to EPA guidelines. You don't have to worry about compliance issues.
            </p>

            <p className="text-gray-600 leading-relaxed">
              If you're taking a fridge to a scrap yard yourself, call ahead to confirm their requirements. Some require the refrigerant to be removed beforehand; others have certified staff who can do it on-site.
            </p>
          </div>
        </div>
      </section>

      {/* Bottom Line */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gunmetal mb-6">
              The Bottom Line
            </h2>

            <p className="text-gray-600 leading-relaxed mb-6">
              Your best choice depends on your situation.
            </p>

            <p className="text-gray-600 leading-relaxed mb-6">
              If you're buying new, use the retailer's haul-away—it's convenient and usually affordable. If you have a working refrigerator or freezer, check the Idaho Power rebate program first—free pickup plus cash is the best deal around. If you have a working appliance in good condition, consider donating it. If you need something gone quickly with zero hassle, call us.
            </p>

            <p className="text-gray-600 leading-relaxed">
              Whatever you do, don't let that old appliance sit in your garage for another year. Every option beats that.
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
              We remove appliances throughout Boise, Meridian, Nampa, and the Treasure Valley. Call for a free quote—we'll give you a firm price upfront.
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
