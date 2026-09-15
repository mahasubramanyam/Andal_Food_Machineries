import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ZoomIn, MessageSquare, Shield, Check } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/gallery';
import { GalleryItem } from '../types';
import { COMPANY_CONTACT } from '../data/products';

interface GalleryProps {
  onEnquireFromGallery?: (title: string) => void;
}

export function Gallery({ onEnquireFromGallery }: GalleryProps) {
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);

  const getCategoryColor = (tag: string) => {
    switch (tag.toLowerCase()) {
      case 'assembly':
        return 'bg-[#293548] text-[#93C5FD] border-[#3B4D68]';
      case 'testing':
        return 'bg-[#3D2C2C] text-[#FCA5A5] border-[#5A3838]';
      case 'tooling':
        return 'bg-[#3B3426] text-[#FDE68A] border-[#594B2E]';
      case 'dispatch':
        return 'bg-[#24392E] text-[#86EFAC] border-[#325240]';
      default:
        return 'bg-[#2E333C] text-[#D1D5DB] border-[#444B57]';
    }
  };

  return (
    <section id="gallery" className="py-14 bg-[#1E2126] text-white border-b border-[#343A45]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-3 border-b border-[#30353F] pb-4 mb-8">
          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-[#8B1E1E] font-bold">
              PEELAMEDU WORKSHOP &amp; QUALITY INSPECTION
            </div>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-white uppercase tracking-tight mt-1">
              Shopfloor &amp; Machinery Gallery
            </h2>
            <p className="text-xs text-[#9CA3AF] mt-1 max-w-xl">
              Fabrication, lathe turning, dynamic balancing, and dispatch line at our manufacturing facility in Peelamedu, Coimbatore. Click any card to inspect technical parameters.
            </p>
          </div>
          <div className="text-xs font-mono text-[#828996] flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#10B981]"></span>
            <span>LIVE WORKSHOP STAGES</span>
          </div>
        </div>

        {/* Technical Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {GALLERY_ITEMS.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.35, delay: (idx % 4) * 0.05, ease: 'easeOut' }}
              onClick={() => setActiveItem(item)}
              className="bg-[#262A31] border border-[#3A404C] hover:border-[#8B1E1E] cursor-pointer group flex flex-col justify-between transition-colors"
            >
              {/* Real Workshop Photograph */}
              <div className="relative aspect-[4/3] bg-[#1A1C20] border-b border-[#343A44] overflow-hidden">
                {item.imageUrl && (
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-black/30 p-3 flex flex-col justify-between">
                  <div className="flex items-center justify-between text-[10px] font-mono">
                    <span className={`px-1.5 py-0.5 border text-[9px] uppercase font-bold tracking-wider ${getCategoryColor(item.tag)}`}>
                      {item.tag}
                    </span>
                    <span className="text-[#E5E7EB] bg-black/40 px-1">STAGE #{String(idx + 1).padStart(2, '0')}</span>
                  </div>

                  <div className="flex items-center justify-end">
                    <div className="w-8 h-8 bg-black/50 border border-white/20 flex items-center justify-center text-white group-hover:scale-105 transition-transform">
                      <ZoomIn className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Caption & Specs */}
              <div className="p-3.5 flex flex-col justify-between flex-1">
                <div>
                  <h4 className="font-heading font-bold text-base text-[#F3F4F6] uppercase tracking-wide group-hover:text-white">
                    {item.title}
                  </h4>
                  <p className="text-[11px] text-[#9EA4AF] mt-1 line-clamp-2 leading-relaxed">
                    {item.specs}
                  </p>
                </div>
                <div className="mt-3 pt-2 border-t border-[#343944] flex items-center justify-between text-[11px] font-mono text-[#CBD0D8]">
                  <span className="text-[#8B1E1E] font-bold">VIEW REPORT</span>
                  <span className="text-[#64748B]">&rarr;</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {activeItem && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setActiveItem(null)}
              className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4 backdrop-blur-xs"
            >
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                transition={{ duration: 0.2 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-[#22262D] border border-[#3E4552] max-w-2xl w-full text-white shadow-2xl overflow-hidden"
              >
                {/* Modal Header */}
                <div className="p-4 bg-[#1A1C20] border-b border-[#30353F] flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 bg-[#8B1E1E]"></span>
                    <span className="font-mono text-xs text-[#CBD0D8] uppercase tracking-wider">
                      QC STAGE INSPECTION · {activeItem.tag.toUpperCase()}
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={() => setActiveItem(null)}
                    className="p-1 hover:bg-[#2D323A] text-[#9CA3AF] hover:text-white"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Modal Body */}
                <div className="p-6 space-y-4">
                  {/* Schematic Inspection Box */}
                  <div className="aspect-[16/9] bg-[#141619] border border-[#343A45] p-4 flex flex-col justify-between relative">
                    <div className="flex items-center justify-between font-mono text-xs text-[#8B939F]">
                      <span>INSPECTOR: ANDAL CBE QC-04</span>
                      <span className="text-[#10B981] flex items-center gap-1 font-semibold">
                        <Check className="w-3.5 h-3.5" /> TOLERANCE PASS
                      </span>
                    </div>

                    <div className="text-center py-4">
                      <div className="text-xs font-mono text-[#8B1E1E] uppercase tracking-widest font-bold">
                        {activeItem.subtitle}
                      </div>
                      <div className="font-heading font-extrabold text-2xl uppercase mt-1">
                        {activeItem.title}
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-2 border-t border-[#292E36] pt-2 text-[11px] font-mono text-[#94A3B8]">
                      <div>STANDARD: IS-1415</div>
                      <div>GRADE: SS 304 / EN-8</div>
                      <div>LOCATION: PEELAMEDU</div>
                    </div>
                  </div>

                  <div>
                    <div className="text-xs font-mono text-[#8B939F] uppercase tracking-wider">
                      Technical Parameter Description
                    </div>
                    <p className="text-sm text-[#E2E5EA] leading-relaxed mt-1">
                      {activeItem.specs}
                    </p>
                  </div>
                </div>

                {/* Modal Footer Actions */}
                <div className="p-4 bg-[#1A1C20] border-t border-[#30353F] flex flex-col sm:flex-row items-center justify-between gap-3">
                  <span className="text-xs text-[#8B939F]">
                    Factory direct pricing available on WhatsApp
                  </span>
                  <div className="flex items-center gap-2 w-full sm:w-auto">
                    <a
                      href={`https://wa.me/${COMPANY_CONTACT.whatsappNumber}?text=${encodeURIComponent(
                        `Hi Andal Food Machineries, I am inquiring about: ${activeItem.title} (${activeItem.subtitle}).`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto px-4 py-2 bg-[#8B1E1E] hover:bg-[#A32323] text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                      <span>Inquire via WhatsApp</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
