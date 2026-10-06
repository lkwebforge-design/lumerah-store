import React from 'react';
import { Truck, ShieldCheck, RefreshCw, Sparkles } from 'lucide-react';

export const TrustBadges: React.FC = () => {
  const perks = [
    {
      icon: <Truck className="w-5 h-5 text-[#1a1a1a]" />,
      title: 'Free Shipping Nationwide',
      desc: 'On all orders above PKR 5,000'
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-[#1a1a1a]" />,
      title: 'Cash On Delivery',
      desc: 'Inspect & pay right at your doorstep'
    },
    {
      icon: <RefreshCw className="w-5 h-5 text-[#1a1a1a]" />,
      title: '7-Day Easy Returns',
      desc: 'Hassle-free size & style exchange'
    },
    {
      icon: <Sparkles className="w-5 h-5 text-[#1a1a1a]" />,
      title: 'Handcrafted Quality',
      desc: 'Premium textured leather & hardware'
    }
  ];

  return (
    <section className="border-y border-[#eee] bg-[#faf8f5] py-8">
      <div className="max-w-[1320px] mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {perks.map((p, idx) => (
            <div key={idx} className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-3.5">
              <div className="w-10 h-10 rounded-full bg-white shadow-xs border border-[#e5dfd5] flex items-center justify-center shrink-0">
                {p.icon}
              </div>
              <div>
                <h4 className="text-[13px] font-semibold tracking-[0.5px] uppercase text-[#1a1a1a]">
                  {p.title}
                </h4>
                <p className="text-xs text-[#777] mt-0.5">
                  {p.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
