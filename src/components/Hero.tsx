import { motion } from 'motion/react';
import { MessageSquare, ArrowRight, ShieldCheck, Wrench, Truck } from 'lucide-react';
import { COMPANY_CONTACT } from '../data/products';

interface HeroProps {
  onEnquireClick?: () => void;
}

export function Hero({ onEnquireClick }: HeroProps) {
  const whatsappHeroUrl = `https://wa.me/${COMPANY_CONTACT.whatsappNumber}?text=${encodeURIComponent(
    'Hi Andal Food Machineries, I need a direct price quote for commercial kitchen machinery (Wet Grinder / Kitchen Equipment).'
  )}`;

  return (
    <section className="bg-[#1F2328] text-white border-b border-[#343840] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Factual Copy & Direct Trade CTA */}
          <div className="lg:col-span-6 space-y-6">
            {/* Trade Origin Tag */}
            <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-[#2C3138] border border-[#3E4550] text-[#D1D5DB] text-xs font-mono">
              <span className="w-2 h-2 bg-[#8B1E1E]"></span>
              MANUFACTURER · PEELAMEDU, COIMBATORE · EST. 2008
            </div>

            {/* Factual Headline */}
            <h1 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl text-white uppercase tracking-tight leading-[1.08]">
              Commercial Wet Grinders &amp; Kitchen Machinery
              <span className="block text-[#9CA3AF] text-2xl sm:text-3xl md:text-4xl font-normal mt-1">
                Coimbatore, Since 2008
              </span>
            </h1>

            {/* Short business owner copy (under 2 sentences, plain, factual) */}
            <p className="text-[#B5BAC3] text-base leading-relaxed max-w-xl font-normal">
              We manufacture commercial wet grinders (5L to 40L), heavy mixers, chicken feather cleaning machines, atta kneaders, and vegetable cutters. Direct factory dispatch for hotels, messes, hostels, and canteens across Tamil Nadu and all Indian states.
            </p>

            {/* Primary Action Button (Single primary CTA: Get Price on WhatsApp) */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <a
                href={whatsappHeroUrl}
                target="_blank"
                rel="noopener noreferrer"
                id="hero-whatsapp-btn"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-[#8B1E1E] hover:bg-[#A32323] text-white text-sm font-bold uppercase tracking-wider transition-colors border border-[#A62626] shadow-sm"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Get Price on WhatsApp</span>
              </a>

              <a
                href="#products"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-[#2A2E35] hover:bg-[#343942] text-[#E2E5EA] hover:text-white text-sm font-semibold uppercase tracking-wider transition-colors border border-[#3D434E]"
              >
                <span>Browse Spec Sheets</span>
                <ArrowRight className="w-4 h-4 text-[#9CA3AF]" />
              </a>
            </div>

            {/* Direct Factory Trade Points */}
            <div className="grid grid-cols-3 gap-3 pt-4 border-t border-[#2F343C] text-xs">
              <div className="space-y-0.5">
                <div className="font-mono text-[11px] text-[#8B939F] uppercase">Material</div>
                <div className="font-semibold text-[#E5E7EB]">SS 304 Food Grade</div>
              </div>
              <div className="space-y-0.5">
                <div className="font-mono text-[11px] text-[#8B939F] uppercase">Motor Warranty</div>
                <div className="font-semibold text-[#E5E7EB]">1 Year Guaranteed</div>
              </div>
              <div className="space-y-0.5">
                <div className="font-mono text-[11px] text-[#8B939F] uppercase">Packaging</div>
                <div className="font-semibold text-[#E5E7EB]">Crated Road Freight</div>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Machine Image / Technical Spec View with load animation */}
          <div className="lg:col-span-6">
            <motion.div
              initial={{ clipPath: 'inset(0 100% 0 0)', opacity: 0.8 }}
              animate={{ clipPath: 'inset(0 0% 0 0)', opacity: 1 }}
              transition={{ duration: 0.45, ease: 'easeOut' }}
              className="bg-[#24282F] border border-[#3A404C] p-4 sm:p-5 relative"
            >
              {/* Technical Nameplate */}
              <div className="flex items-center justify-between border-b border-[#363C47] pb-3 mb-4 text-xs font-mono">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 bg-[#8B1E1E]"></span>
                  <span className="font-bold text-[#E5E7EB] tracking-wide">ANDAL HEAVY TILTING WET GRINDER</span>
                </div>
                <span className="text-[#9CA3AF] bg-[#1A1C20] px-2 py-0.5 border border-[#303640]">
                  MODEL: ATG-20L / 40L
                </span>
              </div>

              {/* Real Technical Elevation Schematic */}
              <div className="relative w-full aspect-[16/11] bg-[#181B1F] border border-[#323842] flex flex-col items-center justify-center p-4">
                {/* SVG Schematic of the Flagship 20L/40L Tilting Commercial Grinder */}
                <svg className="w-full h-full max-h-[260px]" viewBox="0 0 360 220" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Grid Lines */}
                  <line x1="20" y1="180" x2="340" y2="180" stroke="#2B303A" strokeWidth="1" strokeDasharray="4 4" />
                  
                  {/* Machine Base Stand - Heavy Channel Frame */}
                  <rect x="50" y="165" width="260" height="26" rx="2" fill="#2E333C" stroke="#525B6C" strokeWidth="1.5" />
                  <rect x="65" y="191" width="22" height="12" fill="#1C1E23" stroke="#444C5A" />
                  <rect x="273" y="191" width="22" height="12" fill="#1C1E23" stroke="#444C5A" />

                  {/* Motor Housing */}
                  <rect x="60" y="80" width="76" height="85" rx="3" fill="#242830" stroke="#5A6375" strokeWidth="1.5" />
                  <line x1="68" y1="95" x2="128" y2="95" stroke="#3D4452" strokeWidth="2" />
                  <line x1="68" y1="110" x2="128" y2="110" stroke="#3D4452" strokeWidth="2" />
                  <line x1="68" y1="125" x2="128" y2="125" stroke="#3D4452" strokeWidth="2" />
                  <line x1="68" y1="140" x2="128" y2="140" stroke="#3D4452" strokeWidth="2" />
                  <text x="98" y="157" fill="#9BA3B0" fontSize="8.5" fontFamily="monospace" textAnchor="middle" fontWeight="bold">2.0 HP MOTOR</text>

                  {/* Tilting Worm-Gear Pivot Axis */}
                  <circle cx="150" cy="120" r="11" fill="#8B1E1E" stroke="#B91C1C" strokeWidth="2" />
                  <circle cx="150" cy="120" r="4" fill="#FFFFFF" />
                  <line x1="150" y1="131" x2="150" y2="165" stroke="#8B1E1E" strokeWidth="3" strokeDasharray="4 2" />

                  {/* Stainless Steel Drum - 20L / 40L */}
                  <path d="M160 45 L300 45 L292 150 L168 150 Z" fill="#3E4552" stroke="#8E99AA" strokeWidth="2" />
                  {/* Polish Reflection highlight */}
                  <path d="M180 47 L210 47 L202 148 L172 148 Z" fill="#555E6F" opacity="0.45" />

                  {/* Granite Stone Rollers */}
                  <ellipse cx="205" cy="100" rx="20" ry="32" fill="#141619" stroke="#687282" strokeWidth="2" />
                  <ellipse cx="255" cy="100" rx="20" ry="32" fill="#141619" stroke="#687282" strokeWidth="2" />
                  <line x1="205" y1="100" x2="255" y2="100" stroke="#D1D5DB" strokeWidth="3" />
                  <text x="230" y="104" fill="#E5E7EB" fontSize="9" fontFamily="sans-serif" fontWeight="bold" textAnchor="middle">GRANITE</text>

                  {/* Gear Wheel Tilting Handle */}
                  <circle cx="318" cy="85" r="16" fill="#1F2329" stroke="#D1D5DB" strokeWidth="2.5" />
                  <line x1="318" y1="69" x2="318" y2="101" stroke="#D1D5DB" strokeWidth="2" />
                  <line x1="302" y1="85" x2="334" y2="85" stroke="#D1D5DB" strokeWidth="2" />
                  <circle cx="318" cy="85" r="5" fill="#8B1E1E" />
                  <text x="318" y="118" fill="#9CA3AF" fontSize="8" fontFamily="monospace" textAnchor="middle">GEAR TILT</text>

                  {/* Dimension Callout lines */}
                  <line x1="160" y1="36" x2="300" y2="36" stroke="#94A3B8" strokeWidth="1" />
                  <text x="230" y="32" fill="#CBD5E1" fontSize="8" fontFamily="monospace" textAnchor="middle">DRUM DIA: 22" (SS 304)</text>

                  {/* Bottom Drum Plate */}
                  <rect x="185" y="128" width="90" height="14" fill="#181B1F" rx="1" />
                  <text x="230" y="138" fill="#FFFFFF" fontSize="8" fontFamily="monospace" textAnchor="middle" fontWeight="bold">BATTER OUTPUT: 80 KG/H</text>
                </svg>

                {/* Badge Overlay */}
                <div className="absolute top-3 left-3 bg-[#111315] border border-[#2F353F] px-2.5 py-1 text-[11px] font-mono text-[#D1D5DB]">
                  <span className="text-[#8B1E1E] font-bold">#</span> PEELAMEDU SHOPFLOOR
                </div>

                <div className="absolute bottom-3 right-3 bg-[#111315] border border-[#2F353F] px-2.5 py-1 text-[11px] font-mono text-[#4ADE80]">
                  IN-STOCK FOR IMMEDIATE DISPATCH
                </div>
              </div>

              {/* Machine Specs Strip */}
              <div className="mt-3 grid grid-cols-2 sm:grid-cols-4 gap-2 text-[11px] font-mono text-[#9EA4AF] bg-[#1B1E22] p-2.5 border border-[#2F353F]">
                <div>
                  <span className="text-[#64748B] block">DRUM CAPACITY</span>
                  <span className="text-white font-semibold">20L / 40L</span>
                </div>
                <div>
                  <span className="text-[#64748B] block">MOTOR</span>
                  <span className="text-white font-semibold">2.0 / 3.0 HP</span>
                </div>
                <div>
                  <span className="text-[#64748B] block">POWER</span>
                  <span className="text-white font-semibold">415V / 230V</span>
                </div>
                <div>
                  <span className="text-[#64748B] block">GRIND TIME</span>
                  <span className="text-white font-semibold">20–25 MIN</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
