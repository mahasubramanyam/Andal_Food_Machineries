import { useState } from 'react';
import { motion } from 'motion/react';
import { MessageSquare, FileText, CheckCircle2, ChevronRight } from 'lucide-react';
import { Product } from '../types';
import { ProductSchematic } from './ProductSchematic';
import { COMPANY_CONTACT } from '../data/products';

interface ProductCardProps {
  key?: string;
  product: Product;
  index: number;
  onEnquire: (product: Product, selectedVariant?: string) => void;
}

export function ProductCard({ product, index, onEnquire }: ProductCardProps) {
  const [selectedVariantIndex, setSelectedVariantIndex] = useState(
    product.variants && product.variants.length > 1 ? 1 : 0
  );

  const activeVariant = product.variants ? product.variants[selectedVariantIndex] : null;

  const currentCapacity = activeVariant ? activeVariant.capacity : product.capacitySummary;
  const currentMotor = activeVariant ? activeVariant.motorPower : product.motorSummary;

  const whatsappQuoteUrl = `https://wa.me/${COMPANY_CONTACT.whatsappNumber}?text=${encodeURIComponent(
    `Hi Andal Food Machineries, I'd like a price quote and delivery timeline for: ${product.name}${
      activeVariant ? ` (${activeVariant.capacity})` : ''
    }.`
  )}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.35, delay: (index % 3) * 0.06, ease: 'easeOut' }}
      className="bg-white border border-[#D5D8DE] hover:border-[#8B1E1E] transition-colors duration-200 flex flex-col justify-between"
      id={`product-${product.id}`}
    >
      <div>
        {/* Schematic Drawing with subtle hover zoom */}
        <div className="overflow-hidden group">
          <motion.div
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
          >
            <ProductSchematic
              type={product.schematicType}
              capacity={activeVariant ? activeVariant.capacity : product.capacitySummary}
              name={product.name}
            />
          </motion.div>
        </div>

        {/* Card Header & Name */}
        <div className="p-4 sm:p-5 border-b border-[#E5E7EB]">
          <div className="flex items-start justify-between gap-2">
            <div>
              <span className="text-[11px] font-mono uppercase tracking-wider text-[#8B1E1E] font-semibold block">
                ANDAL · CBE
              </span>
              <h3 className="font-heading font-bold text-xl sm:text-2xl text-[#181A1D] uppercase tracking-tight leading-snug mt-0.5">
                {product.name}
              </h3>
            </div>
          </div>
          {product.tamilName && (
            <div className="text-xs text-[#6B7280] font-sans mt-0.5">
              {product.tamilName}
            </div>
          )}
          <p className="text-xs text-[#4B5260] mt-2 leading-relaxed">
            {product.shortDesc}
          </p>

          {/* Interactive Variant Selector if available (Wet Grinder / Atta Kneader) */}
          {product.variants && product.variants.length > 0 && (
            <div className="mt-3 pt-3 border-t border-[#F0F2F5]">
              <div className="text-[11px] font-mono text-[#64748B] uppercase tracking-wide mb-1.5 flex justify-between">
                <span>Select Capacity Variant:</span>
                <span className="text-[#1E293B] font-bold">{activeVariant?.capacity}</span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5">
                {product.variants.map((v, i) => (
                  <button
                    key={v.capacity}
                    type="button"
                    onClick={() => setSelectedVariantIndex(i)}
                    className={`py-1.5 px-2 text-xs font-mono font-medium text-center border transition-colors ${
                      selectedVariantIndex === i
                        ? 'bg-[#1E2125] text-white border-[#1E2125] font-semibold'
                        : 'bg-[#F8F9FA] text-[#374151] border-[#D1D5DB] hover:border-[#9CA3AF]'
                    }`}
                  >
                    {v.capacity.replace(' Litres', 'L').replace(' Batch', '')}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* 2-3 Core Spec Bullets (Spec-Sheet Clarity) */}
        <div className="p-4 sm:p-5 space-y-2.5 bg-[#FAFBFB] text-xs font-sans">
          <div className="flex items-start gap-2">
            <span className="font-mono text-[11px] text-[#64748B] w-20 flex-shrink-0 uppercase pt-0.5">Capacity:</span>
            <span className="font-semibold text-[#1F2937] flex-1">{currentCapacity}</span>
          </div>

          <div className="flex items-start gap-2">
            <span className="font-mono text-[11px] text-[#64748B] w-20 flex-shrink-0 uppercase pt-0.5">Motor Power:</span>
            <span className="font-semibold text-[#1F2937] flex-1">{currentMotor}</span>
          </div>

          <div className="flex items-start gap-2">
            <span className="font-mono text-[11px] text-[#64748B] w-20 flex-shrink-0 uppercase pt-0.5">Material:</span>
            <span className="text-[#374151] flex-1">{product.materialSummary}</span>
          </div>

          {activeVariant && (
            <div className="flex items-start gap-2 pt-1 border-t border-[#E5E7EB]">
              <span className="font-mono text-[11px] text-[#64748B] w-20 flex-shrink-0 uppercase pt-0.5">Output Rate:</span>
              <span className="text-[#111827] font-medium flex-1">{activeVariant.throughput}</span>
            </div>
          )}
        </div>
      </div>

      {/* Card Actions: Enquire & WhatsApp */}
      <div className="p-4 sm:p-5 pt-3 border-t border-[#E5E7EB] bg-white flex items-center gap-2">
        <button
          type="button"
          onClick={() => onEnquire(product, activeVariant?.capacity)}
          className="flex-1 py-2.5 px-3 bg-[#1E2125] hover:bg-[#2F343B] text-white text-xs font-semibold uppercase tracking-wider transition-colors flex items-center justify-center gap-1.5"
        >
          <FileText className="w-3.5 h-3.5" />
          <span>Enquire</span>
        </button>

        <a
          href={whatsappQuoteUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="py-2.5 px-3.5 bg-[#8B1E1E] hover:bg-[#A32323] text-white text-xs font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-1.5"
          title={`Get price on WhatsApp for ${product.name}`}
        >
          <MessageSquare className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">WhatsApp</span>
        </a>
      </div>
    </motion.div>
  );
}
