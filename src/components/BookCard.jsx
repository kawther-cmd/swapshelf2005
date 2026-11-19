import { useState } from "react";
import "./BookCard.css";

/**
 * BookCard (Member 2)
 * Shows ONE book.
 * Props:
 *   book         - the book object (title, author, category, ...)
 *   isSaved      - true/false: is this book in the user's saved list?
 *   onToggleSave - a function (behavior) passed from Home; called with the book id
 */
function BookCard({ book, isSaved, onToggleSave }) {
  // If the cover image fails to load, we show a colored box with the title instead.
  const [imageFailed, setImageFailed] = useState(false);

  return (
    <article className="book-card">
      <div className="book-card__cover" style={{ backgroundColor: book.color }}>
        {imageFailed ? (
          <span className="book-card__fallback">{book.title}</span>
        ) : (
          <img
            src={book.cover}
            alt={`Cover of ${book.title}`}
            loading="lazy"
            onError={() => setImageFailed(true)}
          />
        )}
        <span className="book-card__condition">{book.condition}</span>
      </div>

      <div className="book-card__body">
        <p className="book-card__category">{book.category}</p>
        <h3 className="book-card__title">{book.title}</h3>
        <p className="book-card__author">by {book.author}</p>
        <p className="book-card__description">{book.description}</p>

        <div className="book-card__meta">
          <span>★ {book.rating}</span>
          <span>{book.year}</span>
          <span>{book.city}</span>
        </div>

        <button
          type="button"
          className={`book-card__save ${isSaved ? "book-card__save--active" : ""}`}
          onClick={() => onToggleSave(book.id)}
          aria-pressed={isSaved}
        >
          {isSaved ? "♥ Saved" : "♡ Save for swap"}
        </button>
      </div>
    </article>
  );
}

export default BookCard;