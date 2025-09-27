import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaPaw, FaCalendarAlt, FaClock, FaUser, FaDog, FaPhoneAlt, FaEnvelope, FaNotesMedical, FaCheckCircle, FaSpinner } from 'react-icons/fa';
import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';

const REGION = import.meta.env.VITE_AWS_REGION;
const ACCESSKEYID = import.meta.env.VITE_AWS_ACCESS_KEY_ID;
const SECRETACCESSKEY = import.meta.env.VITE_AWS_SECRET_ACCESS_KEY;
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const BookAppointment = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    petName: '',
    petType: 'dog',
    ownerName: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    service: 'checkup',
    notes: '',
    agreeToTerms: false
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Validation functions
  const validatePhone = (phone) => {
    const phoneRegex = /^\d{10}$/;
    return phoneRegex.test(phone);
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateDate = (date) => {
    if (!date) return false;
    const selectedDate = new Date(date);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return selectedDate >= today;
  };

  const formatDateToDisplay = (dateString) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    let newValue = type === 'checkbox' ? checked : value;

    // Phone number validation - only allow digits and limit to 10
    if (name === 'phone') {
      newValue = value.replace(/\D/g, '').slice(0, 10);
    }

    setFormData({
      ...formData,
      [name]: newValue
    });

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  const submitToAPI = async (appointmentData) => {
    try {
      const response = await fetch(`${API_BASE_URL}appointments`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(appointmentData)
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      console.log('Successfully submitted to API:', result);
      return result;
    } catch (error) {
      console.error('Error submitting to API:', error);
      throw error;
    }
  };

  const uploadToS3 = async (appointmentData) => {
    const s3Client = new S3Client({
      region: REGION,
      credentials: {
        accessKeyId: ACCESSKEYID,
        secretAccessKey: SECRETACCESSKEY
      }
    });

    const jsonData = JSON.stringify(appointmentData);

    const uploadParams = {
      Bucket: 'sniffi-pet-appointments-data',
      Key: `appointments/${Date.now()}.json`,
      Body: jsonData,
      ContentType: 'application/json'
    };

    const data = await s3Client.send(new PutObjectCommand(uploadParams));
    console.log('Successfully uploaded data to S3', data);
    return data;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Validate form
    const newErrors = {};

    if (!formData.petName.trim()) {
      newErrors.petName = 'Pet name is required';
    }

    if (!formData.ownerName.trim()) {
      newErrors.ownerName = 'Your name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!validatePhone(formData.phone)) {
      newErrors.phone = 'Phone number must be exactly 10 digits';
    }

    if (!formData.date) {
      newErrors.date = 'Date is required';
    } else if (!validateDate(formData.date)) {
      newErrors.date = 'Please select a future date';
    }

    if (!formData.time) {
      newErrors.time = 'Time slot is required';
    }

    if (!formData.agreeToTerms) {
      newErrors.agreeToTerms = 'You must agree to the terms and conditions';
    }

    setErrors(newErrors);

    // If there are errors, don't submit
    if (Object.keys(newErrors).length > 0) {
      setIsSubmitting(false);
      return;
    }

    // Prepare the form data
    const appointmentData = {
      ...formData,
      date: formatDateToDisplay(formData.date),
      submittedAt: new Date().toISOString()
    };


    try {
      // Only use API submission
      await submitToAPI(appointmentData);

      // Store data locally
      localStorage.setItem('appointmentData', JSON.stringify(appointmentData));

      setSubmitted(true);

      setTimeout(() => {
        navigate('/thank-you'); // Navigate to thank you page instead
      }, 3000);

    } catch (error) {
      console.error('Appointment submission failed:', error);
      alert('There was an error scheduling your appointment. Please try again or contact us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const services = [
    { value: 'checkup', label: 'Regular Checkup', icon: '🩺' },
    { value: 'vaccination', label: 'Vaccination', icon: '💉' },
    { value: 'grooming', label: 'Grooming Services', icon: '✂️' },
    { value: 'dental', label: 'Dental Care', icon: '🦷' },
    { value: 'emergency', label: 'Emergency Care', icon: '🚨' }
  ];

  const petTypes = [
    { value: 'dog', label: 'Dog', icon: '🐕' },
    { value: 'cat', label: 'Cat', icon: '🐱' },
    { value: 'bird', label: 'Bird', icon: '🐦' },
    { value: 'rabbit', label: 'Rabbit', icon: '🐰' },
    { value: 'other', label: 'Other', icon: '🐾' }
  ];

  const timeSlots = [
    { value: '9AM-12PM', label: '9:00 AM - 12:00 PM', icon: '🌅' },
    { value: '12PM-3PM', label: '12:00 PM - 3:00 PM', icon: '☀️' },
    { value: '3PM-6PM', label: '3:00 PM - 6:00 PM', icon: '🌇' },
    { value: '6PM-9PM', label: '6:00 PM - 9:00 PM', icon: '🌙' }
  ];

  return (
    <div className="bg-gradient-to-br from-gray-50 to-blue-50 min-h-screen pb-12">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-[#f75f62] to-[#e45457] py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-full mb-6">
            <FaPaw className="text-white text-3xl" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white drop-shadow-lg">
            Book Your Pet's
            <span className="block text-yellow-200">Appointment</span>
          </h1>
          <p className="text-white/90 text-xl max-w-3xl mx-auto leading-relaxed">
            Schedule a visit with our expert veterinarians for your furry friend.
            We provide compassionate care and convenient booking options.
          </p>
        </div>
        {/* Decorative elements */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-yellow-200/20 rounded-full blur-xl"></div>
      </div>

      {/* Main Form Section */}
      <div className="max-w-5xl mx-auto px-4 py-12 -mt-16 relative z-10">
        <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">
          {submitted ? (
            <div className="text-center py-20 px-8">
              <div className="inline-flex items-center justify-center w-24 h-24 bg-green-100 rounded-full mb-6">
                <FaCheckCircle className="text-green-600 text-4xl" />
              </div>
              <h2 className="text-3xl font-bold text-[#3F3D56] mb-4">Appointment Scheduled!</h2>
              <p className="text-gray-600 text-lg mb-6 max-w-md mx-auto">
                Thank you for choosing Sniffi! We've received your appointment request and will contact you shortly to confirm the details.
              </p>
              <div className="flex items-center justify-center text-[#FE5F62] mb-4">
                <FaPaw className="mr-2" />
                <span>Redirecting you to homepage...</span>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="p-8 md:p-12">
              {/* Pet Information Section */}
              <div className="mb-12">
                <div className="flex items-center mb-8">
                  <div className="w-12 h-12 bg-[#FE5F62] rounded-xl flex items-center justify-center mr-4">
                    <FaDog className="text-white text-xl" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-[#3F3D56]">Pet Information</h2>
                    <p className="text-gray-600">Tell us about your furry friend</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="block text-gray-700 font-semibold mb-3" htmlFor="petName">
                      Pet's Name*
                    </label>
                    <input
                      type="text"
                      id="petName"
                      name="petName"
                      value={formData.petName}
                      onChange={handleChange}
                      className={`w-full px-4 py-4 border-2 rounded-xl bg-gray-50 focus:bg-white focus:outline-none focus:ring-4 focus:ring-[#FE5F62]/20 focus:border-[#FE5F62] transition-all duration-300 ${errors.petName ? 'border-red-400 bg-red-50' : 'border-gray-200 hover:border-gray-300'
                        }`}
                      placeholder="e.g., Buddy, Milo, Luna"
                      required
                    />
                    {errors.petName && (
                      <p className="text-red-500 text-sm mt-2 flex items-center">
                        <span className="w-1 h-1 bg-red-500 rounded-full mr-2"></span>
                        {errors.petName}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <label className="block text-gray-700 font-semibold mb-3" htmlFor="petType">
                      Pet Type*
                    </label>
                    <select
                      id="petType"
                      name="petType"
                      value={formData.petType}
                      onChange={handleChange}
                      className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl bg-gray-50 focus:bg-white focus:outline-none focus:ring-4 focus:ring-[#FE5F62]/20 focus:border-[#FE5F62] transition-all duration-300"
                      required
                    >
                      {petTypes.map(type => (
                        <option key={type.value} value={type.value}>
                          {type.icon} {type.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* Personal Information Section */}
              <div className="mb-12">
                <div className="flex items-center mb-8">
                  <div className="w-12 h-12 bg-[#3F3D56] rounded-xl flex items-center justify-center mr-4">
                    <FaUser className="text-white text-xl" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-[#3F3D56]">Your Information</h2>
                    <p className="text-gray-600">We need your details to contact you</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="block text-gray-700 font-semibold mb-3" htmlFor="ownerName">
                      Your Name*
                    </label>
                    <input
                      type="text"
                      id="ownerName"
                      name="ownerName"
                      value={formData.ownerName}
                      onChange={handleChange}
                      className={`w-full px-4 py-4 border-2 rounded-xl bg-gray-50 focus:bg-white focus:outline-none focus:ring-4 focus:ring-[#FE5F62]/20 focus:border-[#FE5F62] transition-all duration-300 ${errors.ownerName ? 'border-red-400 bg-red-50' : 'border-gray-200 hover:border-gray-300'
                        }`}
                      placeholder="Enter your full name"
                      required
                    />
                    {errors.ownerName && (
                      <p className="text-red-500 text-sm mt-2 flex items-center">
                        <span className="w-1 h-1 bg-red-500 rounded-full mr-2"></span>
                        {errors.ownerName}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <label className="block text-gray-700 font-semibold mb-3" htmlFor="email">
                      Email Address*
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                        <FaEnvelope className="text-gray-400" />
                      </div>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full pl-12 pr-4 py-4 border-2 rounded-xl bg-gray-50 focus:bg-white focus:outline-none focus:ring-4 focus:ring-[#FE5F62]/20 focus:border-[#FE5F62] transition-all duration-300 ${errors.email ? 'border-red-400 bg-red-50' : 'border-gray-200 hover:border-gray-300'
                          }`}
                        placeholder="your.email@example.com"
                        required
                      />
                    </div>
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-2 flex items-center">
                        <span className="w-1 h-1 bg-red-500 rounded-full mr-2"></span>
                        {errors.email}
                      </p>
                    )}
                  </div>

                  <div className="md:col-span-2 space-y-2">
                    <label className="block text-gray-700 font-semibold mb-3" htmlFor="phone">
                      Phone Number*
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                        <FaPhoneAlt className="text-gray-400" />
                      </div>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        maxLength="10"
                        className={`w-full pl-12 pr-4 py-4 border-2 rounded-xl bg-gray-50 focus:bg-white focus:outline-none focus:ring-4 focus:ring-[#FE5F62]/20 focus:border-[#FE5F62] transition-all duration-300 ${errors.phone ? 'border-red-400 bg-red-50' : 'border-gray-200 hover:border-gray-300'
                          }`}
                        placeholder="1234567890"
                        required
                      />
                    </div>
                    {errors.phone && (
                      <p className="text-red-500 text-sm mt-2 flex items-center">
                        <span className="w-1 h-1 bg-red-500 rounded-full mr-2"></span>
                        {errors.phone}
                      </p>
                    )}
                    <p className="text-gray-500 text-sm mt-2">Enter exactly 10 digits</p>
                  </div>
                </div>
              </div>

              {/* Appointment Details Section */}
              <div className="mb-12">
                <div className="flex items-center mb-8">
                  <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center mr-4">
                    <FaCalendarAlt className="text-white text-xl" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-[#3F3D56]">Appointment Details</h2>
                    <p className="text-gray-600">Choose your preferred date and time</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="block text-gray-700 font-semibold mb-3" htmlFor="date">
                      Preferred Date*
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                        <FaCalendarAlt className="text-gray-400" />
                      </div>
                      <input
                        type="date"
                        id="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        min={new Date().toISOString().split('T')[0]}
                        className={`w-full pl-12 pr-4 py-4 border-2 rounded-xl bg-gray-50 focus:bg-white focus:outline-none focus:ring-4 focus:ring-[#FE5F62]/20 focus:border-[#FE5F62] transition-all duration-300 ${errors.date ? 'border-red-400 bg-red-50' : 'border-gray-200 hover:border-gray-300'
                          }`}
                        required
                      />
                    </div>
                    {errors.date && (
                      <p className="text-red-500 text-sm mt-2 flex items-center">
                        <span className="w-1 h-1 bg-red-500 rounded-full mr-2"></span>
                        {errors.date}
                      </p>
                    )}
                    {formData.date && (
                      <p className="text-green-600 text-sm mt-2 flex items-center">
                        <FaCheckCircle className="mr-2 text-xs" />
                        Selected: {formatDateToDisplay(formData.date)}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <label className="block text-gray-700 font-semibold mb-3" htmlFor="time">
                      Preferred Time*
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                        <FaClock className="text-gray-400" />
                      </div>
                      <select
                        id="time"
                        name="time"
                        value={formData.time}
                        onChange={handleChange}
                        className={`w-full pl-12 pr-4 py-4 border-2 rounded-xl bg-gray-50 focus:bg-white focus:outline-none focus:ring-4 focus:ring-[#FE5F62]/20 focus:border-[#FE5F62] transition-all duration-300 ${errors.time ? 'border-red-400 bg-red-50' : 'border-gray-200 hover:border-gray-300'
                          }`}
                        required
                      >
                        <option value="" disabled>Select a time slot</option>
                        {timeSlots.map(slot => (
                          <option key={slot.value} value={slot.value}>
                            {slot.icon} {slot.label}
                          </option>
                        ))}
                      </select>
                    </div>
                    {errors.time && (
                      <p className="text-red-500 text-sm mt-2 flex items-center">
                        <span className="w-1 h-1 bg-red-500 rounded-full mr-2"></span>
                        {errors.time}
                      </p>
                    )}
                  </div>

                  <div className="md:col-span-2 space-y-2">
                    <label className="block text-gray-700 font-semibold mb-3" htmlFor="service">
                      Service Type*
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl bg-gray-50 focus:bg-white focus:outline-none focus:ring-4 focus:ring-[#FE5F62]/20 focus:border-[#FE5F62] transition-all duration-300 hover:border-gray-300"
                      required
                    >
                      {services.map(service => (
                        <option key={service.value} value={service.value}>
                          {service.icon} {service.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="md:col-span-2 space-y-2">
                    <label className="block text-gray-700 font-semibold mb-3" htmlFor="notes">
                      Additional Notes
                    </label>
                    <div className="relative">
                      <div className="absolute top-4 left-4 pointer-events-none">
                        <FaNotesMedical className="text-gray-400" />
                      </div>
                      <textarea
                        id="notes"
                        name="notes"
                        value={formData.notes}
                        onChange={handleChange}
                        rows="4"
                        className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl bg-gray-50 focus:bg-white focus:outline-none focus:ring-4 focus:ring-[#FE5F62]/20 focus:border-[#FE5F62] transition-all duration-300 hover:border-gray-300 resize-none"
                        placeholder="Please share any relevant information about your pet's condition, special requirements, or concerns..."
                      ></textarea>
                    </div>
                  </div>
                </div>
              </div>

              {/* Terms and Submit Section */}
              <div className="border-t border-gray-200 pt-8">
                <div className="mb-8">
                  <div className="flex items-start">
                    <input
                      type="checkbox"
                      id="agreeToTerms"
                      name="agreeToTerms"
                      checked={formData.agreeToTerms}
                      onChange={handleChange}
                      className={`w-5 h-5 text-[#FE5F62] focus:ring-[#FE5F62] focus:ring-4 border-2 rounded mt-1 transition-all duration-300 ${errors.agreeToTerms ? 'border-red-400' : 'border-gray-300'
                        }`}
                      required
                    />
                    <label htmlFor="agreeToTerms" className="ml-3 block text-gray-700 leading-relaxed">
                      I agree to the{' '}
                      <a href="/tandc" className="text-[#FE5F62] hover:text-[#e45457] underline font-medium transition-colors">
                        Terms & Conditions
                      </a>{' '}
                      and{' '}
                      <a href="/privacyTerms" className="text-[#FE5F62] hover:text-[#e45457] underline font-medium transition-colors">
                        Privacy Policy
                      </a>
                      *
                    </label>
                  </div>
                  {errors.agreeToTerms && (
                    <p className="text-red-500 text-sm mt-3 flex items-center">
                      <span className="w-1 h-1 bg-red-500 rounded-full mr-2"></span>
                      {errors.agreeToTerms}
                    </p>
                  )}
                </div>

                <div className="text-center">
                  <button
                    type="submit"
                    disabled={!formData.agreeToTerms || isSubmitting}
                    className="inline-flex items-center justify-center px-12 py-4 bg-gradient-to-r from-[#FE5F62] to-[#e45457] text-white rounded-2xl hover:from-[#e45457] hover:to-[#d13f42] transition-all duration-300 text-lg font-semibold focus:outline-none focus:ring-4 focus:ring-[#FE5F62]/30 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl transform hover:-translate-y-1 disabled:transform-none min-w-[200px]"
                  >
                    {isSubmitting ? (
                      <>
                        <FaSpinner className="animate-spin mr-3" />
                        Scheduling...
                      </>
                    ) : (
                      <>
                        <FaPaw className="mr-3" />
                        Schedule Appointment
                      </>
                    )}
                  </button>

                  <p className="text-gray-500 text-sm mt-4">
                    We'll contact you within 24 hours to confirm your appointment
                  </p>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookAppointment;