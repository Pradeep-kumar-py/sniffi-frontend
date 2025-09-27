import React from 'react'
import { FaCheckCircle, FaHeart, FaClock, FaUserMd, FaShieldAlt } from 'react-icons/fa';
import { MdPets } from 'react-icons/md';
import dogPet from '../assets/images/women.jpg'

// Enhanced home services data with icons and improved descriptions
const homeServices = [
    {
        title: "Comfort & Less Stress",
        description: "Pets feel more relaxed in their familiar environment, reducing anxiety and fear associated with clinic visits.",
        icon: <FaHeart className="text-[#FE5F62]" />
    },
    {
        title: "Convenience & Time-Saving",
        description: "Skip the hassle of clinic visits and waiting rooms—professional care comes directly to your doorstep!",
        icon: <FaClock className="text-[#FE5F62]" />
    },
    {
        title: "One-on-One Attention",
        description: "Our veterinarians provide dedicated, personalized consultations and thorough check-ups without distractions.",
        icon: <FaUserMd className="text-[#FE5F62]" />
    },
    {
        title: "Safe & Hygienic",
        description: "Minimize exposure to contagious illnesses and ensure a cleaner, safer healthcare experience for your pet.",
        icon: <FaShieldAlt className="text-[#FE5F62]" />
    }
];

const ServicesHeroSection = () => {
    return (
        <div className="bg-gradient-to-br from-white via-pink-50/30 to-red-50/20 w-full px-3 sm:px-6 lg:px-20 py-8 sm:py-12 lg:py-16 min-h-screen flex items-center">
            <div className="max-w-7xl mx-auto w-full">
                {/* Main Title */}
                <div className="text-center mb-8 sm:mb-12 lg:mb-16">
                    <div className="inline-flex items-center gap-2 mb-4 sm:mb-6 px-4 py-2 bg-[#FE5F62]/10 rounded-full">
                        <MdPets className="text-[#FE5F62] text-lg sm:text-xl" />
                        <span className="text-[#3F3D56] text-sm sm:text-base font-medium">Premium Pet Care Service</span>
                    </div>
                    
                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 text-[#3F3D56] leading-tight tracking-tight">
                        <div className="mb-2 sm:mb-3 animate-fade-in">
                            <div className="inline-block">Sniffi – Quality <span className="text-[#FE5F62] relative">
                                Pet Care,
                                <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#FE5F62] animate-pulse"></div>
                            </span></div>
                        </div>
                        <div className="animate-fade-in-delay">
                            Right at <span className="text-[#FE5F62] relative">
                                Your Doorstep!
                                <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#FE5F62] animate-pulse" style={{animationDelay: '0.5s'}}></div>
                            </span>
                        </div>
                    </h1>
                    
                    <p className="text-gray-600 text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
                        Experience professional veterinary care in the comfort of your home with our dedicated team of expert veterinarians.
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row justify-between items-start gap-8 lg:gap-16">
                    {/* Content Section */}
                    <section className="w-full lg:w-3/5 flex flex-col justify-start">
                        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#3F3D56] mb-6 sm:mb-8 lg:mb-10 leading-tight text-center lg:text-left">
                            Why Choose At-<span className="text-[#FE5F62] relative">
                                Home Pet Care?
                                <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#FE5F62]/50 rounded-full"></div>
                            </span>
                        </h2>

                        <div className="space-y-4 sm:space-y-6 text-sm sm:text-base lg:text-lg">
                            {homeServices.map((item, idx) => (
                                <div 
                                    key={idx} 
                                    className="group bg-white/70 backdrop-blur-sm p-4 sm:p-6 rounded-2xl shadow-sm hover:shadow-lg border border-gray-100/50 transition-all duration-300 hover:scale-[1.02] hover:bg-white/80"
                                >
                                    <div className="flex items-start gap-4">
                                        {/* Icon Container */}
                                        <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-[#FE5F62]/10 rounded-full flex items-center justify-center group-hover:bg-[#FE5F62]/20 transition-colors duration-300">
                                            <div className="text-lg sm:text-xl">
                                                {item.icon}
                                            </div>
                                        </div>
                                        
                                        {/* Content */}
                                        <div className="flex-1 min-w-0">
                                            <h3 className="font-bold text-gray-900 text-base sm:text-lg mb-2 group-hover:text-[#3F3D56] transition-colors duration-300">
                                                {item.title}
                                            </h3>
                                            <p className="text-gray-600 leading-relaxed">
                                                {item.description}
                                            </p>
                                        </div>
                                        
                                        {/* Check Icon */}
                                        <FaCheckCircle className="text-[#FE5F62] flex-shrink-0 text-lg sm:text-xl opacity-70 group-hover:opacity-100 transition-opacity duration-300" />
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* CTA Section */}
                        <div className="mt-8 sm:mt-12 text-center lg:text-left">
                            <div className="inline-flex flex-col sm:flex-row items-center gap-4">
                                <div className="text-[#3F3D56] text-sm sm:text-base font-medium">
                                    Ready to book your pet's appointment?
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 bg-[#FE5F62] rounded-full animate-pulse"></div>
                                    <div className="w-2 h-2 bg-[#FE5F62]/60 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
                                    <div className="w-2 h-2 bg-[#FE5F62]/30 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Enhanced Image Section */}
                    <div className="w-full lg:w-2/5 flex justify-center items-center">
                        <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-full group">
                            {/* Multiple decorative backgrounds */}
                            <div className="absolute -inset-6 bg-gradient-to-br from-pink-200/40 to-red-200/40 rounded-3xl -z-10 blur-2xl group-hover:from-pink-300/50 group-hover:to-red-300/50 transition-all duration-500"></div>
                            <div className="absolute -inset-3 bg-gradient-to-tr from-[#FE5F62]/20 to-pink-200/30 rounded-2xl -z-10 blur-xl animate-pulse"></div>
                            
                            {/* Image container with enhanced effects */}
                            <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 bg-white/20 backdrop-blur-sm border border-white/30">
                                <img
                                    className="w-full h-auto max-h-[350px] sm:max-h-[450px] lg:max-h-[550px] object-cover transition-transform duration-700 group-hover:scale-105"
                                    src={dogPet}
                                    alt='Professional veterinarian caring for pet'
                                    loading="lazy"
                                />
                                
                                {/* Overlay with floating elements */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent pointer-events-none"></div>
                                
                                {/* Floating paw prints */}
                                <div className="absolute top-4 right-4 text-white/80 animate-bounce">
                                    <MdPets className="text-2xl sm:text-3xl drop-shadow-lg" />
                                </div>
                                <div className="absolute bottom-4 left-4 text-white/60 animate-bounce" style={{animationDelay: '0.5s'}}>
                                    <MdPets className="text-xl sm:text-2xl drop-shadow-lg" />
                                </div>
                            </div>
                            
                            {/* Trust indicator */}
                            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg border border-gray-100/50">
                                <div className="flex items-center gap-2 text-xs sm:text-sm">
                                    <div className="flex text-yellow-400">
                                        {[...Array(5)].map((_, i) => (
                                            <span key={i}>⭐</span>
                                        ))}
                                    </div>
                                    <span className="text-gray-700 font-medium">Trusted by 1000+ pet parents</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ServicesHeroSection