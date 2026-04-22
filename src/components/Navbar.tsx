import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const navLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'Packages', href: '#packages' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()
  const isHomePage = location.pathname === '/'

  const [isPastHero, setIsPastHero] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
      setIsPastHero(window.scrollY > 280)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (href: string) => {
    setIsOpen(false)
    if (isHomePage && href.startsWith('#')) {
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-charcoal/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between h-16 md:h-20 relative">
          {/* Logo */}
          <Link
            to="/"
            className="font-serif text-xl md:text-2xl text-white hover:text-accent transition-colors"
          >
            Studio at Desktop
          </Link>

          {/* Center Logo - appears when scrolled past hero */}
          <img
            src="/studio-logo-white.png"
            alt="Studio at Desktop Logo"
            className={`absolute left-1/2 -translate-x-1/2 max-w-[35px] md:max-w-[45px] transition-opacity duration-300 ${
              isPastHero ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
          />

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              isHomePage ? (
                <button
                  key={link.label}
                  onClick={() => handleNavClick(link.href)}
                  className="text-white/80 hover:text-accent text-sm uppercase tracking-wide transition-colors"
                >
                  {link.label}
                </button>
              ) : (
                <Link
                  key={link.label}
                  to={`/${link.href}`}
                  className="text-white/80 hover:text-accent text-sm uppercase tracking-wide transition-colors"
                >
                  {link.label}
                </Link>
              )
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white p-2"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isOpen ? 'max-h-64 pb-4' : 'max-h-0'
          }`}
        >
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              isHomePage ? (
                <button
                  key={link.label}
                  onClick={() => handleNavClick(link.href)}
                  className="text-white/80 hover:text-accent text-sm uppercase tracking-wide py-2 text-left transition-colors"
                >
                  {link.label}
                </button>
              ) : (
                <Link
                  key={link.label}
                  to={`/${link.href}`}
                  onClick={() => setIsOpen(false)}
                  className="text-white/80 hover:text-accent text-sm uppercase tracking-wide py-2 transition-colors"
                >
                  {link.label}
                </Link>
              )
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}
