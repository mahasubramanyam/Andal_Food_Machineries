import { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, MessageSquare, Phone, Send, CheckCircle2 } from 'lucide-react';
import { Product } from '../types';
import { COMPANY_CONTACT } from '../data/products';

interface EnquiryModalProps {
  product: Product | null;
  selectedVariant?: string;
  onClose: () => void;
}

export function EnquiryModal({ product, selectedVariant, onClose }: EnquiryModalProps) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!product) return null;

  const machineLabel = `${product.name}${selectedVariant ? ` (${selectedVariant})` : ''}`;

  const whatsappUrl = `https://wa.me/${COMPANY_CONTACT.whatsappNumber}?text=${encodeURIComponent(
    `Hi Andal Food Machineries, I'd like a price quote and delivery timeline for: ${machineLabel}.${
      city ? ` Delivery location: ${city}.` : ''
    }`
  )}`;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) return;

    setSubmitted(true);
    const text = `Hi Andal Food Machineries,\nName: ${name.trim()}\nPhone: ${phone.trim()}\nLocation: ${city.trim() || 'Tamil Nadu'}\nMachine: ${machineLabel}\nPlease share ex-factory price and dispatch timeline.`;
    window.open(`https://wa.me/${COMPANY_CONTACT.whatsappNumber}?text=${encodeURIComponent(text)}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 bg-black/75 flex items-center justify-center p-4 backdrop-blur-xs">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.2 }}
          className="bg-white border border-[#3A404C] max-w-lg w-full shadow-2xl overflow-hidden"
        >
          {/* Header */}
          <div className="bg-[#1E2125] text-white p-4 flex items-center justify-between">
            <div>
              <span className="text-[10px] font-mono text-[#8B1E1E] uppercase tracking-widest font-bold block">
                ANDAL APPLIANCES · PEELAMEDU
              </span>
              <h3 className="font-heading font-bold text-xl uppercase tracking-tight text-white mt-0.5">
                Machine Specification &amp; Price Quote
              </h3>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="p-1 hover:bg-[#2C3138] text-[#9EA4AF] hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body */}
          <div className="p-6 space-y-4">
            {/* Selected Machine summary */}
            <div className="bg-[#F8F9FA] border border-[#E5E7EB] p-3.5">
              <div className="text-[11px] font-mono text-[#64748B] uppercase">SELECTED EQUIPMENT:</div>
              <div className="font-heading font-bold text-lg text-[#111827] uppercase mt-0.5">
                {product.name}
              </div>
              {selectedVariant && (
                <div className="text-xs font-mono text-[#8B1E1E] font-semibold mt-0.5">
                  CAPACITY: {selectedVariant}
                </div>
              )}
              <div className="text-xs text-[#4B5563] mt-1">
                Motor: {product.motorSummary} · Material: {product.materialSummary}
              </div>
            </div>

            {/* Instant WhatsApp Action */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 px-4 bg-[#8B1E1E] hover:bg-[#A32323] text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-colors"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Get Immediate Price on WhatsApp</span>
            </a>

            <div className="relative flex items-center justify-center my-2">
              <div className="border-t border-[#E5E7EB] w-full"></div>
              <span className="bg-white px-2 text-[11px] font-mono text-[#9CA3AF] uppercase">
                or request call back
              </span>
            </div>

            {submitted ? (
              <div className="bg-[#F0FDF4] border border-[#86EFAC] p-3 text-[#166534] text-xs space-y-1">
                <div className="font-bold flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4" /> Request forwarded to WhatsApp
                </div>
                <p>Our sales engineer will follow up shortly with pricing and catalog.</p>
                <button
                  type="button"
                  onClick={onClose}
                  className="mt-2 text-xs underline font-semibold text-[#166534]"
                >
                  Close Window
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3">
                <div>
                  <label className="block text-xs font-mono text-[#4B5563] uppercase mb-1">
                    Your Name / Hotel / Mess Name <span className="text-[#DC2626]">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Ramesh / Annapoorna Canteen"
                    className="w-full px-3 py-2 text-sm bg-[#F9FAFB] border border-[#D1D5DB] focus:bg-white focus:border-[#8B1E1E] focus:outline-none"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-mono text-[#4B5563] uppercase mb-1">
                      Phone Number <span className="text-[#DC2626]">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="e.g. 98422 12345"
                      className="w-full px-3 py-2 text-sm bg-[#F9FAFB] border border-[#D1D5DB] focus:bg-white focus:border-[#8B1E1E] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-[#4B5563] uppercase mb-1">
                      Town / City
                    </label>
                    <input
                      type="text"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      placeholder="e.g. Madurai / Bangalore"
                      className="w-full px-3 py-2 text-sm bg-[#F9FAFB] border border-[#D1D5DB] focus:bg-white focus:border-[#8B1E1E] focus:outline-none"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-2.5 px-4 bg-[#1E2125] hover:bg-[#2C3138] text-white text-xs font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-2"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Submit Inquiry</span>
                </button>
              </form>
            )}

            <div className="pt-2 border-t border-[#E5E7EB] flex items-center justify-between text-xs text-[#6B7280]">
              <span>Direct Works Phone:</span>
              <a
                href={`tel:${COMPANY_CONTACT.phoneClean}`}
                className="font-mono font-bold text-[#1E2125] hover:text-[#8B1E1E] flex items-center gap-1"
              >
                <Phone className="w-3 h-3" />
                {COMPANY_CONTACT.phone}
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
