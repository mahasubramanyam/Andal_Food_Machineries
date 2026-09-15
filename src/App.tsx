import { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TrustStrip } from './components/TrustStrip';
import { ProductCatalog } from './components/ProductCatalog';
import { Gallery } from './components/Gallery';
import { EnquirySection } from './components/EnquirySection';
import { Footer } from './components/Footer';
import { EnquiryModal } from './components/EnquiryModal';
import { Product } from './types';
import { PRODUCTS, COMPANY_CONTACT } from './data/products';
import { Phone, MessageSquare } from 'lucide-react';

export default function App() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [selectedVariant, setSelectedVariant] = useState<string | undefined>(undefined);

  const handleEnquire = (product: Product, variant?: string) => {
    setSelectedProduct(product);
    setSelectedVariant(variant);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
    setSelectedVariant(undefined);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F7F7F6] text-[#1A1D20] font-body selection:bg-[#8B1E1E] selection:text-white">
      {/* Sticky Header */}
      <Header />

      {/* Main Content Sections */}
      <main className="flex-1 pb-14 sm:pb-0">
        {/* 1. Hero */}
        <Hero
          onEnquireClick={() => {
            handleEnquire(PRODUCTS[0], '20 Litres');
          }}
        />

        {/* 2. Why Andal (Credentials Strip with Count-up) */}
        <TrustStrip />

        {/* 3. Product Catalog (Core Section) */}
        <ProductCatalog onEnquire={handleEnquire} />

        {/* 4. Workshop & Machine Gallery (with Lightbox) */}
        <Gallery
          onEnquireFromGallery={(title) => {
            const product = PRODUCTS[0];
            handleEnquire(product);
          }}
        />

        {/* 5. Direct Enquiry & Factory Location Map */}
        <EnquirySection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Product Enquiry Modal */}
      {selectedProduct && (
        <EnquiryModal
          product={selectedProduct}
          selectedVariant={selectedVariant}
          onClose={handleCloseModal}
        />
      )}

      {/* Sticky Mobile Trade Action Bar (Crucial for Indian B2B mobile buyers) */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 z-30 bg-[#1A1C20] border-t border-[#343840] p-2 flex items-center gap-2 shadow-lg">
        <a
          href={`tel:${COMPANY_CONTACT.phoneClean}`}
          className="flex-1 py-2.5 px-3 bg-[#2A2E35] text-white text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-1.5 border border-[#3E4550]"
        >
          <Phone className="w-3.5 h-3.5" />
          <span>Call Factory</span>
        </a>
        <a
          href={`https://wa.me/${COMPANY_CONTACT.whatsappNumber}?text=${encodeURIComponent(
            'Hi Andal Food Machineries, I would like to get pricing and product specifications for commercial kitchen machinery.'
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 py-2.5 px-3 bg-[#8B1E1E] text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5"
        >
          <MessageSquare className="w-3.5 h-3.5" />
          <span>WhatsApp Price</span>
        </a>
      </div>
    </div>
  );
}
