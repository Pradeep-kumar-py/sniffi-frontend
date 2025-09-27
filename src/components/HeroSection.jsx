import React from 'react'
import HeroSectionDogImage from '../assets/images/HeroSectionDog.png'
import { FaPaw } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import pawsvg from '../assets/svg/paw.svg'


const HeroSection = () => {
    return (
        <div className='flex flex-col md:flex-row items-center gap-8 md:gap-10 justify-center md:justify-evenly relative min-h-[90vh] px-2 sm:px-4 md:px-8 lg:px-12 py-8 sm:py-12 overflow-hidden'>
            {/* Decorative paw elements - made responsive */}
            <img src={pawsvg} alt="pawsvg" className='hidden sm:block absolute left-[2%] bottom-[6%] w-6 sm:w-8 md:w-10 opacity-70 animate-pulse z-0' />
            <img src={pawsvg} alt="pawsvg" className='hidden sm:block absolute left-[8%] bottom-[16%] w-5 sm:w-6 md:w-8 opacity-70 animate-pulse z-0' style={{ animationDelay: '0.5s' }} />

            <div className='relative w-full md:w-1/2 max-w-2xl order-2 md:order-1 z-10'>
                {/* <img src={pawsvg} alt="pawsvg" className='hidden sm:block absolute right-[8%] top-[10%] w-5 sm:w-6 opacity-70 animate-pulse' style={{animationDelay: '0.3s'}} /> */}
                {/* <img src={pawsvg} alt="pawsvg" className='hidden sm:block absolute right-0 top-[3%] w-6 sm:w-7 opacity-70 animate-pulse' style={{animationDelay: '0.8s'}} /> */}

                {/* Heading with responsive text sizes */}
                <div className="mb-6 sm:mb-8 md:mb-12">
                    <h1 className="font-semibold tracking-wide leading-tight">
                        <span className="text-[#3F3D56] text-2xl sm:text-3xl md:text-4xl lg:text-6xl">Compassionate </span>
                        <span className="text-[#FE5F62] text-2xl sm:text-3xl md:text-4xl lg:text-6xl">Care</span>
                        <br />
                        <span className="text-[#3F3D56] text-2xl sm:text-3xl md:text-4xl lg:text-6xl">for </span>
                        <span className="text-[#FE5F62] text-2xl sm:text-3xl md:text-4xl lg:text-6xl">Every Paw!</span>
                    </h1>
                </div>

                {/* Description with responsive width */}
                <div className="w-full mb-6 sm:mb-8 text-black text-sm sm:text-base md:text-lg lg:text-xl font-normal leading-relaxed">
                    At Sniffi, we believe that every pet deserves the best care, love, and attention. Our team of experienced veterinarians and compassionate staff are dedicated to providing high-quality medical care, wellness services, and emergency treatments for your beloved pets.
                </div>

                {/* Enhanced button with hover effects */}
                <Link to="/bookappointment" className="
                    inline-flex
                    items-center
                    gap-2
                    bg-[#FE5F62]
                    hover:bg-[#e45457]
                    text-white
                    font-medium
                    px-6
                    py-3
                    rounded-md
                    transition-all
                    duration-300
                    mt-2
                    self-start
                    shadow-lg
                    group
                    w-auto
                ">
                    Book Appointment
                    <FaPaw className="inline-block ml-1 transition-transform group-hover:rotate-12" />
                </Link>
            </div>

            <div className='relative w-full max-w-xs sm:max-w-sm md:w-1/2 md:max-w-md lg:max-w-lg order-1 md:order-2 mb-6 md:mb-0 z-10'>
                {/* Improved blurred background with animation */}
                <div className='absolute inset-0 bg-[#FE5F62]/70 rounded-full blur-2xl transform scale-90 opacity-80 
                  animate-pulse transition-all duration-1000'></div>

                {/* Responsive image */}
                <img src={HeroSectionDogImage} alt="Dog illustration" className="relative z-10 w-full max-w-xs sm:max-w-sm md:max-w-md mx-auto drop-shadow-xl" />
            </div>
        </div>
    )
}

export default HeroSection