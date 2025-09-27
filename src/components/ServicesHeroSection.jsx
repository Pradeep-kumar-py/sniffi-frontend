import React from 'react'
import { FaCheckCircle } from 'react-icons/fa';

// Home services data based on the screenshot content
const homeServices = [
    {
        title: "Comfort & Less Stress",
        description: "Pets feel more relaxed in their familiar environment, reducing anxiety and fear."
    },
    {
        title: "Convenience & Time-Saving",
        description: "No more hectic clinic visits or waiting in long queues—care comes to you!"
    },
    {
        title: "One-on-One Attention",
        description: "Our vets provide personalized consultations and thorough check-ups without distractions."
    },
    {
        title: "Safe & Hygienic",
        description: "Minimize exposure to contagious illnesses and ensure a cleaner, safer experience."
    }
];

const ServicesHeroSection = ({ 
    titleLines = [
        <>Sniffi – Quality <span className="text-[#FE5F62]">Pet Care,</span></>,
        <>Right at <span className="text-[#FE5F62]">Your Doorstep!</span></>,
    ],
    heading = <>Why Choose At-<span className="text-[#FE5F62]">Home Pet Care?</span></>,
    benefits = homeServices.map((item) => ({
        title: item.title,
        description: item.description
    })),
    imageSrc = "/src/assets/images/women.jpg",
    imageAlt = "Professional veterinarian with dog"
}) => {
    return (
        <div className="bg-white w-full px-4 sm:px-6 lg:px-20 py-12 lg:py-16">
            <div className="max-w-7xl mx-auto">
                {/* Main Title */}
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold mb-8 lg:mb-12 text-[#3F3D56] leading-tight">
                    {titleLines.map((line, index) => (
                        <div key={index} className="mb-1 md:mb-2 transition-colors duration-300">
                            {line}
                        </div>
                    ))}
                </h1>

                <div className="flex flex-col lg:flex-row justify-between items-start gap-8 lg:gap-12">
                    {/* Content Section */}
                    <section className="w-full lg:w-3/5 flex flex-col justify-start">
                        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-[#3F3D56] mb-6 lg:mb-8 leading-tight">
                            {heading}
                        </h2>

                        <ul className="space-y-4 md:space-y-6 text-sm sm:text-base md:text-lg text-black">
                            {benefits.map((item, idx) => (
                                <li key={idx} className="flex items-start gap-3 md:gap-4">
                                    <FaCheckCircle className="text-[#FE5F62] mt-1 flex-shrink-0 text-base sm:text-lg" />
                                    <div className="flex-1">
                                        <span className="font-semibold text-gray-900">{item.title}</span>
                                        <span className="text-gray-700"> – {item.description}</span>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </section>

                    {/* Image Section */}
                    <div className="w-full lg:w-2/5 flex justify-center items-start lg:items-center">
                        <div className="relative w-full max-w-md lg:max-w-full">
                            <img
                                className="w-full h-auto max-h-[400px] lg:max-h-[500px] object-cover rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                                src={imageSrc}
                                alt={imageAlt}
                                loading="lazy"
                            />
                            {/* Optional decorative background */}
                            <div className="absolute -inset-4 bg-gradient-to-br from-pink-100/30 to-red-100/30 rounded-3xl -z-10 blur-xl"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ServicesHeroSection