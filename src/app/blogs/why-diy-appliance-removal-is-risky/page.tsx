import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { AlertTriangle, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Why DIY Appliance Removal Can Be Risky in Boise | Appliance Removal Pros',
  description: 'Thinking about hauling that old fridge yourself? Here\'s what Boise residents should consider before grabbing a dolly—and when DIY makes sense.',
  alternates: {
    canonical: 'https://boise-appliance-removal.com/blogs/why-diy-appliance-removal-is-risky',
  },
}

export default function WhyDIYApplianceRemovalIsRisky() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-[300px] md:h-[400px] flex items-end">
        <Image
          src="/generated/diy-appliance-removal-risks.webp"
          alt="DIY Appliance Removal Risks in Boise"
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
            Why DIY Appliance Removal Can Be Risky
          </h1>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              I get it. You've got a truck, a strong friend, and that old fridge needs to go. Why pay someone when you can do it yourself?
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              Sometimes DIY makes sense. But before you grab your dolly, let's talk about what you're really getting into. Understanding the risks helps you make a smart decision about whether professional removal is worth it for your situation.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Here's an honest look at the challenges—and when doing it yourself actually works.
            </p>
          </div>
        </div>
      </section>

      {/* The Weight Problem */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-dark-blue rounded-full flex items-center justify-center">
                <AlertTriangle className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gunmetal">
                The Weight Problem
              </h2>
            </div>

            <p className="text-gray-600 leading-relaxed mb-6">
              A typical side-by-side refrigerator weighs 250-350 pounds. A washer or dryer runs 150-200 pounds. These aren't just heavy—they're awkward heavy.
            </p>

            <p className="text-gray-600 leading-relaxed mb-6">
              Professional movers train specifically for this. We use proper lifting techniques, the right equipment, and we do this every day. Your back isn't used to this kind of strain—even if you're strong and active.
            </p>

            <p className="text-gray-600 leading-relaxed mb-6">
              I can't count how many times customers have told me they hurt themselves trying to move an appliance. Herniated discs, pulled muscles, dropped appliances on feet—these aren't rare occurrences. They happen more often than you'd think.
            </p>

            <p className="text-gray-600 leading-relaxed">
              That's not meant to scare you. It's just reality. Moving heavy, awkward objects through tight spaces is harder than it looks.
            </p>
          </div>
        </div>
      </section>

      {/* The Damage Factor */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gunmetal mb-6">
              The Damage Factor
            </h2>

            <p className="text-gray-600 leading-relaxed mb-6">
              Heavy appliances moving through your home can damage surfaces that are expensive to repair.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Hardwood floors:</strong> Scratches and dents from dragging or dropping. These often require professional refinishing.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Tile:</strong> Cracks from impact if something slips or gets dropped.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Door frames:</strong> Scuffed, gouged, or dented when maneuvering through tight openings.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Walls:</strong> Holes and scrapes, especially in hallways and corners.
            </p>

            <p className="text-gray-600 leading-relaxed mb-6">
              <strong>Stairs:</strong> Damaged treads, scuffed walls, or worse if something gets away from you.
            </p>

            <p className="text-gray-600 leading-relaxed mb-6">
              Professional removers use moving blankets, furniture sliders, and techniques developed specifically for navigating tight spaces safely. We also have insurance. If something does get damaged, it's covered.
            </p>

            <p className="text-gray-600 leading-relaxed">
              When you do it yourself, any damage is on you. That scratch across your hardwood? That's coming out of your pocket.
            </p>
          </div>
        </div>
      </section>

      {/* The Disposal Challenge */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gunmetal mb-6">
              The Disposal Challenge
            </h2>

            <p className="text-gray-600 leading-relaxed mb-6">
              Let's say you successfully get the appliance into your truck without injury or damage. Now what?
            </p>

            <p className="text-gray-600 leading-relaxed mb-6">
              You can't just take it to the dump. Most transfer stations in Ada County have specific rules about appliances. Refrigerators and air conditioners need refrigerant removal first. Some facilities charge fees. Some won't take certain items at all.
            </p>

            <p className="text-gray-600 leading-relaxed mb-6">
              Have you called ahead to confirm where you can take it? Do you know the hours and fees? Do you have a way to unload it when you get there? Many people don't think this through until they're sitting in a truck with an old fridge, driving around Boise trying to figure out where to take it.
            </p>

            <p className="text-gray-600 leading-relaxed">
              Planning the disposal is as important as planning the removal.
            </p>
          </div>
        </div>
      </section>

      {/* The Refrigerant Issue */}
      <section className="py-12 md:py-16 bg-dark-blue text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              The Refrigerant Issue
            </h2>

            <p className="text-blue-100 leading-relaxed mb-6">
              If you're removing a refrigerator, freezer, or air conditioner, there's refrigerant inside. It's illegal to release this into the atmosphere—we're talking federal Clean Air Act violations with serious fines.
            </p>

            <div className="space-y-3 mb-6">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <span className="text-blue-100">The refrigerant must be recovered by a certified technician</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <span className="text-blue-100">You need EPA Section 608 certification to do this legally</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <span className="text-blue-100">Specialized recovery equipment is required</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <span className="text-blue-100">Legitimate recycling facilities either handle this or require it to be done beforehand</span>
              </div>
            </div>

            <p className="text-blue-100 leading-relaxed">
              This isn't something you can just ignore or work around. It's a real legal and environmental requirement.
            </p>
          </div>
        </div>
      </section>

      {/* When DIY Makes Sense */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gunmetal mb-6">
              When DIY Actually Makes Sense
            </h2>

            <p className="text-gray-600 leading-relaxed mb-6">
              All that said, DIY can work in certain situations. I'm not going to pretend professional removal is always the answer.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Small appliances.</strong> A microwave or window AC unit that you can carry yourself? Go for it. The risks we discussed apply mainly to large, heavy appliances.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>You're already renting a truck.</strong> If you're doing a full cleanout and have a truck anyway, adding an appliance makes sense. The marginal cost is basically zero.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>The appliance is already outside.</strong> If it's sitting in the garage or on the porch, loading is much simpler than navigating through a house.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>You have the right help.</strong> Two strong adults who've done this before can handle most appliances safely. Keyword: who've done this before.
            </p>

            <p className="text-gray-600 leading-relaxed">
              <strong>You know where it's going.</strong> You've already called the recycling facility in the Treasure Valley, confirmed they'll take it, and know their procedures. No surprises when you get there.
            </p>
          </div>
        </div>
      </section>

      {/* The Real Cost Comparison */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gunmetal mb-6">
              The Real Cost Comparison
            </h2>

            <p className="text-gray-600 leading-relaxed mb-6">
              Let's do the math for DIY appliance removal in the Boise area:
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              Truck rental: $30-50
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              Gas: $10-20
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              Disposal fees: $20-50 (more if refrigerant handling is required)
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              Your time: 2-3 hours minimum
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              Risk of injury: Hard to put a price on this, but medical bills and missed work add up fast
            </p>

            <p className="text-gray-600 leading-relaxed mb-6">
              Risk of property damage: Potentially hundreds in repair costs
            </p>

            <p className="text-gray-600 leading-relaxed mb-6">
              Professional removal: $75-200, done in 15 minutes, no risk to you.
            </p>

            <p className="text-gray-600 leading-relaxed">
              For many people, professional removal actually costs about the same when you factor in everything—and it costs less in time, stress, and potential medical bills.
            </p>
          </div>
        </div>
      </section>

      {/* Bottom Line */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gunmetal mb-6">
              The Bottom Line
            </h2>

            <p className="text-gray-600 leading-relaxed mb-6">
              I'm not saying you can't do this yourself. Plenty of Boise residents do, successfully.
            </p>

            <p className="text-gray-600 leading-relaxed mb-6">
              But go in with your eyes open. Know the weight of what you're dealing with. Have a plan for disposal. Protect your back and your floors. Have help you can trust.
            </p>

            <p className="text-gray-600 leading-relaxed">
              And if any of this sounds like more than you want to deal with? That's exactly why we're here.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-gunmetal mb-4">
              Rather Skip the Hassle?
            </h2>
            <p className="text-gray-600 mb-8">
              We handle appliance removal throughout Boise, Meridian, Nampa, and the Treasure Valley. Call for a free quote.
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
