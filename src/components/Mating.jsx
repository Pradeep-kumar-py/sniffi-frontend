import React from 'react'
import { FaPaw, FaCheck, FaHeart, FaShieldAlt, FaUserMd, FaCalendarAlt, FaClock, FaHome } from 'react-icons/fa'
import { MdPets, MdHealthAndSafety, MdFavorite, MdBabyChangingStation } from 'react-icons/md'
import { Link } from 'react-router-dom'
import pawsvg from '../assets/svg/paw.svg'

const Mating = () => {
  const matingServices = [
    {
      id: 1,
      title: "Pre-Breeding Health Assessment",
      description: "Comprehensive health screening including genetic testing, reproductive health evaluation, and overall fitness assessment.",
      icon: <FaUserMd className="text-[#FE5F62] text-3xl" />
    },
    {
      id: 2,
      title: "Breeding Consultation",
      description: "Expert guidance on breeding practices, timing, partner selection, and genetic compatibility assessment.",
      icon: <MdHealthAndSafety className="text-[#FE5F62] text-3xl" />
    },
    {
      id: 3,
      title: "Artificial Insemination",
      description: "Professional artificial insemination services with proper timing and technique for optimal success rates.",
      icon: <MdFavorite className="text-[#FE5F62] text-3xl" />
    },
    {
      id: 4,
      title: "Pregnancy Monitoring",
      description: "Regular ultrasound monitoring, nutritional guidance, and health tracking throughout the pregnancy period.",
      icon: <MdBabyChangingStation className="text-[#FE5F62] text-3xl" />
    },
    {
      id: 5,
      title: "Delivery Assistance",
      description: "Professional birthing assistance and emergency delivery services to ensure safe delivery for mother and puppies/kittens.",
      icon: <FaHeart className="text-[#FE5F62] text-3xl" />
    },
    {
      id: 6,
      title: "Post-Birth Care",
      description: "Newborn health checks, vaccination scheduling, and mother's recovery care with nutrition counseling.",
      icon: <FaShieldAlt className="text-[#FE5F62] text-3xl" />
    }
  ];

  const breedingStages = [
    {
      stage: "Pre-Breeding Phase",
      duration: "2-4 weeks before mating",
      activities: [
        "Complete health screening and genetic testing",
        "Nutritional optimization and weight management",
        "Vaccination updates and parasite prevention",
        "Behavioral assessment and stress management"
      ],
      icon: "🔍"
    },
    {
      stage: "Breeding Phase",
      duration: "Optimal fertility window",
      activities: [
        "Hormone level monitoring and timing",
        "Professional breeding supervision",
        "Artificial insemination if required",
        "Post-mating health monitoring"
      ],
      icon: "❤️"
    },
    {
      stage: "Pregnancy Phase",
      duration: "58-68 days gestation",
      activities: [
        "Regular ultrasound monitoring",
        "Nutritional adjustments and supplements",
        "Exercise modification and comfort care",
        "Preparation for whelping/queening"
      ],
      icon: "🤰"
    },
    {
      stage: "Birth & Postpartum",
      duration: "Birth to 8 weeks",
      activities: [
        "Delivery assistance and monitoring",
        "Newborn health assessments",
        "Mother's recovery and lactation support",
        "Puppy/kitten early care guidance"
      ],
      icon: "👶"
    }
  ];

  const whyChooseProfessionalBreeding = [
    {
      title: "Health & Safety First",
      description: "Professional monitoring ensures the health and safety of both mother and offspring throughout the entire process.",
      icon: <FaShieldAlt className="text-[#FE5F62] text-3xl" />
    },
    {
      title: "Genetic Expertise",
      description: "Our veterinarians provide genetic counseling to reduce hereditary diseases and improve breed quality.",
      icon: <MdPets className="text-[#FE5F62] text-3xl" />
    },
    {
      title: "Optimal Success Rates",
      description: "Professional timing and techniques significantly increase the chances of successful conception and healthy births.",
      icon: <FaHeart className="text-[#FE5F62] text-3xl" />
    },
    {
      title: "Emergency Preparedness",
      description: "24/7 emergency support during critical periods ensures immediate medical intervention when needed.",
      icon: <FaClock className="text-[#FE5F62] text-3xl" />
    }
  ];

  const howItWorksSteps = [
    {
      step: "Step 1:",
      title: "Initial Consultation",
      description: "Schedule a comprehensive breeding consultation to assess your pet's health and discuss breeding goals."
    },
    {
      step: "Step 2:",
      title: "Health & Genetic Screening",
      description: "Complete health evaluation including genetic testing, reproductive health assessment, and vaccination updates."
    },
    {
      step: "Step 3:",
      title: "Breeding Plan Development",
      description: "Create a customized breeding plan with optimal timing, partner selection, and preparation protocols."
    },
    {
      step: "Step 4:",
      title: "Professional Breeding Services",
      description: "Expert supervision during breeding, artificial insemination if needed, and post-mating monitoring."
    },
    {
      step: "Step 5:",
      title: "Pregnancy & Birth Support",
      description: "Continuous monitoring throughout pregnancy and professional delivery assistance when needed."
    }
  ];

  const breedingTips = [
    "Ensure both breeding partners are in optimal health with current vaccinations and parasite prevention.",
    "Schedule genetic testing to identify potential hereditary conditions before breeding.",
    "Maintain proper nutrition and weight management for both parents before and during breeding.",
    "Monitor female's heat cycles and hormone levels for optimal breeding timing.",
    "Prepare a clean, comfortable whelping area well before the expected delivery date.",
    "Keep emergency veterinary contact information readily available during pregnancy and birth."
  ];

  const breedingFAQs = [
    {
      question: "What is the best age for breeding my pet?",
      answer: "Dogs should typically be at least 2 years old after hip/elbow clearances. Cats can breed from 8-12 months, but 1-2 years is optimal for health and maturity."
    },
    {
      question: "How often can I breed my female pet?",
      answer: "For health reasons, females should not be bred every heat cycle. Dogs should skip at least one heat cycle between breedings, and cats should have adequate recovery time between litters."
    },
    {
      question: "What genetic tests should be done before breeding?",
      answer: "This varies by breed, but common tests include hip/elbow dysplasia, eye clearances, and breed-specific genetic disease panels. Our veterinarians will recommend appropriate tests."
    },
    {
      question: "How long does the breeding process take?",
      answer: "From initial consultation to weaning can take 4-6 months total. Pre-breeding prep takes 2-4 weeks, pregnancy is 58-68 days, and weaning occurs around 8 weeks postpartum."
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-[#FE5F62]/5 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          {/* Decorative elements */}
          <img src={pawsvg} alt="pawsvg" className='hidden sm:block absolute left-[5%] top-[15%] w-6 sm:w-8 opacity-30 animate-pulse' />
          <img src={pawsvg} alt="pawsvg" className='hidden sm:block absolute right-[8%] bottom-[20%] w-5 sm:w-7 opacity-30 animate-pulse' style={{animationDelay: '0.5s'}} />
          
          <div className="text-center relative z-10">
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-semibold mb-6">
              <span className="text-[#3F3D56]">Professional </span>
              <span className="text-[#FE5F62]">Pet Breeding</span>
              <br />
              <span className="text-[#3F3D56]">Services</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Expert breeding guidance, health screening, and professional support from conception to weaning. 
              Ensuring healthy, happy litters with our comprehensive breeding services.
            </p>
            <Link 
              to="/book-appointment" 
              className="inline-flex items-center gap-2 bg-[#FE5F62] hover:bg-[#e45457] text-white font-medium px-8 py-4 rounded-md transition-all duration-300 text-lg"
            >
              <FaCalendarAlt className="text-sm" />
              Schedule Breeding Consultation
            </Link>
          </div>
        </div>
      </div>

      {/* Our Breeding Services */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#3F3D56] mb-4">
            Our Breeding Services
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Comprehensive breeding services designed to ensure the health and wellbeing of both parents and offspring
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {matingServices.map((service) => (
            <div key={service.id} className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              <div className="flex items-center justify-center mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-[#3F3D56] mb-3 text-center">
                {service.title}
              </h3>
              <p className="text-gray-600 text-center leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Breeding Process Timeline */}
      <div className="bg-gray-50 py-16 lg:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#3F3D56] mb-4">
              Breeding Process Timeline
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A comprehensive timeline covering every stage of the breeding process
            </p>
          </div>

          <div className="space-y-8 lg:space-y-12">
            {breedingStages.map((stage, index) => (
              <div key={index} className="flex flex-col lg:flex-row items-start lg:items-center gap-6 lg:gap-8">
                <div className="flex-shrink-0 w-full lg:w-1/3">
                  <div className="bg-white rounded-lg p-6 shadow-md">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-2xl">{stage.icon}</span>
                      <h3 className="text-xl font-semibold text-[#3F3D56]">{stage.stage}</h3>
                    </div>
                    <p className="text-[#FE5F62] font-medium">{stage.duration}</p>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {stage.activities.map((activity, activityIndex) => (
                      <div key={activityIndex} className="flex items-start gap-2">
                        <FaCheck className="text-[#FE5F62] text-sm mt-1 flex-shrink-0" />
                        <span className="text-gray-700">{activity}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Why Choose Professional Breeding */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#3F3D56] mb-4">
            Why Choose Professional Breeding Services?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Professional breeding services ensure the health, safety, and success of the breeding process
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {whyChooseProfessionalBreeding.map((reason, index) => (
            <div key={index} className="flex items-start gap-6">
              <div className="flex-shrink-0">
                {reason.icon}
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#3F3D56] mb-2">
                  {reason.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* How It Works Section */}
      <div className="bg-gray-50 py-16 lg:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#3F3D56] mb-4">
              How It Works
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our step-by-step process ensures professional care throughout the breeding journey
            </p>
          </div>
          
          <div className="space-y-6 lg:space-y-8">
            {howItWorksSteps.map((item, index) => (
              <div key={index} className="flex items-start gap-4 lg:gap-6">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 rounded-full bg-[#FE5F62] flex items-center justify-center">
                    <span className="text-white font-semibold text-sm">{index + 1}</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg lg:text-xl font-semibold text-[#3F3D56] mb-2">
                    <span className="text-[#FE5F62]">{item.step}</span> {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Breeding Tips */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#3F3D56] mb-4">
            Important Breeding Tips
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Essential guidelines for responsible and successful breeding practices
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
          {breedingTips.map((tip, index) => (
            <div key={index} className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
              <FaPaw className="text-[#FE5F62] text-sm mt-1 flex-shrink-0" />
              <p className="text-gray-700 leading-relaxed">{tip}</p>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-gray-50 py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#3F3D56] mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600">
              Common questions about our breeding services
            </p>
          </div>
          
          <div className="space-y-6">
            {breedingFAQs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-lg font-semibold text-[#3F3D56] mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-[#FE5F62] text-white py-16 lg:py-20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-6">
            Ready to Start Your Breeding Journey?
          </h2>
          <p className="text-lg sm:text-xl mb-8 opacity-90 leading-relaxed">
            Contact our experienced veterinary team for professional breeding consultation and comprehensive care services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              to="/book-appointment" 
              className="inline-flex items-center gap-2 bg-white text-[#FE5F62] font-semibold px-8 py-4 rounded-md hover:bg-gray-100 transition-colors duration-300 text-lg"
            >
              <FaCalendarAlt />
              Book Consultation
            </Link>
            <Link 
              to="/contact" 
              className="inline-flex items-center gap-2 border-2 border-white text-white font-semibold px-8 py-4 rounded-md hover:bg-white hover:text-[#FE5F62] transition-all duration-300 text-lg"
            >
              <FaHome />
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Mating
