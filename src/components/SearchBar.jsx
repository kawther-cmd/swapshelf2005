function SearchBar({ search, setSearch }) {
  return (
    <div className="control">
      <label htmlFor="search">Search</label>
      <input
        id="search"
        type="text"
        placeholder="Title or author"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );S
}

export default SearchBar;