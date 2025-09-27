import React from 'react'
import { FaPaw, FaFileContract, FaShieldAlt } from 'react-icons/fa';
import {terms} from '../util/termsData'
const TermsAndConditionPage = () => {
    
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
            {/* Header Section */}
            <div className="bg-gradient-to-r from-[#3F3D56] to-[#2D2B42] text-white py-16">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="flex items-center justify-center mb-6">
                        <FaFileContract className="text-5xl text-[#FE5F62] mr-4" />
                        <div>
                            <h1 className="text-4xl md:text-5xl font-bold mb-2">Terms of Service</h1>
                            <p className="text-xl text-gray-200">Last updated: September 26, 2025</p>
                        </div>
                    </div>
                    <div className="flex items-center justify-center space-x-8 mt-8">
                        <div className="flex items-center text-gray-200">
                            <FaShieldAlt className="text-[#FE5F62] mr-2" />
                            <span>Legally Binding</span>
                        </div>
                        <div className="flex items-center text-gray-200">
                            <FaPaw className="text-[#FE5F62] mr-2" />
                            <span>Pet Care Excellence</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-5xl mx-auto px-4 py-12">
                <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
                    {/* Table of Contents */}
                    <div className="bg-gradient-to-r from-gray-50 to-white p-8 border-b border-gray-200">
                        <h3 className="text-2xl font-semibold text-[#3F3D56] mb-4 flex items-center">
                            <span className="w-2 h-8 bg-[#FE5F62] rounded-full mr-3"></span>
                            Table of Contents
                        </h3>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-2 text-sm">
                            {terms.map((term, index) => (
                                <a
                                    key={term._id}
                                    href={`#section-${term._id}`}
                                    className="text-[#3F3D56] hover:text-[#FE5F62] transition-colors duration-200 py-1 px-3 rounded-md hover:bg-red-50"
                                >
                                    {term.title}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Content */}
                    <div className="p-8">
                        <div className="prose prose-lg max-w-none">
                            {terms.map((term, termIndex) => (
                                <div key={term._id} id={`section-${term._id}`} className="mb-12 last:mb-8">
                                    <div className="flex items-start mb-6">
                                        <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#FE5F62] to-[#e45457] rounded-xl flex items-center justify-center text-white font-bold text-lg mr-4 shadow-lg">
                                            {termIndex + 1}
                                        </div>
                                        <h2 className="text-2xl font-bold text-[#3F3D56] leading-tight mt-2">
                                            {term.title}
                                        </h2>
                                    </div>

                                    <div className="ml-16 space-y-6">
                                        {term.sections?.map((sec, i) => (
                                            <div key={i} className="bg-gray-50 rounded-lg p-6 border-l-4 border-[#FE5F62]">
                                                {sec.subtitle && (
                                                    <h3 className="text-xl font-semibold text-[#3F3D56] mb-3 flex items-center">
                                                        <span className="w-2 h-6 bg-[#FE5F62] rounded-full mr-3"></span>
                                                        {sec.subtitle}
                                                    </h3>
                                                )}
                                                {sec.paragraph && (
                                                    <p className="text-gray-700 leading-relaxed text-base mb-4 whitespace-pre-line">
                                                        {sec.paragraph}
                                                    </p>
                                                )}
                                                {sec.bullets && (
                                                    <ul className="space-y-2 ml-4">
                                                        {sec.bullets
                                                            .replace(/\/{2,}/g, '//')
                                                            .split('//')
                                                            .map((b, j) => b.trim())
                                                            .filter(Boolean)
                                                            .map((b, j) => (
                                                                <li key={j} className="flex items-start">
                                                                    <span className="w-2 h-2 bg-[#FE5F62] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                                                    <span className="text-gray-700">{b}</span>
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

                    <div className="flex items-center justify-center mt-8 mb-4">
                        <FaPaw className="text-red-200 text-4xl" />
                    </div>

                    <div className="text-center  pt-6 border-t border-gray-200">
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

                    <div className="my-8 text-center">
                        <button className="px-6 py-3 bg-[#FE5F62] text-white rounded-md hover:bg-[#e45457] transition-colors">
                            I Agree to Terms & Conditions
                        </button>
                    </div>
                </div>
            </div>

            {/* Newsletter Section */}
            <div className="bg-gradient-to-r from-[#FE5F62] to-[#e45457] py-16 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                        <h2 className="text-4xl font-bold mb-4 text-white">
                            Stay Updated with <span className="text-yellow-200">Policy Changes</span>
                        </h2>
                        <p className="text-white/90 text-lg max-w-3xl mx-auto mb-8 leading-relaxed">
                            Subscribe to receive notifications about updates to our Terms and Conditions, Privacy Policy, and other important documents.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-md mx-auto">
                            <input
                                type="email"
                                placeholder="Enter your email address"
                                className="px-6 py-4 rounded-xl border-0 focus:outline-none focus:ring-4 focus:ring-white/30 flex-1 text-gray-800 placeholder-gray-500 shadow-lg"
                            />
                            <button className="px-8 py-4 bg-white text-[#FE5F62] rounded-xl hover:bg-gray-100 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TermsAndConditionPage