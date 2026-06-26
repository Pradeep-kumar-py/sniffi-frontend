import React from 'react';
import { Link } from 'react-router-dom';
import { MdLocationOn } from 'react-icons/md';

const ServiceAreas = () => {
  return (
    <section className="bg-[#FFF5F5] py-16 lg:py-24 border-t border-[#FFE5E6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block bg-[#FE5F62]/10 text-[#FE5F62] px-4 py-1.5 rounded-full text-sm font-extrabold mb-4 uppercase tracking-wider">
            Our Service Areas
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#3F3D56] mb-4">
            We Serve Your Neighborhood
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Sniffi brings professional veterinary care and vaccinations directly to pet parents across Pune and PCMC.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {serviceAreas.map((area, index) => (
            <div
              key={index}
              className="bg-white p-5 rounded-xl border border-gray-100 hover:border-[#FE5F62]/30 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 transform"
            >
              <div className="flex items-center gap-2 mb-3">
                <MdLocationOn className="text-[#FE5F62] text-xl flex-shrink-0" />
                <h3 className="font-bold text-[#3F3D56] text-base truncate">
                  {area.name}
                </h3>
              </div>
              <div className="flex items-center gap-3 text-xs font-bold border-t border-gray-50 pt-3">
                <Link
                  to={`/vet-home-visit-${area.slug}`}
                  className="text-[#FE5F62] hover:text-[#E54E51] hover:underline"
                >
                  Vet Home Visit
                </Link>
                <span className="text-gray-300">|</span>
                <Link
                  to={`/pet-vaccination-at-home-${area.slug}`}
                  className="text-[#3F3D56] hover:text-[#FE5F62] hover:underline"
                >
                  Pet Vaccination
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const serviceAreas = [
  { name: "Viman Nagar", slug: "viman-nagar" },
  { name: "Kharadi", slug: "kharadi" },
  { name: "Kalyani Nagar", slug: "kalyani-nagar" },
  { name: "Kondhwa", slug: "kondhwa" },
  { name: "NIBM", slug: "nibm" },
  { name: "Lohegaon", slug: "lohegaon" },
  { name: "Dhanori", slug: "dhanori" },
  { name: "Pride World City", slug: "pride-world-city" },
  { name: "Magarpatta City", slug: "magarpatta-city" },
  { name: "Koregaon Park", slug: "koregaon-park" },
  { name: "Wakad", slug: "wakad" },
  { name: "Hinjewadi", slug: "hinjewadi" },
  { name: "Hinjewadi Phase 1", slug: "hinjewadi-phase-1" },
  { name: "Hinjewadi Phase 2", slug: "hinjewadi-phase-2" },
  { name: "Hinjewadi Phase 3", slug: "hinjewadi-phase-3" },
  { name: "Baner", slug: "baner" },
  { name: "Balewadi", slug: "balewadi" },
  { name: "Aundh", slug: "aundh" },
  { name: "Pimpri Chinchwad", slug: "pimpri-chinchwad" },
  { name: "Sangvi", slug: "sangvi" },
  { name: "Tathawade", slug: "tathawade" },
  { name: "Lodha Belmondo", slug: "lodha-belmondo" },
];

export default ServiceAreas;
