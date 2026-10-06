import React from 'react';
import { Star, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../data/products';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-[1320px] mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-[11px] tracking-[2.5px] uppercase text-[#8b7355] font-medium block mb-2">
            Client Impressions
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-[#1a1a1a] font-normal tracking-[1.5px]">
            Loved By Women Across Pakistan
          </h2>
          <div className="w-14 h-[1px] bg-[#1a1a1a] mx-auto mt-4" />
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="bg-[#faf8f5] p-8 border border-[#eee8df] rounded-xs flex flex-col justify-between hover:shadow-md transition-shadow duration-300"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  {/* Star Rating */}
                  <div className="flex items-center gap-1">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#d4af37] text-[#d4af37]" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-[#d8c7b5]" />
                </div>

                <p className="text-sm text-[#444] italic leading-relaxed mb-6">
                  "{t.comment}"
                </p>
              </div>

              <div className="pt-4 border-t border-[#ede7dc]">
                <h4 className="text-sm font-semibold text-[#1a1a1a] tracking-[0.5px]">
                  {t.name}
                </h4>
                <div className="flex items-center justify-between mt-1 text-xs text-[#888]">
                  <span>{t.city}</span>
                  <span className="text-[11px] text-[#8b7355] font-medium truncate max-w-[140px]">
                    Verified Buyer
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
