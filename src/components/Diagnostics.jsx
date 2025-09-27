import React from 'react'
import { FaCheck, FaPaw, FaCalendarAlt, FaClock, FaSearch, FaHeartbeat, FaMicroscope, FaStethoscope } from 'react-icons/fa'
import { MdHealthAndSafety, MdPets, MdBiotech, MdAnalytics } from 'react-icons/md'
import { GiMedicines, GiDna2 } from 'react-icons/gi'
import { BiTestTube } from 'react-icons/bi'
import { Link } from 'react-router-dom'
import pawsvg from '../assets/svg/paw.svg'

const Diagnostics = () => {
  const diagnosticTests = [
    {
      category: "Blood Tests",
      icon: <BiTestTube className="text-2xl text-[#FE5F62]" />,
      tests: [
        { name: "Complete Blood Count (CBC)", description: "Checks for infections, anemia, and blood disorders" },
        { name: "Blood Chemistry Panel", description: "Evaluates organ function and metabolic status" },
        { name: "Thyroid Function Tests", description: "Detects thyroid-related disorders" }
      ]
    },
    {
      category: "Imaging & Scans",
      icon: <FaSearch className="text-2xl text-[#FE5F62]" />,
      tests: [
        { name: "Digital X-rays", description: "Bone fractures, joint issues, and internal abnormalities" },
        { name: "Ultrasound", description: "Soft tissue examination and pregnancy monitoring" },
        { name: "ECG/EKG", description: "Heart rhythm and cardiac health assessment" }
      ]
    },
    {
      category: "Specialized Tests",
      icon: <FaMicroscope className="text-2xl text-[#FE5F62]" />,
      tests: [
        { name: "Urinalysis", description: "Kidney function and urinary tract health" },
        { name: "Fecal Examination", description: "Parasites and digestive health screening" },
        { name: "Skin Scraping", description: "Identification of skin conditions and mites" }
      ]
    },
    {
      category: "Genetic Testing",
      icon: <GiDna2 className="text-2xl text-[#FE5F62]" />,
      tests: [
        { name: "Breed Identification", description: "Comprehensive breed analysis and traits" },
        { name: "Disease Susceptibility", description: "Genetic predisposition to common diseases" },
        { name: "Drug Sensitivity", description: "Medication response and dosage optimization" }
      ]
    }
  ];

  const howItWorksSteps = [
    {
      step: "Step 1:",
      title: "Sample Collection",
      description: "Our certified veterinarians collect samples at your home using sterile, professional equipment.",
      icon: <MdHealthAndSafety className="text-white text-lg" />
    },
    {
      step: "Step 2:",
      title: "Laboratory Analysis",
      description: "Samples are processed in our state-of-the-art laboratory using advanced diagnostic technology.",
      icon: <MdBiotech className="text-white text-lg" />
    },
    {
      step: "Step 3:",
      title: "Results & Consultation",
      description: "Receive detailed results with expert interpretation and personalized treatment recommendations.",
      icon: <MdAnalytics className="text-white text-lg" />
    }
  ];

  const whyDiagnosticsReasons = [
    {
      title: "Early Disease Detection",
      description: "Identify health issues before symptoms appear, enabling prompt treatment and better outcomes.",
      icon: <FaHeartbeat className="text-3xl text-[#FE5F62]" />
    },
    {
      title: "Accurate Diagnosis",
      description: "Advanced testing eliminates guesswork, ensuring precise identification of health conditions.",
      icon: <FaStethoscope className="text-3xl text-[#FE5F62]" />
    },
    {
      title: "Personalized Treatment",
      description: "Tailored treatment plans based on your pet's specific diagnostic results and health profile.",
      icon: <GiMedicines className="text-3xl text-[#FE5F62]" />
    },
    {
      title: "Preventive Care",
      description: "Regular diagnostic screening helps prevent serious conditions and maintains optimal health.",
      icon: <MdHealthAndSafety className="text-3xl text-[#FE5F62]" />
    }
  ];

  const emergencyDiagnostics = [
    "Toxicity screening and poisoning tests",
    "Rapid infection and sepsis detection",
    "Emergency cardiac markers",
    "Trauma-related internal injury assessment",
    "Acute kidney and liver function tests"
  ];

  return (
    <div className="bg-white relative overflow-hidden">
      {/* Decorative paw elements */}
      <img src={pawsvg} alt="pawsvg" className='hidden sm:block absolute left-[3%] top-[5%] w-6 sm:w-8 md:w-10 opacity-30 animate-pulse z-0' />
      <img src={pawsvg} alt="pawsvg" className='hidden sm:block absolute right-[5%] top-[15%] w-5 sm:w-6 md:w-8 opacity-30 animate-pulse z-0' style={{ animationDelay: '0.7s' }} />

      {/* Hero Section */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 relative z-10">
        <div className="text-center mb-16">
          <h1 className="font-semibold tracking-wide leading-tight mb-6">
            <span className="text-[#3F3D56] text-3xl sm:text-4xl md:text-5xl lg:text-6xl">Advanced </span>
            <span className="text-[#FE5F62] text-3xl sm:text-4xl md:text-5xl lg:text-6xl">Pet Diagnostics</span>
            <br />
            <span className="text-[#3F3D56] text-2xl sm:text-3xl md:text-4xl lg:text-5xl">at Your Doorstep</span>
          </h1>
          
          <div className="max-w-3xl mx-auto text-black text-base sm:text-lg md:text-xl font-normal leading-relaxed mb-8">
            Professional veterinary diagnostics with cutting-edge technology, all in the comfort of your home. 
            From routine health screenings to specialized tests, we provide comprehensive diagnostic services 
            to keep your pet healthy and happy.
          </div>

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
            text-lg
          ">
            Schedule Diagnostic Test
            <FaPaw className="inline-block ml-1 transition-transform group-hover:rotate-12" />
          </Link>
        </div>
      </div>

      {/* Available Diagnostic Tests */}
      <div className="bg-gray-50 py-12 lg:py-16 relative">
        <img src={pawsvg} alt="pawsvg" className='hidden sm:block absolute left-[8%] bottom-[20%] w-4 sm:w-5 md:w-6 opacity-20 animate-pulse z-0' style={{ animationDelay: '1.2s' }} />
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#3F3D56] mb-4">
              Comprehensive Diagnostic Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              State-of-the-art testing equipment and expert analysis for accurate health assessment
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {diagnosticTests.map((category, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center gap-3 mb-6">
                  {category.icon}
                  <h3 className="text-xl font-semibold text-[#3F3D56]">{category.category}</h3>
                </div>
                
                <div className="space-y-4">
                  {category.tests.map((test, testIndex) => (
                    <div key={testIndex} className="border-l-4 border-[#FE5F62] pl-4">
                      <h4 className="font-medium text-[#3F3D56] mb-1">{test.name}</h4>
                      <p className="text-sm text-gray-600">{test.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 relative">
        <img src={pawsvg} alt="pawsvg" className='hidden sm:block absolute right-[10%] top-[25%] w-6 sm:w-7 md:w-8 opacity-25 animate-pulse z-0' style={{ animationDelay: '0.5s' }} />
        
        <div className="text-center mb-12 relative z-10">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#3F3D56] mb-4">
            How Our Diagnostic Process Works
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Simple, stress-free diagnostic testing with professional results
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative z-10">
          {howItWorksSteps.map((item, index) => (
            <div key={index} className="text-center group">
              <div className="mb-6">
                <div className="w-16 h-16 rounded-full bg-[#FE5F62] flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold text-[#3F3D56] mb-2">
                  {item.step} {item.title}
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Why Diagnostics Are Important */}
      <div className="bg-gray-50 py-12 lg:py-16 relative">
        <img src={pawsvg} alt="pawsvg" className='hidden sm:block absolute left-[5%] top-[10%] w-5 sm:w-6 md:w-7 opacity-20 animate-pulse z-0' style={{ animationDelay: '1.5s' }} />
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#3F3D56] mb-4">
              Why Choose Professional Pet Diagnostics?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Advanced testing technology ensures accurate diagnosis and effective treatment plans
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {whyDiagnosticsReasons.map((reason, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1">
                    {reason.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#3F3D56] mb-3">{reason.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{reason.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Emergency Diagnostics */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 relative">
        <img src={pawsvg} alt="pawsvg" className='hidden sm:block absolute right-[3%] bottom-[5%] w-6 sm:w-8 md:w-10 opacity-25 animate-pulse z-0' style={{ animationDelay: '0.8s' }} />
        
        <div className="bg-[#3F3D56] rounded-lg p-8 lg:p-12 text-white relative z-10">
          <div className="text-center mb-8">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-4">
              Emergency Diagnostic Services
            </h2>
            <p className="text-lg text-gray-200 max-w-2xl mx-auto">
              24/7 urgent diagnostic testing when your pet needs immediate care
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {emergencyDiagnostics.map((test, index) => (
              <div key={index} className="flex items-center gap-3 bg-white/10 rounded-lg p-4">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 rounded-full bg-[#FE5F62] flex items-center justify-center">
                    <FaCheck className="text-white text-sm" />
                  </div>
                </div>
                <span className="text-white">{test}</span>
              </div>
            ))}
          </div>

          <div className="text-center">
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
              text-lg
            ">
              Emergency Diagnostic Request
              <FaClock className="inline-block ml-1 transition-transform group-hover:rotate-12" />
            </Link>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-[#FE5F62] to-[#e45457] py-12 lg:py-16 relative overflow-hidden">
        <img src={pawsvg} alt="pawsvg" className='hidden sm:block absolute left-[10%] top-[30%] w-8 sm:w-10 md:w-12 opacity-20 animate-pulse z-0' />
        <img src={pawsvg} alt="pawsvg" className='hidden sm:block absolute right-[15%] bottom-[20%] w-6 sm:w-8 md:w-10 opacity-20 animate-pulse z-0' style={{ animationDelay: '1s' }} />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white relative z-10">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-6">
            Keep Your Pet Healthy with Regular Diagnostics
          </h2>
          <p className="text-lg sm:text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Early detection saves lives. Schedule your pet's diagnostic screening today and ensure 
            they receive the best preventive care available.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/bookappointment" className="
              inline-flex
              items-center
              justify-center
              gap-2
              bg-white
              text-[#FE5F62]
              hover:bg-gray-100
              font-medium
              px-8
              py-4
              rounded-md
              transition-all
              duration-300
              shadow-lg
              group
              text-lg
            ">
              Schedule Diagnostic Test
              <FaPaw className="inline-block ml-1 transition-transform group-hover:rotate-12" />
            </Link>
            
            <Link to="/services" className="
              inline-flex
              items-center
              justify-center
              gap-2
              border-2
              border-white
              text-white
              hover:bg-white
              hover:text-[#FE5F62]
              font-medium
              px-8
              py-4
              rounded-md
              transition-all
              duration-300
              group
              text-lg
            ">
              View All Services
              <MdPets className="inline-block ml-1 transition-transform group-hover:scale-110" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Diagnostics
