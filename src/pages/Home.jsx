import { useState } from "react";
import Container from "../components/common/Container.jsx";
import BookList from "../components/BookList.jsx";
import booksData from "../data/books.js";
import "./Home.css";

/**
 * Home page (Member 2).
 * - Loads the mock books into React state.
 * - Passes them to BookList through props.
 *
 * NOTE FOR MEMBER 3: search / filter / sort go here.
 *   1. Add your own state (searchText, category, sortBy) below.
 *   2. Put your <SearchBar />, <Filter />, <Sort /> inside the "controls" section.
 *   3. Build `visibleBooks` with books.filter(...).sort(...) and pass it to <BookList />.
 */
function Home() {
  // The books live in React state (requirement: load mock data into state).
  const [books] = useState(booksData);

  // ids of books the user pressed "Save" on.
  const [savedIds, setSavedIds] = useState([]);

  // Behavior passed down to BookCard through BookList: add or remove an id.
  function handleToggleSave(id) {
    setSavedIds((current) =>
      current.includes(id) ? current.filter((savedId) => savedId !== id) : [...current, id]
    );
  }

  // Member 3: replace this line with the filtered + sorted array.
  const visibleBooks = books;

  return (
    <>
      <section className="home-hero">
        <Container>
          <p className="home-hero__eyebrow">Read. Swap. Repeat.</p>
          <h1 className="home-hero__title">Find your next book on the Swap Shelf</h1>
          <p className="home-hero__text">
            Browse books shared by readers near you and save the ones you would like to swap for.
          </p>
        </Container>
      </section>

      <section className="home-books">
        <Container>
          {/* Member 3: search, filter and sort controls go inside this div */}
          <div className="home-books__controls" />

          <div className="home-books__header">
            <h2 className="home-books__title">Available books</h2>
            <p className="home-books__count">
              {visibleBooks.length} {visibleBooks.length === 1 ? "book" : "books"} · {savedIds.length} saved
            </p>
          </div>

          <BookList books={visibleBooks} savedIds={savedIds} onToggleSave={handleToggleSave} />
        </Container>
      </section>
    </>
  );
}

export default Home;
