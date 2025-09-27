import React, { useEffect, useState } from 'react';
import { FaPaw, FaCalendarAlt, FaClock, FaUser, FaDog, FaPhoneAlt, FaEnvelope, FaNotesMedical, FaCheckCircle, FaHome, FaWhatsapp, FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import pawsvg from '../assets/svg/paw.svg';

const ThankYouPage = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Trigger animation after component mounts
        setTimeout(() => setIsVisible(true), 100);
    }, []);

    return (
        <div className="bg-gradient-to-br from-gray-50 to-blue-50 min-h-screen relative overflow-hidden">
            {/* Decorative Elements */}
            <img 
                src={pawsvg} 
                alt="decorative paw" 
                className="absolute top-10 left-10 w-8 opacity-20 animate-bounce" 
                style={{ animationDelay: '0.5s' }}
            />
            <img 
                src={pawsvg} 
                alt="decorative paw" 
                className="absolute top-32 right-16 w-6 opacity-20 animate-pulse" 
                style={{ animationDelay: '1s' }}
            />
            <img 
                src={pawsvg} 
                alt="decorative paw" 
                className="absolute bottom-20 left-20 w-10 opacity-20 animate-bounce" 
                style={{ animationDelay: '1.5s' }}
            />

            {/* Success Banner */}
            <div className="relative py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    {/* Success Icon */}
                    <div className={`text-center mb-8 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                        <div className="relative inline-block">
                            <FaCheckCircle className="text-6xl sm:text-7xl text-green-500 mx-auto animate-pulse" />
                            <div className="absolute -top-2 -right-2">
                                <FaPaw className="text-2xl text-[#FE5F62] animate-bounce" />
                            </div>
                        </div>
                    </div>

                    {/* Main Success Message */}
                    <div className={`text-center mb-12 transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                            <span className="text-[#3F3D56]">Appointment </span>
                            <span className="text-[#FE5F62]">Confirmed!</span>
                        </h1>
                        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-xl border border-white/20 max-w-3xl mx-auto">
                            <p className="text-gray-700 text-lg sm:text-xl leading-relaxed">
                                🎉 Great news! Your appointment has been successfully scheduled. 
                                Our caring team will contact you shortly to confirm all the details and ensure your pet receives the best possible care.
                            </p>
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                        <Link 
                            to="/" 
                            className="inline-flex items-center gap-3 bg-[#3F3D56] hover:bg-[#2d2b42] text-white font-medium px-8 py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl group transform hover:-translate-y-1"
                        >
                            <FaHome className="text-lg" />
                            Return Home
                            <FaArrowRight className="transition-transform group-hover:translate-x-1" />
                        </Link>
                        
                        <Link 
                            to="/bookappointment" 
                            className="inline-flex items-center gap-3 bg-[#FE5F62] hover:bg-[#e45457] text-white font-medium px-8 py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl group transform hover:-translate-y-1"
                        >
                            <FaCalendarAlt className="text-lg" />
                            Book Another Appointment
                            <FaPaw className="transition-transform group-hover:rotate-12" />
                        </Link>
                    </div>
                </div>
            </div>

            {/* What Happens Next Section */}
            <div className={`bg-white/60 backdrop-blur-sm py-16 px-4 sm:px-6 lg:px-8 transform transition-all duration-1000 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
                        <span className="text-[#3F3D56]">What Happens </span>
                        <span className="text-[#FE5F62]">Next?</span>
                    </h2>
                    
                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Step 1 */}
                        <div className="text-center group">
                            <div className="bg-gradient-to-br from-[#FE5F62] to-[#ff7b7e] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 transform transition-transform group-hover:scale-110">
                                <FaPhoneAlt className="text-2xl text-white" />
                            </div>
                            <h3 className="text-xl font-semibold text-[#3F3D56] mb-3">We'll Call You</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Our team will contact you within 24 hours to confirm your appointment details and answer any questions.
                            </p>
                        </div>

                        {/* Step 2 */}
                        <div className="text-center group">
                            <div className="bg-gradient-to-br from-[#3F3D56] to-[#525070] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 transform transition-transform group-hover:scale-110">
                                <FaCalendarAlt className="text-2xl text-white" />
                            </div>
                            <h3 className="text-xl font-semibold text-[#3F3D56] mb-3">Appointment Day</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Arrive a few minutes early with your pet. Don't forget any medical records or medications.
                            </p>
                        </div>

                        {/* Step 3 */}
                        <div className="text-center group">
                            <div className="bg-gradient-to-br from-green-500 to-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 transform transition-transform group-hover:scale-110">
                                <FaNotesMedical className="text-2xl text-white" />
                            </div>
                            <h3 className="text-xl font-semibold text-[#3F3D56] mb-3">Expert Care</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Our experienced veterinarians will provide compassionate, comprehensive care for your beloved pet.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Contact Section */}
            <div className={`bg-gradient-to-r from-[#3F3D56] to-[#525070] py-16 px-4 sm:px-6 lg:px-8 transform transition-all duration-1000 delay-900 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                        <span className="text-white">Need Immediate </span>
                        <span className="text-[#FE5F62]">Assistance?</span>
                    </h2>
                    <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
                        If you have any urgent questions or need to make changes to your appointment, we're here to help!
                    </p>
                    
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <a
                            href="https://wa.me/919175129919"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#128C7E] text-white font-medium px-8 py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl group transform hover:-translate-y-1"
                        >
                            <FaWhatsapp className="text-xl" />
                            WhatsApp Us
                            <FaArrowRight className="transition-transform group-hover:translate-x-1" />
                        </a>
                        
                        <a
                            href="tel:+919175129919"
                            className="inline-flex items-center gap-3 bg-[#FE5F62] hover:bg-[#e45457] text-white font-medium px-8 py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl group transform hover:-translate-y-1"
                        >
                            <FaPhoneAlt className="text-xl" />
                            Call Now
                            <FaArrowRight className="transition-transform group-hover:translate-x-1" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ThankYouPage;
