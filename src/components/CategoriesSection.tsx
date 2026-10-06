import React from 'react';
import { CATEGORIES } from '../data/products';

interface CategoriesSectionProps {
  onSelectCategory: (categorySlug: string) => void;
}

export const CategoriesSection: React.FC<CategoriesSectionProps> = ({ onSelectCategory }) => {
  return (
    <section className="py-14 md:py-20 bg-white">
      <div className="max-w-[1320px] mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-10 md:mb-12">
          <h2 className="font-serif text-3xl md:text-4xl text-[#1a1a1a] font-normal tracking-[2px]">
            Shop By Category
          </h2>
          <div className="w-14 h-[1px] bg-[#1a1a1a] mx-auto mt-4" />
        </div>

        {/* Categories Grid (2 cols mobile, 3 cols tablet, 6 cols desktop) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => onSelectCategory(cat.slug)}
              className="group text-center flex flex-col items-center focus:outline-none transition-transform duration-300 hover:-translate-y-1.5"
            >
              {/* Category Image */}
              <div className="w-full aspect-square overflow-hidden bg-[#f8f6f3] mb-3 relative rounded-xs shadow-xs border border-[#f0ede6]">
                <img
                  src={cat.image}
                  alt={cat.name}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                />
                <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Category Title */}
              <h3 className="text-xs md:text-[13px] font-medium tracking-[1.5px] uppercase text-[#1a1a1a] group-hover:text-[#8b7355] transition-colors">
                {cat.name}
              </h3>
              <span className="text-[11px] text-[#888] mt-0.5 font-light">
                {cat.itemCount} Items
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};
