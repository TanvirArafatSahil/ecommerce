import React, { useState } from "react";
import "./Comments.css";

export default function Comments({ comments }) {
  const [draft, setDraft] = useState("");
  const [posted, setPosted] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!draft.trim()) return;
    setPosted((prev) => [
      { id: `local-${Date.now()}`, name: "You", rating: 5, text: draft.trim() },
      ...prev
    ]);
    setDraft("");
  };

  const allComments = [...posted, ...comments];

  return (
    <section className="section comments-section">
      <div className="container">
        <div className="section-heading">
          <div>
            <h2>What customers say</h2>
            <p>Real notes from recent orders</p>
          </div>
        </div>

        <form className="comment-form" onSubmit={handleSubmit}>
          <textarea
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
            placeholder="Share your experience with a recent order..."
            rows={3}
          />
          <button type="submit" className="btn-primary">Post comment</button>
        </form>

        <div className="comments-grid">
          {allComments.map((c) => (
            <div className="comment-card" key={c.id}>
              <div className="comment-top">
                <span className="comment-name">{c.name}</span>
                <span className="comment-stars">{"★".repeat(c.rating)}</span>
              </div>
              {c.product && <span className="comment-product">On {c.product}</span>}
              <p className="comment-text">{c.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
