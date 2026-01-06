import { Metadata } from 'next'
import { VisibleBreadcrumb } from '@/components/VisibleBreadcrumb'
import { Phone, Shield, FileCheck, Truck } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Licenses & Insurance | Boise Appliance Removal',
  description: 'Fully licensed and insured appliance removal service in Boise, Idaho. General liability insurance, worker\'s compensation, and proper disposal permits.',
  alternates: { canonical: 'https://boise-appliance-removal.com/about-us/licenses-insurance' },
}

export default function LicensesInsurancePage() {
  return (
    <main className="pt-20">
      <section className="py-16 bg-gradient-to-b from-dark-blue to-[#1a5a9e]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Licenses & Insurance</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">We're properly licensed and fully insured to protect you and your property.</p>
        </div>
      </section>
      <VisibleBreadcrumb />
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none text-gray-600 mb-12">
              <p>When you hire someone to haul appliances out of your home, you want to know they're legit.</p>
              <p>We carry all the licenses and insurance required to operate in Idaho. That means if something goes wrong—a scratched wall, a broken doorframe, or an injury on the job—you're protected.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-gray-50 p-6 rounded-lg">
                <Shield className="w-10 h-10 text-[#FFC845] mb-4" />
                <h3 className="text-xl font-bold text-dark-blue mb-3">General Liability Insurance</h3>
                <p className="text-gray-600">Covers damage to your property during the removal process. If we scratch your floor or ding your wall while hauling out a refrigerator, our insurance handles it.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <Truck className="w-10 h-10 text-[#FFC845] mb-4" />
                <h3 className="text-xl font-bold text-dark-blue mb-3">Worker's Compensation</h3>
                <p className="text-gray-600">Protects our crew if someone gets hurt on the job. You won't be liable if one of our guys throws out his back moving your old stove.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <FileCheck className="w-10 h-10 text-[#FFC845] mb-4" />
                <h3 className="text-xl font-bold text-dark-blue mb-3">Business License</h3>
                <p className="text-gray-600">We're registered to operate in Boise and throughout Ada County. Fully compliant with local business regulations.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <Shield className="w-10 h-10 text-[#FFC845] mb-4" />
                <h3 className="text-xl font-bold text-dark-blue mb-3">Disposal Permits</h3>
                <p className="text-gray-600">Proper permits for disposing of refrigerants, hazardous materials, and large appliances according to Idaho and federal regulations.</p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-slate-50 to-blue-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-dark-blue mb-4">Why This Matters</h3>
              <p className="text-gray-600 mb-4">A lot of junk removal companies operate without proper insurance. If they damage your home or someone gets hurt, guess who's on the hook? You are.</p>
              <p className="text-gray-600">We're not saying this to scare you—just to point out that hiring a legitimate, insured company is worth the investment.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-12 bg-dark-blue text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-white mb-4">Questions About Our Coverage?</h2>
          <p className="text-gray-200 mb-6">Give us a call. We're happy to provide proof of insurance if you'd like to see it.</p>
          <a href="tel:2089435231" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-3 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
            <Phone className="w-5 h-5" />(208) 943-5231
          </a>
        </div>
      </section>
    </main>
  )
}
