import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { HERO_SLIDES } from '../data/products';

interface HeroSliderProps {
  onCtaClick: (actionLink: string) => void;
}

export const HeroSlider: React.FC<HeroSliderProps> = ({ onCtaClick }) => {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef(0);
  const total = HERO_SLIDES.length;

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % total);
    }, 5500);
    return () => clearInterval(interval);
  }, [isPaused, total]);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % total);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + total) % total);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) {
      if (diff > 0) nextSlide();
      else prevSlide();
    }
  };

  return (
    <section
      className="relative h-[65vh] min-h-[480px] max-h-[720px] overflow-hidden select-none bg-[#111]"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div className="relative w-full h-full">
        {HERO_SLIDES.map((slide, idx) => {
          const isActive = idx === current;
          return (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                isActive ? 'opacity-100 z-10 pointer-events-auto' : 'opacity-0 z-0 pointer-events-none'
              }`}
            >
              {/* Background Image with Ken Burns zoom */}
              <div
                className={`absolute inset-0 bg-cover bg-center transition-transform duration-7000 ease-out ${
                  isActive ? 'scale-105' : 'scale-100'
                }`}
                style={{ backgroundImage: `url(${slide.image})` }}
              />

              {/* Dark Luxury Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/40 to-black/35" />

              {/* Slide Content */}
              <div className="absolute inset-0 flex items-center justify-center text-center px-6">
                <div className="max-w-[760px] text-white">
                  {/* Hero Subtitle */}
                  <span className={`inline-block text-[12px] md:text-[13px] tracking-[4px] uppercase text-[#e0d5c5] font-medium mb-3 md:mb-4 transition-all duration-700 delay-100 ${
                    isActive ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                  }`}>
                    {slide.subtitle}
                  </span>

                  {/* Main Title */}
                  <h1 className={`font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-white leading-[1.08] mb-4 md:mb-5 drop-shadow-md transition-all duration-700 delay-200 ${
                    isActive ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
                  }`}>
                    {slide.title}
                  </h1>

                  {/* Description Paragraph */}
                  <p className={`text-sm sm:text-base text-white/90 max-w-[540px] mx-auto mb-7 md:mb-9 font-light tracking-[0.5px] leading-relaxed transition-all duration-700 delay-300 ${
                    isActive ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
                  }`}>
                    {slide.description}
                  </p>

                  {/* CTA Button */}
                  <div className={`transition-all duration-700 delay-400 ${
                    isActive ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
                  }`}>
                    <button
                      onClick={() => onCtaClick(slide.ctaLink)}
                      className="inline-flex items-center justify-center px-8 sm:px-10 py-3.5 sm:py-4 bg-white text-[#1a1a1a] text-xs sm:text-[13px] font-semibold tracking-[2px] uppercase shadow-md hover:bg-[#1a1a1a] hover:text-white transition-all duration-300 cursor-pointer"
                    >
                      {slide.ctaText}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Slider Chevron Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 w-11 h-11 md:w-12 md:h-12 flex items-center justify-center text-white bg-white/15 backdrop-blur-md border border-white/25 rounded-xs hover:bg-white/35 transition-all duration-200 focus:outline-none"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 w-11 h-11 md:w-12 md:h-12 flex items-center justify-center text-white bg-white/15 backdrop-blur-md border border-white/25 rounded-xs hover:bg-white/35 transition-all duration-200 focus:outline-none"
        aria-label="Next slide"
      >
        <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
      </button>

      {/* Slider Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2.5">
        {HERO_SLIDES.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`transition-all duration-300 rounded-full focus:outline-none ${
              idx === current
                ? 'w-7 h-2 bg-white'
                : 'w-2 h-2 bg-white/40 hover:bg-white/70'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
};
