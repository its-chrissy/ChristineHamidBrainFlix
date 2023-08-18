import search from "../../assets/images/Icons/search.svg";

function SearchBar() {
  return (
    <div className="searchbar">
      <img className="Searchbar__img" alt="search img" src={search} />
      <div className="Searchbar__section">
        <input className="Searchbar__text" type="text" placeholder="Search" />
      </div>
    </div>
  );
}

export default SearchBar;
