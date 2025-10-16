import React from 'react'
import { FaPaw } from "react-icons/fa";
import doc2 from '../assets/images/doc2.jpeg';
import doc3 from '../assets/images/doc3.jpeg';

const WhyChooseUs = () => {
    const pawPositions = [
        "top-4 left-4",
        "bottom-4 right-4",
        "top-1/2 left-1/4",
        "top-1/3 right-1/3",
        "bottom-1/4 left-1/3",
        "top-10 right-10",
        "bottom-10 left-10",
        "top-1/4 right-1/4",
    ];
    
    const headingParts = [
        { text: "Why ", color: "text-[#3F3D56]" },
        { text: "At ", color: "text-[#FE5F62]" },
        { text: " Home?", color: "text-[#3F3D56]" },
    ];

    const features = [
        {
            title: "Less Stress, More Comfort",
            description: "Pets stay calm in their familiar environment."
        },
        {
            title: "Safe & Convenient",
            description: "No travel, no crowded clinics, no watings."
        },
        {
            title: "Personalized Attention",
            description: "One-on-One care, right at your doorstep."
        },
        {
            title: "Complete Care at Home",
            description: "Consultations, vaccinations, treatments, and more delivered to you."
        }
    ];

    return (
        <div className="relative flex flex-col lg:flex-row justify-center items-center px-8 py-16 bg-white max-w-7xl mx-auto overflow-hidden">
            {pawPositions.map((pos, index) => (
                <FaPaw
                    key={index}
                    className={`absolute ${pos} text-gray-300 text-6xl opacity-20 z-0`}
                />
            ))}

            {/* Images Section */}
            {/* <div className="flex gap-6 items-center justify-center mb-8 lg:mb-0 lg:mr-16 relative z-10">
                <div className="relative">
                    <img
                        src={doc3}
                        className="rounded-2xl w-48 h-64 object-cover shadow-2xl transform rotate-[-8deg] transition-transform duration-300 hover:scale-105"
                        alt="Person holding a dog"
                    />
                </div>
                <div className="relative">
                    <img
                        src={doc2}
                        className="rounded-2xl w-48 h-64 object-cover shadow-2xl transform rotate-[5deg] transition-transform duration-300 hover:scale-105"
                        alt="Dog with medical professionals"
                    />
                </div>
            </div> */}

            {/* Content Section */}
            <div className="w-full text-left relative z-10">
                <h2 className="mb-8 text-center">
                    {headingParts.map((part, index) => (
                        <span key={index} className={`text-5xl lg:text-6xl font-bold tracking-wide ${part.color}`}>
                            {part.text}
                        </span>
                    ))}
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {features.map((feature, index) => (
                        <div 
                            key={index} 
                            className="group relative bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 p-8 border border-gray-200 hover:border-[#FE5F62] hover:-translate-y-2 overflow-hidden"
                        >
                            {/* Decorative background element */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-[#FE5F62] opacity-5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500"></div>
                            
                            <div className="relative flex items-start">
                                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#FE5F62] to-[#ff7b7d] rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                                    <span className="text-white font-bold text-2xl">✓</span>
                                </div>
                                <div className="flex-1">
                                    <h3 className="font-bold text-gray-900 text-xl mb-3 group-hover:text-[#FE5F62] transition-colors duration-300">
                                        {feature.title}
                                    </h3>
                                    <p className="text-gray-600 text-base leading-relaxed">
                                        {feature.description}
                                    </p>
                                </div>
                            </div>

                            {/* Animated bottom border */}
                            <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-[#FE5F62] to-[#ff7b7d] w-0 group-hover:w-full transition-all duration-500"></div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default WhyChooseUs