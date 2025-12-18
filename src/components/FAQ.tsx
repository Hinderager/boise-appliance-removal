'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'

// FAQ data used for both UI and structured data
export const faqs = [
  {
    question: 'What appliances can you haul away?',
    answer: 'Pretty much anything. Refrigerators, freezers, washers, dryers, stoves, ovens, ranges, dishwashers, microwaves, water heaters, AC units—if it\'s an appliance, we can take it. Gas or electric doesn\'t matter.'
  },
  {
    question: 'How much does it cost?',
    answer: 'Most single appliances run between $75-$125. Refrigerators and larger items might be a bit more. Call us at (208) 505-9352 for a quick quote—no hidden fees, just straight pricing.'
  },
  {
    question: 'Can you come same-day?',
    answer: 'Yep, in most cases. Call us in the morning and we can usually get there same afternoon. We know when your fridge dies or you\'re on a tight timeline, waiting around isn\'t an option.'
  },
  {
    question: 'Do you unhook appliances?',
    answer: 'We can unplug and disconnect most electric appliances, no problem. For gas appliances like stoves or water heaters, you\'ll want a licensed tech to disconnect the gas line first. We\'ll take it from there.'
  },
  {
    question: 'What do you do with the old stuff?',
    answer: 'We recycle as much as we can—metals, plastics, refrigerants all get handled properly. If an appliance still works, we might donate it. We try to keep things out of landfills when possible.'
  },
  {
    question: 'Where do you service?',
    answer: 'Boise and the whole Treasure Valley—Meridian, Nampa, Caldwell, Eagle, Kuna, Star, Garden City, you name it. If you\'re not sure, just call and we\'ll let you know.'
  },
  {
    question: 'Do I need to move it outside first?',
    answer: 'Nope. That\'s our job. Basement, second floor, garage—wherever it is, we\'ll get it out. Just make sure there\'s a clear path and we\'ll handle the rest.'
  }
]

export function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Title */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-center mb-12 uppercase" style={{textShadow: '2px 2px 3px rgba(0,0,0,0.3), 1px 1px 2px rgba(0,0,0,0.2)'}}>
          <span className="text-dark-blue">Frequently Asked Questions</span>
        </h2>

        {/* FAQ Accordion */}
        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b-2 border-gray-200 last:border-b-0">
              {/* Question Button */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between px-6 py-6 text-left transition-colors hover:bg-gray-50"
              >
                <span className="text-xl md:text-2xl font-bold text-dark-blue pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-6 h-6 text-dark-blue flex-shrink-0 transition-transform duration-300 ${
                    activeIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {/* Answer */}
              <div
                className={`grid transition-all duration-300 ease-in-out ${
                  activeIndex === index ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                }`}
              >
                <div className="overflow-hidden">
                  <div className="px-6 pb-6 text-gray-700 text-lg leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-row gap-4 justify-center mt-12">
          <Button asChild size="lg" className="bg-ub-yellow hover:bg-ub-yellow/90 text-black font-bold text-lg px-10 py-6 rounded-lg uppercase border-4 border-ub-yellow">
            <a href="tel:2085059352">
              <span className="md:hidden">Call Now</span>
              <span className="hidden md:inline">(208) 505-9352</span>
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
