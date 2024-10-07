import { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";




const FilterContext = createContext();


function FilterProvider({children}) {

  const [filter, setFilter] = useState("all");

  return (
    <FilterContext.Provider value={{
        filter,
        setFilter,
    }} >
      {children}
    </FilterContext.Provider>
  )
}



export { FilterProvider, useFilter }


function useFilter(){
    const context = useContext(FilterContext);
    if(context === undefined) throw new Error("useFilter was used outside of FilterProvider!");
    return context;
}


FilterProvider.propTypes = {
    children: PropTypes.node,
}