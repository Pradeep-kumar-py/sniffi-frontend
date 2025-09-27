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
        <div className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-red-200/50">
            <div className="max-w-7xl mx-auto">
                {/* Header Section */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-wide">
                        <span className="text-[#3F3D56]">We Provide </span>
                        <span className="text-[#FE5F62]">Best Services</span>
                    </h2>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 max-w-6xl mx-auto">
                    {services.map((service) => (
                        <Link to={service.path} key={service.id} className="relative group">
                            {/* Paw Icon Circle */}
                            <div className="absolute -top-6 left-6 z-10">
                                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white rounded-full border-2 border-[#FE5F62] flex items-center justify-center shadow-lg">
                                    <IoPawOutline className="w-8 h-8 sm:w-10 sm:h-10 text-[#FE5F62]" />
                                </div>
                            </div>

                            {/* Service Card */}
                            <div className="bg-white rounded-2xl border-2 border-[#FE5F62] p-6 pt-10 min-h-[280px] sm:min-h-[300px] transition-all duration-300 hover:shadow-lg hover:scale-105 group-hover:bg-gradient-to-br group-hover:from-white group-hover:to-pink-50">
                                <h3 className="text-[#FE5F62] text-xl sm:text-2xl lg:text-3xl font-semibold mb-4 leading-tight">
                                    {service.title}
                                </h3>
                                <p className="text-[#3F3D56] text-sm sm:text-base leading-relaxed mb-4">
                                    {service.description}
                                </p>
                                {/* Decorative Line */}
                                <div className="w-8 h-0.5 bg-[#FE5F62] mt-auto"></div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default WeProvideBestServices