import { MessageSquare, Phone, MapPin, Mail, ShieldCheck } from 'lucide-react';
import { COMPANY_CONTACT, PRODUCTS } from '../data/products';

export function Footer() {
  return (
    <footer className="bg-[#141619] text-[#9EA4AF] border-t border-[#2B2F36]">
      {/* Upper Footer: Trade Info & Products Link Matrix */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
          {/* Col 1: Brand & Factory Details */}
          <div className="lg:col-span-4 space-y-4">
            <div>
              <div className="font-heading font-extrabold text-2xl text-white tracking-wide uppercase">
                ANDAL <span className="text-[#9CA3AF] font-light">FOOD MACHINERIES</span>
              </div>
              <div className="text-[11px] font-mono text-[#8B1E1E] uppercase tracking-widest mt-0.5">
                ANDAL APPLIANCES · ESTABLISHED 2008
              </div>
            </div>

            <p className="text-xs leading-relaxed text-[#8B939F]">
              Direct manufacturer of heavy commercial wet grinders, mixer grinders, atta kneaders, poultry feather cleaners, and food processing machinery in Peelamedu, Coimbatore, Tamil Nadu.
            </p>

            <div className="text-xs font-mono text-[#D1D5DB] space-y-1.5 pt-2 border-t border-[#24282F]">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-3.5 h-3.5 text-[#8B1E1E]" />
                <span>GSTIN: {COMPANY_CONTACT.gstin}</span>
              </div>
              <div className="text-[#767E8C]">
                Commercial Kitchen Machinery Category · B2B Invoices
              </div>
            </div>
          </div>

          {/* Col 2: Product Text Links (SEO & Quick Navigation) */}
          <div className="lg:col-span-4 space-y-3">
            <div className="font-heading font-bold text-sm text-white uppercase tracking-wider border-b border-[#2B2F36] pb-1.5">
              Commercial Products List
            </div>
            <ul className="space-y-1.5 text-xs">
              {PRODUCTS.map((p) => (
                <li key={p.id}>
                  <a
                    href={`#product-${p.id}`}
                    className="hover:text-white transition-colors flex items-center justify-between text-[#B5BAC3] group"
                  >
                    <span className="group-hover:translate-x-0.5 transition-transform">{p.name}</span>
                    <span className="font-mono text-[10px] text-[#6A717E]">{p.capacitySummary.split(',')[0]}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Works Address & Direct Dispatch Channels */}
          <div className="lg:col-span-4 space-y-3">
            <div className="font-heading font-bold text-sm text-white uppercase tracking-wider border-b border-[#2B2F36] pb-1.5">
              Works Address &amp; Contact
            </div>
            <div className="space-y-2.5 text-xs text-[#B5BAC3]">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#8B1E1E] flex-shrink-0 mt-0.5" />
                <span>{COMPANY_CONTACT.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#8B1E1E] flex-shrink-0" />
                <a href={`tel:${COMPANY_CONTACT.phoneClean}`} className="hover:text-white font-mono">
                  {COMPANY_CONTACT.phone} / {COMPANY_CONTACT.altPhone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-[#8B1E1E] flex-shrink-0" />
                <a
                  href={`https://wa.me/${COMPANY_CONTACT.whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white font-mono"
                >
                  WhatsApp: +91 {COMPANY_CONTACT.whatsappNumber}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#8B1E1E] flex-shrink-0" />
                <span className="font-mono">{COMPANY_CONTACT.email}</span>
              </div>
            </div>

            <div className="pt-2 text-[11px] font-mono text-[#767E8C]">
              Pan-India road transport dispatches via VRL Logistics, ARC, KRS, and Patel Roadways.
            </div>
          </div>
        </div>
      </div>

      {/* Lower Footer: Copyright & Legal */}
      <div className="bg-[#0D0F11] border-t border-[#1F2227] py-4 px-4 sm:px-6 text-[11px] text-[#646C7A]">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <div>
            &copy; 2008&ndash;2026 Andal Food Machineries (Andal Appliances). All rights reserved.
          </div>
          <div className="font-mono">
            Peelamedu, Coimbatore &middot; Commercial Kitchen Equipment Manufacturer
          </div>
        </div>
      </div>
    </footer>
  );
}
