import React from 'react'
import { FaPaw, FaCheck, FaHeart, FaShieldAlt, FaStethoscope, FaCut, FaBug, FaTooth, FaEye, FaWeight } from 'react-icons/fa'
import { MdHealthAndSafety, MdPets, MdCleaningServices } from 'react-icons/md'
import { Link } from 'react-router-dom'
import pawsvg from '../assets/svg/paw.svg'

const Wellness = () => {
  const wellnessServices = [
    {
      id: 1,
      title: "Complete Health Assessment",
      description: "Comprehensive physical examination including weight, temperature, heart rate, and overall body condition assessment.",
      icon: <FaStethoscope className="text-[#FE5F62] text-3xl" />
    },
    {
      id: 2,
      title: "Nail Trimming & Grooming",
      description: "Professional nail clipping, ear cleaning, and basic grooming to keep your pet comfortable and healthy.",
      icon: <FaCut className="text-[#FE5F62] text-3xl" />
    },
    {
      id: 3,
      title: "Oral Hygiene Care",
      description: "Dental health examination, teeth cleaning, and oral health guidance to prevent dental diseases.",
      icon: <FaTooth className="text-[#FE5F62] text-3xl" />
    },
    {
      id: 4,
      title: "Parasite Prevention",
      description: "Tick and flea inspection, deworming treatments, and preventive care against common parasites.",
      icon: <FaBug className="text-[#FE5F62] text-3xl" />
    },
    {
      id: 5,
      title: "Eye & Ear Examination",
      description: "Thorough eye and ear health checks to detect early signs of infections or other health issues.",
      icon: <FaEye className="text-[#FE5F62] text-3xl" />
    },
    {
      id: 6,
      title: "Weight & Nutrition Counseling",
      description: "Body weight assessment and personalized nutrition advice to maintain optimal health and prevent obesity.",
      icon: <FaWeight className="text-[#FE5F62] text-3xl" />
    }
  ];

  const whyWellnessImportant = [
    {
      title: "Early Disease Detection",
      description: "Regular wellness exams help identify health issues before they become serious problems, potentially saving your pet's life.",
      icon: <FaShieldAlt className="text-[#FE5F62] text-3xl" />
    },
    {
      title: "Preventive Care",
      description: "Prevention is always better than treatment. Wellness exams help maintain your pet's health proactively.",
      icon: <MdHealthAndSafety className="text-[#FE5F62] text-3xl" />
    },
    {
      title: "Better Quality of Life",
      description: "Regular health maintenance ensures your pet stays comfortable, active, and happy throughout their life.",
      icon: <FaHeart className="text-[#FE5F62] text-3xl" />
    },
    {
      title: "Cost-Effective Healthcare",
      description: "Preventive wellness care is more affordable than treating advanced diseases and conditions.",
      icon: <MdPets className="text-[#FE5F62] text-3xl" />
    }
  ];

  const howItWorksSteps = [
    {
      step: "Step 1:",
      title: "Schedule Your Wellness Exam",
      description: "Book a comprehensive wellness appointment through Sniffi's app or website at your preferred time."
    },
    {
      step: "Step 2:",
      title: "Professional Health Assessment",
      description: "Our experienced veterinarian conducts a thorough examination covering all aspects of your pet's health."
    },
    {
      step: "Step 3:",
      title: "Grooming & Care Services",
      description: "Receive professional grooming services including nail trimming, ear cleaning, and oral hygiene care."
    },
    {
      step: "Step 4:",
      title: "Health Report & Recommendations",
      description: "Get a detailed health report with personalized recommendations for your pet's ongoing wellness care."
    }
  ];

  const wellnessTips = [
    "Schedule wellness exams every 6-12 months for adult pets, more frequently for senior pets.",
    "Maintain a consistent exercise routine appropriate for your pet's age and breed.",
    "Provide a balanced, high-quality diet and maintain proper portion control.",
    "Keep up with dental hygiene by brushing teeth regularly and providing dental treats.",
    "Monitor your pet's behavior and appetite for any changes that might indicate health issues.",
    "Ensure your pet gets adequate mental stimulation through play and interactive activities."
  ];

  return (
    <div className="bg-white relative overflow-hidden">
      {/* Decorative paw elements */}
      <img src={pawsvg} alt="pawsvg" className='hidden sm:block absolute left-[3%] top-[8%] w-6 sm:w-8 opacity-40 animate-pulse z-0' />
      <img src={pawsvg} alt="pawsvg" className='hidden sm:block absolute right-[5%] top-[15%] w-5 sm:w-7 opacity-40 animate-pulse z-0' style={{ animationDelay: '0.5s' }} />
      <img src={pawsvg} alt="pawsvg" className='hidden sm:block absolute left-[8%] bottom-[12%] w-7 sm:w-9 opacity-40 animate-pulse z-0' style={{ animationDelay: '0.3s' }} />

      {/* Hero Section */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 relative z-10">
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-semibold mb-6">
            <span className="text-[#3F3D56]">Comprehensive </span>
            <span className="text-[#FE5F62]">Wellness Exams</span>
          </h1>
          <p className="text-lg sm:text-xl text-[#3F3D56] max-w-4xl mx-auto leading-relaxed mb-8">
            Keep your furry friend in optimal health with our thorough wellness examinations. 
            From preventive care to grooming services, we provide comprehensive health maintenance 
            that goes beyond basic checkups.
          </p>
          
          <Link to="/bookappointment" className="
            inline-flex
            items-center
            gap-2
            bg-[#FE5F62]
            hover:bg-[#e45457]
            text-white
            font-medium
            px-8
            py-4
            rounded-md
            transition-all
            duration-300
            shadow-lg
            group
          ">
            Schedule Wellness Exam
            <FaPaw className="inline-block ml-1 transition-transform group-hover:rotate-12" />
          </Link>
        </div>
      </div>

      {/* Wellness Services Grid */}
      <div className="bg-red-50/50 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-4">
              <span className="text-[#3F3D56]">What's Included in Our </span>
              <span className="text-[#FE5F62]">Wellness Exam</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {wellnessServices.map((service) => (
              <div key={service.id} className="bg-white rounded-2xl border-2 border-[#FE5F62]/20 p-6 min-h-[280px] transition-all duration-300 hover:shadow-lg hover:scale-105 hover:border-[#FE5F62]/40 group">
                <div className="flex items-center justify-center w-16 h-16 bg-red-50 rounded-full mb-6 group-hover:bg-red-100 transition-colors duration-300">
                  {service.icon}
                </div>
                <h3 className="text-[#FE5F62] text-xl sm:text-2xl font-semibold mb-4 leading-tight">
                  {service.title}
                </h3>
                <p className="text-[#3F3D56] text-sm sm:text-base leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#3F3D56] mb-4">
            How Our Wellness Process Works
          </h2>
        </div>
        
        <div className="space-y-8 lg:space-y-12">
          {howItWorksSteps.map((item, index) => (
            <div key={index} className="flex items-start gap-6 lg:gap-8">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-[#FE5F62] flex items-center justify-center text-white font-bold text-lg">
                  {index + 1}
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl sm:text-2xl font-semibold text-[#FE5F62] mb-2">
                  {item.step} {item.title}
                </h3>
                <p className="text-lg sm:text-xl text-[#3F3D56] leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Why Wellness Exams Are Important */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-6">
              <span className="text-[#3F3D56]">Why </span>
              <span className="text-[#FE5F62]">Wellness Exams</span>
              <span className="text-[#3F3D56]"> Are Essential</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {whyWellnessImportant.map((reason, index) => (
              <div key={index} className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg">
                    {reason.icon}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl sm:text-2xl font-semibold text-[#3F3D56] mb-3">
                    {reason.title}
                  </h3>
                  <p className="text-lg text-[#3F3D56] leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Wellness Tips Section */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-6">
            <span className="text-[#3F3D56]">Pet </span>
            <span className="text-[#FE5F62]">Wellness Tips</span>
          </h2>
          <p className="text-lg sm:text-xl text-[#3F3D56] max-w-3xl mx-auto leading-relaxed">
            Between professional wellness exams, here are some essential tips to keep your pet healthy and happy.
          </p>
        </div>

        <div className="space-y-6">
          {wellnessTips.map((tip, index) => (
            <div key={index} className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="w-6 h-6 rounded-full bg-[#FE5F62] flex items-center justify-center mt-1">
                  <FaCheck className="text-white text-xs" />
                </div>
              </div>
              <p className="text-lg sm:text-xl text-[#3F3D56] leading-relaxed">
                {tip}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="bg-gradient-to-r from-[#FE5F62]/10 to-[#FE5F62]/5 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-6">
            <span className="text-[#3F3D56]">Ready to Prioritize Your Pet's </span>
            <span className="text-[#FE5F62]">Wellness?</span>
          </h2>
          <p className="text-lg sm:text-xl text-[#3F3D56] mb-8 leading-relaxed">
            Book a comprehensive wellness exam today and give your furry friend the preventive care they deserve. 
            Our experienced veterinarians are here to help keep your pet healthy and happy.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/bookappointment" className="
              inline-flex
              items-center
              gap-2
              bg-[#FE5F62]
              hover:bg-[#e45457]
              text-white
              font-medium
              px-8
              py-4
              rounded-md
              transition-all
              duration-300
              shadow-lg
              group
            ">
              Book Wellness Exam
              <FaPaw className="inline-block ml-1 transition-transform group-hover:rotate-12" />
            </Link>
            
            <div className="flex items-center gap-2 text-[#3F3D56]">
              <MdCleaningServices className="text-[#FE5F62] text-xl" />
              <span className="font-medium">Complete grooming included</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Wellness
