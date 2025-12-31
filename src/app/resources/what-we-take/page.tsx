import { Metadata } from 'next'
import { Phone, CheckCircle, XCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'What We Take | Boise Appliance Removal',
  description: 'Complete list of appliances we remove in Boise: refrigerators, washers, dryers, stoves, dishwashers, water heaters, and more.',
  alternates: { canonical: 'https://boise-appliance-removal.com/resources/what-we-take' },
}

export default function WhatWeTakePage() {
  return (
    <main className="pt-20">
      <section className="py-16 bg-gradient-to-b from-dark-blue to-[#1a5a9e]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">What We Take</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">We remove just about any appliance you've got.</p>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none text-gray-600 mb-12">
              <p>If it plugs in or runs on gas, there's a good chance we can haul it away.</p>
              <p>Here's a breakdown of what we remove most often, organized by category.</p>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold text-dark-blue mb-6">Kitchen Appliances</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-lg">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700">Refrigerators (all sizes)</span>
                </div>
                <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-lg">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700">Freezers (chest and upright)</span>
                </div>
                <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-lg">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700">Stoves and Ovens</span>
                </div>
                <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-lg">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700">Dishwashers</span>
                </div>
                <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-lg">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700">Microwaves (built-in and countertop)</span>
                </div>
                <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-lg">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700">Range Hoods</span>
                </div>
              </div>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold text-dark-blue mb-6">Laundry Appliances</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-lg">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700">Washing Machines</span>
                </div>
                <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-lg">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700">Dryers (electric and gas)</span>
                </div>
                <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-lg">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700">Washer/Dryer Combos</span>
                </div>
              </div>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold text-dark-blue mb-6">Large Appliances</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-lg">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700">Water Heaters (electric and gas)</span>
                </div>
                <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-lg">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700">Furnaces</span>
                </div>
                <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-lg">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700">Air Conditioning Units</span>
                </div>
                <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-lg">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700">Boilers</span>
                </div>
              </div>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold text-dark-blue mb-6">Commercial Appliances</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-lg">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700">Restaurant Kitchen Equipment</span>
                </div>
                <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-lg">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700">Commercial Refrigerators</span>
                </div>
                <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-lg">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700">Walk-in Freezers</span>
                </div>
                <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-lg">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700">Industrial Ovens</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-dark-blue mb-6">What We Don't Take</h2>
            <p className="text-gray-600 mb-6">There are a few things we can't remove for safety or legal reasons:</p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-center gap-3 bg-white p-4 rounded-lg">
                <XCircle className="w-6 h-6 text-red-600 flex-shrink-0" />
                <span className="text-gray-700">Hazardous materials (asbestos, chemicals)</span>
              </div>
              <div className="flex items-center gap-3 bg-white p-4 rounded-lg">
                <XCircle className="w-6 h-6 text-red-600 flex-shrink-0" />
                <span className="text-gray-700">Wet or moldy appliances (health risk)</span>
              </div>
            </div>
            <p className="text-gray-600 mt-6">If you're not sure whether we can take something, just ask. We'll let you know.</p>
          </div>
        </div>
      </section>
      <section className="py-12 bg-dark-blue text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-white mb-4">Not Sure If We Take It?</h2>
          <p className="text-gray-200 mb-6">Call us and describe what you've got. We'll tell you if we can haul it.</p>
          <a href="tel:2089435231" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-3 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
            <Phone className="w-5 h-5" />(208) 943-5231
          </a>
        </div>
      </section>
    </main>
  )
}
