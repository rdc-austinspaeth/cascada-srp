import { searchButtonSuspense, searchContainerSuspense, searchInputTextSuspense } from "./Search.css";

export const SearchSuspense = () => {
  return (
    <div className={searchContainerSuspense}>
      <div className={searchInputTextSuspense} />
      <div className={searchButtonSuspense} />
    </div>
  )
}

export default SearchSuspense;
