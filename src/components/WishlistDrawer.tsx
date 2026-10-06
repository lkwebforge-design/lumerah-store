import React from 'react';
import { X, Heart, ShoppingBag, Trash2 } from 'lucide-react';
import { Product } from '../types';

interface WishlistDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  wishlist: Product[];
  onRemoveFromWishlist: (productId: string) => void;
  onAddToCart: (product: Product) => void;
}

export const WishlistDrawer: React.FC<WishlistDrawerProps> = ({
  isOpen,
  onClose,
  wishlist,
  onRemoveFromWishlist,
  onAddToCart,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      {/* Drawer */}
      <div className="relative w-full max-w-[400px] bg-white h-full shadow-2xl flex flex-col z-10 animate-in slide-in-from-right duration-300">
        {/* Header */}
        <div className="p-4 md:p-5 border-b border-[#eee] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Heart className="w-5 h-5 text-[#8b1e2b] fill-[#8b1e2b]" />
            <h3 className="font-serif text-xl text-[#1a1a1a] font-normal tracking-[0.5px]">
              My Wishlist ({wishlist.length})
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-[#555] hover:text-[#1a1a1a] transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Wishlist Items List */}
        <div className="flex-1 overflow-y-auto p-4 divide-y divide-[#eee]">
          {wishlist.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center p-6 text-[#777]">
              <div className="w-16 h-16 rounded-full bg-[#faf8f5] flex items-center justify-center mb-4 text-[#bbb]">
                <Heart className="w-8 h-8" />
              </div>
              <h4 className="font-serif text-xl text-[#1a1a1a] mb-2">Wishlist is Empty</h4>
              <p className="text-xs text-[#777] max-w-[240px]">
                Click the heart icon on any bag to save it to your wishlist for later.
              </p>
            </div>
          ) : (
            wishlist.map((product) => (
              <div key={product.id} className="py-4 first:pt-0 flex gap-3.5 items-center">
                <div className="w-16 h-20 bg-[#f8f6f3] border border-[#eee8df] shrink-0 overflow-hidden rounded-xs">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="flex-1 min-w-0">
                  <h4 className="text-xs font-medium text-[#1a1a1a] line-clamp-1 mb-1">
                    {product.name}
                  </h4>
                  <span className="text-xs font-semibold text-[#1a1a1a] block mb-2">
                    PKR {product.price.toLocaleString()}
                  </span>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => {
                        onAddToCart(product);
                        onRemoveFromWishlist(product.id);
                      }}
                      className="px-3 py-1 bg-[#1a1a1a] hover:bg-[#333] text-white text-[11px] font-medium tracking-[1px] uppercase transition-colors flex items-center gap-1.5"
                    >
                      <ShoppingBag className="w-3 h-3" />
                      <span>Move to Bag</span>
                    </button>
                    <button
                      onClick={() => onRemoveFromWishlist(product.id)}
                      className="text-[#999] hover:text-[#8b1e2b] p-1 transition-colors"
                      title="Remove"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};
