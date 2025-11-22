import React from 'react'
import HeroSectionDogImage from '../assets/images/HeroSectionDog.png'
import { FaPaw, FaHeart, FaShieldAlt } from 'react-icons/fa'
import { MdPets } from 'react-icons/md'
import { Link } from 'react-router-dom'
import pawsvg from '../assets/svg/paw.svg'


const HeroSection = () => {
    return (
        <div className='relative min-h-[70vh] overflow-hidden bg-gradient-to-br from-blue-50 via-white to-pink-50'>
            {/* Enhanced background decorations */}
            <div className='absolute inset-0'>
                {/* Floating bubbles/circles */}
                <div className='absolute top-16 left-10 w-16 h-16 bg-[#FE5F62]/10 rounded-full animate-bounce' style={{ animationDelay: '0s', animationDuration: '3s' }}></div>
                <div className='absolute top-24 right-16 w-14 h-14 bg-blue-300/20 rounded-full animate-bounce' style={{ animationDelay: '1s', animationDuration: '4s' }}></div>
                <div className='absolute bottom-32 left-20 w-10 h-10 bg-yellow-300/20 rounded-full animate-bounce' style={{ animationDelay: '0.5s', animationDuration: '3.5s' }}></div>
                <div className='absolute bottom-16 right-32 w-12 h-12 bg-green-300/20 rounded-full animate-bounce' style={{ animationDelay: '2s', animationDuration: '4.5s' }}></div>
                
                {/* Enhanced paw decorations */}
                <img src={pawsvg} alt="pawsvg" className='hidden sm:block absolute left-[2%] bottom-[6%] w-5 sm:w-7 md:w-9 opacity-60 animate-pulse z-0' />
                <img src={pawsvg} alt="pawsvg" className='hidden sm:block absolute left-[8%] bottom-[16%] w-4 sm:w-5 md:w-7 opacity-60 animate-pulse z-0' style={{ animationDelay: '0.5s' }} />
                <img src={pawsvg} alt="pawsvg" className='hidden lg:block absolute right-[5%] top-[15%] w-7 opacity-40 animate-pulse z-0' style={{ animationDelay: '1.2s' }} />
                <img src={pawsvg} alt="pawsvg" className='hidden lg:block absolute right-[12%] top-[25%] w-5 opacity-40 animate-pulse z-0' style={{ animationDelay: '0.8s' }} />
            </div>

            <div className='relative z-10 flex flex-col md:flex-row items-center gap-4 md:gap-6 justify-center md:justify-evenly px-4 sm:px-6 md:px-8 lg:px-12 py-4 sm:py-6 md:py-8 min-h-[70vh]'>
                <div className='relative w-full md:w-1/2 max-w-2xl order-2 md:order-1 animate-hero-fade-up'>
                    {/* Trust badges */}
                    {/* <div className='flex gap-3 mb-4 opacity-75 animate-hero-fade-up' style={{ animationDelay: '0.2s' }}>
                        <div className='flex items-center gap-1 text-xs bg-white/80 backdrop-blur-sm px-2 py-1 rounded-full shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105'>
                            <FaShieldAlt className='text-green-500' />
                            <span className='text-gray-700'>Licensed</span>
                        </div>
                        <div className='flex items-center gap-1 text-xs bg-white/80 backdrop-blur-sm px-2 py-1 rounded-full shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105'>
                            <FaHeart className='text-red-400' />
                            <span className='text-gray-700'>Caring</span>
                        </div>
                        <div className='flex items-center gap-1 text-xs bg-white/80 backdrop-blur-sm px-2 py-1 rounded-full shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105'>
                            <MdPets className='text-[#FE5F62]' />
                            <span className='text-gray-700'>Expert</span>
                        </div>
                    </div> */}

                    {/* Enhanced heading with gradient text */}
                    <div className="mb-2 sm:mb-3 animate-hero-fade-up" style={{ animationDelay: '0.4s' }}>
                        <h1 className="font-bold tracking-wide leading-tight relative">
                            <span className="text-[#3F3D56] text-2xl sm:text-3xl md:text-4xl lg:text-6xl drop-shadow-sm">Trusted Veterinary </span>
                            <span className="relative bg-gradient-to-r from-[#FE5F62] to-[#FF8A8D] bg-clip-text text-transparent text-2xl sm:text-3xl md:text-4xl lg:text-6xl">
                                Care,
                                <div className="absolute inset-0 bg-gradient-to-r from-[#FE5F62] to-[#FF8A8D] bg-clip-text text-transparent animate-text-shimmer"></div>
                            </span>
                            <br />
                            <span className="text-[#3F3D56] text-2xl sm:text-3xl md:text-4xl lg:text-6xl drop-shadow-sm">for </span>
                            <span className="relative bg-gradient-to-r from-[#FE5F62] to-[#FF8A8D] bg-clip-text text-transparent text-2xl sm:text-3xl md:text-4xl lg:text-6xl">
                                At Your Doorstep
                                <div className="absolute inset-0 bg-gradient-to-r from-[#FE5F62] to-[#FF8A8D] bg-clip-text text-transparent animate-text-shimmer" style={{ animationDelay: '1s' }}></div>
                            </span>
                        </h1>
                    </div>

                    {/* Enhanced description */}
                    <div className="w-full mb-3 sm:mb-4 text-gray-700 text-sm sm:text-base md:text-base lg:text-xl font-normal leading-snug max-w-xl animate-hero-fade-up" style={{ animationDelay: '0.6s' }}>
                        Expert consultations,vaccinations, and treatments-delivered to your home. Because every paw deserves comfort love and 
                        <span className="text-[#FE5F62] font-medium"> trusted medical care</span>-right where you feel safest.
                    </div>

                    {/* Enhanced CTA buttons */}
                    <div className="flex justify-start text-center sm:flex-row gap-2 animate-hero-fade-up" style={{ animationDelay: '0.8s' }}>
                        <Link to="/book-appointment" className="
                            group relative overflow-hidden
                            inline-flex items-center justify-center gap-2
                            bg-gradient-to-r from-[#FE5F62] to-[#FF8A8D] animate-gradient-shift
                            hover:from-[#e45457] hover:to-[#e67578]
                            text-white font-semibold
                            px-5 py-2.5
                            rounded-lg
                            transition-all duration-300
                            shadow-md hover:shadow-lg
                            transform hover:scale-105 active:scale-95
                            min-w-[160px]
                        ">
                            <div className="absolute inset-0 bg-white/20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                            <span className="relative z-10 w-[15vw] text-lg">Book Appointment</span>
                            <FaPaw className="relative z-10 text-sm transition-transform group-hover:rotate-12 group-hover:scale-110" />
                        </Link>
                        
                        {/* <button className="
                            inline-flex items-center justify-center gap-2
                            bg-white/80 backdrop-blur-sm
                            hover:bg-white hover:scale-105
                            text-gray-700 hover:text-[#FE5F62] font-medium
                            px-6 py-4
                            rounded-2xl
                            transition-all duration-300
                            shadow-md hover:shadow-lg
                            border border-gray-200/50 hover:border-[#FE5F62]/30
                            active:scale-95
                        ">
                            <span>Learn More</span>
                            <MdPets className="transition-transform hover:scale-110" />
                        </button> */}
                    </div>

                    {/* Stats/features */}
                    {/* <div className="flex gap-6 mt-8 text-center animate-hero-fade-up" style={{ animationDelay: '1s' }}>
                        <div className="text-center group hover:scale-105 transition-transform duration-300">
                            <div className="text-2xl font-bold text-[#3F3D56] group-hover:text-[#FE5F62] transition-colors duration-300">200+</div>
                            <div className="text-sm text-gray-600">Happy Pets</div>
                        </div>
                        <div className="text-center group hover:scale-105 transition-transform duration-300">
                            <div className="text-2xl font-bold text-[#3F3D56] group-hover:text-[#FE5F62] transition-colors duration-300">24/7</div>
                            <div className="text-sm text-gray-600">Emergency Care</div>
                        </div>
                        <div className="text-center group hover:scale-105 transition-transform duration-300">
                            <div className="text-2xl font-bold text-[#3F3D56] group-hover:text-[#FE5F62] transition-colors duration-300">5+</div>
                            <div className="text-sm text-gray-600">Expert Vets</div>
                        </div>
                    </div> */}
                </div>

                <div className='relative w-full max-w-xs sm:max-w-sm md:w-1/2 md:max-w-md lg:max-w-lg order-1 md:order-2 mb-2 md:mb-0 animate-hero-fade-in-scale' style={{ animationDelay: '0.3s' }}>
                    {/* Enhanced background effects */}
                    <div className='absolute inset-0 bg-gradient-to-br from-[#FE5F62]/30 via-purple-300/20 to-blue-300/30 rounded-full blur-3xl transform scale-110 opacity-70 animate-pulse-glow'></div>
                    <div className='absolute inset-0 bg-[#FE5F62]/20 rounded-full blur-xl transform scale-75 animate-ping' style={{ animationDuration: '4s' }}></div>
                    
                    {/* Floating elements around the image */}
                    <div className='absolute -top-3 -left-3 w-6 h-6 bg-yellow-300/60 rounded-full animate-gentle-bounce' style={{ animationDelay: '0.5s' }}></div>
                    <div className='absolute -top-2 -right-4 w-5 h-5 bg-blue-300/60 rounded-full animate-gentle-bounce' style={{ animationDelay: '1s' }}></div>
                    <div className='absolute -bottom-3 -left-2 w-8 h-8 bg-green-300/60 rounded-full animate-gentle-bounce' style={{ animationDelay: '1.5s' }}></div>
                    <div className='absolute top-1/2 -right-6 w-4 h-4 bg-pink-300/60 rounded-full animate-gentle-bounce' style={{ animationDelay: '2s' }}></div>

                    {/* Enhanced image with better styling */}
                    <div className="relative z-10 transform hover:scale-105 transition-transform duration-500 animate-float">
                        <img 
                            src={HeroSectionDogImage} 
                            alt="Happy dog illustration" 
                            className="w-full max-w-xs sm:max-w-sm md:max-w-md mx-auto drop-shadow-2xl filter brightness-105 contrast-105 hover:filter hover:brightness-110 transition-all duration-300" 
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroSection