import React, { useState, useEffect, useMemo } from 'react';
import { Header } from './components/Header';
import { HeroSlider } from './components/HeroSlider';
import { TrustBadges } from './components/TrustBadges';
import { CategoriesSection } from './components/CategoriesSection';
import { ProductCard } from './components/ProductCard';
import { PromoBanner } from './components/PromoBanner';
import { BrandStory } from './components/BrandStory';
import { TestimonialsSection } from './components/TestimonialsSection';
import { Footer } from './components/Footer';
import { QuickViewModal } from './components/QuickViewModal';
import { CartDrawer } from './components/CartDrawer';
import { WishlistDrawer } from './components/WishlistDrawer';
import { CheckoutModal } from './components/CheckoutModal';
import { TrackOrderModal } from './components/TrackOrderModal';
import { PRODUCTS, CATEGORIES } from './data/products';
import { Product, CartItem } from './types';
import { SlidersHorizontal, ArrowUpDown, Check } from 'lucide-react';

export default function App() {
  // Cart state persisted to localStorage
  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('lumerah_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Wishlist state persisted to localStorage
  const [wishlist, setWishlist] = useState<Product[]>(() => {
    try {
      const saved = localStorage.getItem('lumerah_wishlist');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // UI state
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc' | 'name'>('featured');
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [isTrackOrderOpen, setIsTrackOrderOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Sync to localStorage
  useEffect(() => {
    localStorage.setItem('lumerah_cart', JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem('lumerah_wishlist', JSON.stringify(wishlist));
  }, [wishlist]);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  // Cart operations
  const handleAddToCart = (product: Product, quantity = 1, selectedColor?: string) => {
    const color = selectedColor || product.colors?.[0]?.name;
    setCart((prevCart) => {
      const existingIdx = prevCart.findIndex(
        (item) => item.product.id === product.id && item.selectedColor === color
      );
      if (existingIdx > -1) {
        const updated = [...prevCart];
        updated[existingIdx].quantity += quantity;
        return updated;
      } else {
        return [...prevCart, { product, quantity, selectedColor: color }];
      }
    });
    showToast(`Added "${product.name}" to your bag`);
  };

  const handleUpdateCartQuantity = (productId: string, quantity: number, selectedColor?: string) => {
    setCart((prevCart) =>
      prevCart.map((item) => {
        if (item.product.id === productId && item.selectedColor === selectedColor) {
          return { ...item, quantity };
        }
        return item;
      })
    );
  };

  const handleRemoveFromCart = (productId: string, selectedColor?: string) => {
    setCart((prevCart) =>
      prevCart.filter(
        (item) => !(item.product.id === productId && item.selectedColor === selectedColor)
      )
    );
  };

  // Wishlist operations
  const handleToggleWishlist = (product: Product) => {
    setWishlist((prevWishlist) => {
      const exists = prevWishlist.some((p) => p.id === product.id);
      if (exists) {
        showToast(`Removed from wishlist`);
        return prevWishlist.filter((p) => p.id !== product.id);
      } else {
        showToast(`Saved to wishlist`);
        return [...prevWishlist, product];
      }
    });
  };

  const handleRemoveFromWishlist = (productId: string) => {
    setWishlist((prev) => prev.filter((p) => p.id !== productId));
  };

  // Filtered and sorted products
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      // Category filter
      if (activeCategory !== 'all' && product.category !== activeCategory) {
        return false;
      }
      // Search filter
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchesName = product.name.toLowerCase().includes(query);
        const matchesCat = product.categoryLabel.toLowerCase().includes(query);
        const matchesDesc = product.description.toLowerCase().includes(query);
        const matchesMaterial = product.material.toLowerCase().includes(query);
        if (!matchesName && !matchesCat && !matchesDesc && !matchesMaterial) {
          return false;
        }
      }
      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-asc') return a.price - b.price;
      if (sortBy === 'price-desc') return b.price - a.price;
      if (sortBy === 'name') return a.name.localeCompare(b.name);
      return 0; // default featured
    });
  }, [activeCategory, searchQuery, sortBy]);

  // New arrivals slice
  const newArrivals = useMemo(() => {
    return PRODUCTS.filter((p) => p.isNew || p.featured).slice(0, 8);
  }, []);

  const totalCartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  const handleSelectCategory = (catSlug: string) => {
    setActiveCategory(catSlug);
    // Smooth scroll down to products section
    const elem = document.getElementById('products-section');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col font-sans-clean text-[#1a1a1a]">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#1a1a1a] text-white px-5 py-3 rounded-xs shadow-xl flex items-center gap-2.5 text-xs tracking-wider animate-in fade-in slide-in-from-bottom-2 duration-200">
          <Check className="w-4 h-4 text-[#85e085]" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Header */}
      <Header
        cartCount={totalCartCount}
        wishlistCount={wishlist.length}
        activeCategory={activeCategory}
        onSelectCategory={handleSelectCategory}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenWishlist={() => setIsWishlistOpen(true)}
        onOpenTrackOrder={() => setIsTrackOrderOpen(true)}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />

      <main className="flex-1">
        {/* Hero Slider */}
        <HeroSlider
          onCtaClick={(link) => {
            if (link === 'totes') handleSelectCategory('totes');
            else if (link === 'featured') {
              const elem = document.getElementById('products-section');
              elem?.scrollIntoView({ behavior: 'smooth' });
            } else {
              handleSelectCategory('all');
            }
          }}
        />

        {/* Trust Badges */}
        <TrustBadges />

        {/* Categories Section */}
        <CategoriesSection onSelectCategory={handleSelectCategory} />

        {/* Featured Products Collection Section */}
        <section id="products-section" className="py-14 md:py-20 bg-white border-t border-[#f0ede6]">
          <div className="max-w-[1320px] mx-auto px-4">
            {/* Section Header */}
            <div className="text-center mb-8 md:mb-10">
              <span className="text-[11px] tracking-[3px] uppercase text-[#8b7355] font-semibold block mb-2">
                Handcrafted Essentials
              </span>
              <h2 className="font-serif text-3xl md:text-4xl text-[#1a1a1a] font-normal tracking-[2px]">
                {activeCategory === 'all'
                  ? 'Featured Collection'
                  : CATEGORIES.find((c) => c.slug === activeCategory)?.name || 'Collection'}
              </h2>
              <div className="w-14 h-[1px] bg-[#1a1a1a] mx-auto mt-4" />
            </div>

            {/* Filter and Sort Bar */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8 pb-4 border-b border-[#eee]">
              {/* Category Filter Tabs */}
              <div className="flex items-center gap-1 overflow-x-auto max-w-full pb-2 sm:pb-0 scrollbar-none">
                <button
                  onClick={() => setActiveCategory('all')}
                  className={`px-3 py-1.5 text-xs tracking-wider uppercase transition-colors shrink-0 cursor-pointer ${
                    activeCategory === 'all'
                      ? 'bg-[#1a1a1a] text-white font-medium'
                      : 'text-[#666] hover:text-[#1a1a1a] bg-[#faf8f5]'
                  }`}
                >
                  All ({PRODUCTS.length})
                </button>
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat.slug}
                    onClick={() => setActiveCategory(cat.slug)}
                    className={`px-3 py-1.5 text-xs tracking-wider uppercase transition-colors shrink-0 cursor-pointer ${
                      activeCategory === cat.slug
                        ? 'bg-[#1a1a1a] text-white font-medium'
                        : 'text-[#666] hover:text-[#1a1a1a] bg-[#faf8f5]'
                    }`}
                  >
                    {cat.name}
                  </button>
                ))}
              </div>

              {/* Sort By Dropdown */}
              <div className="flex items-center gap-2 text-xs shrink-0 self-end sm:self-auto">
                <ArrowUpDown className="w-3.5 h-3.5 text-[#888]" />
                <span className="text-[#888]">Sort by:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className="border border-[#ddd] bg-white px-2.5 py-1.5 text-xs text-[#1a1a1a] focus:border-[#1a1a1a] focus:outline-none cursor-pointer"
                >
                  <option value="featured">Featured First</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                  <option value="name">Alphabetical</option>
                </select>
              </div>
            </div>

            {/* Active search tag notice */}
            {searchQuery && (
              <div className="mb-6 flex items-center justify-between bg-[#faf8f5] p-3 border border-[#eee8df] text-xs">
                <span>
                  Showing results for: "<strong>{searchQuery}</strong>" ({filteredProducts.length} items found)
                </span>
                <button
                  onClick={() => setSearchQuery('')}
                  className="text-[#8b1e2b] hover:underline uppercase text-[10px] font-semibold"
                >
                  Clear Search
                </button>
              </div>
            )}

            {/* Products Grid (4 cols desktop, 3 cols tablet, 2 cols mobile) */}
            {filteredProducts.length === 0 ? (
              <div className="text-center py-16 text-[#777]">
                <h4 className="font-serif text-2xl text-[#1a1a1a] mb-2">No bags match your criteria</h4>
                <p className="text-xs max-w-[320px] mx-auto mb-6">
                  Try selecting another category or clearing your search term.
                </p>
                <button
                  onClick={() => {
                    setActiveCategory('all');
                    setSearchQuery('');
                  }}
                  className="px-6 py-2.5 bg-[#1a1a1a] text-white text-xs font-semibold tracking-[1px] uppercase"
                >
                  View All Products
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-4 md:gap-x-6 gap-y-8 md:gap-y-10">
                {filteredProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    onQuickView={(p) => setQuickViewProduct(p)}
                    onAddToCart={(p) => handleAddToCart(p, 1)}
                    onToggleWishlist={handleToggleWishlist}
                    isWishlisted={wishlist.some((w) => w.id === product.id)}
                  />
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Promo Banner: Cash on Delivery / Shop with Confidence */}
        <PromoBanner
          onShopClick={() => {
            handleSelectCategory('all');
            const elem = document.getElementById('products-section');
            elem?.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* New Arrivals Section */}
        <section className="py-14 md:py-20 bg-white">
          <div className="max-w-[1320px] mx-auto px-4">
            <div className="text-center mb-10 md:mb-12">
              <span className="text-[11px] tracking-[3px] uppercase text-[#8b7355] font-semibold block mb-2">
                Fresh Styles
              </span>
              <h2 className="font-serif text-3xl md:text-4xl text-[#1a1a1a] font-normal tracking-[2px]">
                New Arrivals
              </h2>
              <div className="w-14 h-[1px] bg-[#1a1a1a] mx-auto mt-4" />
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-4 md:gap-x-6 gap-y-8 md:gap-y-10">
              {newArrivals.map((product) => (
                <ProductCard
                  key={`new-${product.id}`}
                  product={product}
                  onQuickView={(p) => setQuickViewProduct(p)}
                  onAddToCart={(p) => handleAddToCart(p, 1)}
                  onToggleWishlist={handleToggleWishlist}
                  isWishlisted={wishlist.some((w) => w.id === product.id)}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Brand Craftsmanship Story */}
        <BrandStory />

        {/* Verified Customer Testimonials */}
        <TestimonialsSection />
      </main>

      {/* Footer */}
      <Footer
        onSelectCategory={handleSelectCategory}
        onOpenTrackOrder={() => setIsTrackOrderOpen(true)}
        onOpenCart={() => setIsCartOpen(true)}
      />

      {/* Quick View Modal */}
      <QuickViewModal
        product={quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
        onAddToCart={(p, qty, color) => handleAddToCart(p, qty, color)}
        onToggleWishlist={handleToggleWishlist}
        isWishlisted={quickViewProduct ? wishlist.some((w) => w.id === quickViewProduct.id) : false}
      />

      {/* Shopping Bag Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cart}
        onUpdateQuantity={handleUpdateCartQuantity}
        onRemoveItem={handleRemoveFromCart}
        onStartCheckout={() => {
          setIsCartOpen(false);
          setIsCheckoutOpen(true);
        }}
        onContinueShopping={() => setIsCartOpen(false)}
      />

      {/* Wishlist Drawer */}
      <WishlistDrawer
        isOpen={isWishlistOpen}
        onClose={() => setIsWishlistOpen(false)}
        wishlist={wishlist}
        onRemoveFromWishlist={handleRemoveFromWishlist}
        onAddToCart={(p) => handleAddToCart(p, 1)}
      />

      {/* Cash on Delivery Checkout Modal */}
      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        items={cart}
        onOrderComplete={({ orderId }) => {
          setCart([]);
          showToast(`Order #${orderId} confirmed successfully!`);
        }}
      />

      {/* Track Order Modal */}
      <TrackOrderModal
        isOpen={isTrackOrderOpen}
        onClose={() => setIsTrackOrderOpen(false)}
      />
    </div>
  );
}
