import React, { useState, useEffect } from 'react'

const ServicesTestimonial = () => {
    const [currentIndex, setCurrentIndex] = useState(0)

    // Testimonial data matching the design
    const testimonials = [
        {
            name: "Rekha Gupta",
            quote: "I really Loved the services provided"
        },
        {
            name: "Ram Kishan",
            quote: "The pets are really happy"
        },
        {
            name: "Aman",
            quote: "I was really happy after the services"
        },
        {
            name: "Priya Sharma",
            quote: "Excellent care for my furry friend"
        },
        {
            name: "Rajesh Kumar",
            quote: "Professional and compassionate staff"
        },
        {
            name: "Anita Singh",
            quote: "My pet feels so comfortable here"
        }
    ]

    // Auto-slide functionality
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prevIndex) => 
                prevIndex === testimonials.length - 3 ? 0 : prevIndex + 1
            )
        }, 4000)
        return () => clearInterval(timer)
    }, [testimonials.length])

    const goToSlide = (index) => {
        setCurrentIndex(index)
    }

    return (
        <section className="py-12 md:py-20 bg-white px-4 overflow-hidden">
            <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12 md:mb-16">
                What <span className="text-[#FE5F62] font-bold">Our Client</span>{' '}
                <span className="text-[#3F3D56]">Say?</span>
            </h2>

            <div className="relative max-w-6xl mx-auto overflow-hidden">
                <div
                    className="flex transition-transform duration-700 ease-in-out"
                    style={{
                        width: `${(testimonials.length / 3) * 100}%`,
                        transform: `translateX(-${(currentIndex * 100) / testimonials.length}%)`,
                    }}
                >
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className="w-full sm:w-1/2 lg:w-1/3 px-3 box-border flex justify-center"
                        >
                            <div className="w-full max-w-sm">
                                <div className="bg-white p-6 md:p-8 rounded-2xl border-2 border-[#FE5F62] shadow-lg hover:shadow-xl transition-shadow duration-300 min-h-[280px] flex flex-col justify-center relative">
                                    {/* Name */}
                                    <h3 className="text-center font-semibold text-xl md:text-2xl text-[#3F3D56] mb-4">
                                        {testimonial.name}
                                    </h3>
                                    
                                    {/* Quote mark */}
                                    <div className="text-center mb-4">
                                        <span className="text-[#FE5F62] text-3xl md:text-4xl font-bold">"</span>
                                    </div>
                                    
                                    {/* Testimonial text */}
                                    <p className="text-center text-[#3F3D56] text-base md:text-lg leading-relaxed px-2">
                                        {testimonial.quote}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Pagination dots */}
            <div className="mt-8 md:mt-12 flex justify-center space-x-2">
                {Array.from({ length: Math.max(1, testimonials.length - 2) }).map((_, i) => (
                    <button
                        key={i}
                        onClick={() => goToSlide(i)}
                        className={`w-3 h-3 md:w-4 md:h-4 rounded-full transition-colors duration-300 ${
                            i === currentIndex ? 'bg-[#FE5F62]' : 'bg-gray-300 hover:bg-gray-400'
                        }`}
                        aria-label={`Go to slide ${i + 1}`}
                    />
                ))}
            </div>
        </section>
    )
}

export default ServicesTestimonial