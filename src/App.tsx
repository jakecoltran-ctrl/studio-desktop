import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import HomePage from './pages/HomePage'
import SilverPage from './pages/SilverPage'
import GoldPage from './pages/GoldPage'
import PlatinumPage from './pages/PlatinumPage'
import BronzePage from './pages/BronzePage'
import DigitalBusinessCardPage from './pages/DigitalBusinessCardPage'
import TermsOfServicePage from './pages/TermsOfServicePage'
import PrivacyPolicyPage from './pages/PrivacyPolicyPage'
import AboutPage from './pages/AboutPage'

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/silver" element={<SilverPage />} />
      <Route path="/gold" element={<GoldPage />} />
      <Route path="/platinum" element={<PlatinumPage />} />
      <Route path="/bronze" element={<BronzePage />} />
      <Route path="/digital-business-card" element={<DigitalBusinessCardPage />} />
      <Route path="/terms" element={<TermsOfServicePage />} />
      <Route path="/privacy" element={<PrivacyPolicyPage />} />
      <Route path="/about" element={<AboutPage />} />
    </Routes>
    </>
  )
}

export default App
