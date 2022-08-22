import React from "react";
import { useEffect } from "react";
import { useCallback } from "react";
import { useState } from "react";
import SearchInput from "./SearchInput";
import countries from "../utils/countries";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  //   const queryHandler = (val) => {
  //     setQuery(val);
  //   };

  //   better way of writting queryHandler is by using useCallback

  const queryHandler = useCallback((val) => {
    console.log("the query is", val);
    setQuery(val);
  }, []);

  //   REASON -> we are passing a function inside onChange -> and this function will change on every rerender and we dont want that and if nothing changes in queryhandler function then we dont want it to rerender the seachInput component.. because if searchBar component will rerender then it will rerender the query handler and if queryHandler will rerenders then SearchInput will rerender so to avoid that we used a callback here --> still dont wrap every function inside callBack blindly -> first check in profiler if it is rerendering or not

  //   NOW Run the logic of searching cities whenever query changes

  useEffect(() => {
    // if comes in evalation then achieve this functionality using json-server
    if (query === "") {
      setSuggestions([]);
    } else {
      let newCountriesSuggestion = countries
        .filter((item) =>
          item.country.toLowerCase().indexOf(query) !== -1 ? true : false
        )
        .map((item) => item.country);
      setSuggestions(newCountriesSuggestion);
    }
  }, [query]);

  return (
    <div>
      <h1>Search Bar PSC</h1>
      <h3>Search Query is "{query}"</h3>
      <SearchInput onInputChange={queryHandler} suggestions={suggestions} />
    </div>
  );
};

export default SearchBar;
