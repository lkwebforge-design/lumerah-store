import React, { useState } from 'react';
import { X, ShoppingBag, Heart, Check, Truck, ShieldCheck, Ruler, Layers } from 'lucide-react';
import { Product } from '../types';

interface QuickViewModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (product: Product, quantity: number, selectedColor?: string) => void;
  onToggleWishlist: (product: Product) => void;
  isWishlisted: boolean;
}

export const QuickViewModal: React.FC<QuickViewModalProps> = ({
  product,
  onClose,
  onAddToCart,
  onToggleWishlist,
  isWishlisted,
}) => {
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState<string | undefined>(
    product?.colors?.[0]?.name
  );
  const [addedNotice, setAddedNotice] = useState(false);

  if (!product) return null;

  const handleAdd = () => {
    onAddToCart(product, quantity, selectedColor);
    setAddedNotice(true);
    setTimeout(() => setAddedNotice(false), 2200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-[920px] bg-white shadow-2xl rounded-xs overflow-hidden z-10 max-h-[92vh] flex flex-col md:flex-row">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-white/80 hover:bg-white text-[#1a1a1a] flex items-center justify-center shadow-xs transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Product Image Gallery Column */}
        <div className="w-full md:w-1/2 bg-[#f8f6f3] p-6 sm:p-8 flex items-center justify-center relative">
          <div className="aspect-[3/4] w-full max-w-[380px] overflow-hidden rounded-xs border border-[#eee8df] shadow-xs">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Badge */}
          {product.isSale && (
            <span className="absolute top-6 left-6 bg-[#8b1e2b] text-white px-2.5 py-1 text-[10px] font-semibold tracking-[1px] uppercase">
              Sale
            </span>
          )}
        </div>

        {/* Product Details Column */}
        <div className="w-full md:w-1/2 p-6 sm:p-8 overflow-y-auto max-h-[500px] md:max-h-[90vh]">
          {/* Category */}
          <span className="text-[11px] tracking-[2px] uppercase text-[#8b7355] font-semibold block mb-1">
            {product.categoryLabel}
          </span>

          {/* Title */}
          <h2 className="font-serif text-2xl sm:text-3xl text-[#1a1a1a] font-normal mb-3 leading-snug">
            {product.name}
          </h2>

          {/* Pricing */}
          <div className="flex items-center gap-3 mb-5">
            <span className="text-xl font-semibold text-[#1a1a1a]">
              PKR {product.price.toLocaleString()}
            </span>
            {product.originalPrice && (
              <span className="text-sm text-[#999] line-through font-light">
                PKR {product.originalPrice.toLocaleString()}
              </span>
            )}
            <span className="text-[11px] text-[#2e7d32] bg-[#e8f5e9] px-2 py-0.5 rounded-xs font-medium">
              In Stock & Ready to Ship
            </span>
          </div>

          {/* Description */}
          <p className="text-xs sm:text-sm text-[#666] leading-relaxed mb-6 font-light border-b border-[#eee] pb-5">
            {product.description}
          </p>

          {/* Color Variations (if available) */}
          {product.colors && product.colors.length > 0 && (
            <div className="mb-6">
              <label className="text-xs font-semibold uppercase tracking-[1px] text-[#1a1a1a] block mb-2">
                Color:{' '}
                <span className="text-[#8b7355] font-normal normal-case ml-1">
                  {selectedColor || product.colors[0].name}
                </span>
              </label>
              <div className="flex items-center gap-2.5">
                {product.colors.map((c) => (
                  <button
                    key={c.name}
                    onClick={() => setSelectedColor(c.name)}
                    className={`w-7 h-7 rounded-full border-2 transition-all p-0.5 ${
                      selectedColor === c.name
                        ? 'border-[#1a1a1a] scale-110'
                        : 'border-transparent hover:scale-105'
                    }`}
                    title={c.name}
                  >
                    <span
                      className="block w-full h-full rounded-full border border-black/15"
                      style={{ backgroundColor: c.hex }}
                    />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Specifications Grid */}
          <div className="grid grid-cols-2 gap-3 mb-6 bg-[#faf8f5] p-3.5 border border-[#eee8df] text-xs">
            <div className="flex items-start gap-2">
              <Ruler className="w-4 h-4 text-[#8b7355] shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold block text-[#333]">Dimensions</span>
                <span className="text-[#666] font-light">{product.dimensions}</span>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <Layers className="w-4 h-4 text-[#8b7355] shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold block text-[#333]">Material</span>
                <span className="text-[#666] font-light">{product.material}</span>
              </div>
            </div>
          </div>

          {/* Quantity Selector and Add to Cart Button */}
          <div className="flex items-center gap-3 mb-6">
            <div className="flex items-center border border-[#ddd] bg-white">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="w-9 h-11 text-base text-[#555] hover:bg-[#f5f5f5] transition-colors"
              >
                -
              </button>
              <span className="w-10 text-center text-sm font-medium">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="w-9 h-11 text-base text-[#555] hover:bg-[#f5f5f5] transition-colors"
              >
                +
              </button>
            </div>

            <button
              onClick={handleAdd}
              className="flex-1 h-11 bg-[#1a1a1a] hover:bg-[#333] text-white text-xs font-semibold tracking-[2px] uppercase transition-all shadow-sm flex items-center justify-center gap-2 cursor-pointer"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>{addedNotice ? 'Added to Bag ✓' : 'Add to Bag'}</span>
            </button>

            <button
              onClick={() => onToggleWishlist(product)}
              className={`w-11 h-11 border border-[#ddd] flex items-center justify-center transition-colors ${
                isWishlisted
                  ? 'bg-[#8b1e2b] border-[#8b1e2b] text-white'
                  : 'hover:border-[#1a1a1a] text-[#444]'
              }`}
              title="Add to wishlist"
            >
              <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-current' : ''}`} />
            </button>
          </div>

          {/* Delivery & Assurance Perks */}
          <div className="space-y-2 pt-2 border-t border-[#eee] text-[11px] text-[#666]">
            <div className="flex items-center gap-2">
              <Truck className="w-3.5 h-3.5 text-[#1a1a1a]" />
              <span>Nationwide delivery in 2-4 working days (COD available)</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-3.5 h-3.5 text-[#1a1a1a]" />
              <span>Free delivery on orders over PKR 5,000 | 7-day exchange</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
