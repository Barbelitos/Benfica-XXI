import { useRef } from "react";

import classes from "./SearchBar.module.css";

const placeholder = "Search restaurant by name, city or country...";

const SearchBar = ({ searchTerm, searchKeyword }) => {
  const inputEl = useRef("");

  const getSearchTerm = () => {
    searchKeyword(inputEl.current.value);
  };

  return (
    <div className={classes["search-bar"]}>
      <input
        ref={inputEl}
        className={classes["search-input"]}
        type="text"
        placeholder={placeholder}
        value={searchTerm}
        onChange={getSearchTerm}
      />
    </div>
  );
};

export default SearchBar;
