export default function Search({ toggleRandomUser }) {
  return (
    <div className="search">
      <input
        className="search-number"
        type="button"
        value="Get Random User"
        onClick={() => toggleRandomUser()}
      />
    </div>
  );
}
