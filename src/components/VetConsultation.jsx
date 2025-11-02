import React from 'react'
import { FaCheck, FaPhoneAlt, FaClipboardList, FaUserMd } from 'react-icons/fa'
import { MdPets, MdThermostat, MdBugReport, MdHearing, MdContentCut, MdSpa } from 'react-icons/md'
import { BiInjection } from 'react-icons/bi'
import { useNavigate } from 'react-router-dom'

const VetConsultation = () => {
  const navigate = useNavigate();

  const healthCheckItems = [
    { icon: <MdPets className="text-2xl" />, text: "General body examination" },
    { icon: <MdThermostat className="text-2xl" />, text: "Temperature check" },
    { icon: <MdBugReport className="text-2xl" />, text: "Tick & flea inspection" },
    { icon: <MdHearing className="text-2xl" />, text: "Ear health review" },
    { icon: <MdContentCut className="text-2xl" />, text: "Nail length check" },
    { icon: <MdSpa className="text-2xl" />, text: "Coat & shedding assessment" },
    { icon: <BiInjection className="text-2xl" />, text: "Vaccination record review" },
  ];

  const howItWorksSteps = [
    {
      icon: <FaClipboardList className="text-4xl text-[#FE5F62]" />,
      title: "Fill Form on Website",
      description: "Complete our simple online booking form with your pet's details and preferred time."
    },
    {
      icon: <FaPhoneAlt className="text-4xl text-[#FE5F62]" />,
      title: "Get Confirmation Call",
      description: "Our team will quickly call you to confirm the appointment and answer any questions."
    },
    {
      icon: <FaUserMd className="text-4xl text-[#FE5F62]" />,
      title: "Vet Arrives Equipped",
      description: "Our licensed vet arrives at your home fully equipped with all necessary tools."
    }
  ];

  const whyAtHomeReasons = [
    "No stressful travel or waiting rooms",
    "One-on-one vet attention",
    "Familiar environment = better examination",
    "Safe from exposure to other sick animals"
  ];

  const handleBookAppointment = () => {
    navigate('/book-appointment');
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-[#FFF5F5] to-[#FFE5E6] py-16 lg:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-[#3F3D56]">Expert Vet Care, </span>
              <span className="text-[#FE5F62]">Right at Your Doorstep</span>
            </h1>
            <p className="text-xl sm:text-2xl text-[#3F3D56] mb-8 max-w-3xl mx-auto">
              Stress-free consultations for your furry friend, at home.
            </p>
            <button
              onClick={handleBookAppointment}
              className="bg-[#FE5F62] text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#E54E51] transition-colors shadow-lg hover:shadow-xl"
            >
              Book Appointment
            </button>
          </div>
        </div>
      </div>

      {/* What's Included in the Consultation */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#3F3D56] mb-4">
            Your Pet's Health Check Covers
          </h2>
          <p className="text-lg sm:text-xl text-gray-600">
            All concerns addressed and questions answered.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {healthCheckItems.map((item, index) => (
            <div key={index} className="flex items-center gap-4 p-4 bg-white rounded-lg border-2 border-gray-100 hover:border-[#FE5F62] transition-colors">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-[#FFF5F5] flex items-center justify-center text-[#FE5F62]">
                  {item.icon}
                </div>
              </div>
              <div className="flex items-center gap-3 flex-1">
                <FaCheck className="text-[#FE5F62] text-lg flex-shrink-0" />
                <p className="text-lg text-[#3F3D56] font-medium">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* How to Book (Simple Flow) */}
      <div className="bg-gray-50 py-16 lg:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#3F3D56] mb-4">
              How It Works
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mb-12">
            {howItWorksSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-6">
                  <div className="w-20 h-20 rounded-full bg-white shadow-lg flex items-center justify-center">
                    {step.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-[#3F3D56] mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-base">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center bg-white rounded-lg shadow-md p-8 max-w-2xl mx-auto">
            <p className="text-lg text-[#3F3D56] mb-4">
              <span className="font-semibold text-[#FE5F62]">OR:</span> Call us directly to book
            </p>
            <a 
              href="tel:+1234567890" 
              className="inline-flex items-center gap-3 bg-[#FE5F62] text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-[#E54E51] transition-colors"
            >
              <FaPhoneAlt />
              <span>+91 75129919</span>
            </a>
          </div>

          <div className="text-center mt-8">
            <button
              onClick={handleBookAppointment}
              className="bg-[#FE5F62] text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#E54E51] transition-colors shadow-lg hover:shadow-xl"
            >
              Book Appointment
            </button>
          </div>
        </div>
      </div>

      {/* Why At-Home with Sniffi? */}
      <div className="bg-gradient-to-br from-[#FFF5F5] to-[#FFE5E6] py-16 lg:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              <span className="text-[#3F3D56]">Why At-Home with </span>
              <span className="text-[#FE5F62]">Sniffi?</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {whyAtHomeReasons.map((reason, index) => (
              <div key={index} className="flex items-start gap-4 bg-white p-6 rounded-lg shadow-md">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 rounded-full bg-[#FE5F62] flex items-center justify-center mt-1">
                    <FaCheck className="text-white text-sm" />
                  </div>
                </div>
                <p className="text-lg text-[#3F3D56] font-medium leading-relaxed">
                  {reason}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Closing CTA Section */}
      <div className="bg-[#3F3D56] py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-2xl sm:text-3xl text-white mb-8 font-medium">
            Your pet deserves care without the clinic stress.
          </p>
          <button
            onClick={handleBookAppointment}
            className="bg-[#FE5F62] text-white px-10 py-5 rounded-full text-xl font-bold hover:bg-[#E54E51] transition-colors shadow-xl hover:shadow-2xl transform hover:scale-105"
          >
            Book Appointment Now
          </button>
        </div>
      </div>
    </div>
  )
}

export default VetConsultation