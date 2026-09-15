import { useState } from 'react';
import { Phone, MessageSquare, Menu, X, ShieldCheck } from 'lucide-react';
import { COMPANY_CONTACT } from '../data/products';

interface HeaderProps {
  onSelectProductForQuote?: (productName: string) => void;
}

export function Header({ onSelectProductForQuote }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const whatsappDirectUrl = `https://wa.me/${COMPANY_CONTACT.whatsappNumber}?text=${encodeURIComponent(
    'Hi Andal Food Machineries, I am interested in your commercial kitchen equipment. Please share your catalog and price list.'
  )}`;

  return (
    <header className="sticky top-0 z-40 bg-[#1E2125] text-white border-b border-[#32363D] shadow-sm">
      {/* Top micro-bar: GST & Location for Trade Verification */}
      <div className="bg-[#15171A] border-b border-[#282B30] text-[11px] text-[#9EA4AF] py-1 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1 text-[#E2E5EA] font-mono">
              <ShieldCheck className="w-3 h-3 text-[#B91C1C]" />
              GSTIN: {COMPANY_CONTACT.gstin}
            </span>
            <span className="text-[#4E535C]">|</span>
            <span className="hidden sm:inline text-[#9EA4AF]">Manufacturer & Supplier — Peelamedu, Coimbatore (Est. 2008)</span>
          </div>
          <div className="flex items-center gap-3 text-xs">
            <span className="text-[#888E99] hidden md:inline">Mon–Sat: 9:00 AM – 7:30 PM</span>
            <a
              href={`tel:${COMPANY_CONTACT.phoneClean}`}
              className="text-[#E2E5EA] hover:text-white font-mono flex items-center gap-1 transition-colors"
            >
              Sales: {COMPANY_CONTACT.phone}
            </a>
          </div>
        </div>
      </div>

      {/* Main Header Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between gap-4">
        {/* Logo / Wordmark */}
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 bg-[#8B1E1E] flex items-center justify-center font-heading font-extrabold text-white text-xl tracking-wider rounded-none border border-[#A62626]">
            A
          </div>
          <div>
            <div className="font-heading font-bold text-xl sm:text-2xl tracking-wide uppercase text-white leading-none">
              ANDAL <span className="text-[#D1D5DB] font-normal">FOOD MACHINERIES</span>
            </div>
            <div className="text-[10px] tracking-widest text-[#9EA4AF] uppercase font-mono mt-0.5">
              ANDAL APPLIANCES · COIMBATORE
            </div>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-7 text-[13px] font-medium tracking-wide uppercase text-[#CBD0D8]">
          <a href="#products" className="hover:text-white transition-colors py-1">
            Products & Specs
          </a>
          <a href="#why-andal" className="hover:text-white transition-colors py-1">
            Credentials
          </a>
          <a href="#gallery" className="hover:text-white transition-colors py-1">
            Workshop Gallery
          </a>
          <a href="#contact" className="hover:text-white transition-colors py-1">
            Factory Contact
          </a>
        </nav>

        {/* Fast Action CTAs: Phone + WhatsApp — ALWAYS VISIBLE */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Click to Call */}
          <a
            href={`tel:${COMPANY_CONTACT.phoneClean}`}
            id="header-phone-cta"
            className="flex items-center gap-1.5 px-2.5 sm:px-3 py-2 bg-[#292D33] hover:bg-[#343840] text-white border border-[#3E434C] text-xs font-semibold tracking-wider uppercase transition-colors"
            title="Call Factory Direct"
          >
            <Phone className="w-3.5 h-3.5 text-[#E5E7EB]" />
            <span className="hidden sm:inline">{COMPANY_CONTACT.phone}</span>
            <span className="sm:hidden font-mono text-[11px]">Call</span>
          </a>

          {/* WhatsApp Direct Action */}
          <a
            href={whatsappDirectUrl}
            target="_blank"
            rel="noopener noreferrer"
            id="header-whatsapp-cta"
            className="flex items-center gap-1.5 px-3 sm:px-4 py-2 bg-[#8B1E1E] hover:bg-[#A32323] text-white text-xs font-bold tracking-wider uppercase transition-colors shadow-sm"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span className="hidden md:inline">Price on WhatsApp</span>
            <span className="md:hidden">WhatsApp</span>
          </a>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#CBD0D8] hover:text-white hover:bg-[#2A2E34] border border-[#343840]"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4 text-white" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#181A1D] border-t border-[#2D3137] px-4 py-3 space-y-2.5 text-sm">
          <a
            href="#products"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-[#CBD0D8] hover:text-white border-b border-[#282B30] uppercase font-medium tracking-wide text-xs"
          >
            Products & Machine Specs
          </a>
          <a
            href="#why-andal"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-[#CBD0D8] hover:text-white border-b border-[#282B30] uppercase font-medium tracking-wide text-xs"
          >
            Why Andal (Credentials & GST)
          </a>
          <a
            href="#gallery"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-[#CBD0D8] hover:text-white border-b border-[#282B30] uppercase font-medium tracking-wide text-xs"
          >
            Workshop & Shopfloor Photos
          </a>
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-[#CBD0D8] hover:text-white uppercase font-medium tracking-wide text-xs"
          >
            Location & Factory Address
          </a>
          <div className="pt-2 flex flex-col gap-2">
            <a
              href={`tel:${COMPANY_CONTACT.phoneClean}`}
              className="w-full text-center py-2.5 bg-[#2B2F36] text-white text-xs font-semibold uppercase tracking-wider border border-[#3E434D]"
            >
              Call Us: {COMPANY_CONTACT.phone}
            </a>
            <a
              href={whatsappDirectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center py-2.5 bg-[#8B1E1E] text-white text-xs font-bold uppercase tracking-wider"
            >
              Chat on WhatsApp for Quote
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
