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

              {/* Real Shopfloor Photograph */}
              <div className="relative w-full aspect-[16/11] bg-[#181B1F] border border-[#323842] overflow-hidden">
                <img
                  src="/images/hero/finished-units-ready.jpg"
                  alt="Finished commercial wet grinder units at Andal Food Machineries workshop, Peelamedu, Coimbatore"
                  className="w-full h-full object-cover"
                />

                {/* Badge Overlay */}
                <div className="absolute top-3 left-3 bg-[#111315]/90 border border-[#2F353F] px-2.5 py-1 text-[11px] font-mono text-[#D1D5DB]">
                  <span className="text-[#8B1E1E] font-bold">#</span> PEELAMEDU SHOPFLOOR
                </div>

                <div className="absolute bottom-3 right-3 bg-[#111315]/90 border border-[#2F353F] px-2.5 py-1 text-[11px] font-mono text-[#4ADE80]">
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
