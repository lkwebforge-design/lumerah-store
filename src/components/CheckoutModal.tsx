import React, { useState } from 'react';
import { X, CheckCircle, ShieldCheck, Truck, ArrowLeft } from 'lucide-react';
import { CartItem } from '../types';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onOrderComplete: (orderData: { orderId: string; total: number }) => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({
  isOpen,
  onClose,
  items,
  onOrderComplete,
}) => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    address: '',
    city: 'Lahore',
    postalCode: '',
    notes: '',
    paymentMethod: 'cod',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [orderConfirmed, setOrderConfirmed] = useState<string | null>(null);

  if (!isOpen) return null;

  const subtotal = items.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );
  const shippingFee = subtotal >= 5000 ? 0 : 250;
  const grandTotal = subtotal + shippingFee;

  const pakistaniCities = [
    'Lahore',
    'Karachi',
    'Islamabad',
    'Rawalpindi',
    'Faisalabad',
    'Multan',
    'Peshawar',
    'Sialkot',
    'Gujranwala',
    'Quetta',
    'Hyderabad',
    'Bahawalpur',
    'Sargodha',
    'Abbottabad',
    'Sukkur',
    'Other City'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate order placement
    setTimeout(() => {
      const generatedOrderId = `LMR-${Math.floor(10000 + Math.random() * 90000)}`;
      setOrderConfirmed(generatedOrderId);
      setIsSubmitting(false);
      onOrderComplete({ orderId: generatedOrderId, total: grandTotal });
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
        onClick={() => {
          if (!orderConfirmed) onClose();
        }}
      />

      {/* Modal Card */}
      <div className="relative w-full max-w-[800px] bg-white shadow-2xl rounded-xs overflow-hidden z-10 max-h-[92vh] flex flex-col">
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-[#eee] flex items-center justify-between bg-[#faf8f5]">
          <div>
            <span className="text-[10px] tracking-[2px] uppercase text-[#8b7355] font-semibold block">
              Secure Checkout
            </span>
            <h3 className="font-serif text-xl sm:text-2xl text-[#1a1a1a] font-normal">
              {orderConfirmed ? 'Order Confirmed!' : 'Cash on Delivery Checkout'}
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

        {/* Modal Body */}
        <div className="p-5 sm:p-7 overflow-y-auto flex-1">
          {orderConfirmed ? (
            <div className="text-center py-8 px-4">
              <div className="w-16 h-16 bg-[#e8f5e9] text-[#2e7d32] rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-10 h-10" />
              </div>

              <span className="text-xs uppercase tracking-[2px] text-[#8b7355] font-semibold">
                Thank you for your order!
              </span>
              <h2 className="font-serif text-3xl text-[#1a1a1a] mt-1 mb-2 font-normal">
                Order #{orderConfirmed}
              </h2>
              <p className="text-sm text-[#666] max-w-[460px] mx-auto mb-6">
                We've received your order and will dispatch it within 24 hours. Our courier partner will contact you before delivery.
              </p>

              <div className="bg-[#faf8f5] border border-[#eee8df] p-4 max-w-[420px] mx-auto text-left text-xs space-y-2 mb-8 rounded-xs">
                <div className="flex justify-between">
                  <span className="text-[#777]">Payment Method:</span>
                  <span className="font-semibold text-[#1a1a1a]">Cash on Delivery</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#777]">Deliver To:</span>
                  <span className="font-semibold text-[#1a1a1a]">{formData.fullName} ({formData.city})</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#777]">Contact Phone:</span>
                  <span className="font-semibold text-[#1a1a1a]">{formData.phone}</span>
                </div>
                <div className="flex justify-between border-t border-[#e2dcd2] pt-2 text-sm font-semibold">
                  <span>Payable at Doorstep:</span>
                  <span className="text-[#8b1e2b]">PKR {grandTotal.toLocaleString()}</span>
                </div>
              </div>

              <button
                onClick={onClose}
                className="px-8 py-3 bg-[#1a1a1a] hover:bg-[#333] text-white text-xs font-semibold tracking-[2px] uppercase transition-colors"
              >
                Continue Browsing
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-12 gap-6">
              {/* Customer and Shipping Details Form */}
              <div className="md:col-span-7 space-y-4">
                <h4 className="text-xs font-semibold tracking-[1px] uppercase text-[#1a1a1a] border-b border-[#eee] pb-2">
                  Shipping Information
                </h4>

                <div>
                  <label className="block text-xs text-[#555] mb-1 font-medium">
                    Full Name <span className="text-[#8b1e2b]">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g. Fatima Ali"
                    className="w-full px-3 py-2 text-xs md:text-sm border border-[#ddd] focus:border-[#1a1a1a] focus:outline-none"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs text-[#555] mb-1 font-medium">
                      Phone Number <span className="text-[#8b1e2b]">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="0300 1234567"
                      className="w-full px-3 py-2 text-xs md:text-sm border border-[#ddd] focus:border-[#1a1a1a] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-[#555] mb-1 font-medium">
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@gmail.com"
                      className="w-full px-3 py-2 text-xs md:text-sm border border-[#ddd] focus:border-[#1a1a1a] focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs text-[#555] mb-1 font-medium">
                    Complete Street Address <span className="text-[#8b1e2b]">*</span>
                  </label>
                  <textarea
                    required
                    rows={2}
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    placeholder="House/Flat number, Street name, Area/Sector"
                    className="w-full px-3 py-2 text-xs md:text-sm border border-[#ddd] focus:border-[#1a1a1a] focus:outline-none resize-none"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs text-[#555] mb-1 font-medium">
                      City <span className="text-[#8b1e2b]">*</span>
                    </label>
                    <select
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full px-3 py-2 text-xs md:text-sm border border-[#ddd] focus:border-[#1a1a1a] focus:outline-none bg-white"
                    >
                      {pakistaniCities.map((c) => (
                        <option key={c} value={c}>{c}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs text-[#555] mb-1 font-medium">
                      Postal Code (optional)
                    </label>
                    <input
                      type="text"
                      value={formData.postalCode}
                      onChange={(e) => setFormData({ ...formData, postalCode: e.target.value })}
                      placeholder="e.g. 54000"
                      className="w-full px-3 py-2 text-xs md:text-sm border border-[#ddd] focus:border-[#1a1a1a] focus:outline-none"
                    />
                  </div>
                </div>

                {/* Payment Method Selector */}
                <div className="pt-2">
                  <label className="block text-xs font-semibold tracking-[1px] uppercase text-[#1a1a1a] mb-2">
                    Payment Method
                  </label>
                  <div className="p-3 border border-[#1a1a1a] bg-[#faf8f5] flex items-center gap-3">
                    <input
                      type="radio"
                      id="cod"
                      name="paymentMethod"
                      checked={formData.paymentMethod === 'cod'}
                      onChange={() => setFormData({ ...formData, paymentMethod: 'cod' })}
                      className="accent-[#1a1a1a]"
                    />
                    <label htmlFor="cod" className="flex-1 cursor-pointer">
                      <span className="font-semibold text-xs text-[#1a1a1a] block">
                        Cash On Delivery (COD)
                      </span>
                      <span className="text-[11px] text-[#666]">
                        Inspect parcel & pay cash directly to the courier.
                      </span>
                    </label>
                  </div>
                </div>
              </div>

              {/* Order Summary Column */}
              <div className="md:col-span-5 bg-[#faf8f5] p-4 sm:p-5 border border-[#eee8df] flex flex-col justify-between">
                <div>
                  <h4 className="text-xs font-semibold tracking-[1px] uppercase text-[#1a1a1a] border-b border-[#e2dcd2] pb-2 mb-3">
                    Order Summary ({items.reduce((acc, i) => acc + i.quantity, 0)})
                  </h4>

                  {/* Items mini list */}
                  <div className="max-h-[160px] overflow-y-auto divide-y divide-[#eee8df] text-xs pr-1">
                    {items.map((item, idx) => (
                      <div key={idx} className="py-2 flex items-center justify-between gap-2">
                        <div className="flex items-center gap-2">
                          <img
                            src={item.product.image}
                            alt={item.product.name}
                            className="w-10 h-12 object-cover border border-[#ddd]"
                          />
                          <div>
                            <span className="font-medium text-[#1a1a1a] line-clamp-1 block">
                              {item.product.name}
                            </span>
                            <span className="text-[10px] text-[#777]">
                              Qty: {item.quantity} {item.selectedColor ? `· ${item.selectedColor}` : ''}
                            </span>
                          </div>
                        </div>
                        <span className="font-medium shrink-0">
                          PKR {(item.product.price * item.quantity).toLocaleString()}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Cost breakdown */}
                  <div className="pt-3 border-t border-[#e2dcd2] space-y-1.5 text-xs text-[#555] mt-3">
                    <div className="flex justify-between">
                      <span>Subtotal</span>
                      <span className="font-medium text-[#1a1a1a]">PKR {subtotal.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Shipping Fee</span>
                      {shippingFee === 0 ? (
                        <span className="text-[#2e7d32] font-semibold uppercase text-[10px]">FREE</span>
                      ) : (
                        <span className="font-medium text-[#1a1a1a]">PKR {shippingFee}</span>
                      )}
                    </div>
                    <div className="flex justify-between pt-2 border-t border-[#e2dcd2] text-sm font-semibold text-[#1a1a1a]">
                      <span>Total Payable</span>
                      <span className="text-[#8b1e2b]">PKR {grandTotal.toLocaleString()}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 space-y-3">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 bg-[#1a1a1a] hover:bg-[#333] disabled:opacity-50 text-white text-xs font-semibold tracking-[2px] uppercase transition-colors shadow-md flex items-center justify-center gap-2 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <span>Placing Order...</span>
                    ) : (
                      <span>Place Order with COD</span>
                    )}
                  </button>

                  <div className="text-[10px] text-[#888] text-center flex items-center justify-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#2e7d32]" />
                    <span>Safe & encrypted order placement</span>
                  </div>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
