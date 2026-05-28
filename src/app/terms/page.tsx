import { Metadata } from 'next'
import { VisibleBreadcrumb } from '@/components/VisibleBreadcrumb'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Terms of Service | Boise Appliance Removal',
  description: 'Terms of service for Boise Appliance Removal hauling and disposal services in Boise and the Treasure Valley.',
  alternates: {
    canonical: 'https://boise-appliance-removal.com/terms',
  },
}

export default function TermsPage() {
  return (
    <main className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-gunmetal mb-4">Terms of Service</h1>
          <p className="text-gray-500 mb-8">Last updated: December 12, 2024</p>

          <div className="prose prose-lg max-w-none text-gray-600">
            <p>
              Welcome to Boise Appliance Removal. By accessing our website or using our services, you agree to be bound by these Terms of Service. Please read them carefully.
            </p>

            <h2 className="text-2xl font-bold text-gunmetal mt-8 mb-4">1. Services</h2>
            <p>
              Boise Appliance Removal provides professional appliance removal, hauling, and disposal services in Boise, Meridian, Nampa, Caldwell, Eagle, and surrounding areas in Idaho. All services are subject to availability and our ability to safely perform the work.
            </p>

            <h2 className="text-2xl font-bold text-gunmetal mt-8 mb-4">2. Service Agreement</h2>
            <p>
              By requesting services from Boise Appliance Removal, you represent that you are the property owner or have authorization from the property owner to request and authorize appliance removal. You agree to provide accurate information about the property, the appliances to be removed, and any access considerations.
            </p>

            <h2 className="text-2xl font-bold text-gunmetal mt-8 mb-4">3. Estimates and Pricing</h2>
            <ul>
              <li>We provide free estimates based on an on-site or virtual assessment of your property</li>
              <li>Estimates are valid for 30 days unless otherwise specified</li>
              <li>Final pricing may vary if the actual scope of work differs significantly from the initial assessment</li>
              <li>We will communicate any pricing changes and obtain your approval before proceeding with additional work</li>
              <li>All prices are quoted in US dollars</li>
            </ul>

            <h2 className="text-2xl font-bold text-gunmetal mt-8 mb-4">4. Payment Terms</h2>
            <ul>
              <li>Payment is due upon completion of services unless otherwise agreed in writing</li>
              <li>For larger projects, we may require a deposit or progress payments</li>
              <li>We accept cash, check, and major credit cards (Visa, Mastercard, American Express, Discover)</li>
              <li>Returned checks are subject to a fee</li>
              <li>Past due accounts may be subject to collection fees and interest</li>
            </ul>

            <h2 className="text-2xl font-bold text-gunmetal mt-8 mb-4">5. Scheduling and Cancellation</h2>
            <ul>
              <li>We will make reasonable efforts to accommodate your preferred scheduling</li>
              <li>Please provide at least 24 hours notice if you need to reschedule or cancel your appointment</li>
              <li>Same-day cancellations may be subject to a cancellation fee</li>
              <li>We reserve the right to reschedule due to weather, safety concerns, or other unforeseen circumstances</li>
            </ul>

            <h2 className="text-2xl font-bold text-gunmetal mt-8 mb-4">6. Property Access and Safety</h2>
            <p>You agree to:</p>
            <ul>
              <li>Provide safe access to the property for our team and equipment</li>
              <li>Inform us of any known hazards, including but not limited to biohazards, structural damage, pest infestations, or hazardous materials</li>
              <li>Secure pets during service appointments</li>
              <li>Ensure appliances are accessible and any necessary disconnections (water, gas, electrical) are completed before our arrival, or arrange for us to handle them</li>
            </ul>

            <h2 className="text-2xl font-bold text-gunmetal mt-8 mb-4">7. Appliance Disposal and Recycling</h2>
            <ul>
              <li>By authorizing removal, you grant us permission to haul and dispose of the agreed-upon appliances</li>
              <li>We strongly recommend removing any personal items from inside appliances before removal</li>
              <li>Working appliances in good condition may be donated to local charities such as Habitat for Humanity ReStore</li>
              <li>Recyclable materials (metals, refrigerants, plastics) will be processed at licensed facilities whenever possible</li>
              <li>Once appliances leave the property, they cannot be recovered</li>
            </ul>

            <h2 className="text-2xl font-bold text-gunmetal mt-8 mb-4">8. Liability and Insurance</h2>
            <ul>
              <li>Boise Appliance Removal is fully licensed and insured</li>
              <li>We carry general liability insurance and workers&apos; compensation coverage</li>
              <li>We take reasonable care to protect your property during appliance removal</li>
              <li>We are not responsible for pre-existing damage or hidden damage discovered during removal (e.g., damage behind a fridge or under a washer)</li>
              <li>Our liability is limited to the cost of services provided</li>
            </ul>

            <h2 className="text-2xl font-bold text-gunmetal mt-8 mb-4">9. Privacy and Professionalism</h2>
            <p>
              We respect our customers&apos; privacy. Our team members are trained to be professional, courteous, and respectful of your home and property at every appointment.
            </p>

            <h2 className="text-2xl font-bold text-gunmetal mt-8 mb-4">10. Communication Consent</h2>
            <p>
              By providing your phone number, you consent to receive calls and text messages from us regarding your inquiry, appointment scheduling, and service updates. Message and data rates may apply. You may opt out of text messages at any time by replying STOP.
            </p>

            <h2 className="text-2xl font-bold text-gunmetal mt-8 mb-4">11. Website Use</h2>
            <p>
              The content on this website is for informational purposes only. We make no warranties about the accuracy or completeness of information on this site. You agree not to use this website for any unlawful purpose or in any way that could damage or impair the site.
            </p>

            <h2 className="text-2xl font-bold text-gunmetal mt-8 mb-4">12. Intellectual Property</h2>
            <p>
              All content on this website, including text, images, logos, and design, is the property of Boise Appliance Removal and is protected by copyright and trademark laws. You may not reproduce, distribute, or use our content without written permission.
            </p>

            <h2 className="text-2xl font-bold text-gunmetal mt-8 mb-4">13. Dispute Resolution</h2>
            <p>
              Any disputes arising from these Terms or our services shall be governed by the laws of the State of Idaho. You agree to attempt to resolve any disputes through good-faith negotiation before pursuing legal action.
            </p>

            <h2 className="text-2xl font-bold text-gunmetal mt-8 mb-4">14. Changes to Terms</h2>
            <p>
              We reserve the right to modify these Terms of Service at any time. Changes will be effective immediately upon posting to this website. Your continued use of our services after changes are posted constitutes acceptance of the modified terms.
            </p>

            <h2 className="text-2xl font-bold text-gunmetal mt-8 mb-4">15. Contact Us</h2>
            <p>
              If you have questions about these Terms of Service, please contact us:
            </p>
            <ul>
              <li><strong>Phone:</strong> (208) 943-5231</li>
              <li><strong>Email:</strong> info@topshelfpros.com</li>
            </ul>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-200">
            <Link href="/" className="text-dark-blue underline hover:text-light-blue">
              &larr; Back to Home
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
