function Filter({ genre, setGenre, genres }) {
  return (
    <div className="control">
      <label htmlFor="genre">Category</label>
      <select id="genre" value={genre} onChange={(e) => setGenre(e.target.value)}>
        <option value="All">All</option>
        {genres.map((g) => (
          <option key={g} value={g}>{g}</option>
        ))}
      </select>
    </div>
  );
}

export default Filter;