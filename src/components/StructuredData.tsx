/**
 * Site-wide structured data.
 *
 * Everything is emitted as a single @graph so the entities can point at each
 * other by @id: the LocalBusiness publishes the WebSite and provides the
 * Service, and it names topshelfpros.com as its parent organisation. That
 * shared parent @id is what ties all fourteen microsites and the main site
 * together as one business instead of fourteen unrelated ones — which is what
 * search engines and language models need in order to answer questions about
 * us and attribute the answer correctly.
 *
 * Only facts we can actually source belong in here. Things we do not have on
 * record — a contact email, the founding date, headcount — are left out rather
 * than guessed, because invented detail in schema is worse than missing detail.
 */

const SITE_NAME = 'Boise Appliance Removal'
const SITE_URL = 'https://boise-appliance-removal.com'
const SITE_PHONE = '+1-208-943-5231'
const SERVICE_NAME = 'Appliance Removal Services'

/** The shared brand entity. Identical across every Top Shelf site. */
const PARENT_ORGANIZATION_ID = 'https://topshelfpros.com/#organization'
const BRAND_NAME = 'Top Shelf Junk Removal and Demolition'
const BRAND_URL = 'https://topshelfpros.com'
const BRAND_LOGO = 'https://topshelfpros.com/assets/Logos/top-shelf-logo-full.webp'
const BRAND_PHONE = '+12085932877'

/** The one physical location behind all of the sites. */
const ADDRESS = {
  '@type': 'PostalAddress',
  streetAddress: '1755 N Westgate Dr Ste 110',
  addressLocality: 'Boise',
  addressRegion: 'ID',
  postalCode: '83704',
  addressCountry: 'US',
}

const OFFICE_GEO = {
  '@type': 'GeoCoordinates',
  latitude: 43.620604,
  longitude: -116.281153,
}

const SOCIAL_PROFILES = [
  'https://www.facebook.com/topshelfpros',
  'https://www.instagram.com/top_shelf_pros',
  'https://www.linkedin.com/company/topshelfpros',
]

/** The cities our own pages say we cover, with real coordinates. */
const SERVICE_AREA = [
  { name: 'Boise', lat: 43.615, lng: -116.2023 },
  { name: 'Meridian', lat: 43.6121, lng: -116.3915 },
  { name: 'Nampa', lat: 43.5407, lng: -116.5635 },
  { name: 'Caldwell', lat: 43.6629, lng: -116.6874 },
  { name: 'Eagle', lat: 43.696, lng: -116.354 },
  { name: 'Garden City', lat: 43.6229, lng: -116.2568 },
  { name: 'Kuna', lat: 43.4916, lng: -116.4201 },
  { name: 'Star', lat: 43.6899, lng: -116.4954 },
  { name: 'Middleton', lat: 43.7071, lng: -116.6172 },
]

/** Subjects this business is an authority on — read by LLMs summarising us. */
const KNOWS_ABOUT = [
  "Appliance Removal",
  "Refrigerator Removal",
  "Freezer Removal",
  "Washer Removal",
  "Dryer Removal",
  "Stove Removal",
  "Oven Removal",
  "Dishwasher Removal",
  "Water Heater Removal",
  "AC Unit Removal",
  "Appliance Hauling",
  "Appliance Recycling",
  "Junk removal",
  "Debris hauling",
  "Waste recycling",
  "Donation drop-off",
  "Treasure Valley Idaho",
  "Ada County Idaho",
  "Canyon County Idaho"
]

const SERVICES_OFFERED = [
  "Appliance Removal",
  "Refrigerator Removal",
  "Freezer Removal",
  "Washer Removal",
  "Dryer Removal",
  "Stove Removal",
  "Oven Removal",
  "Dishwasher Removal",
  "Water Heater Removal",
  "AC Unit Removal",
  "Appliance Hauling",
  "Appliance Recycling"
]

export function StructuredData({ city = 'Boise' }: { city?: string }) {
  const businessId = `${SITE_URL}/#business`

  const organization = {
    '@type': 'Organization',
    '@id': PARENT_ORGANIZATION_ID,
    name: BRAND_NAME,
    alternateName: 'Top Shelf Pros',
    url: BRAND_URL,
    logo: {
      '@type': 'ImageObject',
      url: BRAND_LOGO,
      caption: `${BRAND_NAME} logo`,
    },
    telephone: BRAND_PHONE,
    address: ADDRESS,
    sameAs: SOCIAL_PROFILES,
  }

  const business = {
    '@type': 'LocalBusiness',
    '@id': businessId,
    name: SITE_NAME,
    description: `Professional appliance removal and hauling services in ${city}, Idaho. Same-day pickup available. We remove refrigerators, washers, dryers, stoves, and all types of appliances.`,
    url: SITE_URL,
    telephone: SITE_PHONE,
    priceRange: '$129-$599',
    currenciesAccepted: 'USD',
    paymentAccepted: 'Cash, Check, Credit Card, Debit Card',
    address: ADDRESS,
    geo: OFFICE_GEO,
    hasMap:
      'https://www.google.com/maps/search/?api=1&query=Top+Shelf+Junk+Removal+and+Demolition+Boise+ID',
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        opens: '08:00',
        closes: '21:00',
      },
    ],
    areaServed: SERVICE_AREA.map((c) => ({
      '@type': 'City',
      name: c.name,
      addressRegion: 'ID',
      geo: { '@type': 'GeoCoordinates', latitude: c.lat, longitude: c.lng },
    })),
    knowsAbout: KNOWS_ABOUT,
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: `${SITE_NAME} services`,
      itemListElement: SERVICES_OFFERED.map((s) => ({
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: s, areaServed: 'Treasure Valley, Idaho' },
      })),
    },
    sameAs: SOCIAL_PROFILES,
    parentOrganization: { '@id': PARENT_ORGANIZATION_ID },
    logo: BRAND_LOGO,
    image: [
      {
        '@type': 'ImageObject',
        url: `${SITE_URL}/generated/hero.webp`,
        name: 'Appliance Removal Services in the Treasure Valley',
        caption: 'Boise Appliance Removal crew at work in Boise, Idaho',
        contentLocation: {
          '@type': 'Place',
          name: 'Boise, Idaho',
          geo: { '@type': 'GeoCoordinates', latitude: 43.5904, longitude: -116.2317 },
        },
      },
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5.0',
      reviewCount: '392',
    },
  }

  const website = {
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    url: SITE_URL,
    name: SITE_NAME,
    description: `Professional appliance removal and hauling services in ${city}, Idaho. Same-day pickup available. We remove refrigerators, washers, dryers, stoves, and all types of appliances.`,
    publisher: { '@id': businessId },
    inLanguage: 'en-US',
  }

  const service = {
    '@type': 'Service',
    '@id': `${SITE_URL}/#service`,
    name: SERVICE_NAME,
    serviceType: SERVICE_NAME,
    description: `Professional appliance removal and hauling services in ${city} and the Treasure Valley. We remove refrigerators, washers, dryers, stoves, and all types of appliances with same-day service available.`,
    provider: { '@id': businessId },
    areaServed: SERVICE_AREA.map((c) => ({
      '@type': 'City',
      name: c.name,
      addressRegion: 'ID',
    })),
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: `${SERVICE_NAME} options`,
      itemListElement: SERVICES_OFFERED.map((s) => ({
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: s },
      })),
    },
  }

  const graph = {
    '@context': 'https://schema.org',
    '@graph': [organization, business, website, service],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  )
}
