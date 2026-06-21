import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-sacred-green/20 bg-sacred-green text-cream">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Brand */}
          <div>
            <h3 className="mb-4 text-lg font-serif font-bold">ONSAI</h3>
            <p className="text-sm text-cream/80">
              Discover Japan&apos;s spiritual path through shrines, fortune telling,
              and power spots.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="mb-4 font-semibold">Navigation</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-deep-gold">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/articles" className="hover:text-deep-gold">
                  Articles
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-deep-gold">
                  About
                </Link>
              </li>
            </ul>
          </div>

          {/* Tags */}
          <div>
            <h4 className="mb-4 font-semibold">Tags</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/articles?tag=Shrines" className="hover:text-deep-gold">
                  Shrines
                </Link>
              </li>
              <li>
                <Link href="/articles?tag=Fortune+Telling" className="hover:text-deep-gold">
                  Fortune Telling
                </Link>
              </li>
              <li>
                <Link href="/articles?tag=Power+Spots" className="hover:text-deep-gold">
                  Power Spots
                </Link>
              </li>
              <li>
                <Link href="/articles?tag=Onmyoji" className="hover:text-deep-gold">
                  Onmyoji
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="mb-4 font-semibold">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://www.viator.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-deep-gold"
                >
                  Viator Tours
                </a>
              </li>
              <li>
                <a
                  href="https://www.getyourguide.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-deep-gold"
                >
                  GetYourGuide
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 border-t border-cream/20" />

        {/* Bottom */}
        <div className="flex flex-col items-center justify-between gap-4 text-sm text-cream/80 md:flex-row">
          <p>&copy; {currentYear} ONSAI. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-cream">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-cream">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
