import React from 'react'
import mobile from '../assets/svg/mobile.svg'
import appstore from '../assets/images/app.jpg'
import { FaDownload, FaMobileAlt } from 'react-icons/fa'
import { MdPets } from 'react-icons/md'

const AppDownloadSection = () => {
    return (
        <div className="w-full px-3 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-blue-50/50 via-indigo-50/30 to-purple-50/50">
            <div className="max-w-7xl mx-auto">
                {/* Enhanced Header */}
                <div className="text-center mb-8 sm:mb-12 lg:mb-16">
                    <div className="inline-flex items-center gap-3 mb-4 sm:mb-6 px-4 py-2 bg-[#3F3D56]/10 rounded-full">
                        <FaMobileAlt className="text-[#3F3D56] text-lg sm:text-xl" />
                        <span className="text-[#3F3D56] text-sm sm:text-base font-medium">Mobile App</span>
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row items-center gap-8 sm:gap-12 lg:gap-16 max-w-6xl mx-auto">
                    {/* Enhanced Mobile Image Section */}
                    <div className="w-full lg:w-1/2 flex justify-center order-2 lg:order-1">
                        <div className="relative group">
                            {/* Decorative background elements */}
                            <div className="absolute -inset-8 bg-gradient-to-br from-blue-200/40 to-purple-200/40 rounded-full blur-2xl group-hover:from-blue-300/50 group-hover:to-purple-300/50 transition-all duration-700"></div>
                            <div className="absolute -inset-4 bg-gradient-to-tr from-[#3F3D56]/20 to-blue-200/30 rounded-full blur-xl animate-pulse"></div>
                            
                            {/* Mobile image with enhanced effects */}
                            <div className="relative">
                                <img
                                    src={mobile}
                                    alt="Sniffi Mobile App Interface"
                                    className="w-64 sm:w-80 md:w-96 lg:w-[500px] h-auto relative z-10 drop-shadow-2xl group-hover:scale-105 transition-transform duration-500"
                                />
                                
                                {/* Floating app icons */}
                                <div className="absolute top-10 -right-4 sm:-right-8 bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg animate-bounce">
                                    <MdPets className="text-[#FE5F62] text-xl sm:text-2xl" />
                                </div>
                                <div className="absolute bottom-20 -left-4 sm:-left-8 bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg animate-bounce" style={{animationDelay: '0.5s'}}>
                                    <FaDownload className="text-blue-500 text-xl sm:text-2xl" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Enhanced Content Section */}
                    <div className="w-full lg:w-1/2 text-center lg:text-left order-1 lg:order-2">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-[#3F3D56] leading-tight mb-6 sm:mb-8">
                            Experience the best of
                            <span className="text-[#FE5F62] relative block sm:inline">
                                {" "}Pet Care{" "}
                                <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#FE5F62]/50 rounded-full"></div>
                            </span>
                            in one app
                        </h2>
                        
                        <p className="text-gray-600 text-base sm:text-lg lg:text-xl leading-relaxed mb-8 sm:mb-12 max-w-2xl mx-auto lg:mx-0">
                            Download the Sniffi App for a Pawsome Experience! 🐾✨ Book appointments, track pet health, and get expert care—right at your fingertips!
                        </p>

                        {/* Enhanced Features List */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 sm:mb-12 max-w-md mx-auto lg:mx-0">
                            <div className="flex items-center gap-3 bg-white/70 backdrop-blur-sm p-3 rounded-lg shadow-sm">
                                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                                <span className="text-gray-700 text-sm sm:text-base font-medium">Easy Booking</span>
                            </div>
                            <div className="flex items-center gap-3 bg-white/70 backdrop-blur-sm p-3 rounded-lg shadow-sm">
                                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
                                <span className="text-gray-700 text-sm sm:text-base font-medium">Health Tracking</span>
                            </div>
                            <div className="flex items-center gap-3 bg-white/70 backdrop-blur-sm p-3 rounded-lg shadow-sm">
                                <div className="w-2 h-2 bg-[#FE5F62] rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
                                <span className="text-gray-700 text-sm sm:text-base font-medium">Expert Care</span>
                            </div>
                            <div className="flex items-center gap-3 bg-white/70 backdrop-blur-sm p-3 rounded-lg shadow-sm">
                                <div className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse" style={{animationDelay: '1.5s'}}></div>
                                <span className="text-gray-700 text-sm sm:text-base font-medium">24/7 Support</span>
                            </div>
                        </div>

                        {/* Enhanced App Store Section */}
                        <div className="space-y-4 sm:space-y-6">
                            <p className="text-[#3F3D56] text-lg sm:text-xl font-semibold">
                                Coming Soon to App Stores!
                            </p>
                            
                            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                                {/* App Store Preview */}
                                <div className="group relative">
                                    <div className="absolute inset-0 bg-gradient-to-r from-[#3F3D56]/20 to-[#FE5F62]/20 rounded-2xl blur-lg group-hover:blur-xl transition-all duration-300"></div>
                                    <img
                                        src={appstore}
                                        alt="Download Sniffi App"
                                        className="relative w-48 sm:w-56 lg:w-64 h-auto rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300 cursor-pointer border-2 border-gray-100"
                                    />
                                </div>
                            </div>

                            {/* Coming Soon Badge */}
                            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#3F3D56] to-[#FE5F62] text-white px-6 py-3 rounded-full font-medium shadow-lg">
                                <FaDownload className="animate-bounce" />
                                <span>Notify Me When Available</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Enhanced Stats Section */}
                <div className="text-center mt-16 sm:mt-20 lg:mt-24">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 max-w-4xl mx-auto">
                        <div className="bg-white/70 backdrop-blur-sm p-4 sm:p-6 rounded-2xl shadow-sm">
                            <div className="text-2xl sm:text-3xl font-bold text-[#3F3D56] mb-2">Soon</div>
                            <div className="text-gray-600 text-sm sm:text-base">App Launch</div>
                        </div>
                        <div className="bg-white/70 backdrop-blur-sm p-4 sm:p-6 rounded-2xl shadow-sm">
                            <div className="text-2xl sm:text-3xl font-bold text-[#FE5F62] mb-2">iOS</div>
                            <div className="text-gray-600 text-sm sm:text-base">& Android</div>
                        </div>
                        <div className="bg-white/70 backdrop-blur-sm p-4 sm:p-6 rounded-2xl shadow-sm">
                            <div className="text-2xl sm:text-3xl font-bold text-[#3F3D56] mb-2">Free</div>
                            <div className="text-gray-600 text-sm sm:text-base">Download</div>
                        </div>
                        <div className="bg-white/70 backdrop-blur-sm p-4 sm:p-6 rounded-2xl shadow-sm">
                            <div className="text-2xl sm:text-3xl font-bold text-[#FE5F62] mb-2">24/7</div>
                            <div className="text-gray-600 text-sm sm:text-base">Support</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AppDownloadSection