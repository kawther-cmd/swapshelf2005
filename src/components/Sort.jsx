function Sort({ sortBy, setSortBy }) {
  return (
    <div className="control">
      <label htmlFor="sort">Sort by</label>
      <select id="sort" value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
        <option value="title">Title (A-Z)</option>
        <option value="rating">Rating (high to low)</option>
        <option value="year">Year (newest first)</option>
      </select>
    </div>
  );
}

export default Sort;