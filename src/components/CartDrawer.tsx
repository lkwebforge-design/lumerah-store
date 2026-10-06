import React from 'react';
import { X, Trash2, ShoppingBag, ArrowRight, Truck } from 'lucide-react';
import { CartItem } from '../types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (productId: string, quantity: number, selectedColor?: string) => void;
  onRemoveItem: (productId: string, selectedColor?: string) => void;
  onStartCheckout: () => void;
  onContinueShopping: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onStartCheckout,
  onContinueShopping,
}) => {
  if (!isOpen) return null;

  const subtotal = items.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );
  const freeShippingThreshold = 5000;
  const amountNeededForFreeShipping = Math.max(0, freeShippingThreshold - subtotal);
  const progressPercent = Math.min(100, (subtotal / freeShippingThreshold) * 100);

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      {/* Drawer content */}
      <div className="relative w-full max-w-[420px] bg-white h-full shadow-2xl flex flex-col z-10 animate-in slide-in-from-right duration-300">
        {/* Header */}
        <div className="p-4 md:p-5 border-b border-[#eee] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-[#1a1a1a]" />
            <h3 className="font-serif text-xl text-[#1a1a1a] font-normal tracking-[0.5px]">
              Shopping Bag ({items.reduce((acc, i) => acc + i.quantity, 0)})
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-[#555] hover:text-[#1a1a1a] transition-colors"
            aria-label="Close cart"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Free Shipping Progress Indicator */}
        <div className="px-5 py-3.5 bg-[#faf8f5] border-b border-[#eee8df]">
          <div className="flex items-center gap-2 text-xs mb-2">
            <Truck className="w-4 h-4 text-[#8b7355] shrink-0" />
            {amountNeededForFreeShipping > 0 ? (
              <span className="text-[#555]">
                Add <strong className="text-[#1a1a1a]">PKR {amountNeededForFreeShipping.toLocaleString()}</strong> more to get <strong className="text-[#8b1e2b]">FREE Delivery</strong>!
              </span>
            ) : (
              <span className="text-[#2e7d32] font-medium">
                You've unlocked <strong>FREE Delivery</strong> nationwide!
              </span>
            )}
          </div>
          <div className="w-full bg-[#e5dfd5] h-1.5 rounded-full overflow-hidden">
            <div
              className={`h-full transition-all duration-500 rounded-full ${
                amountNeededForFreeShipping === 0 ? 'bg-[#2e7d32]' : 'bg-[#1a1a1a]'
              }`}
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>

        {/* Cart Items List */}
        <div className="flex-1 overflow-y-auto p-4 md:p-5 divide-y divide-[#eee]">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center p-6 text-[#777]">
              <div className="w-16 h-16 rounded-full bg-[#f8f6f3] flex items-center justify-center mb-4 text-[#999]">
                <ShoppingBag className="w-8 h-8" />
              </div>
              <h4 className="font-serif text-xl text-[#1a1a1a] mb-2">Your Bag is Empty</h4>
              <p className="text-xs text-[#777] mb-6 max-w-[240px]">
                Explore our handcrafted totes, luxury clutches, and structured handbags.
              </p>
              <button
                onClick={() => {
                  onClose();
                  onContinueShopping();
                }}
                className="px-6 py-2.5 bg-[#1a1a1a] text-white text-xs font-semibold tracking-[1.5px] uppercase hover:bg-[#333] transition-colors"
              >
                Start Shopping
              </button>
            </div>
          ) : (
            items.map((item, idx) => (
              <div key={`${item.product.id}-${item.selectedColor || ''}-${idx}`} className="py-4 first:pt-0 flex gap-3.5">
                {/* Thumbnail */}
                <div className="w-20 h-24 bg-[#f8f6f3] border border-[#eee8df] shrink-0 overflow-hidden rounded-xs">
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Info */}
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-start justify-between gap-2">
                      <h4 className="text-xs font-medium text-[#1a1a1a] line-clamp-2">
                        {item.product.name}
                      </h4>
                      <button
                        onClick={() => onRemoveItem(item.product.id, item.selectedColor)}
                        className="text-[#999] hover:text-[#8b1e2b] transition-colors p-0.5"
                        aria-label="Remove item"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    {item.selectedColor && (
                      <span className="text-[11px] text-[#777] block mt-0.5">
                        Color: {item.selectedColor}
                      </span>
                    )}

                    <span className="text-xs font-semibold text-[#1a1a1a] block mt-1">
                      PKR {item.product.price.toLocaleString()}
                    </span>
                  </div>

                  {/* Quantity selector */}
                  <div className="flex items-center gap-2 mt-2">
                    <div className="flex items-center border border-[#ddd] bg-white h-7">
                      <button
                        onClick={() =>
                          onUpdateQuantity(
                            item.product.id,
                            Math.max(1, item.quantity - 1),
                            item.selectedColor
                          )
                        }
                        className="w-6 h-full text-xs text-[#555] hover:bg-[#f5f5f5]"
                      >
                        -
                      </button>
                      <span className="w-7 text-center text-xs font-medium">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() =>
                          onUpdateQuantity(
                            item.product.id,
                            item.quantity + 1,
                            item.selectedColor
                          )
                        }
                        className="w-6 h-full text-xs text-[#555] hover:bg-[#f5f5f5]"
                      >
                        +
                      </button>
                    </div>

                    <span className="text-xs text-[#777] font-light ml-auto">
                      Subtotal: PKR {(item.product.price * item.quantity).toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="p-4 md:p-5 border-t border-[#eee] bg-[#faf8f5] space-y-3">
            <div className="flex items-center justify-between text-sm">
              <span className="text-[#555]">Subtotal</span>
              <span className="font-semibold text-base text-[#1a1a1a]">
                PKR {subtotal.toLocaleString()}
              </span>
            </div>

            <p className="text-[11px] text-[#777] leading-tight">
              Taxes calculated at checkout. Cash on Delivery available across Pakistan.
            </p>

            <button
              onClick={onStartCheckout}
              className="w-full py-3.5 bg-[#1a1a1a] hover:bg-[#333] text-white text-xs font-semibold tracking-[2px] uppercase transition-colors shadow-md flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Proceed to Checkout</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
