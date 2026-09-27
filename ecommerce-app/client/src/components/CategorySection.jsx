import React, { useState } from "react";
import "./CategorySection.css";

export default function CategorySection({ categories, onSelectCategory }) {
  const [page, setPage] = useState(0); // 0 = cards 1-2, 1 = cards 3-4
  const pageCount = Math.ceil(categories.length / 2);

  const goTo = (p) => setPage((p + pageCount) % pageCount);

  return (
    <section className="section category-section">
      <div className="container">
        <div className="section-heading">
          <div>
            <h2>Shop by category</h2>
            <p>Browse two at a time, or step through the full set</p>
          </div>
          <div className="carousel-controls">
            <button className="arrow-btn" onClick={() => goTo(page - 1)} aria-label="Previous categories">
              ‹
            </button>
            <button className="arrow-btn" onClick={() => goTo(page + 1)} aria-label="Next categories">
              ›
            </button>
          </div>
        </div>

        <div className="category-viewport">
          <div
            className="category-track"
            style={{ transform: `translateX(-${page * 100}%)` }}
          >
            {Array.from({ length: pageCount }).map((_, pageIndex) => (
              <div className="category-page" key={pageIndex}>
                {categories.slice(pageIndex * 2, pageIndex * 2 + 2).map((cat) => (
                  <button
                    key={cat.id}
                    className="category-card"
                    onClick={() => onSelectCategory(cat.name)}
                  >
                    <img src={cat.image} alt={cat.name} />
                    <div className="category-card-label">
                      <span>{cat.name}</span>
                    </div>
                  </button>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="carousel-dots">
          {Array.from({ length: pageCount }).map((_, i) => (
            <button
              key={i}
              className={`dot ${i === page ? "active" : ""}`}
              onClick={() => setPage(i)}
              aria-label={`Go to category page ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
