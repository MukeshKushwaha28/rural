import { useState, useContext, createContext } from "react";
import axios from "axios";

const SearchContext = createContext();
const SearchProvider = ({ children }) => {

  const [search, setSearch] = useState([]);

  // if(search){
  //   console.log(search);
  // }
  
  return (
    <SearchContext.Provider value={[search, setSearch]}>
      {children}
    </SearchContext.Provider>
  );
};

// custom hook
const useSearch = () => useContext(SearchContext);

export { useSearch, SearchProvider };
