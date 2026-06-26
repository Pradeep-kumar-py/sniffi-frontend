import React, { useState, useEffect } from 'react';
import { FaCheck, FaPhone, FaCalendarAlt, FaChevronDown, FaChevronUp, FaWhatsapp } from 'react-icons/fa';
import { MdPets, MdLocationOn, MdArrowForward, MdVaccines, MdShield } from 'react-icons/md';
import { Link } from 'react-router-dom';
import Footer from '../Footer';

const PetVaccinationLayout = ({ area, slug, region, nearby, introIndex }) => {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const formattedNearby = nearby.join(', ');

  const vaccIntros = [
    `Get your pet protected at home with pet vaccination in ${area}, Pune. Sniffi vaccinates dogs, puppies, cats and kittens at your doorstep — vaccinations start at just ₹699.`,
    `Keep your dog or cat safe with home vaccination in ${area}. Sniffi's vet administers all core shots for puppies, dogs, kittens and cats at home — starting from just ₹699.`,
    `Vaccinate your pet without the clinic stress. Sniffi offers dog, puppy, cat & kitten vaccination at home in ${area}, Pune, starting at only ₹699.`
  ];

  const introText = vaccIntros[introIndex % 3];

  useEffect(() => {
    // 1. Set Page Title (under 60 chars)
    document.title = `Pet Vaccination at Home ${area} | ₹699 — Sniffi`;

    // 2. Set Meta Description (under 160 chars)
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.name = 'description';
      document.head.appendChild(metaDesc);
    }
    metaDesc.content = `Dog, puppy, cat & kitten vaccination at home in ${area}, Pune. 7in1, 9in1, PuppyDP, Tricat & anti-rabies. Starting ₹699. Book home vaccination now.`;

    // 3. Inject JSON-LD Schema
    const schemaId = `jsonld-vaccination-${slug}`;
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
          "@type": "Offer",
          "name": `Pet Vaccination at Home in ${area}`,
          "priceCurrency": "INR",
          "price": "699",
          "priceSpecification": {
            "@type": "PriceSpecification",
            "priceCurrency": "INR",
            "minPrice": "699"
          },
          "availability": "https://schema.org/InStock",
          "url": "https://www.sniffi.in/"
        },
        {
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": `How much does pet vaccination cost in ${area}?`,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Vaccination at home with Sniffi starts at just ₹699. The exact cost depends on the vaccine and your pet's schedule."
              }
            },
            {
              "@type": "Question",
              "name": "Which vaccines do dogs and puppies need?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Puppies and dogs need PuppyDP, 7in1 and 9in1 core vaccines plus the mandatory anti-rabies vaccine, followed by yearly boosters."
              }
            },
            {
              "@type": "Question",
              "name": "Which vaccines do cats and kittens need?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Cats and kittens need the Tricat (CRP) vaccine plus the anti-rabies vaccine, followed by yearly boosters."
              }
            },
            {
              "@type": "Question",
              "name": `Do you give vaccinations at home in ${area}?`,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": `Yes. Sniffi's vet administers all pet vaccinations at home across ${area} and nearby areas like ${formattedNearby}.`
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

  const dogVaccines = [
    { name: "PuppyDP", desc: "First puppy shot to protect against Distemper and Parvovirus, from ~6 weeks." },
    { name: "7in1 Vaccine", desc: "Core vaccine covering Distemper, Parvovirus, Hepatitis, Leptospirosis & more." },
    { name: "9in1 Vaccine", desc: "Complete immunization booster protection for adult dogs." },
    { name: "Anti-Rabies (ARV)", desc: "Essential and legally mandatory vaccine protecting against the Rabies virus." }
  ];

  const catVaccines = [
    { name: "Tricat (CRP)", desc: "Protects cats and kittens from Feline Panleukopenia, Rhinotracheitis, and Calicivirus." },
    { name: "Anti-Rabies (ARV)", desc: "Essential protector against Rabies, crucial for feline companions as well." }
  ];

  const guidelines = [
    "Keep your pet indoors and away from unvaccinated animals until their vaccination series is fully complete.",
    "Mild side effects like minor lethargy, low appetite, or soreness at the injection site are normal and resolve in 24-48 hours.",
    "Annual booster shots are essential to maintain ongoing protective immunity for your dogs and cats.",
    "Discuss your pet's lifestyle with our home vet to see if any other non-core vaccines are recommended."
  ];

  const faqs = [
    {
      q: `How much does pet vaccination cost in ${area}?`,
      a: "Vaccination at home with Sniffi starts at just ₹699. The exact cost depends on the specific vaccines your pet requires and their current vaccination schedule."
    },
    {
      q: "Which vaccines do dogs & puppies need?",
      a: "Puppies and dogs require the PuppyDP vaccine, followed by 7in1 or 9in1 core vaccines and the mandatory anti-rabies vaccine. They also need annual boosters."
    },
    {
      q: "Which vaccines do cats & kittens need?",
      a: "Cats and kittens need the Tricat (CRP) vaccine and the anti-rabies vaccine, followed by annual boosters to maintain their immunity."
    },
    {
      q: `Do you give vaccinations at home in ${area}?`,
      a: `Yes. Sniffi's veterinarians administer all pet vaccinations at home across ${area} and nearby areas like ${formattedNearby}.`
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#FFF5F5] to-[#FFE5E6] pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden">
        {/* Backdrop bubbles */}
        <div className="absolute top-10 right-10 w-72 h-72 bg-[#FE5F62]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#3F3D56]/5 rounded-full blur-3xl" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumbs */}
          <nav className="flex mb-6 text-sm text-gray-500 font-medium">
            <Link to="/" className="hover:text-[#FE5F62] transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <Link to="/services" className="hover:text-[#FE5F62] transition-colors">Services</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-700">Pet Vaccination ({area})</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              {/* Promo badge */}
              <span className="inline-block bg-[#FE5F62]/10 text-[#FE5F62] px-4 py-1.5 rounded-full text-sm font-extrabold mb-4 uppercase tracking-wider">
                Starting at ₹699 Only
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#3F3D56] leading-tight tracking-tight mb-6">
                Pet Vaccination at Home in <span className="text-[#FE5F62]">{area}</span>
              </h1>
              <p className="text-lg sm:text-xl text-[#3F3D56]/85 font-medium leading-relaxed mb-8">
                {introText}
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/book-appointment"
                  className="inline-flex items-center justify-center gap-2 bg-[#FE5F62] hover:bg-[#E54E51] text-white px-8 py-4 rounded-full text-lg font-bold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300"
                >
                  <MdVaccines className="text-xl" />
                  Book Vaccination
                </Link>
                <a
                  href="https://wa.me/919175129919"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-white border-2 border-gray-200 hover:border-[#25D366] text-[#3F3D56] hover:text-[#25D366] px-8 py-4 rounded-full text-lg font-bold shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <FaWhatsapp className="text-xl" />
                  WhatsApp Book
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 flex justify-center">
              <div className="relative">
                <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full bg-gradient-to-br from-[#FE5F62]/20 to-[#3F3D56]/20 flex items-center justify-center shadow-2xl animate-gentle-bounce">
                  <MdVaccines className="text-[#FE5F62] text-8xl opacity-80" />
                </div>
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-[#FE5F62] rounded-full flex items-center justify-center shadow-lg animate-pulse">
                  <MdShield className="text-white text-2xl" />
                </div>
                <div className="absolute -bottom-4 -left-4 bg-[#3F3D56] text-white px-4 py-2 rounded-lg shadow-md flex items-center gap-2">
                  <span className="text-sm font-semibold">Home Vaccination Pune</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vaccine Options */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#3F3D56] mb-4">
              Our At-Home Vaccination Offerings
            </h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              Certified, temperature-controlled vaccines administered safely by professional vets.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Dog section */}
            <div className="bg-gradient-to-b from-gray-50 to-white p-8 rounded-2xl border border-gray-100 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-4xl">🐶</span>
                <h3 className="text-2xl font-bold text-[#3F3D56]">Dog & Puppy Vaccination</h3>
              </div>
              <p className="text-sm text-gray-500 mb-6 italic">
                Typical Puppy Schedule: PuppyDP (6w) → 7in1 (9w) → 9in1 (12w) → Rabies (16w) → Annual Boosters.
              </p>
              <div className="space-y-4">
                {dogVaccines.map((v, idx) => (
                  <div key={idx} className="border-l-4 border-[#FE5F62] pl-4 py-1">
                    <h4 className="font-bold text-[#3F3D56] text-lg">{v.name}</h4>
                    <p className="text-gray-600 text-sm">{v.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Cat section */}
            <div className="bg-gradient-to-b from-gray-50 to-white p-8 rounded-2xl border border-gray-100 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-4xl">🐱</span>
                <h3 className="text-2xl font-bold text-[#3F3D56]">Cat & Kitten Vaccination</h3>
              </div>
              <p className="text-sm text-gray-500 mb-6 italic">
                Typical Kitten Schedule: Tricat CRP (8w) → Booster (12w) → Rabies (16w) → Annual Boosters.
              </p>
              <div className="space-y-4">
                {catVaccines.map((v, idx) => (
                  <div key={idx} className="border-l-4 border-[#3F3D56] pl-4 py-1">
                    <h4 className="font-bold text-[#3F3D56] text-lg">{v.name}</h4>
                    <p className="text-gray-600 text-sm">{v.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Guidelines Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-blue-50/50 border-l-4 border-[#FE5F62] p-8 rounded-r-2xl shadow-sm">
            <h3 className="text-xl font-bold text-[#3F3D56] mb-6 flex items-center gap-2">
              <MdShield className="text-[#FE5F62] text-2xl" />
              Important Vaccination Guidelines
            </h3>
            <ul className="space-y-4 text-gray-700 font-medium">
              {guidelines.map((g, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <FaCheck className="text-[#FE5F62] mt-1 flex-shrink-0" />
                  <span>{g}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Cross-Link Banner */}
      <section className="py-8 bg-gradient-to-r from-[#3F3D56] to-[#5a5774] text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-4 text-center md:text-left">
            <span className="text-3xl">🩺</span>
            <div>
              <h4 className="text-xl font-bold">Need a vet consultation first?</h4>
              <p className="text-white/90">Our certified veterinarian will examine your pet and suggest the correct vaccinations.</p>
            </div>
          </div>
          <Link
            to={`/vet-home-visit-${slug}`}
            className="flex items-center gap-2 bg-[#FE5F62] hover:bg-[#E54E51] text-white font-bold px-6 py-3 rounded-full shadow-md transition-all duration-300 flex-shrink-0"
          >
            Vet Consultation at Home in {area}
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
            <p className="text-gray-500">Bringing mobile vaccination services to pet parents across PCMC & Pune.</p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
            {nearby.map((nb, index) => (
              <Link
                key={index}
                to={`/pet-vaccination-at-home-${nb.toLowerCase().replace(/\s+/g, '-')}`}
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

      {/* Bottom CTA */}
      <section className="bg-[#3F3D56] py-16 lg:py-20 text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Keep Your Pets Protected and Healthy
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Book pet vaccination at home in {area} starting at ₹699. Temperature-controlled vaccines, clinical hygiene, zero stress.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/book-appointment"
              className="inline-flex items-center gap-2 bg-[#FE5F62] hover:bg-[#E54E51] text-white px-8 py-4 rounded-full text-lg font-bold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300"
            >
              <MdVaccines />
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

export default PetVaccinationLayout;
