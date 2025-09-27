import React, { useState } from 'react';
import { FaPaw, FaDog, FaUser, FaPhone, FaEnvelope, FaMapMarkerAlt, FaCalendarAlt, FaWeight, FaCheckCircle, FaSpinner, FaCamera, FaNotesMedical, FaUserMd, FaIdCard } from 'react-icons/fa';
import { MdPets, MdHealthAndSafety } from 'react-icons/md';
import pawsvg from '../assets/svg/paw.svg';

const PetRegistration = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    // Pet Information
    petName: '',
    petType: 'dog',
    breed: '',
    age: '',
    ageUnit: 'years',
    gender: '',
    weight: '',
    color: '',
    microchipId: '',
    
    // Owner Information
    ownerName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    emergencyContact: '',
    emergencyPhone: '',
    
    // Medical Information
    vaccinationStatus: '',
    lastVetVisit: '',
    medications: '',
    allergies: '',
    medicalConditions: '',
    preferredVet: '',
    
    // Additional Information
    specialInstructions: '',
    agreeToTerms: false,
    allowEmergencyTreatment: false
  });

  const [errors, setErrors] = useState({});

  const totalSteps = 4;

  const petTypes = [
    { value: 'dog', label: 'Dog', icon: '🐕' },
    { value: 'cat', label: 'Cat', icon: '🐱' },
    { value: 'bird', label: 'Bird', icon: '🦅' },
    { value: 'rabbit', label: 'Rabbit', icon: '🐰' },
    { value: 'hamster', label: 'Hamster', icon: '🐹' },
    { value: 'fish', label: 'Fish', icon: '🐠' },
    { value: 'reptile', label: 'Reptile', icon: '🦎' },
    { value: 'other', label: 'Other', icon: '🐾' }
  ];

  const dogBreeds = [
    'Labrador Retriever', 'Golden Retriever', 'German Shepherd', 'French Bulldog', 'Bulldog',
    'Poodle', 'Beagle', 'Rottweiler', 'Yorkshire Terrier', 'Dachshund', 'Siberian Husky',
    'Boxer', 'Great Dane', 'Doberman Pinscher', 'Australian Shepherd', 'Mixed Breed', 'Other'
  ];

  const catBreeds = [
    'Persian', 'Siamese', 'Maine Coon', 'Ragdoll', 'British Shorthair', 'Abyssinian',
    'Russian Blue', 'Birman', 'Oriental Shorthair', 'Devon Rex', 'Mixed Breed', 'Other'
  ];

  const validateStep = (step) => {
    const newErrors = {};

    if (step === 1) {
      if (!formData.petName.trim()) newErrors.petName = 'Pet name is required';
      if (!formData.breed) newErrors.breed = 'Breed is required';
      if (!formData.age) newErrors.age = 'Age is required';
      if (!formData.gender) newErrors.gender = 'Gender is required';
      if (!formData.weight) newErrors.weight = 'Weight is required';
    }

    if (step === 2) {
      if (!formData.ownerName.trim()) newErrors.ownerName = 'Owner name is required';
      if (!formData.email) {
        newErrors.email = 'Email is required';
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        newErrors.email = 'Please enter a valid email address';
      }
      if (!formData.phone) {
        newErrors.phone = 'Phone number is required';
      } else if (!/^\d{10}$/.test(formData.phone)) {
        newErrors.phone = 'Phone number must be exactly 10 digits';
      }
      if (!formData.address.trim()) newErrors.address = 'Address is required';
      if (!formData.city.trim()) newErrors.city = 'City is required';
    }

    if (step === 4) {
      if (!formData.agreeToTerms) newErrors.agreeToTerms = 'You must agree to the terms and conditions';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const nextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => Math.min(prev + 1, totalSteps));
    }
  };

  const prevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateStep(currentStep)) return;

    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Store data locally for demo purposes
      localStorage.setItem('petRegistrationData', JSON.stringify({
        ...formData,
        registrationId: `PET-${Date.now()}`,
        registrationDate: new Date().toISOString()
      }));

      setSubmitted(true);
    } catch (error) {
      console.error('Registration failed:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const getBreedOptions = () => {
    switch (formData.petType) {
      case 'dog':
        return dogBreeds;
      case 'cat':
        return catBreeds;
      default:
        return ['Mixed Breed', 'Other'];
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-red-50 to-pink-50 flex items-center justify-center px-4 py-8">
        <div className="max-w-2xl w-full bg-white rounded-2xl shadow-2xl p-8 text-center">
          <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <FaCheckCircle className="text-green-600 text-4xl" />
          </div>
          <h1 className="text-3xl font-bold text-[#3F3D56] mb-4">
            Registration Successful!
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            Welcome to the Sniffi family, <span className="font-semibold text-[#FE5F62]">{formData.petName}</span>!
            Your pet has been successfully registered with us.
          </p>
          <div className="bg-gray-50 rounded-xl p-6 mb-6">
            <p className="text-sm text-gray-500 mb-2">Registration ID</p>
            <p className="text-xl font-bold text-[#3F3D56]">PET-{Date.now()}</p>
          </div>
          <button
            onClick={() => window.location.reload()}
            className="inline-flex items-center gap-2 bg-[#FE5F62] hover:bg-[#e45457] text-white font-medium px-8 py-3 rounded-xl transition-all duration-300 transform hover:scale-105"
          >
            <FaPaw className="text-lg" />
            Register Another Pet
          </button>
        </div>
      </div>
    );
  }

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-8">
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 bg-[#FE5F62] rounded-xl flex items-center justify-center mr-4">
                <FaPaw className="text-white text-xl" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-[#3F3D56]">Pet Information</h2>
                <p className="text-gray-600">Tell us about your furry friend</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="block text-gray-700 font-semibold mb-3">Pet's Name*</label>
                <input
                  type="text"
                  name="petName"
                  value={formData.petName}
                  onChange={handleChange}
                  className={`w-full px-4 py-4 border-2 rounded-xl bg-gray-50 focus:bg-white focus:outline-none focus:ring-4 focus:ring-[#FE5F62]/20 focus:border-[#FE5F62] transition-all duration-300 ${
                    errors.petName ? 'border-red-400 bg-red-50' : 'border-gray-200 hover:border-gray-300'
                  }`}
                  placeholder="e.g., Buddy, Milo, Luna"
                />
                {errors.petName && (
                  <p className="text-red-500 text-sm mt-2 flex items-center">
                    <span className="w-1 h-1 bg-red-500 rounded-full mr-2"></span>
                    {errors.petName}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <label className="block text-gray-700 font-semibold mb-3">Pet Type*</label>
                <select
                  name="petType"
                  value={formData.petType}
                  onChange={handleChange}
                  className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl bg-gray-50 focus:bg-white focus:outline-none focus:ring-4 focus:ring-[#FE5F62]/20 focus:border-[#FE5F62] transition-all duration-300"
                >
                  {petTypes.map(type => (
                    <option key={type.value} value={type.value}>
                      {type.icon} {type.label}
                    </option>
                  ))}
                </select>
              </div>

              <div className="space-y-2">
                <label className="block text-gray-700 font-semibold mb-3">Breed*</label>
                <select
                  name="breed"
                  value={formData.breed}
                  onChange={handleChange}
                  className={`w-full px-4 py-4 border-2 rounded-xl bg-gray-50 focus:bg-white focus:outline-none focus:ring-4 focus:ring-[#FE5F62]/20 focus:border-[#FE5F62] transition-all duration-300 ${
                    errors.breed ? 'border-red-400 bg-red-50' : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <option value="">Select breed</option>
                  {getBreedOptions().map(breed => (
                    <option key={breed} value={breed}>{breed}</option>
                  ))}
                </select>
                {errors.breed && (
                  <p className="text-red-500 text-sm mt-2 flex items-center">
                    <span className="w-1 h-1 bg-red-500 rounded-full mr-2"></span>
                    {errors.breed}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <label className="block text-gray-700 font-semibold mb-3">Gender*</label>
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  className={`w-full px-4 py-4 border-2 rounded-xl bg-gray-50 focus:bg-white focus:outline-none focus:ring-4 focus:ring-[#FE5F62]/20 focus:border-[#FE5F62] transition-all duration-300 ${
                    errors.gender ? 'border-red-400 bg-red-50' : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <option value="">Select gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
                {errors.gender && (
                  <p className="text-red-500 text-sm mt-2 flex items-center">
                    <span className="w-1 h-1 bg-red-500 rounded-full mr-2"></span>
                    {errors.gender}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <label className="block text-gray-700 font-semibold mb-3">Age*</label>
                <div className="flex gap-2">
                  <input
                    type="number"
                    name="age"
                    value={formData.age}
                    onChange={handleChange}
                    className={`flex-1 px-4 py-4 border-2 rounded-xl bg-gray-50 focus:bg-white focus:outline-none focus:ring-4 focus:ring-[#FE5F62]/20 focus:border-[#FE5F62] transition-all duration-300 ${
                      errors.age ? 'border-red-400 bg-red-50' : 'border-gray-200 hover:border-gray-300'
                    }`}
                    placeholder="e.g., 2"
                    min="0"
                  />
                  <select
                    name="ageUnit"
                    value={formData.ageUnit}
                    onChange={handleChange}
                    className="px-4 py-4 border-2 border-gray-200 rounded-xl bg-gray-50 focus:bg-white focus:outline-none focus:ring-4 focus:ring-[#FE5F62]/20 focus:border-[#FE5F62] transition-all duration-300"
                  >
                    <option value="years">Years</option>
                    <option value="months">Months</option>
                  </select>
                </div>
                {errors.age && (
                  <p className="text-red-500 text-sm mt-2 flex items-center">
                    <span className="w-1 h-1 bg-red-500 rounded-full mr-2"></span>
                    {errors.age}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <label className="block text-gray-700 font-semibold mb-3">Weight* (kg)</label>
                <input
                  type="number"
                  name="weight"
                  value={formData.weight}
                  onChange={handleChange}
                  className={`w-full px-4 py-4 border-2 rounded-xl bg-gray-50 focus:bg-white focus:outline-none focus:ring-4 focus:ring-[#FE5F62]/20 focus:border-[#FE5F62] transition-all duration-300 ${
                    errors.weight ? 'border-red-400 bg-red-50' : 'border-gray-200 hover:border-gray-300'
                  }`}
                  placeholder="e.g., 25.5"
                  step="0.1"
                  min="0"
                />
                {errors.weight && (
                  <p className="text-red-500 text-sm mt-2 flex items-center">
                    <span className="w-1 h-1 bg-red-500 rounded-full mr-2"></span>
                    {errors.weight}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <label className="block text-gray-700 font-semibold mb-3">Color/Markings</label>
                <input
                  type="text"
                  name="color"
                  value={formData.color}
                  onChange={handleChange}
                  className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl bg-gray-50 focus:bg-white focus:outline-none focus:ring-4 focus:ring-[#FE5F62]/20 focus:border-[#FE5F62] transition-all duration-300"
                  placeholder="e.g., Golden, Black & White"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-gray-700 font-semibold mb-3">Microchip ID</label>
                <input
                  type="text"
                  name="microchipId"
                  value={formData.microchipId}
                  onChange={handleChange}
                  className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl bg-gray-50 focus:bg-white focus:outline-none focus:ring-4 focus:ring-[#FE5F62]/20 focus:border-[#FE5F62] transition-all duration-300"
                  placeholder="15-digit microchip number"
                />
              </div>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-8">
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 bg-[#3F3D56] rounded-xl flex items-center justify-center mr-4">
                <FaUser className="text-white text-xl" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-[#3F3D56]">Owner Information</h2>
                <p className="text-gray-600">Your contact and address details</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="block text-gray-700 font-semibold mb-3">Your Name*</label>
                <input
                  type="text"
                  name="ownerName"
                  value={formData.ownerName}
                  onChange={handleChange}
                  className={`w-full px-4 py-4 border-2 rounded-xl bg-gray-50 focus:bg-white focus:outline-none focus:ring-4 focus:ring-[#FE5F62]/20 focus:border-[#FE5F62] transition-all duration-300 ${
                    errors.ownerName ? 'border-red-400 bg-red-50' : 'border-gray-200 hover:border-gray-300'
                  }`}
                  placeholder="Enter your full name"
                />
                {errors.ownerName && (
                  <p className="text-red-500 text-sm mt-2 flex items-center">
                    <span className="w-1 h-1 bg-red-500 rounded-full mr-2"></span>
                    {errors.ownerName}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <label className="block text-gray-700 font-semibold mb-3">Email Address*</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                    <FaEnvelope className="text-gray-400" />
                  </div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full pl-12 pr-4 py-4 border-2 rounded-xl bg-gray-50 focus:bg-white focus:outline-none focus:ring-4 focus:ring-[#FE5F62]/20 focus:border-[#FE5F62] transition-all duration-300 ${
                      errors.email ? 'border-red-400 bg-red-50' : 'border-gray-200 hover:border-gray-300'
                    }`}
                    placeholder="your@email.com"
                  />
                </div>
                {errors.email && (
                  <p className="text-red-500 text-sm mt-2 flex items-center">
                    <span className="w-1 h-1 bg-red-500 rounded-full mr-2"></span>
                    {errors.email}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <label className="block text-gray-700 font-semibold mb-3">Phone Number*</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                    <FaPhone className="text-gray-400" />
                  </div>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`w-full pl-12 pr-4 py-4 border-2 rounded-xl bg-gray-50 focus:bg-white focus:outline-none focus:ring-4 focus:ring-[#FE5F62]/20 focus:border-[#FE5F62] transition-all duration-300 ${
                      errors.phone ? 'border-red-400 bg-red-50' : 'border-gray-200 hover:border-gray-300'
                    }`}
                    placeholder="10-digit phone number"
                    maxLength="10"
                  />
                </div>
                {errors.phone && (
                  <p className="text-red-500 text-sm mt-2 flex items-center">
                    <span className="w-1 h-1 bg-red-500 rounded-full mr-2"></span>
                    {errors.phone}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <label className="block text-gray-700 font-semibold mb-3">City*</label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  className={`w-full px-4 py-4 border-2 rounded-xl bg-gray-50 focus:bg-white focus:outline-none focus:ring-4 focus:ring-[#FE5F62]/20 focus:border-[#FE5F62] transition-all duration-300 ${
                    errors.city ? 'border-red-400 bg-red-50' : 'border-gray-200 hover:border-gray-300'
                  }`}
                  placeholder="Your city"
                />
                {errors.city && (
                  <p className="text-red-500 text-sm mt-2 flex items-center">
                    <span className="w-1 h-1 bg-red-500 rounded-full mr-2"></span>
                    {errors.city}
                  </p>
                )}
              </div>

              <div className="md:col-span-2 space-y-2">
                <label className="block text-gray-700 font-semibold mb-3">Address*</label>
                <div className="relative">
                  <div className="absolute top-4 left-4 pointer-events-none">
                    <FaMapMarkerAlt className="text-gray-400" />
                  </div>
                  <textarea
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    rows="3"
                    className={`w-full pl-12 pr-4 py-4 border-2 rounded-xl bg-gray-50 focus:bg-white focus:outline-none focus:ring-4 focus:ring-[#FE5F62]/20 focus:border-[#FE5F62] transition-all duration-300 resize-none ${
                      errors.address ? 'border-red-400 bg-red-50' : 'border-gray-200 hover:border-gray-300'
                    }`}
                    placeholder="Your complete address"
                  />
                </div>
                {errors.address && (
                  <p className="text-red-500 text-sm mt-2 flex items-center">
                    <span className="w-1 h-1 bg-red-500 rounded-full mr-2"></span>
                    {errors.address}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <label className="block text-gray-700 font-semibold mb-3">Emergency Contact Name</label>
                <input
                  type="text"
                  name="emergencyContact"
                  value={formData.emergencyContact}
                  onChange={handleChange}
                  className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl bg-gray-50 focus:bg-white focus:outline-none focus:ring-4 focus:ring-[#FE5F62]/20 focus:border-[#FE5F62] transition-all duration-300"
                  placeholder="Emergency contact person"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-gray-700 font-semibold mb-3">Emergency Contact Phone</label>
                <input
                  type="tel"
                  name="emergencyPhone"
                  value={formData.emergencyPhone}
                  onChange={handleChange}
                  className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl bg-gray-50 focus:bg-white focus:outline-none focus:ring-4 focus:ring-[#FE5F62]/20 focus:border-[#FE5F62] transition-all duration-300"
                  placeholder="Emergency contact number"
                  maxLength="10"
                />
              </div>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-8">
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 bg-[#FE5F62] rounded-xl flex items-center justify-center mr-4">
                <MdHealthAndSafety className="text-white text-xl" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-[#3F3D56]">Medical Information</h2>
                <p className="text-gray-600">Health and medical history</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="block text-gray-700 font-semibold mb-3">Vaccination Status</label>
                <select
                  name="vaccinationStatus"
                  value={formData.vaccinationStatus}
                  onChange={handleChange}
                  className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl bg-gray-50 focus:bg-white focus:outline-none focus:ring-4 focus:ring-[#FE5F62]/20 focus:border-[#FE5F62] transition-all duration-300"
                >
                  <option value="">Select status</option>
                  <option value="up-to-date">Up to Date</option>
                  <option value="partial">Partially Vaccinated</option>
                  <option value="overdue">Overdue</option>
                  <option value="unknown">Unknown</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="block text-gray-700 font-semibold mb-3">Last Vet Visit</label>
                <input
                  type="date"
                  name="lastVetVisit"
                  value={formData.lastVetVisit}
                  onChange={handleChange}
                  className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl bg-gray-50 focus:bg-white focus:outline-none focus:ring-4 focus:ring-[#FE5F62]/20 focus:border-[#FE5F62] transition-all duration-300"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-gray-700 font-semibold mb-3">Preferred Veterinarian</label>
                <input
                  type="text"
                  name="preferredVet"
                  value={formData.preferredVet}
                  onChange={handleChange}
                  className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl bg-gray-50 focus:bg-white focus:outline-none focus:ring-4 focus:ring-[#FE5F62]/20 focus:border-[#FE5F62] transition-all duration-300"
                  placeholder="Dr. Smith, ABC Vet Clinic"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-gray-700 font-semibold mb-3">Current Medications</label>
                <textarea
                  name="medications"
                  value={formData.medications}
                  onChange={handleChange}
                  rows="2"
                  className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl bg-gray-50 focus:bg-white focus:outline-none focus:ring-4 focus:ring-[#FE5F62]/20 focus:border-[#FE5F62] transition-all duration-300 resize-none"
                  placeholder="List any current medications"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-gray-700 font-semibold mb-3">Known Allergies</label>
                <textarea
                  name="allergies"
                  value={formData.allergies}
                  onChange={handleChange}
                  rows="2"
                  className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl bg-gray-50 focus:bg-white focus:outline-none focus:ring-4 focus:ring-[#FE5F62]/20 focus:border-[#FE5F62] transition-all duration-300 resize-none"
                  placeholder="List any known allergies"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-gray-700 font-semibold mb-3">Medical Conditions</label>
                <textarea
                  name="medicalConditions"
                  value={formData.medicalConditions}
                  onChange={handleChange}
                  rows="2"
                  className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl bg-gray-50 focus:bg-white focus:outline-none focus:ring-4 focus:ring-[#FE5F62]/20 focus:border-[#FE5F62] transition-all duration-300 resize-none"
                  placeholder="Any existing medical conditions"
                />
              </div>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-8">
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 bg-[#3F3D56] rounded-xl flex items-center justify-center mr-4">
                <FaCheckCircle className="text-white text-xl" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-[#3F3D56]">Final Details</h2>
                <p className="text-gray-600">Additional information and agreements</p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="space-y-2">
                <label className="block text-gray-700 font-semibold mb-3">Special Instructions</label>
                <textarea
                  name="specialInstructions"
                  value={formData.specialInstructions}
                  onChange={handleChange}
                  rows="4"
                  className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl bg-gray-50 focus:bg-white focus:outline-none focus:ring-4 focus:ring-[#FE5F62]/20 focus:border-[#FE5F62] transition-all duration-300 resize-none"
                  placeholder="Any special care instructions, behavioral notes, or other important information about your pet..."
                />
              </div>

              <div className="bg-gray-50 rounded-xl p-6 space-y-4">
                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="allowEmergencyTreatment"
                    name="allowEmergencyTreatment"
                    checked={formData.allowEmergencyTreatment}
                    onChange={handleChange}
                    className="mt-1 w-4 h-4 text-[#FE5F62] border-2 border-gray-300 rounded focus:ring-[#FE5F62] focus:ring-2"
                  />
                  <label htmlFor="allowEmergencyTreatment" className="text-sm text-gray-600 leading-relaxed">
                    I authorize Sniffi to provide emergency medical treatment to my pet if I cannot be reached during an emergency situation.
                  </label>
                </div>

                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="agreeToTerms"
                    name="agreeToTerms"
                    checked={formData.agreeToTerms}
                    onChange={handleChange}
                    className="mt-1 w-4 h-4 text-[#FE5F62] border-2 border-gray-300 rounded focus:ring-[#FE5F62] focus:ring-2"
                  />
                  <label htmlFor="agreeToTerms" className="text-sm text-gray-600 leading-relaxed">
                    I agree to the <span className="text-[#FE5F62] font-semibold">Terms and Conditions</span> and <span className="text-[#FE5F62] font-semibold">Privacy Policy</span> of Sniffi veterinary services.*
                  </label>
                </div>
                {errors.agreeToTerms && (
                  <p className="text-red-500 text-sm flex items-center">
                    <span className="w-1 h-1 bg-red-500 rounded-full mr-2"></span>
                    {errors.agreeToTerms}
                  </p>
                )}
              </div>

              <div className="bg-gradient-to-r from-[#FE5F62]/10 to-[#3F3D56]/10 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-[#3F3D56] mb-3 flex items-center gap-2">
                  <FaCheckCircle className="text-[#FE5F62]" />
                  Registration Summary
                </h3>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-gray-600">Pet Name:</p>
                    <p className="font-semibold text-[#3F3D56]">{formData.petName || 'Not provided'}</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Pet Type:</p>
                    <p className="font-semibold text-[#3F3D56]">{petTypes.find(t => t.value === formData.petType)?.label || 'Not provided'}</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Owner Name:</p>
                    <p className="font-semibold text-[#3F3D56]">{formData.ownerName || 'Not provided'}</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Contact:</p>
                    <p className="font-semibold text-[#3F3D56]">{formData.phone || 'Not provided'}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-pink-50 relative overflow-hidden">
      {/* Decorative elements */}
      <img src={pawsvg} alt="pawsvg" className='hidden sm:block absolute left-[2%] top-[10%] w-6 sm:w-8 opacity-30 animate-pulse z-0' />
      <img src={pawsvg} alt="pawsvg" className='hidden sm:block absolute right-[3%] top-[20%] w-5 sm:w-6 opacity-30 animate-pulse z-0' style={{ animationDelay: '0.5s' }} />
      <img src={pawsvg} alt="pawsvg" className='hidden lg:block absolute left-[5%] bottom-[20%] w-4 sm:w-5 opacity-30 animate-pulse z-0' style={{ animationDelay: '1s' }} />

      <div className="relative z-10 max-w-4xl mx-auto px-4 py-8 sm:py-12">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-[#3F3D56]">Register Your </span>
            <span className="text-[#FE5F62]">Pet</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Welcome to the Sniffi family! Let's get your furry friend registered for the best veterinary care.
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mb-8 sm:mb-12">
          <div className="flex items-center justify-center mb-4">
            {[1, 2, 3, 4].map((step, index) => (
              <div key={step} className="flex items-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold transition-all duration-300 ${
                  step <= currentStep
                    ? 'bg-[#FE5F62] text-white'
                    : 'bg-gray-200 text-gray-500'
                }`}>
                  {step < currentStep ? <FaCheckCircle className="text-sm" /> : step}
                </div>
                {index < 3 && (
                  <div className={`w-12 sm:w-20 h-1 mx-2 rounded transition-all duration-300 ${
                    step < currentStep ? 'bg-[#FE5F62]' : 'bg-gray-200'
                  }`} />
                )}
              </div>
            ))}
          </div>
          <div className="text-center">
            <p className="text-sm text-gray-600">
              Step {currentStep} of {totalSteps}
            </p>
          </div>
        </div>

        {/* Form */}
        <div className="bg-white rounded-2xl shadow-2xl p-6 sm:p-8 lg:p-12">
          <form onSubmit={currentStep === totalSteps ? handleSubmit : (e) => { e.preventDefault(); nextStep(); }}>
            {renderStep()}

            {/* Navigation Buttons */}
            <div className="flex justify-between items-center mt-8 pt-6 border-t border-gray-100">
              <button
                type="button"
                onClick={prevStep}
                disabled={currentStep === 1}
                className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  currentStep === 1
                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                Previous
              </button>

              <div className="flex gap-2">
                {[1, 2, 3, 4].map((step) => (
                  <div
                    key={step}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      step === currentStep ? 'bg-[#FE5F62]' : 'bg-gray-200'
                    }`}
                  />
                ))}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center gap-2 bg-[#FE5F62] hover:bg-[#e45457] text-white font-medium px-6 py-3 rounded-xl transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                {isSubmitting ? (
                  <>
                    <FaSpinner className="animate-spin" />
                    Processing...
                  </>
                ) : currentStep === totalSteps ? (
                  <>
                    <FaCheckCircle />
                    Register Pet
                  </>
                ) : (
                  <>
                    Next
                    <FaPaw />
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PetRegistration;
