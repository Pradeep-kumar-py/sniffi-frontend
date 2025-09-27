import React from 'react'
import { FaPaw, FaCheck, FaCalendarAlt, FaClock, FaShieldAlt } from 'react-icons/fa'
import { MdVaccines, MdPets, MdHealthAndSafety } from 'react-icons/md'
import { Link } from 'react-router-dom'
import pawsvg from '../assets/svg/paw.svg'

const Vaccination = () => {
  const vaccinationSchedule = [
    {
      ageGroup: "Puppies (6-16 weeks)",
      vaccines: [
        { name: "DHPP (Distemper, Hepatitis, Parvovirus, Parainfluenza)", timing: "6-8 weeks, then every 2-4 weeks" },
        { name: "Rabies", timing: "12-16 weeks" },
        { name: "Bordetella", timing: "6-8 weeks" }
      ],
      icon: "🐶"
    },
    {
      ageGroup: "Kittens (6-16 weeks)",
      vaccines: [
        { name: "FVRCP (Feline Viral Rhinotracheitis, Calicivirus, Panleukopenia)", timing: "6-8 weeks, then every 2-4 weeks" },
        { name: "Rabies", timing: "12-16 weeks" },
        { name: "FeLV (Feline Leukemia)", timing: "8-12 weeks" }
      ],
      icon: "🐱"
    },
    {
      ageGroup: "Adult Dogs (Annual)",
      vaccines: [
        { name: "DHPP Booster", timing: "Annually" },
        { name: "Rabies Booster", timing: "Every 1-3 years" },
        { name: "Lyme Disease", timing: "As recommended by vet" }
      ],
      icon: "🐕"
    },
    {
      ageGroup: "Adult Cats (Annual)",
      vaccines: [
        { name: "FVRCP Booster", timing: "Annually" },
        { name: "Rabies Booster", timing: "Every 1-3 years" },
        { name: "FeLV Booster", timing: "As recommended by vet" }
      ],
      icon: "🐈"
    }
  ];

  const whyVaccinateReasons = [
    {
      title: "Disease Prevention",
      description: "Protect your pet from serious, potentially fatal diseases like rabies, distemper, and parvovirus.",
      icon: <FaShieldAlt className="text-[#FE5F62] text-3xl" />
    },
    {
      title: "Community Health",
      description: "Vaccination helps prevent disease outbreaks in the pet community and protects other animals.",
      icon: <MdHealthAndSafety className="text-[#FE5F62] text-3xl" />
    },
    {
      title: "Legal Requirements",
      description: "Many vaccines like rabies are legally required and necessary for travel, boarding, and registration.",
      icon: <FaCheck className="text-[#FE5F62] text-3xl" />
    },
    {
      title: "Cost-Effective",
      description: "Prevention through vaccination is much more affordable than treating vaccine-preventable diseases.",
      icon: <MdVaccines className="text-[#FE5F62] text-3xl" />
    }
  ];

  const howItWorksSteps = [
    {
      step: "Step 1:",
      title: "Schedule Appointment",
      description: "Book a vaccination appointment through Sniffi's app or website at your convenience."
    },
    {
      step: "Step 2:",
      title: "Vet Consultation",
      description: "Our certified veterinarian will examine your pet and discuss the appropriate vaccination schedule."
    },
    {
      step: "Step 3:",
      title: "Safe Administration",
      description: "Vaccines are administered safely with minimal stress to your pet in a comfortable environment."
    },
    {
      step: "Step 4:",
      title: "Digital Records",
      description: "All vaccination records are digitally stored and reminders are sent for upcoming boosters."
    }
  ];

  const pawPositions = [
    "top-4 left-4",
    "bottom-4 right-4",
    "top-1/2 left-1/4",
    "top-1/3 right-1/3",
    "bottom-1/4 left-1/3",
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative flex flex-col md:flex-row items-center gap-8 md:gap-10 justify-center md:justify-evenly min-h-[80vh] px-4 sm:px-6 lg:px-8 py-12 overflow-hidden">
        {/* Decorative paw elements */}
        <img src={pawsvg} alt="pawsvg" className='hidden sm:block absolute left-[2%] bottom-[6%] w-6 sm:w-8 md:w-10 opacity-70 animate-pulse z-0' />
        <img src={pawsvg} alt="pawsvg" className='hidden sm:block absolute right-[2%] top-[10%] w-5 sm:w-6 md:w-8 opacity-70 animate-pulse z-0' style={{ animationDelay: '0.5s' }} />

        <div className="relative w-full md:w-1/2 max-w-2xl z-10">
          <div className="mb-8">
            <h1 className="font-semibold tracking-wide leading-tight mb-6">
              <span className="text-[#3F3D56] text-3xl sm:text-4xl md:text-5xl lg:text-6xl">Complete </span>
              <span className="text-[#FE5F62] text-3xl sm:text-4xl md:text-5xl lg:text-6xl">Vaccination</span>
              <br />
              <span className="text-[#3F3D56] text-3xl sm:text-4xl md:text-5xl lg:text-6xl">Care for Your Pet</span>
            </h1>
          </div>

          <div className="text-black text-base sm:text-lg md:text-xl font-normal leading-relaxed mb-8">
            Protect your beloved pet with our comprehensive vaccination services. Our experienced veterinarians provide personalized vaccination schedules, ensuring your pet stays healthy and protected against serious diseases throughout their life.
          </div>

          <Link to="/bookappointment" className="
            inline-flex
            items-center
            gap-3
            bg-[#FE5F62]
            hover:bg-[#e45457]
            text-white
            font-medium
            px-6
            py-3
            rounded-md
            transition-all
            duration-300
            transform
            hover:scale-105
            shadow-lg
          ">
            <MdVaccines className="text-xl" />
            Book Vaccination Appointment
          </Link>
        </div>

        <div className="relative w-full md:w-1/2 flex justify-center z-10">
          <div className="relative">
            <div className="w-80 h-80 bg-gradient-to-br from-[#FE5F62]/20 to-[#3F3D56]/20 rounded-full flex items-center justify-center shadow-2xl">
              <MdVaccines className="text-[#FE5F62] text-8xl opacity-80" />
            </div>
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-[#FE5F62] rounded-full flex items-center justify-center animate-bounce">
              <FaShieldAlt className="text-white text-2xl" />
            </div>
            <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-[#3F3D56] rounded-full flex items-center justify-center animate-pulse">
              <MdPets className="text-white text-xl" />
            </div>
          </div>
        </div>
      </div>

      {/* Why Vaccination is Important Section */}
      <div className="bg-red-50 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-4">
              <span className="text-[#3F3D56]">Why </span>
              <span className="text-[#FE5F62]">Vaccination</span>
              <span className="text-[#3F3D56]"> is Essential</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Vaccination is one of the most important things you can do to protect your pet's health and contribute to the overall health of the pet community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyVaccinateReasons.map((reason, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
                <div className="mb-4 flex justify-center">
                  {reason.icon}
                </div>
                <h3 className="text-xl font-semibold text-[#3F3D56] mb-3">{reason.title}</h3>
                <p className="text-gray-600 leading-relaxed">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Vaccination Schedule Section */}
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-4">
              <span className="text-[#3F3D56]">Vaccination </span>
              <span className="text-[#FE5F62]">Schedule</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Our comprehensive vaccination schedule ensures your pet receives the right vaccines at the right time for optimal protection.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {vaccinationSchedule.map((schedule, index) => (
              <div key={index} className="bg-white border-2 border-gray-100 rounded-lg p-6 hover:border-[#FE5F62]/30 transition-colors duration-300">
                <div className="flex items-center mb-4">
                  <span className="text-3xl mr-3">{schedule.icon}</span>
                  <h3 className="text-xl font-semibold text-[#3F3D56]">{schedule.ageGroup}</h3>
                </div>
                <div className="space-y-3">
                  {schedule.vaccines.map((vaccine, vIndex) => (
                    <div key={vIndex} className="border-l-4 border-[#FE5F62] pl-4">
                      <div className="font-medium text-[#3F3D56] mb-1">{vaccine.name}</div>
                      <div className="text-gray-600 text-sm flex items-center">
                        <FaClock className="mr-2 text-[#FE5F62]" />
                        {vaccine.timing}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {pawPositions.map((pos, index) => (
          <FaPaw
            key={index}
            className={`absolute ${pos} text-gray-200 text-6xl opacity-30 z-0`}
          />
        ))}

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-4">
              <span className="text-[#3F3D56]">How Our Vaccination </span>
              <span className="text-[#FE5F62]">Process Works</span>
            </h2>
          </div>
          
          <div className="space-y-8">
            {howItWorksSteps.map((step, index) => (
              <div key={index} className="flex flex-col md:flex-row items-start gap-6 bg-white p-6 rounded-lg shadow-md">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-[#FE5F62] flex items-center justify-center text-white font-bold text-lg">
                    {index + 1}
                  </div>
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-semibold text-[#3F3D56] mb-2">
                    {step.step} {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Important Notes Section */}
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-blue-50 border-l-4 border-[#FE5F62] p-6 rounded-r-lg">
            <h3 className="text-xl font-semibold text-[#3F3D56] mb-4 flex items-center">
              <FaShieldAlt className="mr-2 text-[#FE5F62]" />
              Important Vaccination Guidelines
            </h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <FaCheck className="mr-2 mt-1 text-[#FE5F62] flex-shrink-0" />
                <span>Keep your pet indoors and away from unvaccinated animals until their vaccination series is complete.</span>
              </li>
              <li className="flex items-start">
                <FaCheck className="mr-2 mt-1 text-[#FE5F62] flex-shrink-0" />
                <span>Some pets may experience mild side effects like lethargy or soreness at the injection site, which typically resolve within 24-48 hours.</span>
              </li>
              <li className="flex items-start">
                <FaCheck className="mr-2 mt-1 text-[#FE5F62] flex-shrink-0" />
                <span>Annual boosters are essential to maintain immunity - we'll send you reminders when they're due.</span>
              </li>
              <li className="flex items-start">
                <FaCheck className="mr-2 mt-1 text-[#FE5F62] flex-shrink-0" />
                <span>Discuss your pet's lifestyle with our veterinarian to determine if additional vaccines are recommended.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="bg-[#3F3D56] py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white mb-6">
            Ready to Protect Your Pet?
          </h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Don't wait - schedule your pet's vaccination appointment today and give them the protection they deserve. Our team is ready to provide expert care with convenience and compassion.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/bookappointment" className="
              inline-flex
              items-center
              gap-3
              bg-[#FE5F62]
              hover:bg-[#e45457]
              text-white
              font-medium
              px-8
              py-4
              rounded-md
              transition-all
              duration-300
              transform
              hover:scale-105
              shadow-lg
            ">
              <FaCalendarAlt className="text-lg" />
              Book Appointment Now
            </Link>
            <div className="flex items-center gap-2 text-gray-300">
              <FaClock className="text-[#FE5F62]" />
              <span>Same-day appointments available</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Vaccination