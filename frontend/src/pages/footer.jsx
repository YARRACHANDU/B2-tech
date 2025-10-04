import logo from "../assets/logo.png";

const Footer = () => (
  <footer className="bg-gray-900 text-gray-300 text-center py-10">

    <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
      {/* Logo + Tagline */}
      <div className="space-y-4 max-w-xs mx-auto md:mx-0">
        <img
          src={logo}
          alt="B2 Tech Services Logo"
          className="h-12 mx-auto"
        />
        <p className="text-indigo-400 text-sm">Private Limited</p>
        <p className="text-gray-400 text-sm leading-relaxed">
          Building future-ready professionals and powering visionary organizations.
        </p>
      </div>

      {/* Quick Links */}
      <div>
        <h3 className="text-white text-lg font-semibold mb-4 border-b border-indigo-500 pb-1 tracking-wide">
          Quick Links
        </h3>
        <ul className="space-y-2 text-sm">
          {[
            { name: "Home", href: "/" },
            { name: "About", href: "/about" },
            { name: "Services", href: "/services" },
            { name: "Expertise", href: "/expertise" },
            { name: "Contact", href: "/contact" },
          ].map(({ name, href }) => (
            <li key={name}>
              <a
                href={href}
                className="hover:text-indigo-400 transition-colors duration-200"
              >
                {name}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Our Promise */}
      <div>
        <h3 className="text-white text-lg font-semibold mb-4 border-b border-purple-500 pb-1 tracking-wide">
          Our Promise
        </h3>
        <ul className="space-y-2 text-sm text-indigo-300 list-outside">
          <li>Right Job. Right Candidate. Right Now.</li>
          <li>Believe in More. Become More.</li>
          <li>Where talent meets opportunity.</li>
        </ul>
      </div>

      {/* Contact */}
      <div>
        <h3 className="text-white text-lg font-semibold mb-4 border-b border-pink-500 pb-1 tracking-wide">
          Contact Us
        </h3>
        <ul className="space-y-3 text-sm text-indigo-300">
          <li>
            <span className="font-medium text-pink-400">📍</span> 655, A Block, AECS Layout, Kudlu, Bangalore-560068
          </li>
          <li>
            <span className="font-medium text-pink-400">📞</span> 
            <a href="tel:+916364053221" className="hover:text-pink-400 transition-colors duration-200">
              +91 63640 53221
            </a>
          </li>
          <li>
            <span className="font-medium text-pink-400">✉️</span> 
            <a href="mailto:hrushikesh@b2techservices.in" className="hover:text-pink-400 transition-colors duration-200">
              hrushikesh@b2techservices.in
            </a>
          </li>
        </ul>
      </div>
    </div>

    {/* Bottom Bar */}
    <div className="border-t border-gray-700 mt-10 py-6">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between text-xs text-gray-500 select-none">
        <p>© 2025 B2 Tech Services Pvt Ltd. All rights reserved.</p>
        <div className="mt-3 md:mt-0 space-x-6 flex flex-wrap justify-center md:justify-start text-sm">
          <a href="/privacy" className="hover:text-indigo-400 transition-colors duration-200">
            Privacy Policy
          </a>
          <a href="/terms" className="hover:text-indigo-400 transition-colors duration-200">
            Terms of Service
          </a>
          <a href="/sitemap" className="hover:text-indigo-400 transition-colors duration-200">
            Sitemap
          </a>
        </div>
      </div>
    </div>

  </footer>
);

export default Footer;
