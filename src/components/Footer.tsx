import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="w-full">
      {/* Tagline section */}
      <div className="bg-accent py-10 md:py-12 px-6 text-center">
        <p className="text-white text-xl md:text-2xl font-serif italic">
          "Create once, post everywhere."
        </p>
      </div>

      {/* Contact section */}
      <div className="bg-charcoal py-12 md:py-16 px-6 text-center">
        <p className="text-gray-400 mb-6 text-sm">
          3070 North Main Street NW, Kennesaw, GA 30144
        </p>
        <p className="text-white font-medium mb-4">Have any questions about booking?</p>
        <a
          href="mailto:studioatdesktop@gmail.com"
          className="inline-block bg-accent hover:bg-accent-dark text-white font-medium px-8 py-3.5 rounded-sm transition-colors duration-200 tracking-wide"
        >
          Email Us: studioatdesktop@gmail.com
        </a>

        {/* Legal Links */}
        <div className="mt-10 pt-8 border-t border-white/10">
          <div className="flex justify-center gap-6 text-sm">
            <Link to="/about" className="text-gray-400 hover:text-white transition-colors">
              About
            </Link>
            <span className="text-gray-600">|</span>
            <Link to="/terms" className="text-gray-400 hover:text-white transition-colors">
              Terms of Service
            </Link>
            <span className="text-gray-600">|</span>
            <Link to="/privacy" className="text-gray-400 hover:text-white transition-colors">
              Privacy Policy
            </Link>
          </div>
          <p className="text-gray-500 text-xs mt-4">
            © {new Date().getFullYear()} Studio at Desktop. All rights reserved.
          </p>
          <p className="text-gray-600 text-xs mt-2">
            Studio at Desktop is owned and operated by C2 Unlimited LLC in affiliation with Desktop Co-Working Community.
          </p>
        </div>
      </div>
    </footer>
  );
}
