import { FormEvent, useMemo, useState } from "react";

type IconName =
  | "search"
  | "user"
  | "heart"
  | "bag"
  | "menu"
  | "close"
  | "arrow"
  | "chevron"
  | "chevron-down"
  | "plus"
  | "minus"
  | "star"
  | "leaf"
  | "phone"
  | "mail"
  | "instagram"
  | "facebook"
  | "quote";

type Product = {
  id: string;
  name: string;
  category: string;
  size: string;
  image: string;
  price: number;
  originalPrice?: number;
  rating: string;
  reviews: number;
};

type Review = {
  id: number;
  name: string;
  location: string;
  text: string;
};

const categories = ["All products", "Oil & Ghee", "Honey", "Dates", "Nuts & Seeds"];

const products: Product[] = [
  {
    id: "gawa-ghee",
    name: "Gawa Ghee",
    category: "Oil & Ghee",
    size: "1 kg",
    image: "/images/gawa-ghee.jpg",
    price: 1700,
    originalPrice: 1800,
    rating: "4.9",
    reviews: 248,
  },
  {
    id: "black-seed-honey",
    name: "Black Seed Honey",
    category: "Honey",
    size: "1 kg",
    image: "/images/black-seed-honey.jpg",
    price: 1500,
    originalPrice: 1600,
    rating: "4.8",
    reviews: 186,
  },
  {
    id: "medjool-dates",
    name: "Egyptian Medjool Dates",
    category: "Dates",
    size: "1 kg",
    image: "/images/medjool-dates.jpg",
    price: 1980,
    originalPrice: 2200,
    rating: "4.9",
    reviews: 132,
  },
  {
    id: "cashew-nuts",
    name: "Cashew Nuts Medium Size",
    category: "Nuts & Seeds",
    size: "1 kg",
    image: "/images/cashew-nuts.jpg",
    price: 2000,
    rating: "4.8",
    reviews: 94,
  },
];

const firstReviews: Review[] = [
  {
    id: 1,
    name: "Farzana Ahmed",
    location: "Mirpur, Dhaka",
    text: "The ghee is so fresh and fragrant. It brought back the taste of my mother's cooking.",
  },
  {
    id: 2,
    name: "Rafiq Hasan",
    location: "Uttara, Dhaka",
    text: "My honey arrived beautifully packed, and it tastes wonderfully natural. Ordering again soon.",
  },
  {
    id: 3,
    name: "Nabila Sultana",
    location: "Dhanmondi, Dhaka",
    text: "Quick delivery and lovely quality. I finally found dates that the whole family enjoys.",
  },
];

function Icon({ name, size = 20 }: { name: IconName; size?: number }) {
  let drawing;

  switch (name) {
    case "search":
      drawing = <><circle cx="10.8" cy="10.8" r="6.8" /><path d="m16 16 4.2 4.2" /></>;
      break;
    case "user":
      drawing = <><circle cx="12" cy="8" r="3.5" /><path d="M4.5 20c.7-3.4 3.2-5.1 7.5-5.1s6.8 1.7 7.5 5.1" /></>;
      break;
    case "heart":
      drawing = <path d="M20.6 8.8c0 4.2-8.6 10-8.6 10s-8.6-5.8-8.6-10a4.5 4.5 0 0 1 8.6-1.7 4.5 4.5 0 0 1 8.6 1.7Z" />;
      break;
    case "bag":
      drawing = <><path d="M5 8h14l1 12H4L5 8Z" /><path d="M9 8V6a3 3 0 0 1 6 0v2" /><path d="M9 12v1m6-1v1" /></>;
      break;
    case "menu":
      drawing = <><path d="M4 7h16M4 12h16M4 17h16" /></>;
      break;
    case "close":
      drawing = <><path d="m6 6 12 12M18 6 6 18" /></>;
      break;
    case "arrow":
      drawing = <><path d="M4 12h15" /><path d="m13 6 6 6-6 6" /></>;
      break;
    case "chevron":
      drawing = <path d="m9 18 6-6-6-6" />;
      break;
    case "chevron-down":
      drawing = <path d="m6 9 6 6 6-6" />;
      break;
    case "plus":
      drawing = <><path d="M12 5v14M5 12h14" /></>;
      break;
    case "minus":
      drawing = <path d="M5 12h14" />;
      break;
    case "star":
      drawing = <path d="m12 2.8 2.8 5.7 6.3.9-4.6 4.5 1.1 6.3-5.6-3-5.6 3 1.1-6.3L3 9.4l6.3-.9L12 2.8Z" fill="currentColor" stroke="currentColor" />;
      break;
    case "leaf":
      drawing = <><path d="M20.5 3.5C12 3.6 6.1 5.1 4.2 10c-1.1 2.8.4 5.1 3 5.1 5.2 0 8.8-6.2 13.3-11.6Z" /><path d="M3.5 20.5c2.1-5 5.1-7.8 9.2-10.4" /></>;
      break;
    case "phone":
      drawing = <path d="M7.2 3.5h-3A1.7 1.7 0 0 0 2.5 5.2c0 9 7.3 16.3 16.3 16.3a1.7 1.7 0 0 0 1.7-1.7v-3l-4.7-1.2-2.2 2.2a14.3 14.3 0 0 1-6.4-6.4l2.2-2.2-1.2-4.7Z" />;
      break;
    case "mail":
      drawing = <><rect x="3" y="5" width="18" height="14" rx="1.5" /><path d="m4 7 8 6 8-6" /></>;
      break;
    case "instagram":
      drawing = <><rect x="3.5" y="3.5" width="17" height="17" rx="5" /><circle cx="12" cy="12" r="4" /><path d="M17.6 6.7h.01" /></>;
      break;
    case "facebook":
      drawing = <path d="M14.2 21v-8h2.7l.4-3.1h-3.1v-2c0-.9.3-1.6 1.6-1.6h1.7V3.5c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3v2.2H8v3.1h2.8v8h3.4Z" fill="currentColor" stroke="none" />;
      break;
    case "quote":
      drawing = <path d="M10.2 5H5.8C4.8 5 4 5.8 4 6.8v4.4C4 12.2 4.8 13 5.8 13H9c-.2 2.2-1.5 3.8-3.9 4.7l.8 2.1c4.2-1.3 6.3-4.2 6.3-8.8V6.8c0-1-.8-1.8-2-1.8Zm9 0h-4.4C13.8 5 13 5.8 13 6.8v4.4c0 1 .8 1.8 1.8 1.8H18c-.2 2.2-1.5 3.8-3.9 4.7l.8 2.1c4.2-1.3 6.3-4.2 6.3-8.8V6.8c0-1-.8-1.8-2-1.8Z" fill="currentColor" stroke="none" />;
      break;
  }

  return (
    <svg
      aria-hidden="true"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {drawing}
    </svg>
  );
}

function formatPrice(price: number) {
  return `৳${price.toLocaleString("en-US")}`;
}

export default function App() {
  const [activeCategory, setActiveCategory] = useState("All products");
  const [searchText, setSearchText] = useState("");
  const [cart, setCart] = useState<Record<string, number>>({});
  const [cartOpen, setCartOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [wishlist, setWishlist] = useState<string[]>([]);
  const [toastMessage, setToastMessage] = useState("");
  const [reviews, setReviews] = useState(firstReviews);
  const [reviewIndex, setReviewIndex] = useState(0);
  const [reviewFormOpen, setReviewFormOpen] = useState(false);
  const [reviewName, setReviewName] = useState("");
  const [reviewText, setReviewText] = useState("");
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);

  const visibleProducts = useMemo(() => {
    const search = searchText.trim().toLowerCase();
    return products.filter((product) => {
      const inCategory = activeCategory === "All products" || product.category === activeCategory;
      const matchesSearch = !search || `${product.name} ${product.category}`.toLowerCase().includes(search);
      return inCategory && matchesSearch;
    });
  }, [activeCategory, searchText]);

  const cartItems = products.filter((product) => cart[product.id]);
  const cartCount = Object.values(cart).reduce((sum, quantity) => sum + quantity, 0);
  const cartTotal = cartItems.reduce((sum, product) => sum + product.price * cart[product.id], 0);
  const currentReview = reviews[reviewIndex] ?? reviews[0];

  function showToast(message: string) {
    setToastMessage(message);
    window.setTimeout(() => setToastMessage(""), 2600);
  }

  function chooseCategory(category: string) {
    setActiveCategory(category);
    setMobileMenuOpen(false);
    document.getElementById("top-selling")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function addToCart(product: Product) {
    setCart((current) => ({ ...current, [product.id]: (current[product.id] ?? 0) + 1 }));
    showToast(`${product.name} added to your basket`);
  }

  function updateCartQuantity(productId: string, quantity: number) {
    setCart((current) => {
      const next = { ...current };
      if (quantity <= 0) delete next[productId];
      else next[productId] = quantity;
      return next;
    });
  }

  function handleSearch(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    document.getElementById("top-selling")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function toggleWishlist(product: Product) {
    const isSaved = wishlist.includes(product.id);
    setWishlist((current) => isSaved ? current.filter((id) => id !== product.id) : [...current, product.id]);
    showToast(isSaved ? "Removed from your wishlist" : `${product.name} saved to your wishlist`);
  }

  function submitReview(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const name = reviewName.trim();
    const text = reviewText.trim();
    if (!name || !text) return;

    setReviews((current) => [{ id: Date.now(), name, location: "Ghorer Bazar community", text }, ...current]);
    setReviewIndex(0);
    setReviewName("");
    setReviewText("");
    setReviewFormOpen(false);
    showToast("Thank you for sharing your experience");
  }

  function submitNewsletter(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!newsletterEmail.trim()) return;
    setNewsletterSubscribed(true);
  }

  return (
    <div id="top" className="site-shell">
      <div className="announcement-bar">
        <div className="page-width announcement-inner">
          <span>Thoughtfully sourced. Delivered to your door.</span>
          <span className="announcement-delivery">Free delivery on orders over ৳3,000</span>
          <a href="tel:+8809612345678">Need a hand? <strong>09612 345 678</strong></a>
        </div>
      </div>

      <header className="site-header">
        <div className="page-width header-main">
          <a className="brand-lockup" href="#top" aria-label="Ghorer Bazar home">
            <span className="brand-mark"><Icon name="leaf" size={23} /></span>
            <span className="brand-copy">
              <span className="brand-name">ghorer bazar</span>
              <span className="brand-tagline">Goodness from home</span>
            </span>
          </a>

          <form className="search-box" role="search" onSubmit={handleSearch}>
            <Icon name="search" size={19} />
            <label className="sr-only" htmlFor="site-search">Search products</label>
            <input
              id="site-search"
              value={searchText}
              onChange={(event) => setSearchText(event.target.value)}
              placeholder="Search your everyday favourites"
            />
            {searchText && (
              <button type="button" className="clear-search" aria-label="Clear search" onClick={() => setSearchText("")}>
                <Icon name="close" size={16} />
              </button>
            )}
          </form>

          <div className="header-actions">
            <button className="header-action account-action" type="button" onClick={() => showToast("Your account is ready to set up") }>
              <Icon name="user" size={21} />
              <span>Account</span>
            </button>
            <button className="header-action wishlist-action" type="button" onClick={() => showToast(wishlist.length ? `${wishlist.length} saved favourite${wishlist.length === 1 ? "" : "s"}` : "Save a favourite with the heart button") }>
              <span className="icon-with-count"><Icon name="heart" size={21} />{wishlist.length > 0 && <span className="count-dot">{wishlist.length}</span>}</span>
              <span>Saved</span>
            </button>
            <button className="header-action basket-action" type="button" onClick={() => setCartOpen(true)} aria-label={`Open basket, ${cartCount} items`}>
              <span className="icon-with-count"><Icon name="bag" size={22} />{cartCount > 0 && <span className="count-dot">{cartCount}</span>}</span>
              <span>Basket</span>
            </button>
            <button
              type="button"
              className="mobile-menu-button"
              aria-label={mobileMenuOpen ? "Close navigation" : "Open navigation"}
              aria-expanded={mobileMenuOpen}
              onClick={() => setMobileMenuOpen((open) => !open)}
            >
              <Icon name={mobileMenuOpen ? "close" : "menu"} size={23} />
            </button>
          </div>
        </div>

        <nav className={`primary-nav ${mobileMenuOpen ? "is-open" : ""}`} aria-label="Main navigation">
          <div className="page-width nav-inner">
            <button className="nav-link nav-all" type="button" onClick={() => chooseCategory("All products")}>
              Shop all <Icon name="chevron-down" size={14} />
            </button>
            {categories.slice(1).map((category) => (
              <button className="nav-link" type="button" key={category} onClick={() => chooseCategory(category)}>
                {category}
              </button>
            ))}
            <a className="nav-link nav-review-link" href="#customer-stories" onClick={() => setMobileMenuOpen(false)}>Customer stories</a>
            <span className="nav-spacer" />
            <span className="nav-promise"><Icon name="leaf" size={15} /> Better food, closer to home</span>
          </div>
        </nav>
      </header>

      <main>
        <section className="top-selling page-width" id="top-selling" aria-labelledby="products-title">
          <div className="section-heading">
            <div>
              <p className="eyebrow"><span className="eyebrow-line" /> THE PANTRY FAVOURITES</p>
              <h1 id="products-title">Top selling products</h1>
              <p className="section-description">Everyday staples, chosen with care and loved in homes across Bangladesh.</p>
            </div>
            <a className="text-link view-all-link" href="#top-selling" onClick={() => { setActiveCategory("All products"); setSearchText(""); }}>
              Explore all <Icon name="arrow" size={18} />
            </a>
          </div>

          <div className="category-tabs" role="tablist" aria-label="Filter products by category">
            {categories.map((category) => (
              <button
                className={`category-tab ${activeCategory === category ? "active" : ""}`}
                type="button"
                role="tab"
                aria-selected={activeCategory === category}
                key={category}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
            <span className="product-count">{visibleProducts.length} products</span>
          </div>

          {visibleProducts.length > 0 ? (
            <div className="product-grid" aria-live="polite">
              {visibleProducts.map((product, index) => {
                const isSaved = wishlist.includes(product.id);
                return (
                  <article className="product-item" key={product.id} style={{ "--item-index": index } as React.CSSProperties}>
                    <div className="product-image-wrap">
                      <img className="product-image" src={product.image} alt={`${product.name}, ${product.size}`} />
                      {product.originalPrice && <span className="sale-note">A little saving</span>}
                      <button
                        className={`product-save ${isSaved ? "is-saved" : ""}`}
                        type="button"
                        aria-label={isSaved ? `Remove ${product.name} from saved items` : `Save ${product.name}`}
                        aria-pressed={isSaved}
                        onClick={() => toggleWishlist(product)}
                      >
                        <Icon name="heart" size={18} />
                      </button>
                    </div>
                    <div className="product-details">
                      <div className="product-category">{product.category}</div>
                      <div className="product-title-row">
                        <h2>{product.name}</h2>
                        <span className="product-size">{product.size}</span>
                      </div>
                      <div className="product-rating" aria-label={`${product.rating} out of 5, ${product.reviews} reviews`}>
                        <Icon name="star" size={14} />
                        <span>{product.rating}</span>
                        <span className="rating-divider">·</span>
                        <span>{product.reviews} reviews</span>
                      </div>
                      <div className="product-purchase-row">
                        <div className="product-price">
                          <span className="price-current">{formatPrice(product.price)}</span>
                          {product.originalPrice && <span className="price-old">{formatPrice(product.originalPrice)}</span>}
                        </div>
                        <span className="price-unit">/ {product.size}</span>
                      </div>
                      <button className="add-button" type="button" onClick={() => addToCart(product)}>
                        <Icon name="plus" size={16} /> Add to basket
                      </button>
                    </div>
                  </article>
                );
              })}
            </div>
          ) : (
            <div className="empty-results">
              <p className="empty-title">Nothing in the pantry by that name.</p>
              <p>Try another search or browse all of our favourites.</p>
              <button type="button" className="text-link" onClick={() => { setSearchText(""); setActiveCategory("All products"); }}>
                Show all products <Icon name="arrow" size={17} />
              </button>
            </div>
          )}
        </section>

        <section className="customer-section" id="customer-stories" aria-labelledby="customer-title">
          <div className="page-width customer-layout">
            <div className="customer-intro">
              <p className="eyebrow eyebrow-light"><span className="eyebrow-line" /> KIND WORDS</p>
              <h2 id="customer-title">Good food.<br />Good words.</h2>
              <p>Notes from the people who bring our favourites to their family table.</p>
              <button className="review-cta" type="button" onClick={() => setReviewFormOpen((open) => !open)}>
                {reviewFormOpen ? "Close review form" : "Leave a comment"}
                <Icon name={reviewFormOpen ? "close" : "arrow"} size={17} />
              </button>
            </div>

            <div className="review-content">
              <div className="review-summary">
                <div className="review-stars" aria-label="5 out of 5 stars">
                  {Array.from({ length: 5 }, (_, index) => <Icon key={index} name="star" size={16} />)}
                </div>
                <span>4.9 out of 5 <span className="review-summary-divider">/</span> from happy homes</span>
              </div>

              {currentReview && (
                <article className="review-quote" key={currentReview.id}>
                  <Icon name="quote" size={26} />
                  <blockquote>{currentReview.text}</blockquote>
                  <div className="review-author">
                    <span className="author-rule" />
                    <div>
                      <strong>{currentReview.name}</strong>
                      <span>{currentReview.location}</span>
                    </div>
                  </div>
                </article>
              )}

              <div className="review-controls">
                <span className="review-count">{String(reviewIndex + 1).padStart(2, "0")} <span>/</span> {String(reviews.length).padStart(2, "0")}</span>
                <div className="review-arrows">
                  <button type="button" aria-label="Previous comment" onClick={() => setReviewIndex((index) => (index - 1 + reviews.length) % reviews.length)}>
                    <Icon name="chevron" size={18} />
                  </button>
                  <button type="button" aria-label="Next comment" onClick={() => setReviewIndex((index) => (index + 1) % reviews.length)}>
                    <Icon name="chevron" size={18} />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {reviewFormOpen && (
            <form className="page-width review-form" onSubmit={submitReview}>
              <div className="review-form-heading">
                <p className="eyebrow eyebrow-light">YOUR WORDS MATTER</p>
                <h3>Share a little note with us.</h3>
              </div>
              <label>
                Your name
                <input value={reviewName} onChange={(event) => setReviewName(event.target.value)} placeholder="How should we introduce you?" required />
              </label>
              <label>
                Your comment
                <textarea value={reviewText} onChange={(event) => setReviewText(event.target.value)} placeholder="Tell us about your experience..." rows={3} required />
              </label>
              <button className="review-submit" type="submit">Post comment <Icon name="arrow" size={17} /></button>
            </form>
          )}
        </section>
      </main>

      <footer className="site-footer" id="footer">
        <div className="page-width footer-main">
          <div className="footer-brand-column">
            <a className="brand-lockup footer-brand" href="#top" aria-label="Ghorer Bazar home">
              <span className="brand-mark"><Icon name="leaf" size={23} /></span>
              <span className="brand-copy">
                <span className="brand-name">ghorer bazar</span>
                <span className="brand-tagline">Goodness from home</span>
              </span>
            </a>
            <p>Safe, honest food for every home. Carefully chosen favourites, delivered with a little extra care.</p>
            <div className="social-links">
              <a href="https://www.facebook.com/ghorerbazar" aria-label="Ghorer Bazar on Facebook"><Icon name="facebook" size={17} /></a>
              <a href="https://www.instagram.com/ghorerbazar" aria-label="Ghorer Bazar on Instagram"><Icon name="instagram" size={17} /></a>
            </div>
          </div>

          <div className="footer-link-column">
            <h2>Shop by category</h2>
            {categories.slice(1).map((category) => (
              <button key={category} type="button" onClick={() => chooseCategory(category)}>{category}</button>
            ))}
          </div>

          <div className="footer-link-column">
            <h2>Here to help</h2>
            <a href="#customer-stories">Customer stories</a>
            <a href="mailto:hello@ghorerbazar.com">Contact us</a>
            <a href="tel:+8809612345678">Delivery information</a>
            <span className="footer-location"><Icon name="phone" size={15} /> 09612 345 678</span>
          </div>

          <div className="newsletter-column">
            <h2>A good note, now and then.</h2>
            <p>Seasonal picks, pantry ideas, and first dibs on new arrivals.</p>
            <form className="newsletter-form" onSubmit={submitNewsletter}>
              <label className="sr-only" htmlFor="newsletter-email">Your email address</label>
              <input
                id="newsletter-email"
                type="email"
                value={newsletterEmail}
                onChange={(event) => { setNewsletterEmail(event.target.value); setNewsletterSubscribed(false); }}
                placeholder="Your email address"
                required
              />
              <button type="submit" aria-label="Subscribe to newsletter"><Icon name="arrow" size={18} /></button>
            </form>
            {newsletterSubscribed && <p className="newsletter-success">You're on the list. Thank you.</p>}
          </div>
        </div>

        <div className="page-width footer-bottom">
          <span>© {new Date().getFullYear()} Ghorer Bazar. Made for home.</span>
          <span className="footer-bottom-note"><Icon name="leaf" size={14} /> From our home to yours</span>
        </div>
      </footer>

      {cartOpen && (
        <div className="drawer-layer">
          <button className="drawer-backdrop" type="button" aria-label="Close basket" onClick={() => setCartOpen(false)} />
          <aside className="cart-drawer" role="dialog" aria-modal="true" aria-labelledby="cart-title">
            <div className="drawer-heading">
              <div>
                <p className="eyebrow">YOUR PANTRY</p>
                <h2 id="cart-title">Your basket <span>({cartCount})</span></h2>
              </div>
              <button className="drawer-close" type="button" aria-label="Close basket" onClick={() => setCartOpen(false)}><Icon name="close" size={21} /></button>
            </div>
            {cartItems.length ? (
              <>
                <div className="cart-items">
                  {cartItems.map((product) => (
                    <article className="cart-line" key={product.id}>
                      <img src={product.image} alt="" />
                      <div className="cart-line-details">
                        <span className="cart-line-category">{product.category}</span>
                        <h3>{product.name}</h3>
                        <span className="cart-line-price">{formatPrice(product.price)} <span>/ {product.size}</span></span>
                        <div className="quantity-control" aria-label={`Quantity of ${product.name}`}>
                          <button type="button" aria-label="Remove one" onClick={() => updateCartQuantity(product.id, cart[product.id] - 1)}><Icon name="minus" size={14} /></button>
                          <span>{cart[product.id]}</span>
                          <button type="button" aria-label="Add one" onClick={() => updateCartQuantity(product.id, cart[product.id] + 1)}><Icon name="plus" size={14} /></button>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
                <div className="drawer-subtotal"><span>Subtotal</span><strong>{formatPrice(cartTotal)}</strong></div>
                <p className="drawer-shipping-note">Delivery and any applicable charges are calculated at checkout.</p>
                <button className="checkout-button" type="button" onClick={() => { setCartOpen(false); showToast("Your basket is ready for checkout"); }}>
                  Continue to checkout <Icon name="arrow" size={18} />
                </button>
                <button className="continue-shopping" type="button" onClick={() => setCartOpen(false)}>Keep browsing</button>
              </>
            ) : (
              <div className="empty-basket">
                <span className="empty-bag-icon"><Icon name="bag" size={28} /></span>
                <h3>Your basket is waiting.</h3>
                <p>Fill it with a few of the good things from our pantry.</p>
                <button type="button" className="checkout-button" onClick={() => setCartOpen(false)}>Find a favourite <Icon name="arrow" size={18} /></button>
              </div>
            )}
          </aside>
        </div>
      )}

      <div className={`toast-message ${toastMessage ? "is-visible" : ""}`} role="status" aria-live="polite">{toastMessage}</div>
    </div>
  );
}