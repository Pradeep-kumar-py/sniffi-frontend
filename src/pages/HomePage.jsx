import React from 'react'
import HeroSection from '../components/HeroSection'
import Navbar from '../components/Navbar'
import DoctorImageWithPet from '../components/DoctorImageWithPet'
import WhyChooseUs from '../components/WhyChooseUs'
import WeProvideBestServices from '../components/WeProvideBestServices'
import StatsSection from '../components/StatsSection'
import AppDownloadSection from '../components/AppDownloadSection'
import ContactUs from '../components/ContactUs'
import Footer from '../components/Footer'

const HomePage = () => {
  return (
    <main>
        {/* <Navbar /> */}
        <HeroSection/>
        <DoctorImageWithPet/>
        <WhyChooseUs/>
        <WeProvideBestServices/>
        <StatsSection/>
        <AppDownloadSection/>
        <ContactUs />
        <Footer/>
    </main>
  )
}

export default HomePage