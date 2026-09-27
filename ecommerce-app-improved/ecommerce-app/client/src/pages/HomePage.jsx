import React, { useMemo } from "react";
import CategorySection from "../components/CategorySection";
import TopSelling from "../components/TopSelling";
import ProductCard from "../components/ProductCard";
import Comments from "../components/Comments";

export default function HomePage({ products, categories, comments, search, setSearch }) {
  const topSellers = useMemo(
    () => products.filter((p) => p.topSeller).slice(0, 4),
    [products]
  );

  const filteredProducts = useMemo(() => {
    if (!search.trim()) return [];
    return products.filter((p) =>
      p.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [products, search]);

  const isSearching = search.trim().length > 0;

  return (
    <>
      <CategorySection categories={categories} />

      {isSearching ? (
        <section className="section results-section">
          <div className="container">
            <div className="section-heading">
              <div>
                <h2>Search results</h2>
                <p>{filteredProducts.length} product(s) found</p>
              </div>
              <button className="btn-ghost" onClick={() => setSearch("")}>
                Clear search
              </button>
            </div>
            {filteredProducts.length > 0 ? (
              <div className="top-selling-grid">
                {filteredProducts.map((p) => (
                  <ProductCard key={p.id} product={p} />
                ))}
              </div>
            ) : (
              <div className="empty-state">
                <p>No products matched "{search}". Try a different search term.</p>
              </div>
            )}
          </div>
        </section>
      ) : (
        <TopSelling products={topSellers} />
      )}

      <Comments comments={comments} />
    </>
  );
}
