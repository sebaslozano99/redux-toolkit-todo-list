import { useState } from "react";
import { useDispatch } from "react-redux";
import { remove, markAsCompleted, setAsUpdating } from "./todosSlice";
import PropTypes from "prop-types";
import Button from "../../components/Button";


export default function TaskItem({info}) {

  const [isHovered, setIsHovered] = useState(false);
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
    <li className="border-b border-b-slate-950/40 py-2 flex items-center justify-between gap-4 cursor-pointer" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} >

      <div className="flex items-center gap-4" >

        <label className="w-6 h-6 flex justify-center items-center" >
          <input 
            type="checkbox" 
            className="cursor-pointer accent-[#6C63FF] block w-6 h-6" 
            checked={info.isCompleted} 
            onChange={() => handleMarkAsCompleted(info.id)}
          />
        </label>

        <p className={info.isCompleted ? "line-through text-[#cdcdcd]" : ""} >{info.task}</p>

      </div>


      <div className={`flex items-center gap-2 transition-opacity duration-500 ease-in-out ${isHovered ? "opacity-100" : "opacity-0"}`} > 

        <Button textColor="#cdcdcd" bgColor="transparent" onclick={() => handleSetAsUpdating(info.id)}>
          <i className='bx bx-pencil bx-sm hover:text-[#858585] transition-all duration-300'></i>
        </Button>

        <Button textColor="#cdcdcd" bgColor="transparent" onclick={() => handleRemoveTask(info.id)} >
          <i className='bx bx-trash bx-sm hover:text-[#858585] transition-all duration-300' ></i>
        </Button>

      </div>

    </li>
  )
}



TaskItem.propTypes = {
  info: PropTypes.object,
}