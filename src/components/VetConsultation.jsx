import React from 'react'
import { FaCheck } from 'react-icons/fa'

const VetConsultation = () => {
  const howItWorksSteps = [
    {
      step: "Step 1:",
      description: "Book an appointment through Sniffi's app or website."
    },
    {
      step: "Step 2:",
      description: "Vet arrives at your doorstep, fully equipped."
    },
    {
      step: "Step 3:",
      description: "Consultation, diagnosis, care advice, and prescriptions provided instantly."
    }
  ];

  const whyAtHomeReasons = [
    "No travel stress or clinic anxiety for pets.",
    "Zero waiting rooms or exposure to other sick animals.",
    "Personalized, one-on-one attention by a trusted vet.",
    "Comfortable, familiar environment improves examination quality."
  ];

  const whyImportantReasons = [
    "Pets often hide symptoms — early detection is key.",
    "80% of chronic illnesses are preventable with timely consultations.",
    "Regular check-ups detect behavioral issues, allergies, infections early.",
    "Peace of mind knowing your pet's health is monitored professionally."
  ];

  return (
    <div className="bg-white">
      {/* How It Works Section */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#3F3D56] mb-4">
            How It Works
          </h2>
        </div>
        
        <div className="space-y-6 lg:space-y-8">
          {howItWorksSteps.map((item, index) => (
            <div key={index} className="flex items-start gap-4 lg:gap-6">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 rounded-full bg-[#FE5F62] flex items-center justify-center">
                  <FaCheck className="text-white text-sm" />
                </div>
              </div>
              <div className="flex-1">
                <p className="text-lg sm:text-xl lg:text-2xl text-[#3F3D56] leading-relaxed">
                  <span className="font-semibold text-[#FE5F62]">{item.step}</span>{' '}
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Expert Vet Consultations Section */}
      <div className="bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-6">
              <span className="text-[#3F3D56]">Expert Vet </span>
              <span className="text-[#FE5F62]">Consultations</span>
              <span className="text-[#3F3D56]">, Right at Your Doorstep</span>
            </h2>
            <p className="text-lg sm:text-xl text-[#3F3D56] max-w-4xl mx-auto leading-relaxed">
              From minor concerns to major questions, our licensed vets bring compassionate, clinical 
              care straight to your home — minimizing stress for you and your furry friend.
            </p>
          </div>

          {/* Why At-Home with Sniffi */}
          <div className="mb-16">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-8">
              <span className="text-[#3F3D56]">Why </span>
              <span className="text-[#FE5F62]">At-Home with Sniffi?</span>
            </h3>
            
            <div className="space-y-6">
              {whyAtHomeReasons.map((reason, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-6 h-6 rounded-full bg-[#FE5F62] flex items-center justify-center mt-1">
                      <FaCheck className="text-white text-xs" />
                    </div>
                  </div>
                  <p className="text-lg sm:text-xl text-[#3F3D56] leading-relaxed">
                    {reason}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Why It Important */}
          <div>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-8">
              <span className="text-[#3F3D56]">Why </span>
              <span className="text-[#FE5F62]">It Important?</span>
            </h3>
            
            <div className="space-y-6">
              {whyImportantReasons.map((reason, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-6 h-6 rounded-full bg-[#FE5F62] flex items-center justify-center mt-1">
                      <FaCheck className="text-white text-xs" />
                    </div>
                  </div>
                  <p className="text-lg sm:text-xl text-[#3F3D56] leading-relaxed">
                    {reason}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default VetConsultation