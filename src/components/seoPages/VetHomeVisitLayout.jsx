import React, { useState, useEffect } from 'react';
import { FaCheck, FaPhone, FaCalendarAlt, FaChevronDown, FaChevronUp, FaWhatsapp } from 'react-icons/fa';
import { MdPets, MdLocationOn, MdArrowForward } from 'react-icons/md';
import { Link } from 'react-router-dom';
import Footer from '../Footer';

const VetHomeVisitLayout = ({ area, slug, region, nearby, introIndex }) => {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const formattedNearby = nearby.join(', ');

  const consultIntros = [
    `Looking for a vet home visit in ${area}, Pune? Sniffi brings experienced veterinarians to your doorstep, so your dog or cat gets expert care without a single stressful car ride.`,
    `Skip the clinic queues. With Sniffi's home vet visit in ${area}, a qualified vet examines your pet at home — calm, convenient and completely stress-free for dogs and cats.`,
    `Your pet deserves great care without the carrier drama. Sniffi offers trusted vet at home in ${area}, Pune — our vet comes to you for check-ups, diagnosis and treatment.`
  ];

  const introText = consultIntros[introIndex % 3];

  useEffect(() => {
    // 1. Set Page Title (under 60 chars)
    document.title = `Vet Home Visit in ${area} | Vet at Home — Sniffi`;

    // 2. Set Meta Description (under 160 chars)
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.name = 'description';
      document.head.appendChild(metaDesc);
    }
    metaDesc.content = `Book a home vet visit in ${area}, Pune. Experienced vets visit your home for check-ups, diagnosis & treatment of dogs & cats. Stress-free. Book now.`;

    // 3. Inject JSON-LD Schema
    const schemaId = `jsonld-vet-visit-${slug}`;
    let script = document.getElementById(schemaId);
    if (!script) {
      script = document.createElement('script');
      script.id = schemaId;
      script.type = 'application/ld+json';
      document.head.appendChild(script);
    }

    const schemaData = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "VeterinaryCare",
          "name": `Sniffi — Home Vet Visit, ${area}`,
          "url": "https://www.sniffi.in/",
          "telephone": "+919175129919",
          "image": "https://www.sniffi.in/logo.png",
          "areaServed": `${area}, Pune, Maharashtra (${region})`,
          "address": {
            "@type": "PostalAddress",
            "addressLocality": area,
            "addressRegion": "Maharashtra",
            "addressCountry": "IN"
          }
        },
        {
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": `Do you provide home vet visits in ${area}?`,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": `Yes. Sniffi's veterinarians provide home vet visits across ${area} and nearby areas like ${formattedNearby}.`
              }
            },
            {
              "@type": "Question",
              "name": "Can you treat both dogs and cats at home?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes — our vet examines and treats dogs, cats, puppies and kittens at home, including check-ups, common illnesses and preventive care."
              }
            },
            {
              "@type": "Question",
              "name": "Can blood tests be done at home?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes. Our vet can collect samples at home for blood tests and diagnostics, so your pet doesn't have to travel."
              }
            }
          ]
        }
      ]
    };

    script.text = JSON.stringify(schemaData);

    // Scroll to top on mount
    window.scrollTo(0, 0);

    return () => {
      // Clean up script on unmount
      const existingScript = document.getElementById(schemaId);
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, [area, slug, region, formattedNearby]);

  const includedItems = [
    { title: "Physical Check-up", desc: "Full examination of eyes, ears, teeth, skin, heart & weight." },
    { title: "Diagnosis & Treatment", desc: "For common dog and cat health issues and prescription delivery." },
    { title: "Deworming & Parasite Control", desc: "Complete tick, flea, and deworming solutions." },
    { title: "Sample Collection", desc: "Blood collection & diagnostics done comfortably in your home." },
    { title: "Diet & Wellness Advice", desc: "Tailored nutrition plans and overall pet health guidance." }
  ];

  const whyChooseReasons = [
    { title: "Zero Stress", desc: "No scary carriers, long car rides, or anxious waiting rooms for your pet." },
    { title: "Custom Attention", desc: "Your pet gets the vet's undivided focus in a calm, familiar setting." },
    { title: "Safe Environment", desc: "Avoid exposure to other sick animals or clinic-acquired infections." },
    { title: "Ideal for Seniors & Cats", desc: "Perfect for older pets, multi-pet homes, and cats who hate travel." }
  ];

  const faqs = [
    {
      q: `Do you provide home vet visits in ${area}?`,
      a: `Yes. Sniffi's certified veterinarians provide home vet visits across ${area} and nearby areas including ${formattedNearby}.`
    },
    {
      q: "Can you treat both dogs and cats at home?",
      a: "Yes — our vets examine and treat dogs, cats, puppies, and kittens at home. We cover check-ups, common illnesses, and preventive wellness care."
    },
    {
      q: "Can blood tests be done at home?",
      a: "Yes. Our home-visit vet can safely collect blood, urine, or skin samples at your home for lab diagnostics, eliminating the need to visit a clinic."
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#FFF5F5] to-[#FFE5E6] pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden">
        {/* Dynamic decorative backdrop bubbles */}
        <div className="absolute top-10 right-10 w-72 h-72 bg-[#FE5F62]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#3F3D56]/5 rounded-full blur-3xl" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumbs */}
          <nav className="flex mb-6 text-sm text-gray-500 font-medium">
            <Link to="/" className="hover:text-[#FE5F62] transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <Link to="/services" className="hover:text-[#FE5F62] transition-colors">Services</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-700">Vet Home Visit ({area})</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#3F3D56] leading-tight tracking-tight mb-6">
                Vet Home Visit in <span className="text-[#FE5F62]">{area}</span>, Pune
              </h1>
              <p className="text-lg sm:text-xl text-[#3F3D56]/85 font-medium leading-relaxed mb-8">
                {introText}
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/book-appointment"
                  className="inline-flex items-center justify-center gap-2 bg-[#FE5F62] hover:bg-[#E54E51] text-white px-8 py-4 rounded-full text-lg font-bold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300"
                >
                  <FaCalendarAlt />
                  Book Home Visit
                </Link>
                <a
                  href="https://wa.me/919175129919"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-white border-2 border-gray-200 hover:border-[#25D366] text-[#3F3D56] hover:text-[#25D366] px-8 py-4 rounded-full text-lg font-bold shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <FaWhatsapp className="text-xl" />
                  WhatsApp Us
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 flex justify-center">
              <div className="relative">
                <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full bg-gradient-to-br from-[#FE5F62]/20 to-[#3F3D56]/20 flex items-center justify-center shadow-2xl animate-gentle-bounce">
                  <MdPets className="text-[#FE5F62] text-8xl opacity-80" />
                </div>
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-[#FE5F62] rounded-full flex items-center justify-center shadow-lg">
                  <FaCheck className="text-white text-2xl animate-pulse" />
                </div>
                <div className="absolute -bottom-4 -left-4 bg-white px-4 py-2 rounded-lg shadow-md border border-gray-100 flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-[#25D366] animate-ping" />
                  <span className="text-sm font-semibold text-[#3F3D56]">Available in {region}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#3F3D56] mb-4">
              What's Included in a Home Consultation
            </h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              Professional, clinical vet checkups conducted in the comfort of your living room.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {includedItems.map((item, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl border-2 border-gray-50 hover:border-[#FE5F62] shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-xl bg-[#FFF5F5] flex items-center justify-center text-[#FE5F62] mb-6">
                  <FaCheck className="text-xl" />
                </div>
                <h3 className="text-xl font-bold text-[#3F3D56] mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Home Visits */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#3F3D56] mb-4">
              Why Choose a Home Vet Visit in {area}?
            </h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              Skip the stress of traffic, carriers, and clinic queues.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {whyChooseReasons.map((reason, index) => (
              <div key={index} className="flex gap-4 bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-full bg-[#FE5F62] flex items-center justify-center text-white font-bold">
                    {index + 1}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#3F3D56] mb-2">{reason.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{reason.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cross-Link Callout Banner */}
      <section className="py-8 bg-gradient-to-r from-[#FE5F62] to-[#ff8a8d] text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-4 text-center md:text-left">
            <span className="text-3xl">🐾</span>
            <div>
              <h4 className="text-xl font-bold">Need vaccinations too?</h4>
              <p className="text-white/90">Get professional dog, cat, puppy or kitten vaccinations administered safely at home.</p>
            </div>
          </div>
          <Link
            to={`/pet-vaccination-at-home-${slug}`}
            className="flex items-center gap-2 bg-white text-[#FE5F62] hover:bg-gray-100 font-bold px-6 py-3 rounded-full shadow-md transition-all duration-300 flex-shrink-0"
          >
            Vaccination at Home in {area} (Starting ₹699)
            <MdArrowForward className="text-lg" />
          </Link>
        </div>
      </section>

      {/* Area Coverage Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#3F3D56] mb-4 flex items-center justify-center gap-2">
              <MdLocationOn className="text-[#FE5F62]" />
              We Serve {area} & Nearby Areas
            </h2>
            <p className="text-gray-500">Connecting local veterinary care across your neighborhood.</p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
            {nearby.map((nb, index) => (
              <Link
                key={index}
                to={`/vet-home-visit-${nb.toLowerCase().replace(/\s+/g, '-')}`}
                className="bg-[#FFF5F5] hover:bg-[#FE5F62] text-[#FE5F62] hover:text-white border border-[#FFE5E6] px-5 py-2.5 rounded-full font-semibold transition-all duration-300 text-sm shadow-sm"
              >
                {nb}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-[#3F3D56] mb-12">Frequently Asked Questions</h2>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex justify-between items-center p-6 text-left font-bold text-lg text-[#3F3D56] hover:bg-gray-50/50 transition-colors"
                >
                  <span>{faq.q}</span>
                  {openFaq === index ? <FaChevronUp className="text-[#FE5F62]" /> : <FaChevronDown className="text-gray-400" />}
                </button>
                {openFaq === index && (
                  <div className="p-6 pt-0 border-t border-gray-50 text-gray-600 leading-relaxed">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom Call to Action */}
      <section className="bg-[#3F3D56] py-16 lg:py-20 text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Get Expert Veterinary Care Without Clinic Stress
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Book a veterinarian visit to your home in {area} today. Experience care that comes to you.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/book-appointment"
              className="inline-flex items-center gap-2 bg-[#FE5F62] hover:bg-[#E54E51] text-white px-8 py-4 rounded-full text-lg font-bold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300"
            >
              <FaCalendarAlt />
              Book Appointment Now
            </Link>
            <a
              href="tel:+919175129919"
              className="inline-flex items-center gap-2 bg-transparent hover:bg-white/10 text-white border-2 border-white px-8 py-4 rounded-full text-lg font-bold transition-all duration-300"
            >
              <FaPhone />
              Call +91 9175129919
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default VetHomeVisitLayout;
