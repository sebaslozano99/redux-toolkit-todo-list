import Button from "./Button";
import FilterDropdown from "./FilterDropdown";
import SearchBar from "./SearchBar";



// border-2 border-green-500

export default function Form() {
  return (
    //4rem height
    <nav className="w-full h-[10%] flex items-center justify-center py-2 px-5 gap-2 border-2 border-red-500" >

      <SearchBar />

      <FilterDropdown />

      <Button>
        <i className='bx bx-moon'></i>
      </Button>

    </nav>
  )
}
