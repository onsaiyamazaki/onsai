import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About ONSAI',
  description: 'Learn about ONSAI and our mission to guide travelers through Japan\'s spiritual journey.',
};

export default function AboutPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-gradient-to-br from-sacred-green/10 to-transparent py-16">
        <div className="container mx-auto px-4">
          <h1 className="mb-4 text-5xl font-serif font-bold text-sacred-green">
            About ONSAI
          </h1>
          <p className="max-w-2xl text-gray-600">
            Your guide to Japan's spiritual heritage and sacred destinations
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="mb-12">
            <h2 className="mb-6 text-3xl font-serif font-bold text-sacred-green">
              Our Mission
            </h2>
            <p className="mb-4 text-lg leading-relaxed text-gray-700">
              ONSAI is dedicated to helping international visitors discover the spiritual
              essence of Japan. We believe that travel is more than just sightseeing—it's
              about connecting with ancient traditions, understanding sacred spaces, and
              experiencing the profound spirituality that defines Japanese culture.
            </p>
            <p className="mb-4 text-lg leading-relaxed text-gray-700">
              Our platform brings together curated guides, expert insights, and practical
              travel recommendations to help you explore Japan's most significant shrines,
              experience authentic fortune telling practices, and visit powerful spiritual sites.
            </p>
          </div>

          {/* What We Offer */}
          <div className="mb-12">
            <h2 className="mb-6 text-3xl font-serif font-bold text-sacred-green">
              What We Offer
            </h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {[
                {
                  title: 'Shrine Guides',
                  description:
                    'Detailed information about sacred shrines, their history, spiritual significance, and visitor tips.',
                },
                {
                  title: 'Fortune Telling',
                  description:
                    'Learn about traditional Japanese divination practices and where to experience authentic fortune telling.',
                },
                {
                  title: 'Power Spots',
                  description:
                    'Discover energetically significant locations known for spiritual rejuvenation and renewal.',
                },
                {
                  title: 'Onmyoji Wisdom',
                  description:
                    'Explore the mystical traditions of ancient Japanese Onmyoji and their spiritual practices.',
                },
              ].map((item, index) => (
                <div key={index} className="rounded-lg border border-sacred-green/10 bg-white p-6">
                  <h3 className="mb-3 text-lg font-semibold text-sacred-green">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Our Approach */}
          <div className="mb-12 rounded-lg bg-sacred-green/5 p-8">
            <h2 className="mb-6 text-3xl font-serif font-bold text-sacred-green">
              Our Approach
            </h2>
            <ul className="space-y-4 text-gray-700">
              <li className="flex gap-4">
                <div>
                  <strong className="block text-sacred-green">Cultural Respect</strong>
                  <span>We approach Japanese spirituality with deep respect and cultural sensitivity.</span>
                </div>
              </li>
              <li className="flex gap-4">
                <div>
                  <strong className="block text-sacred-green">Expert Curation</strong>
                  <span>All content is carefully researched and verified by cultural experts.</span>
                </div>
              </li>
              <li className="flex gap-4">
                <div>
                  <strong className="block text-sacred-green">Practical Travel</strong>
                  <span>Beyond theory, we provide actionable travel guides and booking recommendations.</span>
                </div>
              </li>
              <li className="flex gap-4">
                <div>
                  <strong className="block text-sacred-green">Community Focus</strong>
                  <span>We highlight local communities and support authentic travel experiences.</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Partnerships */}
          <div>
            <h2 className="mb-6 text-3xl font-serif font-bold text-sacred-green">
              Partnerships
            </h2>
            <p className="mb-6 text-gray-700">
              ONSAI partners with leading travel platforms to bring you authentic and
              professional guided experiences:
            </p>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <a
                href="https://www.viator.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border-2 border-sacred-green/10 p-6 transition-all hover:border-deep-gold hover:shadow-lg"
              >
                <h3 className="font-semibold text-sacred-green">Viator</h3>
                <p className="mt-2 text-sm text-gray-600">
                  Access hundreds of verified tours and experiences from professional local guides.
                </p>
              </a>
              <a
                href="https://www.getyourguide.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border-2 border-sacred-green/10 p-6 transition-all hover:border-deep-gold hover:shadow-lg"
              >
                <h3 className="font-semibold text-sacred-green">GetYourGuide</h3>
                <p className="mt-2 text-sm text-gray-600">
                  Book curated tours and activities with instant confirmation and flexible cancellation.
                </p>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="border-t border-sacred-green/10 bg-sacred-green py-16 text-cream">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-3xl font-serif font-bold">Get in Touch</h2>
          <p className="mb-8 max-w-2xl">
            Have questions or suggestions? We'd love to hear from you.
          </p>
          <a
            href="mailto:hello@onsai.com"
            className="inline-block rounded-lg bg-deep-gold px-8 py-3 font-semibold text-charcoal transition-transform hover:scale-105"
          >
            Contact Us
          </a>
        </div>
      </section>
    </>
  );
}
