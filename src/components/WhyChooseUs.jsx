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
        { text: "Choose", color: "text-[#FE5F62]" },
        { text: " Us?", color: "text-[#3F3D56]" },
    ];

    const features = [
        {
            title: "Vets You can Trust",
            description: "We have licensed, compassionate vets who treat your pet like family."
        },
        {
            title: "Same Day Appointments",
            description: "We know pet health can't wait, so we don't make you."
        },
        {
            title: "Seamless Care",
            description: "All records are stored digitally keeping your pet's health organized and accessible."
        },
        {
            title: "Holistic Healthcare",
            description: "From vaccinations to routine checkups - keep your pet healthy year-round."
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
            <div className="flex gap-6 items-center justify-center mb-8 lg:mb-0 lg:mr-16 relative z-10">
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
            </div>

            {/* Content Section */}
            <div className="max-w-2xl text-left relative z-10">
                <h2 className="mb-8">
                    {headingParts.map((part, index) => (
                        <span key={index} className={`text-5xl lg:text-6xl font-bold tracking-wide ${part.color}`}>
                            {part.text}
                        </span>
                    ))}
                </h2>

                <div className="space-y-6">
                    {features.map((feature, index) => (
                        <div key={index} className="flex items-start">
                            <span className="text-[#FE5F62] font-bold text-xl mr-3 mt-1">✓</span>
                            <p className="text-gray-700 text-lg leading-relaxed">
                                <span className="font-bold text-gray-900">{feature.title}</span>
                                <span className="text-gray-600"> – {feature.description}</span>
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default WhyChooseUs