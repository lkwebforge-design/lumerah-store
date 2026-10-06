import React from 'react';

interface PromoBannerProps {
  onShopClick: () => void;
}

export const PromoBanner: React.FC<PromoBannerProps> = ({ onShopClick }) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-[#171717] via-[#242424] to-[#1a1a1a] text-white py-20 md:py-24 my-10">
      {/* Background subtle watermark & texture */}
      <div className="absolute inset-0 opacity-5 pointer-events-none flex items-center justify-center">
        <span className="font-serif text-[180px] md:text-[260px] tracking-[20px] select-none font-bold">
          LUMERAH
        </span>
      </div>

      <div className="relative max-w-[800px] mx-auto px-4 text-center">
        <span className="text-[11px] md:text-xs tracking-[3px] uppercase text-[#b8a88a] font-medium inline-block mb-3">
          Cash On Delivery Nationwide
        </span>

        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-white mb-4 tracking-[1px] leading-tight">
          Shop With Confidence
        </h2>

        <p className="text-sm md:text-base text-[#bbb] font-light max-w-[560px] mx-auto mb-8 leading-relaxed">
          Pay at your doorstep when you receive your parcel. Free express shipping on all orders over PKR 5,000 across Pakistan with guaranteed authenticity.
        </p>

        <button
          onClick={onShopClick}
          className="inline-flex items-center justify-center px-9 py-3.5 bg-white text-[#1a1a1a] hover:bg-[#f5f5f5] text-xs font-semibold tracking-[2px] uppercase transition-all duration-300 shadow-md hover:shadow-lg cursor-pointer"
        >
          Shop Now
        </button>
      </div>
    </section>
  );
};
