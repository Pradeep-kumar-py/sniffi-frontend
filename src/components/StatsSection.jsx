import React from 'react'

const StatsSection = () => {
    const stats = [
        {
            icon: '❤️',
            value: '5+',
            label: 'Years of average experience of our Vet doctors'
        },
        {
            icon: '🦴',
            value: '100+',
            label: 'Pets Consulted by Sniffi'
        },
        {
            icon: '👍',
            value: '12+',
            label: 'Different breeds experienced Sniffi\'s care'
        },
        {
            icon: '🐾',
            value: '500+',
            label: 'Followers on our social handles'
        }
    ];

    return (
        <section className="w-full overflow-hidden bg-gradient-to-b from-white via-gray-50 to-pink-50 py-12 sm:py-16 md:py-20 relative px-4">
            {/* Background decorative elements */}
            <div className="absolute inset-0 bg-gradient-to-r from-pink-100/30 via-transparent to-red-100/30"></div>
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#FE5F62] via-pink-400 to-[#FE5F62]"></div>
            
            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header Section */}
                <div className="text-center mb-12 sm:mb-16">
                    <div className="inline-flex items-center gap-3 mb-4">
                        <div className="w-8 h-1 bg-[#FE5F62] rounded-full"></div>
                        <span className="text-[#FE5F62] font-semibold text-sm sm:text-base uppercase tracking-wider">
                            Our Statistics
                        </span>
                        <div className="w-8 h-1 bg-[#FE5F62] rounded-full"></div>
                    </div>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-wide mb-4">
                        <span className="text-[#3F3D56]">Numbers That </span>
                        <span className="text-[#FE5F62]">Tell Our Story</span>
                    </h2>
                    <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
                        Our commitment to excellence is reflected in the trust our clients place in us and the care we provide to their beloved pets.
                    </p>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 max-w-6xl mx-auto">
                    {stats.map((item, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 sm:p-8 flex flex-col items-center gap-3 sm:gap-4 transition-all duration-300 hover:shadow-xl hover:scale-105 hover:border-[#FE5F62]/30 group"
                        >
                            <div className="text-3xl sm:text-4xl bg-gradient-to-br from-pink-100 to-red-100 p-3 sm:p-4 rounded-full shadow-md group-hover:shadow-lg transition-shadow duration-300">
                                {item.icon}
                            </div>
                            <h3 className="text-4xl sm:text-5xl font-bold text-[#FE5F62] mt-2 group-hover:scale-110 transition-transform duration-300">
                                {item.value}
                            </h3>
                            <p className="text-gray-700 text-sm sm:text-base text-center leading-relaxed font-medium">
                                {item.label}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Bottom decorative element */}
                <div className="flex justify-center mt-12 sm:mt-16">
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-[#FE5F62] rounded-full"></div>
                        <div className="w-3 h-3 bg-[#FE5F62] rounded-full"></div>
                        <div className="w-2 h-2 bg-[#FE5F62] rounded-full"></div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default StatsSection