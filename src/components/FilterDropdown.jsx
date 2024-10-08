import { useFilter } from "../contexts/FilterContext";


export default function FilterDropdown() {

  const { filter, setFilter } = useFilter();

  return (
    <select 
      value={filter}
      onChange={ (e) => setFilter(e.target.value) }
      name="filter" 
      id="filter" 
      className="bg-[#6C63FF] text-white py-1 px-3 rounded-md outline-none cursor-pointer" 
    >
        <option value="all" >All</option>
        <option value="completed">Completed</option>
        <option value="pending">Pending</option>
    </select>
  )
}
