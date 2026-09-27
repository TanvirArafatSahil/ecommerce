import React, { useEffect, useState, useMemo } from "react";
import { CartProvider } from "./context/CartContext";
import Header from "./components/Header";
import CategorySection from "./components/CategorySection";
import TopSelling from "./components/TopSelling";
import ProductCard from "./components/ProductCard";
import Comments from "./components/Comments";
import Footer from "./components/Footer";
import CartSidebar from "./components/CartSidebar";
import {
  fallbackProducts,
  fallbackCategories,
  fallbackComments
} from "./data/products";

const API_BASE = process.env.REACT_APP_API_BASE || "http://localhost:5000/api";

export default function App() {
  const [products, setProducts] = useState(fallbackProducts);
  const [categories, setCategories] = useState(fallbackCategories);
  const [comments, setComments] = useState(fallbackComments);
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState(null);

  useEffect(() => {
    fetch(`${API_BASE}/products`)
      .then((r) => (r.ok ? r.json() : Promise.reject()))
      .then(setProducts)
      .catch(() => setProducts(fallbackProducts));

    fetch(`${API_BASE}/categories`)
      .then((r) => (r.ok ? r.json() : Promise.reject()))
      .then(setCategories)
      .catch(() => setCategories(fallbackCategories));

    fetch(`${API_BASE}/comments`)
      .then((r) => (r.ok ? r.json() : Promise.reject()))
      .then(setComments)
      .catch(() => setComments(fallbackComments));
  }, []);

  const topSellers = useMemo(
    () => products.filter((p) => p.topSeller).slice(0, 4),
    [products]
  );

  const filteredProducts = useMemo(() => {
    return products.filter((p) => {
      const matchesSearch = p.name.toLowerCase().includes(search.toLowerCase());
      const matchesCategory = !activeCategory || p.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [products, search, activeCategory]);

  const isFiltering = search.trim().length > 0 || activeCategory;

  return (
    <CartProvider>
      <div id="top">
        <Header search={search} setSearch={setSearch} />

        <CategorySection
          categories={categories}
          onSelectCategory={(name) =>
            setActiveCategory((prev) => (prev === name ? null : name))
          }
        />

        {isFiltering ? (
          <section className="section">
            <div className="container">
              <div className="section-heading">
                <div>
                  <h2>
                    {activeCategory ? activeCategory : "Search results"}
                  </h2>
                  <p>{filteredProducts.length} product(s) found</p>
                </div>
                {(activeCategory || search) && (
                  <button
                    className="btn-ghost"
                    onClick={() => {
                      setActiveCategory(null);
                      setSearch("");
                    }}
                  >
                    Clear filters
                  </button>
                )}
              </div>
              <div className="top-selling-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 20 }}>
                {filteredProducts.map((p) => (
                  <ProductCard key={p.id} product={p} />
                ))}
              </div>
            </div>
          </section>
        ) : (
          <TopSelling products={topSellers} />
        )}

        <Comments comments={comments} />
        <Footer />
        <CartSidebar />
      </div>
    </CartProvider>
  );
}
