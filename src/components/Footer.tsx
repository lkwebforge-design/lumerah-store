import React, { useState } from 'react';
import { Mail, Check, MapPin, Phone, ShieldCheck } from 'lucide-react';

interface FooterProps {
  onSelectCategory: (categorySlug: string) => void;
  onOpenTrackOrder: () => void;
  onOpenCart: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onSelectCategory,
  onOpenTrackOrder,
  onOpenCart,
}) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 5000);
      setEmail('');
    }
  };

  const categories = [
    { name: 'Hand Bags', slug: 'hand-bags' },
    { name: 'Clutch', slug: 'clutch' },
    { name: 'Shoulder Bags', slug: 'shoulder-bags' },
    { name: 'Totes', slug: 'totes' },
    { name: 'The Mini Edit', slug: 'the-mini-edit' },
    { name: 'Branded Bags', slug: 'branded-bags' },
  ];

  return (
    <footer className="bg-[#171717] text-[#a0a0a0] pt-16 pb-8 border-t border-[#262626]">
      <div className="max-w-[1320px] mx-auto px-4">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 border-b border-[#292929]">
          {/* Brand Col */}
          <div className="lg:col-span-4 space-y-4">
            <a href="#" className="inline-block">
              <img
                src="https://lumerah.pk/assets/images/logo-text-w.png"
                alt="LUMERAH"
                className="h-10 w-auto object-contain"
                onError={(e) => {
                  (e.target as HTMLElement).style.display = 'none';
                  const parent = (e.target as HTMLElement).parentElement;
                  if (parent && !parent.querySelector('.footer-logo-fallback')) {
                    const span = document.createElement('span');
                    span.className = 'footer-logo-fallback font-serif text-3xl font-semibold tracking-[4px] text-white uppercase';
                    span.innerText = 'LUMERAH';
                    parent.appendChild(span);
                  }
                }}
              />
            </a>
            <p className="text-xs sm:text-[13px] leading-relaxed text-[#8e8e8e] font-light max-w-[340px]">
              Discover the latest trends in fashion with our curated collection of premium leather handbags, luxury tote bags, and sculpted accessories that elevate your style.
            </p>
            <div className="pt-2 text-xs text-[#b8a88a] space-y-1 font-light">
              <p>Nationwide Cash On Delivery Across Pakistan</p>
              <p>Delivery in 2–4 Business Days via Express Courier</p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-semibold tracking-[1.5px] uppercase text-white mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <button
                  onClick={() => onSelectCategory('all')}
                  className="hover:text-white transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectCategory('all')}
                  className="hover:text-white transition-colors"
                >
                  Shop All Products
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenCart}
                  className="hover:text-white transition-colors"
                >
                  Shopping Bag
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenTrackOrder}
                  className="hover:text-white transition-colors"
                >
                  Track Your Order
                </button>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-semibold tracking-[1.5px] uppercase text-white mb-4">
              Collections
            </h4>
            <ul className="space-y-2.5 text-xs">
              {categories.map((c) => (
                <li key={c.slug}>
                  <button
                    onClick={() => onSelectCategory(c.slug)}
                    className="hover:text-white transition-colors"
                  >
                    {c.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Signup */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-semibold tracking-[1.5px] uppercase text-white mb-4">
              Join The Lumerah Circle
            </h4>
            <p className="text-xs text-[#888] mb-3 font-light leading-relaxed">
              Subscribe to receive private previews, summer collections, and a voucher for your next bag.
            </p>

            <form onSubmit={handleSubscribe} className="space-y-2">
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="w-full bg-[#222] border border-[#333] px-3 py-2.5 text-xs text-white placeholder-[#666] focus:border-[#b8a88a] focus:outline-none transition-colors"
                />
                <button
                  type="submit"
                  className="absolute right-1 top-1 bottom-1 px-3 bg-[#333] hover:bg-[#b8a88a] hover:text-[#1a1a1a] text-white text-[11px] uppercase tracking-wider font-semibold transition-colors"
                >
                  Join
                </button>
              </div>

              {subscribed && (
                <div className="p-2 bg-[#1e2a1e] border border-[#2e5a2e] text-[#85e085] text-[11px] rounded-xs flex items-center gap-1.5 animate-in fade-in">
                  <Check className="w-3.5 h-3.5 shrink-0" />
                  <span>Use code <strong>LUMERAH10</strong> for 10% off at checkout!</span>
                </div>
              )}
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-[#666] gap-4">
          <p>© 2026 Lumerah. All rights reserved.</p>
          <div className="flex items-center gap-4 text-[11px]">
            <span>Cash On Delivery</span>
            <span>·</span>
            <span>TCS / Leopards Tracking</span>
            <span>·</span>
            <span>Pakistan Nationwide</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
