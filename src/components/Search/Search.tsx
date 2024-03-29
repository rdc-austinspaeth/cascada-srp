import { clearIcon, searchButton, searchContainer, searchIcon, searchInput } from "./Search.css";

export const Search = () => {
  return (
    <div className={searchContainer}>
      <input className={searchInput} value='South Carolina' type="text" />
      <svg className={clearIcon} viewBox="0 0 24 24"><path d="M5.293 6.707a1 1 0 0 1 1.414-1.414L12 10.586l5.293-5.293a1 1 0 1 1 1.414 1.414L13.414 12l5.293 5.293a1 1 0 0 1-1.414 1.414L12 13.414l-5.293 5.293a1 1 0 0 1-1.414-1.414L10.586 12 5.293 6.707Z"></path></svg>
      <button className={searchButton}>
        <svg className={searchIcon} viewBox="0 0 24 24" focusable="false"><path fillRule="evenodd" d="M16.618 18.032a9 9 0 1 1 1.414-1.414l3.675 3.675a1 1 0 0 1-1.414 1.414l-3.675-3.675ZM18 11a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z" clipRule="evenodd"></path></svg>
      </button>
    </div>
  )
}

export default Search;
