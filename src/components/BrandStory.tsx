import React from 'react';
import { Award, Feather, ShieldCheck } from 'lucide-react';

export const BrandStory: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-[#faf8f5] border-t border-[#ede7df]">
      <div className="max-w-[1320px] mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Visual Showcase */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-xs overflow-hidden shadow-lg border border-[#e8e2d7]">
              <img
                src="https://lumerah.pk/uploads/products/1774436810_448d0499b0529d401c0c.jpg"
                alt="Lumerah Craftsmanship"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-6 -right-4 sm:right-6 bg-white p-5 shadow-xl border border-[#ede7df] max-w-[240px] text-left hidden sm:block">
              <span className="text-[10px] tracking-[2px] uppercase text-[#8b7355] font-semibold block mb-1">
                Refined Form
              </span>
              <p className="text-xs text-[#555] leading-snug">
                Every stitch calibrated to retain structured silhouette over years of daily carry.
              </p>
            </div>
          </div>

          {/* Editorial Text */}
          <div>
            <span className="text-xs tracking-[3px] uppercase text-[#8b7355] font-medium block mb-2">
              The Lumerah Standard
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#1a1a1a] mb-6 leading-tight">
              Elegance Sculpted Into Every Silhouette
            </h2>
            <p className="text-sm md:text-[15px] text-[#666] leading-relaxed mb-6 font-light">
              At Lumerah, we believe luxury should be tactile, enduring, and effortlessly functional. From our bestselling structured totes to pavé-crystal evening clutches, each piece is engineered with premium materials and thoughtful internal compartments.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4 border-t border-[#e8e2d7]">
              <div>
                <div className="flex items-center gap-2 mb-2 text-[#1a1a1a]">
                  <Award className="w-4 h-4 text-[#8b7355]" />
                  <h4 className="text-xs font-semibold uppercase tracking-[1px]">Artisanal Cut</h4>
                </div>
                <p className="text-xs text-[#777] leading-relaxed">
                  Precision patterns and hand-finished edges for sleek longevity.
                </p>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-2 text-[#1a1a1a]">
                  <Feather className="w-4 h-4 text-[#8b7355]" />
                  <h4 className="text-xs font-semibold uppercase tracking-[1px]">Balanced Weight</h4>
                </div>
                <p className="text-xs text-[#777] leading-relaxed">
                  Engineered carry handles and ergonomic shoulder drop lengths.
                </p>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-2 text-[#1a1a1a]">
                  <ShieldCheck className="w-4 h-4 text-[#8b7355]" />
                  <h4 className="text-xs font-semibold uppercase tracking-[1px]">Doorstep COD</h4>
                </div>
                <p className="text-xs text-[#777] leading-relaxed">
                  Inspect upon delivery anywhere in Pakistan before making payment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
