import { createContext, useContext } from "react";
import PropTypes from "prop-types";
import useLocalStorage from "../hooks/useLocalStorage";



const DarkModeContext = createContext();



function DarkModeProvider({children}) {

  const [isDark, setIsDark] = useLocalStorage("theme", false);

  function handleChangeDarkMode(){
    setIsDark((currentMode) => !currentMode);
  }
    

  return (
    <DarkModeContext.Provider value={{
        isDark,
        handleChangeDarkMode,
    }}>
      {children}
    </DarkModeContext.Provider>
  )
}


export { DarkModeProvider, useDarkMode }


function useDarkMode(){
    const context = useContext(DarkModeContext);
    if(context === undefined) throw new Error("useDarkMode was used outside of DarkModeProvider!");
    return context;
}






DarkModeProvider.propTypes = {
    children: PropTypes.node,
}