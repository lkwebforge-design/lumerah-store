import React, { useState, useEffect } from 'react';
import { Search, ShoppingBag, Menu, X, Heart, MapPin } from 'lucide-react';

interface HeaderProps {
  cartCount: number;
  wishlistCount: number;
  activeCategory: string;
  onSelectCategory: (categorySlug: string) => void;
  onOpenCart: () => void;
  onOpenWishlist: () => void;
  onOpenTrackOrder: () => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  cartCount,
  wishlistCount,
  activeCategory,
  onSelectCategory,
  onOpenCart,
  onOpenWishlist,
  onOpenTrackOrder,
  searchQuery,
  onSearchChange,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', slug: 'all' },
    { label: 'Hand Bags', slug: 'hand-bags' },
    { label: 'Clutch', slug: 'clutch' },
    { label: 'Shoulder Bags', slug: 'shoulder-bags' },
    { label: 'Totes', slug: 'totes' },
    { label: 'The Mini Edit', slug: 'the-mini-edit' },
    { label: 'Branded Bags', slug: 'branded-bags' },
    { label: 'Shop All', slug: 'all' },
  ];

  const handleNavClick = (slug: string) => {
    onSelectCategory(slug);
    setMobileMenuOpen(false);
    window.scrollTo({ top: slug === 'all' ? 0 : 580, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 bg-white transition-shadow duration-300 shadow-xs">
      {/* Top Announcement Bar */}
      <div className="bg-[#1a1a1a] text-white text-center py-2 px-4 text-[11px] tracking-[1.5px] uppercase font-normal flex items-center justify-center gap-4">
        <span>FREE DELIVERY ON ORDERS OVER PKR 5,000 | CASH ON DELIVERY AVAILABLE</span>
        <button
          onClick={onOpenTrackOrder}
          className="hidden md:inline-flex items-center gap-1 text-[#d8c7b5] hover:text-white transition-colors underline text-[10px] lowercase"
        >
          <MapPin className="w-3 h-3" />
          <span>track order</span>
        </button>
      </div>

      {/* Main Header Inner */}
      <div className={`border-b border-[#eee] transition-all duration-300 ${isScrolled ? 'py-3' : 'py-4'}`}>
        <div className="max-w-[1320px] mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="lg:hidden text-[#1a1a1a] p-1.5 hover:opacity-70 focus:outline-none"
              aria-label="Open navigation menu"
            >
              <Menu className="w-6 h-6" />
            </button>

            {/* Brand Logo */}
            <div className="flex-1 lg:flex-initial text-center lg:text-left">
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('all');
                }}
                className="inline-block transition-transform duration-300 hover:scale-[1.02]"
              >
                <img
                  src="https://lumerah.pk/assets/images/logo-text-b.png"
                  alt="LUMERAH"
                  className="h-8 md:h-10 w-auto object-contain mx-auto lg:mx-0"
                  onError={(e) => {
                    // Fallback to text styling if image fails
                    (e.target as HTMLElement).style.display = 'none';
                    const parent = (e.target as HTMLElement).parentElement;
                    if (parent && !parent.querySelector('.logo-fallback')) {
                      const span = document.createElement('span');
                      span.className = 'logo-fallback font-serif text-2xl md:text-3xl font-semibold tracking-[4px] text-[#1a1a1a] uppercase';
                      span.innerText = 'LUMERAH';
                      parent.appendChild(span);
                    }
                  }}
                />
              </a>
            </div>

            {/* Header Action Icons */}
            <div className="flex items-center gap-4 md:gap-6">
              {/* Search Toggle */}
              <button
                onClick={() => setSearchOpen(!searchOpen)}
                className="text-[#1a1a1a] hover:opacity-60 transition-opacity p-1"
                aria-label="Search products"
              >
                <Search className="w-5 h-5" />
              </button>

              {/* Wishlist Icon */}
              <button
                onClick={onOpenWishlist}
                className="relative text-[#1a1a1a] hover:opacity-60 transition-opacity p-1"
                aria-label="Wishlist"
              >
                <Heart className="w-5 h-5" />
                {wishlistCount > 0 && (
                  <span className="absolute -top-1.5 -right-2 bg-[#8b1e2b] text-white text-[10px] font-semibold w-4 h-4 rounded-full flex items-center justify-center">
                    {wishlistCount}
                  </span>
                )}
              </button>

              {/* Shopping Bag Icon with Cart Count */}
              <button
                onClick={onOpenCart}
                className="relative text-[#1a1a1a] hover:opacity-60 transition-opacity p-1 flex items-center"
                aria-label="Shopping bag"
              >
                <ShoppingBag className="w-5 h-5" />
                <span className="absolute -top-1.5 -right-2 bg-[#1a1a1a] text-white text-[10px] font-semibold w-[18px] h-[18px] rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Main Navigation Bar */}
      <nav className="hidden lg:block border-b border-[#eee] bg-white">
        <div className="max-w-[1320px] mx-auto px-4">
          <ul className="flex items-center justify-center gap-1 py-1">
            {navLinks.map((link, idx) => {
              const isActive = (activeCategory === link.slug) || (activeCategory === '' && link.slug === 'all');
              return (
                <li key={idx}>
                  <button
                    onClick={() => handleNavClick(link.slug)}
                    className={`relative px-4 py-3 text-[12px] font-medium tracking-[1.5px] uppercase transition-colors duration-200 cursor-pointer ${
                      isActive ? 'text-[#1a1a1a] font-semibold' : 'text-[#444] hover:text-[#1a1a1a]'
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-[2px] bg-[#1a1a1a]" />
                    )}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>

      {/* Expandable Search Overlay */}
      {searchOpen && (
        <div className="absolute top-full left-0 right-0 bg-white border-b border-[#eee] py-4 px-4 shadow-lg z-40 animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="max-w-[700px] mx-auto flex items-center gap-3">
            <Search className="w-5 h-5 text-[#888]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Search by bag name, leather, tote, clutch, price..."
              autoFocus
              className="flex-1 py-2 px-3 text-sm md:text-base border border-[#ddd] focus:border-[#1a1a1a] focus:outline-none transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => onSearchChange('')}
                className="text-xs text-[#888] hover:text-[#1a1a1a] uppercase tracking-wider"
              >
                Clear
              </button>
            )}
            <button
              onClick={() => setSearchOpen(false)}
              className="p-1.5 text-[#555] hover:text-[#1a1a1a]"
              aria-label="Close search"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}

      {/* Mobile Menu Slide-Over Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-xs transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Drawer content */}
          <div className="fixed inset-y-0 left-0 w-[300px] max-w-[85%] bg-white shadow-2xl flex flex-col z-50">
            <div className="p-4 border-b border-[#eee] flex items-center justify-between">
              <img
                src="https://lumerah.pk/assets/images/logo-text-b.png"
                alt="LUMERAH"
                className="h-7 w-auto object-contain"
              />
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-1.5 text-[#1a1a1a]"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto py-4 px-4 space-y-1">
              {navLinks.map((link, idx) => (
                <button
                  key={idx}
                  onClick={() => handleNavClick(link.slug)}
                  className={`w-full text-left py-2.5 px-3 text-xs tracking-[1.5px] uppercase rounded-xs transition-colors ${
                    activeCategory === link.slug
                      ? 'bg-[#f4efe8] font-semibold text-[#1a1a1a]'
                      : 'text-[#444] hover:bg-[#faf8f5]'
                  }`}
                >
                  {link.label}
                </button>
              ))}

              <div className="pt-6 mt-6 border-t border-[#eee] space-y-3">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenTrackOrder();
                  }}
                  className="flex items-center gap-2 text-xs text-[#555] hover:text-[#1a1a1a]"
                >
                  <MapPin className="w-4 h-4" />
                  <span>Track Your Order</span>
                </button>
                <div className="text-[11px] text-[#777] leading-relaxed">
                  Support: lumerahstore@gmail.com<br />
                  Nationwide Cash on Delivery (Pakistan)
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
