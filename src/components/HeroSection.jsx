import React from 'react'
import HeroSectionDogImage from '../assets/images/HeroSectionDog.png'
import { FaPaw, FaHeart, FaShieldAlt } from 'react-icons/fa'
import { MdPets } from 'react-icons/md'
import { Link } from 'react-router-dom'
import pawsvg from '../assets/svg/paw.svg'


const HeroSection = () => {
    return (
        <div className='relative min-h-[90vh] overflow-hidden bg-gradient-to-br from-blue-50 via-white to-pink-50'>
            {/* Enhanced background decorations */}
            <div className='absolute inset-0'>
                {/* Floating bubbles/circles */}
                <div className='absolute top-20 left-10 w-20 h-20 bg-[#FE5F62]/10 rounded-full animate-bounce' style={{ animationDelay: '0s', animationDuration: '3s' }}></div>
                <div className='absolute top-32 right-16 w-16 h-16 bg-blue-300/20 rounded-full animate-bounce' style={{ animationDelay: '1s', animationDuration: '4s' }}></div>
                <div className='absolute bottom-40 left-20 w-12 h-12 bg-yellow-300/20 rounded-full animate-bounce' style={{ animationDelay: '0.5s', animationDuration: '3.5s' }}></div>
                <div className='absolute bottom-20 right-32 w-14 h-14 bg-green-300/20 rounded-full animate-bounce' style={{ animationDelay: '2s', animationDuration: '4.5s' }}></div>
                
                {/* Enhanced paw decorations */}
                <img src={pawsvg} alt="pawsvg" className='hidden sm:block absolute left-[2%] bottom-[6%] w-6 sm:w-8 md:w-10 opacity-60 animate-pulse z-0' />
                <img src={pawsvg} alt="pawsvg" className='hidden sm:block absolute left-[8%] bottom-[16%] w-5 sm:w-6 md:w-8 opacity-60 animate-pulse z-0' style={{ animationDelay: '0.5s' }} />
                <img src={pawsvg} alt="pawsvg" className='hidden lg:block absolute right-[5%] top-[15%] w-8 opacity-40 animate-pulse z-0' style={{ animationDelay: '1.2s' }} />
                <img src={pawsvg} alt="pawsvg" className='hidden lg:block absolute right-[12%] top-[25%] w-6 opacity-40 animate-pulse z-0' style={{ animationDelay: '0.8s' }} />
            </div>

            <div className='relative z-10 flex flex-col md:flex-row items-center gap-8 md:gap-10 justify-center md:justify-evenly px-2 sm:px-4 md:px-8 lg:px-12 py-8 sm:py-12 min-h-[90vh]'>
                <div className='relative w-full md:w-1/2 max-w-2xl order-2 md:order-1 animate-hero-fade-up'>
                    {/* Trust badges */}
                    <div className='flex gap-3 mb-4 opacity-75 animate-hero-fade-up' style={{ animationDelay: '0.2s' }}>
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
                    </div>

                    {/* Enhanced heading with gradient text */}
                    <div className="mb-6 sm:mb-8 md:mb-10 animate-hero-fade-up" style={{ animationDelay: '0.4s' }}>
                        <h1 className="font-bold tracking-wide leading-tight relative">
                            <span className="text-[#3F3D56] text-3xl sm:text-4xl md:text-5xl lg:text-7xl drop-shadow-sm">Compassionate </span>
                            <span className="relative bg-gradient-to-r from-[#FE5F62] to-[#FF8A8D] bg-clip-text text-transparent text-3xl sm:text-4xl md:text-5xl lg:text-7xl">
                                Care
                                <div className="absolute inset-0 bg-gradient-to-r from-[#FE5F62] to-[#FF8A8D] bg-clip-text text-transparent animate-text-shimmer"></div>
                            </span>
                            <br />
                            <span className="text-[#3F3D56] text-3xl sm:text-4xl md:text-5xl lg:text-7xl drop-shadow-sm">for </span>
                            <span className="relative bg-gradient-to-r from-[#FE5F62] to-[#FF8A8D] bg-clip-text text-transparent text-3xl sm:text-4xl md:text-5xl lg:text-7xl">
                                Every Paw!
                                <div className="absolute inset-0 bg-gradient-to-r from-[#FE5F62] to-[#FF8A8D] bg-clip-text text-transparent animate-text-shimmer" style={{ animationDelay: '1s' }}></div>
                            </span>
                        </h1>
                    </div>

                    {/* Enhanced description */}
                    <div className="w-full mb-8 sm:mb-10 text-gray-700 text-base sm:text-lg md:text-xl lg:text-2xl font-normal leading-relaxed max-w-xl animate-hero-fade-up" style={{ animationDelay: '0.6s' }}>
                        At Sniffi, we believe that every pet deserves the best care, love, and attention. Our team of experienced veterinarians and compassionate staff are dedicated to providing 
                        <span className="text-[#FE5F62] font-medium"> high-quality medical care</span>, wellness services, and emergency treatments for your beloved companions.
                    </div>

                    {/* Enhanced CTA buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 items-start animate-hero-fade-up" style={{ animationDelay: '0.8s' }}>
                        <Link to="/bookappointment" className="
                            group relative overflow-hidden
                            inline-flex items-center justify-center gap-3
                            bg-gradient-to-r from-[#FE5F62] to-[#FF8A8D] animate-gradient-shift
                            hover:from-[#e45457] hover:to-[#e67578]
                            text-white font-semibold
                            px-8 py-4
                            rounded-2xl
                            transition-all duration-300
                            shadow-xl hover:shadow-2xl
                            transform hover:scale-105 active:scale-95
                            min-w-[200px]
                        ">
                            <div className="absolute inset-0 bg-white/20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                            <span className="relative z-10 text-lg">Book Appointment</span>
                            <FaPaw className="relative z-10 transition-transform group-hover:rotate-12 group-hover:scale-110" />
                        </Link>
                        
                        <button className="
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
                        </button>
                    </div>

                    {/* Stats/features */}
                    <div className="flex gap-6 mt-8 text-center animate-hero-fade-up" style={{ animationDelay: '1s' }}>
                        <div className="text-center group hover:scale-105 transition-transform duration-300">
                            <div className="text-2xl font-bold text-[#3F3D56] group-hover:text-[#FE5F62] transition-colors duration-300">500+</div>
                            <div className="text-sm text-gray-600">Happy Pets</div>
                        </div>
                        <div className="text-center group hover:scale-105 transition-transform duration-300">
                            <div className="text-2xl font-bold text-[#3F3D56] group-hover:text-[#FE5F62] transition-colors duration-300">24/7</div>
                            <div className="text-sm text-gray-600">Emergency Care</div>
                        </div>
                        <div className="text-center group hover:scale-105 transition-transform duration-300">
                            <div className="text-2xl font-bold text-[#3F3D56] group-hover:text-[#FE5F62] transition-colors duration-300">15+</div>
                            <div className="text-sm text-gray-600">Expert Vets</div>
                        </div>
                    </div>
                </div>

                <div className='relative w-full max-w-xs sm:max-w-sm md:w-1/2 md:max-w-md lg:max-w-lg xl:max-w-xl order-1 md:order-2 mb-6 md:mb-0 animate-hero-fade-in-scale' style={{ animationDelay: '0.3s' }}>
                    {/* Enhanced background effects */}
                    <div className='absolute inset-0 bg-gradient-to-br from-[#FE5F62]/30 via-purple-300/20 to-blue-300/30 rounded-full blur-3xl transform scale-110 opacity-70 animate-pulse-glow'></div>
                    <div className='absolute inset-0 bg-[#FE5F62]/20 rounded-full blur-xl transform scale-75 animate-ping' style={{ animationDuration: '4s' }}></div>
                    
                    {/* Floating elements around the image */}
                    <div className='absolute -top-4 -left-4 w-8 h-8 bg-yellow-300/60 rounded-full animate-gentle-bounce' style={{ animationDelay: '0.5s' }}></div>
                    <div className='absolute -top-2 -right-6 w-6 h-6 bg-blue-300/60 rounded-full animate-gentle-bounce' style={{ animationDelay: '1s' }}></div>
                    <div className='absolute -bottom-4 -left-2 w-10 h-10 bg-green-300/60 rounded-full animate-gentle-bounce' style={{ animationDelay: '1.5s' }}></div>
                    <div className='absolute top-1/2 -right-8 w-4 h-4 bg-pink-300/60 rounded-full animate-gentle-bounce' style={{ animationDelay: '2s' }}></div>

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