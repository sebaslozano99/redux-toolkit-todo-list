import PropTypes from "prop-types";
import { useEffect, useRef } from "react";




export default function SearchBar({initialValue, setValue, isDark, focus}) {

  const inputEl = useRef(null);

  

  useEffect(() => {
    if(focus){
      inputEl.current.focus();
    }
  }, [focus])

  return (
    <input 
      type="text" 
      placeholder="Search task..." 
      className={`py-1 px-3 w-full ${isDark ? "text-white" : ""} border-[2px] border-[#6C63FF] bg-transparent rounded-md outline-none`} 
      value={initialValue}
      onChange={(e) => setValue(e.target.value)}
      ref={inputEl}
    />
  )
}


SearchBar.propTypes = {
  focus: PropTypes.bool,
  isDark: PropTypes.bool,
  initialValue: PropTypes.string,
  setValue: PropTypes.func,
}
