'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'

// FAQ data used for both UI and structured data
export const faqs = [
  {
    question: 'What types of appliances do you remove?',
    answer: 'We remove all types of household appliances: refrigerators, freezers, washers, dryers, stoves, ovens, dishwashers, microwaves, water heaters, air conditioners, and more. If it plugs in or runs on gas and you want it gone, we can haul it away.'
  },
  {
    question: 'How much does appliance removal cost?',
    answer: 'Pricing depends on the type and number of appliances. A single appliance like a washer or dryer typically runs $75-$125. Larger items like refrigerators may cost a bit more. We give free quotes over the phone—no surprises, no hidden fees.'
  },
  {
    question: 'Do you offer same-day appliance removal?',
    answer: 'Yes! We offer same-day service in most cases. If you call in the morning, we can usually be there by afternoon. For urgent situations, we do our best to accommodate your schedule.'
  },
  {
    question: 'Do you disconnect appliances?',
    answer: 'We can disconnect most appliances for you. For gas appliances, we recommend having a licensed technician disconnect the gas line before we arrive—safety first. Electric appliances we can unplug and disconnect without any issues.'
  },
  {
    question: 'What happens to the old appliances?',
    answer: 'We recycle what we can. Metals, plastics, and other materials get sorted and sent to recycling facilities. Refrigerants are properly recovered. Working appliances may be donated. Very little ends up in landfills.'
  },
  {
    question: 'What areas do you service?',
    answer: 'We serve Boise and the entire Treasure Valley—Meridian, Nampa, Caldwell, Eagle, Kuna, Star, Garden City, and surrounding areas. Not sure if we cover your location? Give us a quick call and we\'ll let you know.'
  },
  {
    question: 'Do I need to move the appliance outside?',
    answer: 'Nope. We handle everything from wherever the appliance sits—basement, upstairs, garage, wherever. Just clear a path and we\'ll do the heavy lifting. That\'s what you\'re paying us for.'
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
            <a href="tel:2083611982">
              <span className="md:hidden">Call Now</span>
              <span className="hidden md:inline">(208) 361-1982</span>
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
