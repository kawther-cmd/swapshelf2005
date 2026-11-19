import BookCard from "./BookCard.jsx";
import "./BookList.css";

/**
 * BookList (Member 2)
 * Receives an ARRAY of books and shows one BookCard for each.
 * Props:
 *   books        - array of book objects to display
 *   savedIds     - array of ids of saved books
 *   onToggleSave - function passed down to every BookCard
 */
function BookList({ books, savedIds, onToggleSave }) {
  // Empty state: needed when search/filter (Member 3) finds nothing.
  if (books.length === 0) {
    return <p className="book-list__empty">No books match your search. Try something else.</p>;
  }

  return (
    <div className="book-list">
      {books.map((book) => (
        <BookCard
          key={book.id}
          book={book}
          isSaved={savedIds.includes(book.id)}
          onToggleSave={onToggleSave}
        />
      ))}
    </div>
  );
}

export default BookList;
