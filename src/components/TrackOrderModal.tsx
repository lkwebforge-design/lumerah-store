import React, { useState } from 'react';
import { X, Search, CheckCircle2, Clock, Truck, PackageCheck, AlertCircle } from 'lucide-react';

interface TrackOrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialOrderId?: string;
}

export const TrackOrderModal: React.FC<TrackOrderModalProps> = ({
  isOpen,
  onClose,
  initialOrderId = '',
}) => {
  const [orderQuery, setOrderQuery] = useState(initialOrderId);
  const [trackingResult, setTrackingResult] = useState<any | null>(null);
  const [loading, setLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);

  if (!isOpen) return null;

  const handleTrack = (e: React.FormEvent) => {
    e.preventDefault();
    if (!orderQuery.trim()) return;

    setLoading(true);
    setHasSearched(true);

    setTimeout(() => {
      setLoading(false);
      // Realistic simulated tracker result
      setTrackingResult({
        orderId: orderQuery.toUpperCase().startsWith('LMR-') ? orderQuery.toUpperCase() : `LMR-${orderQuery}`,
        status: 'In Transit',
        courier: 'TCS Express Pakistan',
        consignmentNo: `7739${Math.floor(100000 + Math.random() * 900000)}`,
        estimatedDelivery: 'Within 1-2 Business Days',
        destination: 'Customer Address',
        steps: [
          { title: 'Order Placed & Confirmed', date: 'April 04, 2026 - 10:30 AM', completed: true },
          { title: 'Quality Inspected & Dispatched from Warehouse', date: 'April 05, 2026 - 02:15 PM', completed: true },
          { title: 'In Transit with Courier (TCS)', date: 'April 06, 2026 - 09:40 AM', completed: true },
          { title: 'Out for Doorstep Delivery', date: 'Expected Tomorrow', completed: false },
          { title: 'Delivered & Cash Collected', date: 'Pending', completed: false },
        ]
      });
    }, 800);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      {/* Modal Card */}
      <div className="relative w-full max-w-[580px] bg-white shadow-2xl rounded-xs overflow-hidden z-10 max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-[#eee] flex items-center justify-between bg-[#faf8f5]">
          <div>
            <span className="text-[10px] tracking-[2px] uppercase text-[#8b7355] font-semibold block">
              Consignment Status
            </span>
            <h3 className="font-serif text-xl sm:text-2xl text-[#1a1a1a] font-normal">
              Track Your Order
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
        <div className="p-5 sm:p-6 overflow-y-auto flex-1">
          <form onSubmit={handleTrack} className="mb-6">
            <label className="block text-xs font-medium text-[#444] mb-1.5">
              Enter Order Number or Phone Number:
            </label>
            <div className="flex gap-2">
              <input
                type="text"
                value={orderQuery}
                onChange={(e) => setOrderQuery(e.target.value)}
                placeholder="e.g. LMR-84291 or 03001234567"
                required
                className="flex-1 px-3 py-2 text-xs sm:text-sm border border-[#ddd] focus:border-[#1a1a1a] focus:outline-none"
              />
              <button
                type="submit"
                disabled={loading}
                className="px-5 py-2 bg-[#1a1a1a] hover:bg-[#333] text-white text-xs font-semibold tracking-[1px] uppercase transition-colors shrink-0"
              >
                {loading ? 'Searching...' : 'Track'}
              </button>
            </div>
            <span className="text-[11px] text-[#888] mt-1.5 block">
              Demo order ID: enter <strong>LMR-84291</strong> or any order number.
            </span>
          </form>

          {trackingResult && (
            <div className="border border-[#eee8df] bg-[#faf8f5] p-5 rounded-xs space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#eee8df] pb-3">
                <div>
                  <span className="text-xs text-[#888]">Order ID</span>
                  <h4 className="font-semibold text-sm text-[#1a1a1a]">{trackingResult.orderId}</h4>
                </div>
                <div>
                  <span className="text-xs text-[#888]">Courier Partner</span>
                  <div className="text-xs font-medium text-[#1a1a1a] flex items-center gap-1.5">
                    <Truck className="w-3.5 h-3.5 text-[#8b7355]" />
                    <span>{trackingResult.courier}</span>
                  </div>
                </div>
                <div>
                  <span className="text-xs text-[#888]">Consignment #</span>
                  <div className="text-xs font-mono font-medium text-[#1a1a1a]">
                    {trackingResult.consignmentNo}
                  </div>
                </div>
              </div>

              {/* Steps timeline */}
              <div className="space-y-4 pt-2">
                {trackingResult.steps.map((s: any, idx: number) => (
                  <div key={idx} className="flex items-start gap-3 relative">
                    <div className="shrink-0 mt-0.5">
                      {s.completed ? (
                        <CheckCircle2 className="w-4 h-4 text-[#2e7d32]" />
                      ) : (
                        <Clock className="w-4 h-4 text-[#bbb]" />
                      )}
                    </div>
                    <div className="flex-1">
                      <h5 className={`text-xs font-medium ${s.completed ? 'text-[#1a1a1a]' : 'text-[#888]'}`}>
                        {s.title}
                      </h5>
                      <span className="text-[11px] text-[#999] block font-light">
                        {s.date}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
