
import Navbar from './components/layout/Navbar'
import Hero from './components/home/Hero'
import PopularDestinations from './components/home/PopularDestinations'
import WhyChooseUs from './components/home/WhyChooseUs'
import ServicesPreview from './components/home/ServicesPreview'
import CountriesPreview from './components/home/CountriesPreview'
import Testimonials from './components/home/Testimonials'
import TravelIdeas from './components/home/TravelIdeas'
import Stats from './components/home/Stats'
import CTASection from './components/home/CTASection'
import Newsletter from './components/home/Newsletter'
import Footer from './components/layout/Footer'

import { Routes, Route } from 'react-router-dom'
import About from './pages/About'
import Services from './pages/Services'
import Countries from './pages/Countries'
import FAQ from './pages/FAQ'
import Contact from './pages/Contact'



const App = () => {
  return (
    <>
      <Navbar />
      <Routes>

        <Route path="/" element={
          <>
            <Hero />
            <PopularDestinations />
            <WhyChooseUs />
            <ServicesPreview />
            <CountriesPreview />
            <Testimonials />
            <TravelIdeas />
            <Stats />
            <CTASection />
            <Newsletter />
          </>
        } />

        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/countries" element={<Countries />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/contact" element={<Contact />} />



      </Routes>

      <Footer />



    </>
  )
}

export default App
