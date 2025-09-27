import React from 'react';
import { 
  MdEmergency, 
  MdWarning, 
  MdPhone, 
  MdLocalHospital,
  MdAccessTime,
  MdLocationOn
} from 'react-icons/md';
import { 
  GiDogHouse, 
  GiCat, 
  GiRabbit 
} from 'react-icons/gi';
import { 
  BiFirstAid, 
  BiSupport 
} from 'react-icons/bi';

const EmergencyCare = () => {
  const emergencySigns = [
    { icon: <MdWarning className="text-red-500" />, text: "Difficulty breathing or choking" },
    { icon: <MdWarning className="text-red-500" />, text: "Severe bleeding or wounds" },
    { icon: <MdWarning className="text-red-500" />, text: "Seizures or loss of consciousness" },
    { icon: <MdWarning className="text-red-500" />, text: "Ingestion of toxic substances" },
    { icon: <MdWarning className="text-red-500" />, text: "Severe trauma or accidents" },
    { icon: <MdWarning className="text-red-500" />, text: "Extreme lethargy or weakness" },
    { icon: <MdWarning className="text-red-500" />, text: "Persistent vomiting or diarrhea" },
    { icon: <MdWarning className="text-red-500" />, text: "Signs of extreme pain" }
  ];

  const emergencySteps = [
    { 
      icon: <MdPhone className="text-blue-600" />, 
      title: "Contact Immediately", 
      text: "Call your veterinarian or emergency clinic" 
    },
    { 
      icon: <BiSupport className="text-green-600" />, 
      title: "Stay Calm", 
      text: "Keep yourself and your pet as calm as possible" 
    },
    { 
      icon: <BiFirstAid className="text-purple-600" />, 
      title: "Basic First Aid", 
      text: "Apply pressure to wounds, ensure airway is clear" 
    },
    { 
      icon: <MdLocalHospital className="text-red-600" />, 
      title: "Transport Safely", 
      text: "Use a carrier or blanket to transport your pet safely" 
    }
  ];

  return (
    <div className="emergency-care-section py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="flex justify-center items-center mb-4">
            <div className="bg-red-100 p-4 rounded-full">
              <MdEmergency className="text-4xl text-red-600" />
            </div>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Pet Emergency Care
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            When every second counts, knowing the signs and taking immediate action can save your pet's life. 
            Our comprehensive emergency guide helps you respond effectively during critical situations.
          </p>
        </div>

        {/* Emergency Alert Banner */}
        <div className="bg-gradient-to-r from-red-600 to-red-700 text-white p-6 rounded-2xl shadow-lg mb-12">
          <div className="flex items-center justify-center space-x-4">
            <MdAccessTime className="text-3xl" />
            <div className="text-center">
              <h3 className="text-2xl font-bold">24/7 Emergency Hotline</h3>
              <p className="text-red-100 text-lg">Call immediately: <span className="font-bold">1-800-PET-HELP</span></p>
            </div>
            <MdPhone className="text-3xl" />
          </div>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-12">
          {/* Emergency Signs Section */}
          <div className="bg-white rounded-3xl shadow-xl p-8 border border-red-100">
            <div className="flex items-center mb-6">
              <div className="bg-red-100 p-3 rounded-full mr-4">
                <MdWarning className="text-2xl text-red-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Critical Warning Signs</h3>
            </div>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Recognize these urgent symptoms that require immediate veterinary attention:
            </p>
            <div className="space-y-4">
              {emergencySigns.map((sign, index) => (
                <div key={index} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-red-50 transition-colors">
                  {sign.icon}
                  <span className="text-gray-700 font-medium">{sign.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Emergency Response Section */}
          <div className="bg-white rounded-3xl shadow-xl p-8 border border-blue-100">
            <div className="flex items-center mb-6">
              <div className="bg-blue-100 p-3 rounded-full mr-4">
                <BiFirstAid className="text-2xl text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Emergency Response Steps</h3>
            </div>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Follow these essential steps to provide the best care during emergencies:
            </p>
            <div className="space-y-6">
              {emergencySteps.map((step, index) => (
                <div key={index} className="flex items-start space-x-4 p-4 rounded-lg border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="flex-shrink-0 bg-gray-50 p-2 rounded-full">
                    {step.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">{step.title}</h4>
                    <p className="text-gray-600">{step.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Additional Resources Section */}
        <div className="mt-12 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-3xl p-8 border border-blue-100">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">Emergency Resources</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-blue-100 p-4 rounded-full inline-block mb-4">
                <MdLocalHospital className="text-3xl text-blue-600" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Find Emergency Clinics</h4>
              <p className="text-gray-600 mb-4">Locate 24/7 veterinary emergency services near you</p>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors font-medium">
                Find Clinics
              </button>
            </div>
            
            <div className="text-center p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-green-100 p-4 rounded-full inline-block mb-4">
                <MdPhone className="text-3xl text-green-600" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Poison Control</h4>
              <p className="text-gray-600 mb-4">24/7 pet poison helpline for toxic ingestion cases</p>
              <button className="bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition-colors font-medium">
                Call Now
              </button>
            </div>
            
            <div className="text-center p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-purple-100 p-4 rounded-full inline-block mb-4">
                <BiFirstAid className="text-3xl text-purple-600" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">First Aid Guide</h4>
              <p className="text-gray-600 mb-4">Download our comprehensive pet first aid manual</p>
              <button className="bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700 transition-colors font-medium">
                Download
              </button>
            </div>
          </div>
        </div>

        {/* Pet Type Specific Tips */}
        <div className="mt-12 bg-white rounded-3xl shadow-xl p-8">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">Pet-Specific Emergency Tips</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6 border border-gray-200 rounded-2xl hover:border-blue-300 transition-colors">
              <GiDogHouse className="text-4xl text-blue-600 mx-auto mb-4" />
              <h4 className="font-bold text-gray-900 mb-3">Dogs</h4>
              <ul className="text-gray-600 space-y-2 text-left">
                <li>• Watch for bloat in large breeds</li>
                <li>• Heat stroke prevention</li>
                <li>• Chocolate/grape toxicity</li>
                <li>• Choking on toys/bones</li>
              </ul>
            </div>
            
            <div className="text-center p-6 border border-gray-200 rounded-2xl hover:border-purple-300 transition-colors">
              <GiCat className="text-4xl text-purple-600 mx-auto mb-4" />
              <h4 className="font-bold text-gray-900 mb-3">Cats</h4>
              <ul className="text-gray-600 space-y-2 text-left">
                <li>• Urinary blockages</li>
                <li>• Lily poisoning</li>
                <li>• Hiding when sick</li>
                <li>• Difficulty breathing</li>
              </ul>
            </div>
            
            <div className="text-center p-6 border border-gray-200 rounded-2xl hover:border-green-300 transition-colors">
              <GiRabbit className="text-4xl text-green-600 mx-auto mb-4" />
              <h4 className="font-bold text-gray-900 mb-3">Small Pets</h4>
              <ul className="text-gray-600 space-y-2 text-left">
                <li>• Temperature sensitivity</li>
                <li>• GI stasis in rabbits</li>
                <li>• Respiratory issues</li>
                <li>• Stress-related problems</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Important Note */}
        <div className="mt-8 bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-lg">
          <div className="flex items-start">
            <MdWarning className="text-yellow-400 text-xl mt-0.5 mr-3" />
            <div>
              <h4 className="font-bold text-yellow-800 mb-2">Important Reminder</h4>
              <p className="text-yellow-700">
                This guide provides general information only. Always consult with a qualified veterinarian 
                for specific medical advice. In true emergencies, seek immediate professional veterinary care.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmergencyCare;