import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer className="w-full bg-[#3F3D56] text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Header Section */}
                <div className="flex flex-col md:flex-row justify-between items-center mb-10">
                    <div className="flex items-center space-x-4 mb-6 md:mb-0">
                        <div className="text-3xl sm:text-4xl font-extrabold hover:text-[#FE5F62] transition-colors duration-300 cursor-pointer">
                            <span className="text-white">Sni</span>
                            <span className="text-[#FE5F62]">ffi</span>
                        </div>
                    </div>

                    {/* Newsletter Sign-up */}
                    <div className="w-full md:w-auto">
                        <h3 className="text-sm font-semibold uppercase tracking-wider mb-3 text-center md:text-right">
                            Stay Updated
                        </h3>
                        <div className="flex flex-col sm:flex-row gap-2">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-md focus:outline-none focus:ring-2 focus:ring-[#FE5F62] text-sm"
                                aria-label="Email address"
                            />
                            <button className="bg-[#FE5F62] hover:bg-[#fe4548] text-white px-4 py-2 rounded-md transition-colors duration-300 text-sm font-medium">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>

                {/* Main Content Section */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 border-t border-white/20 pt-10">
                    {/* About Us & Contact Section */}
                    <div className="lg:col-span-4 text-sm">
                        <h3 className="text-lg font-semibold mb-4">About Us</h3>
                        <p className="text-gray-300 mb-4 leading-relaxed">
                            Sniffi is your trusted partner for at-home veterinary care. Expert vets providing consultations, vaccinations, wellness checkups, and diagnostics—all at your doorstep.
                        </p>

                        <div className="space-y-2">
                            <p className="flex items-start gap-2 text-gray-300">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5 text-[#FE5F62] flex-shrink-0 mt-0.5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                    />
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                    />
                                </svg>
                                <span>Office no. 320, 10 Biz Park, Viman Nagar, Pune 411014</span>
                            </p>

                            <p className="flex items-center gap-2 text-gray-300">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5 text-[#FE5F62] flex-shrink-0"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                    />
                                </svg>
                                <span>+91-9175129919</span>
                            </p>
                        </div>

                        {/* Social Links */}
                        <div className="mt-6">
                            <h3 className="text-sm font-semibold mb-3">Connect With Us</h3>
                            <div className="flex gap-3">
                                <a
                                    href="#"
                                    aria-label="Instagram"
                                    className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#FE5F62] transition-colors duration-300"
                                >
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                        <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                                    </svg>
                                </a>
                                <a
                                    href="#"
                                    aria-label="Facebook"
                                    className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#FE5F62] transition-colors duration-300"
                                >
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                        <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                                    </svg>
                                </a>
                                <a
                                    href="#"
                                    aria-label="LinkedIn"
                                    className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#FE5F62] transition-colors duration-300"
                                >
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                        <path fillRule="evenodd" d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" clipRule="evenodd" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="lg:col-span-2 text-sm">
                        <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link to="/" className="text-gray-300 hover:text-[#FE5F62] transition-colors duration-300 flex items-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link to="/services" className="text-gray-300 hover:text-[#FE5F62] transition-colors duration-300 flex items-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                    Services
                                </Link>
                            </li>
                            <li>
                                <Link to="#" className="text-gray-300 hover:text-[#FE5F62] transition-colors duration-300 flex items-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                    Contact Us
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Our Services - 4 Column Grid */}
                    <div className="lg:col-span-6">
                        <h3 className="text-lg font-semibold mb-4">Our Services</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-2 text-sm">
                            <Link to="/services/vet-consultation" className="text-gray-300 hover:text-[#FE5F62] transition-colors duration-300">
                                Home Veterinary Care Pune
                            </Link>
                            <Link to="/services/vet-consultation" className="text-gray-300 hover:text-[#FE5F62] transition-colors duration-300">
                                At Home Vet Pune
                            </Link>
                            <Link to="/services/vet-consultation" className="text-gray-300 hover:text-[#FE5F62] transition-colors duration-300">
                                Pet Doctor At Home
                            </Link>
                            <Link to="/services/vet-consultation" className="text-gray-300 hover:text-[#FE5F62] transition-colors duration-300">
                                Pet Vaccination In Pune
                            </Link>
                            <Link to="/services/vet-consultation" className="text-gray-300 hover:text-[#FE5F62] transition-colors duration-300">
                                Dog Vaccination At Home
                            </Link>
                            <Link to="/services/vet-consultation" className="text-gray-300 hover:text-[#FE5F62] transition-colors duration-300">
                                Cat Vaccination At Home
                            </Link>
                            <Link to="/services/vet-consultation" className="text-gray-300 hover:text-[#FE5F62] transition-colors duration-300">
                                Pet Checkup Near Me
                            </Link>
                            <Link to="/services/vet-consultation" className="text-gray-300 hover:text-[#FE5F62] transition-colors duration-300">
                                Dog Checkup At Home
                            </Link>
                            <Link to="/services/vet-consultation" className="text-gray-300 hover:text-[#FE5F62] transition-colors duration-300">
                                Cat Checkup In Pune
                            </Link>
                            <Link to="/services/vet-consultation" className="text-gray-300 hover:text-[#FE5F62] transition-colors duration-300">
                                Pet Wellness Exam Pune
                            </Link>
                            <Link to="/services/vet-consultation" className="text-gray-300 hover:text-[#FE5F62] transition-colors duration-300">
                                Pet Diagnostics At Home
                            </Link>
                            <Link to="/services/vet-consultation" className="text-gray-300 hover:text-[#FE5F62] transition-colors duration-300">
                                Dog Health Check Pune
                            </Link>
                            <Link to="/services/vet-consultation" className="text-gray-300 hover:text-[#FE5F62] transition-colors duration-300">
                                Cat Health Check Pune
                            </Link>
                            <Link to="/services/vet-consultation" className="text-gray-300 hover:text-[#FE5F62] transition-colors duration-300">
                                Vet Consultation At Home
                            </Link>
                            <Link to="/services/vet-consultation" className="text-gray-300 hover:text-[#FE5F62] transition-colors duration-300">
                                Online Vet Appointment Pune
                            </Link>
                            <Link to="/services/vet-consultation" className="text-gray-300 hover:text-[#FE5F62] transition-colors duration-300">
                                Mobile Vet Service Pune
                            </Link>
                            <Link to="/services/vet-consultation" className="text-gray-300 hover:text-[#FE5F62] transition-colors duration-300">
                                Pet Healthcare At Home
                            </Link>
                            <Link to="/services/vet-consultation" className="text-gray-300 hover:text-[#FE5F62] transition-colors duration-300">
                                Veterinary Doctor In Pune
                            </Link>
                            <Link to="/services/vet-consultation" className="text-gray-300 hover:text-[#FE5F62] transition-colors duration-300">
                                Emergency Pet Care Pune
                            </Link>
                            <Link to="/services/vet-consultation" className="text-gray-300 hover:text-[#FE5F62] transition-colors duration-300">
                                Pet Registration In Pune
                            </Link>
                            <Link to="/services/vet-consultation" className="text-gray-300 hover:text-[#FE5F62] transition-colors duration-300">
                                Pet Deworming At Home
                            </Link>
                            <Link to="/services/vet-consultation" className="text-gray-300 hover:text-[#FE5F62] transition-colors duration-300">
                                Tick Flea Treatment Pune
                            </Link>
                            <Link to="/services/vet-consultation" className="text-gray-300 hover:text-[#FE5F62] transition-colors duration-300">
                                Dog Skin Care Pune
                            </Link>
                            <Link to="/services/vet-consultation" className="text-gray-300 hover:text-[#FE5F62] transition-colors duration-300">
                                Cat Grooming At Home
                            </Link>
                            <Link to="/services/vet-consultation" className="text-gray-300 hover:text-[#FE5F62] transition-colors duration-300">
                                Pet Clinic Alternative Pune
                            </Link>
                            <Link to="/services/vet-consultation" className="text-gray-300 hover:text-[#FE5F62] transition-colors duration-300">
                                Veterinary Visit At Home
                            </Link>
                            <Link to="/services/vet-consultation" className="text-gray-300 hover:text-[#FE5F62] transition-colors duration-300">
                                Dog Vaccination Near Me
                            </Link>
                            <Link to="/services/vet-consultation" className="text-gray-300 hover:text-[#FE5F62] transition-colors duration-300">
                                Cat Vaccination Near Me
                            </Link>
                            <Link to="/services/vet-consultation" className="text-gray-300 hover:text-[#FE5F62] transition-colors duration-300">
                                Pet Wellness Care Pune
                            </Link>
                            <Link to="/services/vet-consultation" className="text-gray-300 hover:text-[#FE5F62] transition-colors duration-300">
                                Affordable Vet Care Pune
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Footer Bottom Section */}
                <div className="border-t border-white/20 mt-10 pt-6">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <p className="text-sm text-gray-300 mb-4 md:mb-0">
                            © 2025 Sniffi. All rights reserved.
                        </p>
                        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-gray-300">
                            <Link to="/tandc" className="hover:text-[#FE5F62] transition-colors duration-300">
                                Terms & Conditions
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
