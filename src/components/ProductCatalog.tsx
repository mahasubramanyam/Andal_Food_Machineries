import { useState } from 'react';
import { Product } from '../types';
import { PRODUCTS, COMPANY_CONTACT } from '../data/products';
import { ProductCard } from './ProductCard';
import { Wrench, PhoneCall } from 'lucide-react';

interface ProductCatalogProps {
  onEnquire: (product: Product, selectedVariant?: string) => void;
}

export function ProductCatalog({ onEnquire }: ProductCatalogProps) {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const filteredProducts = activeCategory === 'all'
    ? PRODUCTS
    : PRODUCTS.filter((p) => p.category === activeCategory);

  return (
    <section id="products" className="py-14 bg-[#F2F1EE] border-b border-[#D8D5CD]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#D1CEC6] pb-4 mb-8">
          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-[#8B1E1E] font-bold">
              MACHINERY CATALOG &amp; TECHNICAL SPECIFICATIONS
            </div>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-[#17191C] uppercase tracking-tight mt-1">
              Commercial Kitchen Equipment
            </h2>
            <p className="text-xs text-[#525866] mt-1 max-w-xl">
              Manufactured with AISI 304 food-grade stainless steel and heavy copper-wound motors for continuous commercial duty.
            </p>
          </div>

          {/* Catalog Category Filter */}
          <div className="flex flex-wrap gap-1 bg-[#E4E1DA] p-1 border border-[#CDC8BE]">
            <button
              type="button"
              onClick={() => setActiveCategory('all')}
              className={`px-3 py-1.5 text-xs font-semibold uppercase tracking-wider transition-colors ${
                activeCategory === 'all'
                  ? 'bg-[#1E2125] text-white shadow-xs'
                  : 'text-[#4A505C] hover:text-[#181A1D]'
              }`}
            >
              All Machines (7)
            </button>
            <button
              type="button"
              onClick={() => setActiveCategory('grinders')}
              className={`px-3 py-1.5 text-xs font-semibold uppercase tracking-wider transition-colors ${
                activeCategory === 'grinders'
                  ? 'bg-[#1E2125] text-white shadow-xs'
                  : 'text-[#4A505C] hover:text-[#181A1D]'
              }`}
            >
              Grinders &amp; Mixers
            </button>
            <button
              type="button"
              onClick={() => setActiveCategory('kneading')}
              className={`px-3 py-1.5 text-xs font-semibold uppercase tracking-wider transition-colors ${
                activeCategory === 'kneading'
                  ? 'bg-[#1E2125] text-white shadow-xs'
                  : 'text-[#4A505C] hover:text-[#181A1D]'
              }`}
            >
              Atta Kneaders
            </button>
            <button
              type="button"
              onClick={() => setActiveCategory('processing')}
              className={`px-3 py-1.5 text-xs font-semibold uppercase tracking-wider transition-colors ${
                activeCategory === 'processing'
                  ? 'bg-[#1E2125] text-white shadow-xs'
                  : 'text-[#4A505C] hover:text-[#181A1D]'
              }`}
            >
              Food Processing
            </button>
            <button
              type="button"
              onClick={() => setActiveCategory('foodprep')}
              className={`px-3 py-1.5 text-xs font-semibold uppercase tracking-wider transition-colors ${
                activeCategory === 'foodprep'
                  ? 'bg-[#1E2125] text-white shadow-xs'
                  : 'text-[#4A505C] hover:text-[#181A1D]'
              }`}
            >
              Veg Cutters &amp; Scrapers
            </button>
          </div>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product, idx) => (
            <ProductCard
              key={product.id}
              product={product}
              index={idx}
              onEnquire={onEnquire}
            />
          ))}
        </div>

        {/* Custom Machinery Notice Bar */}
        <div className="mt-10 p-5 bg-[#1F2328] text-white border border-[#353B45] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-start gap-3">
            <div className="p-2 bg-[#2D333D] border border-[#3F4754] text-[#E5E7EB] mt-0.5">
              <Wrench className="w-4 h-4 text-[#E5E7EB]" />
            </div>
            <div>
              <div className="font-heading font-bold text-lg uppercase tracking-wide">
                Custom Capacity &amp; Voltage Configuration
              </div>
              <p className="text-xs text-[#9EA4AF] mt-0.5">
                We manufacture custom-dimension grinding drums, 415V three-phase motors, and customized snack dies on order at our Peelamedu workshop.
              </p>
            </div>
          </div>
          <a
            href={`tel:${COMPANY_CONTACT.phoneClean}`}
            className="flex-shrink-0 inline-flex items-center gap-2 px-4 py-2.5 bg-[#8B1E1E] hover:bg-[#A32323] text-white text-xs font-bold uppercase tracking-wider transition-colors"
          >
            <PhoneCall className="w-3.5 h-3.5" />
            <span>Consult Engineer: {COMPANY_CONTACT.phone}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
