import React from 'react'
import ServicesHeroSection from '../components/ServicesHeroSection'
import WeProvideBestServices from '../components/WeProvideBestServices'
import AppDownloadSection from '../components/AppDownloadSection'
import ContactUs from '../components/ContactUs'
import Footer from '../components/Footer'
import ServicesTestimonial from '../components/ServicesTestimonial'

const ServicesPage = () => {
    return (
        <section>
            {/* <ServicesHeroSection /> */}
            <WeProvideBestServices />
            <AppDownloadSection />
            <ServicesTestimonial/>
            <ContactUs />
            <Footer />
        </section>

    )
}

export default ServicesPage