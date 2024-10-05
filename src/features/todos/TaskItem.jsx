import { useState } from "react";
import { useDispatch } from "react-redux";
import { remove, markAsCompleted, setAsUpdating } from "./todosSlice";
import PropTypes from "prop-types";
import Button from "../../components/Button";
import { useDarkMode } from "../../contexts/DarkModeContext";


export default function TaskItem({info}) {

  const [isHovered, setIsHovered] = useState(false);
  const { isDark } = useDarkMode();
  const dispatch = useDispatch();


  function handleMouseEnter(){
    setIsHovered(true);
  }


  function handleMouseLeave(){
    setIsHovered(false);
  }


  function handleRemoveTask(id){
    dispatch(remove(id));
  }


  function handleMarkAsCompleted(id){
    dispatch(markAsCompleted(id))
  }

  function handleSetAsUpdating(id){
    dispatch(setAsUpdating(id));
  }


  
  return (
    <li className={`flex items-center justify-between py-2 gap-4 border-b ${isDark ? "border-b-[#6C63FF]/70" : "border-b-slate-950/40"} cursor-pointer`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} >

      <div className="flex items-center gap-4" >

        <label className="w-6 h-6 flex justify-center items-center" >

          <input 
            type="checkbox" 
            className="cursor-pointer text-red-500 accent-[#6C63FF] block w-6 h-6" 
            checked={info.isCompleted} 
            onChange={() => handleMarkAsCompleted(info.id)}
          />

        </label>

        <p className={`${info.isCompleted  ? "line-through text-[#cdcdcd]" : isDark && !info.isCompleted ? "text-white" : ""} font-semibold`} >{info.task}</p>

      </div>


      <div className={`flex items-center gap-2 transition-opacity duration-500 ease-in-out ${isHovered ? "opacity-100" : "opacity-0"}`} > 

        <Button backgroundColor="transparent" textColor="#a8a8a8" onclick={() => handleSetAsUpdating(info.id)}>
          <i className='bx bx-pencil bx-sm hover:text-[#858585] transition-all duration-300'></i>
        </Button>

        <Button backgroundColor="transparent" textColor="#a8a8a8" onclick={() => handleRemoveTask(info.id)} >
          <i className='bx bx-trash bx-sm hover:text-[#858585] transition-all duration-300' ></i>
        </Button>

      </div>

    </li>
  )
}



TaskItem.propTypes = {
  info: PropTypes.object,
}