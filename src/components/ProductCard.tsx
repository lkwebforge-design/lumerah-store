import React from 'react';
import { Eye, ShoppingBag, Heart } from 'lucide-react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onQuickView: (product: Product) => void;
  onAddToCart: (product: Product) => void;
  onToggleWishlist: (product: Product) => void;
  isWishlisted: boolean;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onQuickView,
  onAddToCart,
  onToggleWishlist,
  isWishlisted,
}) => {
  return (
    <div className="group flex flex-col text-center transition-all duration-300">
      {/* Product Image Frame */}
      <div className="relative aspect-[3/4] overflow-hidden bg-[#f8f6f3] mb-3 border border-[#f0ebe1] rounded-xs">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-106"
        />

        {/* Badges */}
        <div className="absolute top-2.5 left-2.5 flex flex-col gap-1 z-10">
          {product.isSale && (
            <span className="bg-[#8b1e2b] text-white px-2 py-0.5 text-[9px] md:text-[10px] font-semibold tracking-[1px] uppercase">
              Sale
            </span>
          )}
          {product.isNew && (
            <span className="bg-[#1a1a1a] text-white px-2 py-0.5 text-[9px] md:text-[10px] font-semibold tracking-[1px] uppercase">
              New
            </span>
          )}
        </div>

        {/* Wishlist Button (Always accessible top right) */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onToggleWishlist(product);
          }}
          className={`absolute top-2.5 right-2.5 z-10 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 shadow-xs ${
            isWishlisted
              ? 'bg-[#8b1e2b] text-white'
              : 'bg-white/90 text-[#444] hover:text-[#8b1e2b] hover:bg-white'
          }`}
          aria-label={isWishlisted ? 'Remove from wishlist' : 'Add to wishlist'}
        >
          <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-current' : ''}`} />
        </button>

        {/* Hover Action Overlay */}
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-3">
          <div className="w-full flex items-center gap-2 transform translate-y-3 group-hover:translate-y-0 transition-transform duration-300">
            <button
              onClick={() => onQuickView(product)}
              className="flex-1 py-2 px-2 bg-white text-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-white text-[11px] font-medium tracking-[1px] uppercase transition-colors shadow-sm flex items-center justify-center gap-1.5"
            >
              <Eye className="w-3.5 h-3.5" />
              <span>Quick View</span>
            </button>
            <button
              onClick={() => onAddToCart(product)}
              className="py-2 px-3 bg-[#1a1a1a] text-white hover:bg-[#333] transition-colors shadow-sm flex items-center justify-center"
              title="Add to Cart"
            >
              <ShoppingBag className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Product Information */}
      <div className="px-1 flex flex-col flex-1">
        <span className="text-[10px] tracking-[1.5px] uppercase text-[#888] font-light mb-1">
          {product.categoryLabel}
        </span>

        <button
          onClick={() => onQuickView(product)}
          className="text-[13px] md:text-[13.5px] font-normal text-[#1a1a1a] hover:text-[#8b7355] transition-colors mb-1.5 line-clamp-2 text-center"
        >
          {product.name}
        </button>

        {/* Prices in PKR */}
        <div className="mt-auto flex items-center justify-center gap-2 text-xs md:text-[13px]">
          {product.originalPrice ? (
            <>
              <span className="font-semibold text-[#8b1e2b]">
                PKR {product.price.toLocaleString()}
              </span>
              <span className="text-[#999] line-through text-xs font-light">
                PKR {product.originalPrice.toLocaleString()}
              </span>
            </>
          ) : (
            <span className="font-medium text-[#1a1a1a]">
              PKR {product.price.toLocaleString()}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};
