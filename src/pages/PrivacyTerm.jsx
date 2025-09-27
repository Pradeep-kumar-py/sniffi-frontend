import React from 'react'
import { FaPaw, FaShieldAlt, FaLock, FaUserShield } from 'react-icons/fa';
import { MdPrivacyTip, MdSecurity } from 'react-icons/md';
import { privacyTermData } from '../util/privacyTermData';


const PrivacyTerm = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-pink-50">
            {/* Hero Section */}
            <div className="bg-gradient-to-r from-[#FE5F62] to-[#FF7B7D] text-white py-16">
                <div className="max-w-6xl mx-auto px-4 text-center">
                    <div className="flex justify-center mb-6">
                        <div className="p-4 bg-white/20 rounded-full backdrop-blur-sm">
                            <MdPrivacyTip className="text-5xl" />
                        </div>
                    </div>
                    <h1 className="text-5xl md:text-6xl font-bold mb-4 tracking-tight">
                        Privacy Terms
                    </h1>
                    <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
                        Your privacy and data protection are our top priorities. Learn how we safeguard your information.
                    </p>
                    <div className="flex justify-center gap-6 mt-8">
                        <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full backdrop-blur-sm">
                            <FaShieldAlt className="text-lg" />
                            <span>Protected</span>
                        </div>
                        <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full backdrop-blur-sm">
                            <FaLock className="text-lg" />
                            <span>Encrypted</span>
                        </div>
                        <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full backdrop-blur-sm">
                            <MdSecurity className="text-lg" />
                            <span>Secure</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-6xl mx-auto px-4 py-12">
                <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
                    <div className="p-8 md:p-12">
                        <div className="space-y-8">
                            {privacyTermData.map((term, termIndex) => (
                                <div key={term._id} className="group">
                                    <div className="flex items-start gap-4 mb-6">
                                        <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-[#FE5F62] to-[#FF7B7D] rounded-full flex items-center justify-center text-white font-bold text-sm">
                                            {termIndex + 1}
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-[#FE5F62] transition-colors duration-300">
                                                {term.title}
                                            </h3>
                                        </div>
                                    </div>

                                    <div className="ml-12 space-y-6">
                                        {term.sections?.map((sec, i) => (
                                            <div key={i} className="bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors duration-200">
                                                {sec.subtitle && (
                                                    <h4 className="text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2">
                                                        <FaUserShield className="text-[#FE5F62]" />
                                                        {sec.subtitle}
                                                    </h4>
                                                )}
                                                {sec.paragraph && (
                                                    <p className="text-gray-700 leading-relaxed mb-4 text-base">
                                                        {sec.paragraph}
                                                    </p>
                                                )}
                                                {sec.bullets && (
                                                    <ul className="space-y-2 text-gray-700">
                                                        {sec.bullets
                                                            .replace(/\/{2,}/g, '//')
                                                            .split('//')
                                                            .map((b, j) => b.trim())
                                                            .filter(Boolean)
                                                            .map((b, j) => (
                                                                <li key={j} className="flex items-start gap-3 group/item hover:text-gray-900 transition-colors">
                                                                    <div className="w-2 h-2 bg-[#FE5F62] rounded-full mt-2 flex-shrink-0 group-hover/item:scale-125 transition-transform"></div>
                                                                    <span className="leading-relaxed">{b}</span>
                                                                </li>
                                                            ))
                                                        }
                                                    </ul>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Decorative Divider */}
                    <div className="flex items-center justify-center py-8">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-[#FE5F62]"></div>
                            <div className="p-3 bg-gradient-to-r from-[#FE5F62] to-[#FF7B7D] rounded-full">
                                <FaPaw className="text-white text-2xl" />
                            </div>
                            <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-[#FE5F62]"></div>
                        </div>
                    </div>

                    <div className="text-center pt-6 border-t border-gray-200">
                        <h3 className="text-xl font-medium text-[#3F3D56] mb-4">Questions or Concerns?</h3>
                        <p className="text-gray-700 mb-4">
                            If you have any questions about these Terms & Conditions, please contact us:
                        </p>
                        <div className="bg-red-100/50 p-4 rounded-lg inline-flex flex-col sm:flex-row gap-4 sm:gap-10">
                            <div>
                                <div className="font-medium text-[#FE5F62]">Email</div>
                                <div>sniffi@gmail.com</div>
                            </div>
                            <div>
                                <div className="font-medium text-[#FE5F62]">Phone</div>
                                <div>+91-9175129919</div>
                            </div>
                            <div>
                                <div className="font-medium text-[#FE5F62]">Address</div>
                                <div>Office no. 320, 10 Biz Park, Viman Nagar, Pune 411014</div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-8 text-center">
                        <button className="px-6 py-3 bg-[#FE5F62] text-white rounded-md hover:bg-[#e45457] transition-colors">
                            I Agree to Terms & Conditions
                        </button>
                    </div>
                </div>
            </div>

            {/* Newsletter Section */}
            <div className="bg-gradient-to-r from-[#FE5F62] to-[#FF7B7D] py-16">
                <div className="max-w-6xl mx-auto px-4 text-center text-white">
                    <div className="flex justify-center mb-6">
                        <div className="p-4 bg-white/20 rounded-full backdrop-blur-sm">
                            <MdSecurity className="text-4xl" />
                        </div>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
                        Stay Updated with Policy Changes
                    </h2>
                    <p className="text-xl text-white/90 max-w-3xl mx-auto mb-10 leading-relaxed">
                        Subscribe to receive notifications about updates to our Terms and Conditions, Privacy Policy, and other important documents. We'll keep you informed without overwhelming your inbox.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
                        <input
                            type="email"
                            placeholder="Enter your email address"
                            className="w-full px-6 py-4 rounded-xl border-0 focus:outline-none focus:ring-4 focus:ring-white/30 text-gray-900 placeholder-gray-500 text-lg"
                        />
                        <button className="w-full sm:w-auto px-8 py-4 bg-white text-[#FE5F62] rounded-xl font-bold hover:bg-gray-100 hover:scale-105 transition-all duration-300 whitespace-nowrap">
                            Subscribe Now
                        </button>
                    </div>
                    <p className="text-sm text-white/70 mt-4">
                        We respect your privacy. Unsubscribe at any time.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default PrivacyTerm