import React from 'react'
import { FaPaw } from 'react-icons/fa';
import { privacyTermData } from '../util/privacyTermData';


const PrivacyTerm = () => {
    return (
        <div className="min-h-screen bg-white">
            <div className="max-w-6xl mx-auto px-4 py-8 bg-white">
                <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-100">
                    <h2 className="text-4xl font-semibold text-[#FE5F62]  mb-6">
                        Privacy Terms
                    </h2>

                    <ul className="im-list">
                        {privacyTermData.map(term => (
                            <li key={term._id} className="im-item">
                                <strong className="im-item-label">{term.title}</strong>

                                {term.sections?.map((sec, i) => (
                                    <div key={i} className="im-section">
                                        {sec.subtitle && <p className="im-item-sub">{sec.subtitle}</p>}
                                        {sec.paragraph && <p className="im-item-para">{sec.paragraph}</p>}
                                        {sec.bullets && (
                                            <ul className="im-item-bullets">
                                                {sec.bullets
                                                    .replace(/\/{2,}/g, '//')
                                                    .split('//')
                                                    .map((b, j) => b.trim())
                                                    .filter(Boolean)
                                                    .map((b, j) => <li key={j}>{b}</li>)
                                                }
                                            </ul>
                                        )}
                                    </div>
                                ))}
                            </li>
                        ))}
                    </ul>

                    <div className="flex items-center justify-center mt-8 mb-4">
                        <FaPaw className="text-red-200 text-4xl" />
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

            <div className="bg-red-100/50 py-12 px-4 mt-10">
                <div className="max-w-5xl mx-auto text-center">
                    <h2 className="text-3xl font-semibold mb-4">
                        <span className="text-[#3F3D56]">Stay Updated with </span>
                        <span className="text-[#FE5F62]">Policy Changes</span>
                    </h2>
                    <p className="text-[#3F3D56] text-lg max-w-3xl mx-auto mb-8">
                        Subscribe to receive notifications about updates to our Terms and Conditions, Privacy Policy, and other important documents.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FE5F62] w-full max-w-md"
                        />
                        <button className="px-6 py-3 bg-[#FE5F62] text-white rounded-md hover:bg-[#e45457] transition-colors">
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PrivacyTerm