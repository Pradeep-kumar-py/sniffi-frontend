import React from 'react'
import { IoPawOutline } from 'react-icons/io5'
import { Link } from 'react-router-dom'

// Manual array based on the image design
const services = [
    {
        id: 1,
        title: "Vet Consultation",
        path: "/services/vet-consultation",
        description: "Get expert advice and personalized care from professional veterinarians, ensuring your pet's well-being at every stage."
    },
    {
        id: 2,
        title: "Vaccinations",
        path: "/services/vaccination",
        description: "Complete vaccination care for your pets at all age groups. Routine reminders and follow-ups for essential boosters."
    },
    {
        id: 3,
        title: "Wellness Exam",
        path: "/services/wellness",
        description: "Upgrade your general health checkup with ear-cleaning, nail trimming and other essential checks. (Oral hygiene, fur coat, ticks and deworming)"
    },
    {
        id: 4,
        title: "Diagnostic Tests",
        path: "/services/diagnostics",
        description: "Diagnosis and screening your pet's health for both - symptomatic and preventive treatments. Early detection is early cure."
    },
    {
        id: 5,
        title: "Pet Registration",
        path: "/services/pet-registration",
        description: "Hassle-free pet registration with the Municipal Corporations to make your pet a registered member of your family."
    },
    {
        id: 6,
        title: "Emergency Care",
        path: "/services/emergency-care",
        description: "Emergency care for your pet's health at the time you need it the most. COMING SOON."
    }
]

const WeProvideBestServices = () => {
    return (
        <div className="w-full py-12 sm:py-16 lg:py-20 px-3 sm:px-6 lg:px-8 bg-gradient-to-br from-red-50/70 via-pink-50/50 to-white">
            <div className="max-w-7xl mx-auto">
                {/* Header Section */}
                <div className="text-center mb-12 sm:mb-16 lg:mb-20">
                    {/* <div className="inline-flex items-center gap-3 mb-4 sm:mb-6 px-4 py-2 bg-[#FE5F62]/10 rounded-full">
                        <IoPawOutline className="text-[#FE5F62] text-lg sm:text-xl" />
                        <span className="text-[#3F3D56] text-sm sm:text-base font-medium">Our Services</span>
                    </div> */}
                    
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-wide leading-tight mb-4 sm:mb-6">
                        <span className="text-[#3F3D56]">Comprehensive </span>
                        <span className="text-[#FE5F62] relative">
                            Veterinary Services
                            <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#FE5F62]/50 rounded-full"></div>
                        </span>
                    </h2>
                    
                    <p className="text-gray-600 text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
                        From tummy rubs checkups to life-savings care - everything ypur pets needs!
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 max-w-7xl mx-auto">
                    {services.map((service, index) => (
                        <Link 
                            to={service.path} 
                            key={service.id} 
                            className="relative group touch-target"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            {/* Paw Icon Circle - Enhanced for mobile */}
                            <div className="absolute -top-4 sm:-top-6 left-4 sm:left-6 z-10">
                                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white rounded-full border-2 border-[#FE5F62] flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
                                    <IoPawOutline className="w-7 h-7 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-[#FE5F62] group-hover:rotate-12 transition-transform duration-300" />
                                </div>
                            </div>

                            {/* Service Card - Enhanced mobile design */}
                            <div className="bg-white/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl border-2 border-[#FE5F62]/20 p-5 sm:p-6 lg:p-8 pt-8 sm:pt-10 min-h-[280px] sm:min-h-[300px] lg:min-h-[320px] transition-all duration-500 hover:shadow-2xl hover:scale-105 group-hover:bg-gradient-to-br group-hover:from-white group-hover:to-pink-50/80 group-hover:border-[#FE5F62]/40 relative overflow-hidden">
                                {/* Background decoration */}
                                <div className="absolute top-0 right-0 w-20 h-20 bg-[#FE5F62]/5 rounded-full -translate-y-10 translate-x-10 group-hover:scale-150 transition-transform duration-700"></div>
                                
                                <div className="relative z-10">
                                    <h3 className="text-[#FE5F62] text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold mb-3 sm:mb-4 leading-tight group-hover:text-[#e45457] transition-colors duration-300">
                                        {service.title}
                                    </h3>
                                    
                                    <p className="text-[#3F3D56] text-sm sm:text-base lg:text-lg leading-relaxed mb-4 sm:mb-6 line-height-loose">
                                        {service.description}
                                    </p>
                                    
                                    {/* Enhanced CTA section */}
                                    <div className="flex items-center justify-between mt-auto pt-4">
                                        <div className="w-8 sm:w-12 h-0.5 bg-gradient-to-r from-[#FE5F62] to-transparent rounded-full group-hover:w-16 sm:group-hover:w-20 transition-all duration-500"></div>
                                        
                                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-[#FE5F62] text-sm font-medium">
                                            Learn More →
                                        </div>
                                    </div>
                                </div>
                                
                                {/* Hover effect overlay */}
                                <div className="absolute inset-0 bg-gradient-to-br from-[#FE5F62]/5 to-pink-100/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl sm:rounded-3xl"></div>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* Enhanced CTA Section */}
                <div className="text-center mt-12 sm:mt-16 lg:mt-20">
                    <div className="inline-flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
                        <p className="text-[#3F3D56] text-base sm:text-lg font-medium">
                            Need personalized care for your pet?
                        </p>
                        
                        <Link 
                            to="/book-appointment"
                            className="inline-flex items-center gap-2 bg-[#FE5F62] hover:bg-[#e45457] text-white font-medium px-6 sm:px-8 py-3 sm:py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl group touch-target"
                        >
                            <span>Book Consultation</span>
                            <IoPawOutline className="w-4 h-4 sm:w-5 sm:h-5 group-hover:rotate-12 transition-transform duration-300" />
                        </Link>
                    </div>
                    
                    {/* Trust indicators */}
                    {/* <div className="flex items-center justify-center gap-6 sm:gap-8 mt-8 sm:mt-12 text-sm text-gray-600">
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                            <span>Licensed Vets</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
                            <span>Home Service</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-[#FE5F62] rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
                            <span>24/7 Support</span>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default WeProvideBestServices