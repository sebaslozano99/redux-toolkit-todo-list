import { useDarkMode } from "../contexts/DarkModeContext";
import FilterDropdown from "./FilterDropdown";
import SearchBar from "./SearchBar";
import Button from "./Button";



export default function Form() {

  const { isDark, handleChangeDarkMode } = useDarkMode();

  return (
    <nav className={`flex items-center justify-center py-2 px-5 gap-2 w-full h-[10%]`} >

      <form className="w-7/12" >
        <SearchBar isDark={isDark} />
      </form>

      <FilterDropdown />

      <Button onclick={handleChangeDarkMode} >
        <i className='bx bx-moon bx-sm'></i>
      </Button>

    </nav>
  )
}
