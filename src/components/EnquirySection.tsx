import { useState, FormEvent } from 'react';
import { MessageSquare, Phone, MapPin, Clock, CheckCircle2, ShieldCheck, Send } from 'lucide-react';
import { COMPANY_CONTACT, PRODUCTS } from '../data/products';

interface EnquirySectionProps {
  initialProduct?: string;
}

export function EnquirySection({ initialProduct }: EnquirySectionProps) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [selectedProduct, setSelectedProduct] = useState(
    initialProduct || PRODUCTS[0].name
  );
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) return;

    // Direct WhatsApp prefilled message
    const msg = `Hi Andal Food Machineries,\nMy Name: ${name.trim()}\nPhone: ${phone.trim()}\nI'd like a price quote and delivery timeline for: ${selectedProduct}.`;
    const waUrl = `https://wa.me/${COMPANY_CONTACT.whatsappNumber}?text=${encodeURIComponent(msg)}`;

    setSubmitted(true);
    // Open WhatsApp in new window
    window.open(waUrl, '_blank', 'noopener,noreferrer');
  };

  const getDirectWhatsAppUrl = (productName: string) => {
    return `https://wa.me/${COMPANY_CONTACT.whatsappNumber}?text=${encodeURIComponent(
      `Hi, I'd like a quote for ${productName}`
    )}`;
  };

  return (
    <section id="contact" className="py-14 bg-[#F8F8F7] border-b border-[#DCDAD4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Heading */}
        <div className="border-b border-[#D8D5CD] pb-4 mb-8">
          <div className="text-xs font-mono uppercase tracking-widest text-[#8B1E1E] font-bold">
            DIRECT FACTORY QUOTE &amp; FACTORY VISIT
          </div>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-[#17191C] uppercase tracking-tight mt-1">
            Get Pricing &amp; Technical Specifications
          </h2>
          <p className="text-xs text-[#525866] mt-1 max-w-2xl">
            For hotel, hostel, and canteen requirements. Contact our Peelamedu sales desk directly for immediate quotations, motor specifications, and freight estimates.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Fast Contact & 3-Field Fallback Form */}
          <div className="lg:col-span-6 space-y-6">
            {/* Primary Action Box: WhatsApp First */}
            <div className="bg-[#1E2125] text-white p-6 border border-[#343840]">
              <div className="flex items-center justify-between gap-2 border-b border-[#32363D] pb-3 mb-4">
                <div className="font-mono text-xs text-[#9EA4AF] uppercase tracking-wider">
                  PRIMARY TRADE CHANNEL
                </div>
                <span className="text-[11px] font-mono text-[#4ADE80] font-semibold">
                  FASTEST RESPONSE (15 MINS)
                </span>
              </div>

              <h3 className="font-heading font-bold text-2xl uppercase tracking-tight">
                Instant Quote on WhatsApp
              </h3>
              <p className="text-xs text-[#B0B6C0] mt-1.5 leading-relaxed">
                Connect directly with our works manager. Receive complete PDF catalogs, dimensions, electrical load requirements, and ex-factory prices.
              </p>

              <div className="mt-5">
                <a
                  href={getDirectWhatsAppUrl(selectedProduct)}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="enquiry-whatsapp-primary"
                  className="w-full inline-flex items-center justify-center gap-2.5 py-3.5 px-6 bg-[#8B1E1E] hover:bg-[#A32323] text-white font-bold text-sm uppercase tracking-wider transition-colors border border-[#A62626]"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Chat on WhatsApp: +91 98422 10852</span>
                </a>
              </div>
            </div>

            {/* Secondary Option: 3-Field Quick Enquiry Form */}
            <div className="bg-white border border-[#D5D8DE] p-6 shadow-xs">
              <div className="border-b border-[#E5E7EB] pb-3 mb-4">
                <div className="text-xs font-mono text-[#8B1E1E] uppercase font-bold tracking-wider">
                  FALLBACK ENQUIRY DESK
                </div>
                <h4 className="font-heading font-bold text-xl uppercase tracking-tight text-[#181A1D] mt-0.5">
                  Request Call Back / Price Sheet
                </h4>
                <p className="text-xs text-[#6B7280] mt-1">
                  Fill in your details and we will call you back within working hours.
                </p>
              </div>

              {submitted ? (
                <div className="bg-[#F0FDF4] border border-[#86EFAC] p-4 text-[#166534] space-y-2">
                  <div className="flex items-center gap-2 font-bold text-sm">
                    <CheckCircle2 className="w-4 h-4" />
                    Enquiry Details Ready
                  </div>
                  <p className="text-xs text-[#15803D] leading-relaxed">
                    We have launched WhatsApp with your pre-filled inquiry for {selectedProduct}. Our Peelamedu team will respond shortly.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="mt-2 text-xs font-semibold underline text-[#166534]"
                  >
                    Submit another machine inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Field 1: Name */}
                  <div>
                    <label htmlFor="enquiry-name" className="block text-xs font-mono text-[#4B5563] uppercase tracking-wider mb-1">
                      Your Name / Firm Name <span className="text-[#DC2626]">*</span>
                    </label>
                    <input
                      type="text"
                      id="enquiry-name"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Senthil Kumar (Sri Krishna Mess)"
                      className="w-full px-3 py-2.5 text-sm bg-[#F9FAFB] border border-[#D1D5DB] focus:bg-white focus:border-[#8B1E1E] focus:outline-none transition-colors"
                    />
                  </div>

                  {/* Field 2: Phone */}
                  <div>
                    <label htmlFor="enquiry-phone" className="block text-xs font-mono text-[#4B5563] uppercase tracking-wider mb-1">
                      Phone Number (Mobile / WhatsApp) <span className="text-[#DC2626]">*</span>
                    </label>
                    <input
                      type="tel"
                      id="enquiry-phone"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="e.g. 98422 12345"
                      className="w-full px-3 py-2.5 text-sm bg-[#F9FAFB] border border-[#D1D5DB] focus:bg-white focus:border-[#8B1E1E] focus:outline-none transition-colors"
                    />
                  </div>

                  {/* Field 3: Product Interested In */}
                  <div>
                    <label htmlFor="enquiry-product" className="block text-xs font-mono text-[#4B5563] uppercase tracking-wider mb-1">
                      Machine Interested In <span className="text-[#DC2626]">*</span>
                    </label>
                    <select
                      id="enquiry-product"
                      value={selectedProduct}
                      onChange={(e) => setSelectedProduct(e.target.value)}
                      className="w-full px-3 py-2.5 text-sm bg-[#F9FAFB] border border-[#D1D5DB] focus:bg-white focus:border-[#8B1E1E] focus:outline-none transition-colors"
                    >
                      {PRODUCTS.map((p) => (
                        <option key={p.id} value={p.name}>
                          {p.name} ({p.capacitySummary})
                        </option>
                      ))}
                      <option value="Custom Kitchen Machinery Project">
                        Custom Kitchen Machinery / Turnkey Mess Setup
                      </option>
                    </select>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    id="enquiry-submit-btn"
                    className="w-full py-3 px-4 bg-[#1E2125] hover:bg-[#2C3138] text-white text-xs font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-2"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Submit &amp; Open Quote Request</span>
                  </button>
                </form>
              )}

              {/* Click to Call Alternative */}
              <div className="mt-4 pt-4 border-t border-[#E5E7EB] flex items-center justify-between text-xs text-[#4B5563]">
                <span>Prefer direct phone call?</span>
                <a
                  href={`tel:${COMPANY_CONTACT.phoneClean}`}
                  className="font-bold text-[#1E2125] hover:text-[#8B1E1E] flex items-center gap-1 font-mono"
                >
                  <Phone className="w-3.5 h-3.5" />
                  {COMPANY_CONTACT.phone}
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Factory Location & Embedded Map */}
          <div className="lg:col-span-6 space-y-6">
            <div className="bg-white border border-[#D5D8DE] p-6 shadow-xs">
              <div className="border-b border-[#E5E7EB] pb-3 mb-4 flex items-center justify-between">
                <div>
                  <div className="text-xs font-mono text-[#8B1E1E] uppercase font-bold tracking-wider">
                    MANUFACTURING UNIT
                  </div>
                  <h3 className="font-heading font-bold text-2xl uppercase tracking-tight text-[#181A1D] mt-0.5">
                    Peelamedu, Coimbatore
                  </h3>
                </div>
                <span className="text-[11px] font-mono bg-[#F3F4F6] text-[#4B5563] px-2 py-1 border border-[#E5E7EB]">
                  TAMIL NADU 641004
                </span>
              </div>

              {/* Address details */}
              <div className="space-y-3 text-xs text-[#374151]">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-[#8B1E1E] flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-[#111827] block">Factory Address:</span>
                    <span>{COMPANY_CONTACT.address}</span>
                    <span className="text-[#6B7280] block mt-0.5 font-mono">
                      Landmark: {COMPANY_CONTACT.landmark}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 pt-2 border-t border-[#F3F4F6]">
                  <Clock className="w-4 h-4 text-[#8B1E1E] flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-[#111827] block">Working Hours:</span>
                    <span>{COMPANY_CONTACT.workingHours}</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 pt-2 border-t border-[#F3F4F6]">
                  <ShieldCheck className="w-4 h-4 text-[#8B1E1E] flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-[#111827] block">Commercial Registration:</span>
                    <span className="font-mono">GSTIN: {COMPANY_CONTACT.gstin} · Established: {COMPANY_CONTACT.establishedYear}</span>
                  </div>
                </div>
              </div>

              {/* Map Embed of Peelamedu Location */}
              <div className="mt-5 border border-[#D5D8DE] overflow-hidden">
                <div className="bg-[#1F2328] text-[#9EA4AF] text-[11px] font-mono px-3 py-1.5 border-b border-[#343840] flex items-center justify-between">
                  <span>GOOGLE MAPS · PEELAMEDU, COIMBATORE</span>
                  <a
                    href="https://maps.google.com/?q=Peelamedu+Coimbatore+Tamil+Nadu"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:underline text-[10px]"
                  >
                    Open in Maps
                  </a>
                </div>
                <iframe
                  title="Andal Food Machineries Peelamedu Location Map"
                  src={COMPANY_CONTACT.mapEmbedUrl}
                  width="100%"
                  height="260"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  className="w-full bg-[#E5E7EB]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
