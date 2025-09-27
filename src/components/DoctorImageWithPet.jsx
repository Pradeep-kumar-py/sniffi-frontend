import React from 'react'
import doctorWithPet from '../assets/images/DoctorImageWithDog.png'
import { FaPaw } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const DoctorImageWithPet = () => {
    return (
        <section className='relative w-full min-h-[500px] md:min-h-[600px] lg:min-h-[700px] overflow-hidden'>
            {/* Background Image with z-index 1 */}
            <div className="absolute inset-0 z-1">
                <img 
                    src={doctorWithPet} 
                    alt="Doctor with Pet" 
                    className="w-full h-full object-cover object-center"
                />
            </div>
            
            {/* Black Shadow Overlay */}
            <div className="absolute inset-0 z-2 bg-black/40" />
            
            {/* Content Overlay */}
            <div className="relative z-10 flex items-center justify-start h-full">
                <div
                    className="
                    px-6 py-10
                    sm:px-8
                    md:px-12 md:py-16
                    lg:px-20 lg:py-20
                    max-w-xl
                    md:max-w-2xl
                    flex
                    flex-col
                    gap-6
                    text-left
                "
                >
                    <h1 className="
                    text-white
                    font-bold
                    tracking-wide
                    text-2xl
                    sm:text-3xl
                    md:text-4xl
                    lg:text-5xl
                    xl:text-6xl
                    leading-tight
                    drop-shadow-lg
                ">
                        Your Pet<br />
                        Deserves the <br />
                        <span className="text-[#FE5F62]">Best Care</span>
                    </h1>

                    <p className="text-white/90 text-sm sm:text-base md:text-lg max-w-md leading-relaxed drop-shadow-md">
                        Professional veterinary services tailored to your pet's needs,
                        with compassionate care from our experienced team.
                    </p>

                    <Link to="/bookappointment" className="
                    inline-flex
                    items-center
                    gap-2
                    bg-[#FE5F62]
                    hover:bg-[#e45457]
                    text-white
                    font-medium
                    px-6
                    py-3
                    sm:px-8
                    sm:py-4
                    rounded-md
                    transition-all
                    duration-300
                    mt-2
                    self-start
                    shadow-lg
                    hover:shadow-xl
                    group
                    w-auto
                    text-sm
                    sm:text-base
                    drop-shadow-md
                ">
                        Book Appointment
                        <FaPaw className="inline-block ml-1 transition-transform group-hover:rotate-12" />
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default DoctorImageWithPet