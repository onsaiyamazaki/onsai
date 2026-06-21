import Link from 'next/link';
import { TAG_LIST } from '@/config/tags';
import LatestArticles from '@/components/LatestArticles';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-cover bg-center py-32 text-cream" style={{backgroundImage: 'url(/hero-garden.jpg)'}}>
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="container relative mx-auto px-4 text-center">
          <h1 className="mb-4 text-6xl font-serif font-bold leading-tight">
            Discover Japan&apos;s Spiritual Path
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-xl text-cream/90">
            Explore ancient shrines, master fortune telling, and visit powerful
            spiritual sites across Japan with expert guides and local insights
          </p>
          <Link href="/articles">
            <button className="inline-block rounded-lg bg-deep-gold px-8 py-3 font-semibold text-charcoal transition-transform hover:scale-105">
              Explore Now
            </button>
          </Link>
        </div>
      </section>

      {/* Tag Cloud Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="mb-4 text-center text-4xl font-serif font-bold text-sacred-green">
            Browse by Topic
          </h2>
          <p className="mb-12 text-center text-gray-600">
            Discover articles on topics that interest you
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            {TAG_LIST.map((tag) => (
              <Link key={tag} href={`/articles?tag=${encodeURIComponent(tag)}`}>
                <button className="rounded-full border-2 border-sacred-green/30 px-6 py-2 font-semibold text-sacred-green transition-all hover:border-deep-gold hover:bg-deep-gold/10">
                  {tag}
                </button>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Articles Section */}
      <section className="bg-cream/50 py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 flex items-center justify-between">
            <div>
              <h2 className="text-4xl font-serif font-bold text-sacred-green">
                Latest Articles
              </h2>
              <p className="mt-2 text-gray-600">
                Insights and guides for your spiritual journey
              </p>
            </div>
            <Link href="/articles">
              <span className="text-deep-gold font-semibold hover:underline">
                View All →
              </span>
            </Link>
          </div>

          <LatestArticles />
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl rounded-lg bg-gradient-to-r from-sacred-green to-sacred-green/80 p-12 text-center text-cream">
            <h3 className="mb-4 text-3xl font-serif font-bold">
              Get Weekly Spiritual Insights
            </h3>
            <p className="mb-8">
              Subscribe to receive curated articles, shrine recommendations, and
              exclusive travel tips
            </p>
            <form className="flex flex-col gap-3 sm:flex-row">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 rounded-lg px-4 py-3 text-charcoal"
                required
              />
              <button
                type="submit"
                className="rounded-lg bg-deep-gold px-8 py-3 font-semibold text-charcoal transition-transform hover:scale-105"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
