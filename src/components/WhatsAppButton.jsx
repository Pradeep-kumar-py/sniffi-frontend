import { SiWhatsapp } from "react-icons/si";

const PHONE = "919175129919";
const MESSAGE = "Hi Sniffi, I'd like to book a home vet visit";

export default function WhatsAppButton() {
  return (
    <a
      href={`https://wa.me/${PHONE}?text=${encodeURIComponent(MESSAGE)}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Sniffi on WhatsApp"
      className="group fixed bottom-6 right-6 z-50 select-none"
    >
      {/* Dual Layer Pulse/Ripple Effect (Slower & Smoother) */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-pulse-ripple" />
      <span 
        className="absolute inset-0 rounded-full bg-[#25D366] animate-pulse-ripple" 
        style={{ animationDelay: "1.25s" }}
      />

      {/* Button Container */}
      <div className="relative flex items-center rounded-full bg-[#25D366] p-3 text-white shadow-[0_4px_14px_rgba(37,211,102,0.4)] transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] hover:scale-[1.06] hover:shadow-[0_6px_20px_rgba(37,211,102,0.6)] hover:bg-[#20bd5a] active:scale-95 group-hover:px-4">
        
        {/* WhatsApp Icon */}
        <SiWhatsapp className="text-2xl transition-transform duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:rotate-[15deg] group-hover:scale-110" />

        {/* Text with combined slide, fade, width, and margin expand */}
        <span className="max-w-0 opacity-0 translate-x-2 overflow-hidden whitespace-nowrap text-sm font-semibold transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:max-w-[150px] group-hover:opacity-100 group-hover:translate-x-0 group-hover:ml-2">
          Chat with us
        </span>
      </div>
    </a>
  );
}